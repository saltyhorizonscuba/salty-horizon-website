/* ============================================================
   SALTY HORIZON: multi-experience cart (no online payment)
   Persists in localStorage so it survives navigation between
   pages/languages. Booking is still finalized by hand on
   WhatsApp — this only itemizes the request and estimates tax.
   Each experience is its own line item with its own quantity
   (people count), since e.g. 2x Discover Scuba and 1x Fun Dive
   don't share the same per-person price.
   ============================================================ */
const CART_TAX_RATE = 0.13; // Costa Rica IVA
const CART_MAX_QTY = 12;

// Single source of truth for what can be added to the cart: id -> i18n key
// (reuses the same keys already used for the experience card titles) + price.
// price:null means "on request" (Bat Islands, PADI Courses) — excluded from
// the subtotal/tax math, listed separately, and flagged in the WhatsApp text.
const CART_CATALOG = {
  intro:     { key:'card.intro.t',     price:80  },
  discover:  { key:'card.discover.t',  price:195 },
  catalinas: { key:'card.catalinas.t', price:140 },
  bat:       { key:'card.bat.t',       price:null },
  snorkel:   { key:'card.snorkel.t',   price:90  },
  course:    { key:'card.courses.t',   price:null }
};

// Cart storage shape: { [id]: qty }
function cartGetItems(){
  try{
    const data = JSON.parse(localStorage.getItem('sh_cart_items'));
    return (data && typeof data === 'object' && !Array.isArray(data)) ? data : {};
  }catch(e){ return {}; }
}
function cartSaveItems(items){ localStorage.setItem('sh_cart_items', JSON.stringify(items)); }

function cartGetForm(){
  try{ return JSON.parse(localStorage.getItem('sh_cart_form')) || {}; }
  catch(e){ return {}; }
}
function cartSaveForm(form){ localStorage.setItem('sh_cart_form', JSON.stringify(form)); }

function cartAdd(id){
  if(!CART_CATALOG[id]) return;
  const items = cartGetItems();
  if(!items[id]) items[id] = 1;
  cartSaveItems(items);
  cartRender();
}
function cartRemove(id){
  const items = cartGetItems();
  delete items[id];
  cartSaveItems(items);
  cartRender();
}
function cartSetQty(id, qty){
  const items = cartGetItems();
  if(!items[id]) return;
  qty = Math.max(0, Math.min(CART_MAX_QTY, qty));
  if(qty === 0){ delete items[id]; }
  else { items[id] = qty; }
  cartSaveItems(items);
  cartRender();
}

function cartTotals(){
  const items = cartGetItems();
  let subtotal = 0, hasOnRequest = false, count = 0;
  Object.keys(items).forEach(id=>{
    const c = CART_CATALOG[id];
    if(!c) return;
    const qty = items[id];
    count += qty;
    if(typeof c.price === 'number') subtotal += c.price * qty;
    else hasOnRequest = true;
  });
  const tax = subtotal * CART_TAX_RATE;
  return { subtotal, tax, total: subtotal + tax, hasOnRequest, count, lines: Object.keys(items).length };
}

// The cart can be rendered in more than one place on the same page at once
// (the slide-out drawer, plus an inline copy on the homepage), so every
// render target is updated via querySelectorAll, not just the first match.
function cartRender(){
  const items = cartGetItems();
  const ids = Object.keys(items);
  const tt = cartTotals();

  document.querySelectorAll('[data-cart-count]').forEach(el=>{
    el.textContent = tt.count;
    el.hidden = tt.count === 0;
  });

  document.querySelectorAll('[data-cart-add]').forEach(btn=>{
    const inCart = !!items[btn.dataset.cartAdd];
    btn.classList.toggle('is-added', inCart);
    const label = btn.querySelector('[data-cart-label]');
    if(label) label.textContent = t(inCart ? 'cart.added' : 'cart.add');
  });

  const itemsHtml = ids.map(id=>{
    const c = CART_CATALOG[id];
    if(!c) return '';
    const qty = items[id];
    const priceLabel = typeof c.price === 'number' ? '$'+(c.price*qty).toFixed(2) : t('cart.onRequest');
    return '<div class="cart-item">'
      +'<span class="cart-item__name">'+t(c.key)+'</span>'
      +'<div class="cart-item__qty">'
        +'<button type="button" data-cart-qty-dec="'+id+'" aria-label="-">&minus;</button>'
        +'<span>'+qty+'</span>'
        +'<button type="button" data-cart-qty-inc="'+id+'" aria-label="+">+</button>'
      +'</div>'
      +'<span class="cart-item__price">'+priceLabel+'</span>'
      +'<button type="button" class="cart-item__remove" data-cart-remove="'+id+'" aria-label="'+t('cart.remove')+'">&times;</button>'
      +'</div>';
  }).join('');
  document.querySelectorAll('[data-cart-list]').forEach(list=>{
    if(ids.length === 0){
      const href = list.dataset.cartEmptyHref || 'experiences.html';
      list.innerHTML = '<a class="cart-empty" href="'+href+'">'+t('cart.empty')+'</a>';
    } else {
      list.innerHTML = itemsHtml;
    }
  });

  document.querySelectorAll('[data-cart-subtotal]').forEach(el=>{ el.textContent = '$'+tt.subtotal.toFixed(2); });
  document.querySelectorAll('[data-cart-tax]').forEach(el=>{ el.textContent = '$'+tt.tax.toFixed(2); });
  document.querySelectorAll('[data-cart-total]').forEach(el=>{ el.textContent = '$'+tt.total.toFixed(2); });
  document.querySelectorAll('[data-cart-totals]').forEach(el=>{ el.hidden = tt.subtotal === 0; });
  document.querySelectorAll('[data-cart-onrequest]').forEach(el=>{ el.hidden = !tt.hasOnRequest; });
  document.querySelectorAll('[data-cart-send]').forEach(el=>{ el.disabled = ids.length === 0; });
}

function cartBuildMessage(form){
  const items = cartGetItems();
  const tt = cartTotals();
  const L = {
    en:{hi:'Hi Salty Horizon! I would like to book:', sub:'Subtotal', tax:'Tax (13% IVA)', total:'Estimated total',
        onreq:'Price to confirm', date:'Preferred date', name:'Name', note:'Notes'},
    fr:{hi:'Bonjour Salty Horizon ! Je souhaite réserver :', sub:'Sous-total', tax:'Taxe (13% IVA)', total:'Total estimé',
        onreq:'Prix à confirmer', date:'Date souhaitée', name:'Nom', note:'Remarques'},
    es:{hi:'¡Hola Salty Horizon! Quiero reservar:', sub:'Subtotal', tax:'Impuesto (13% IVA)', total:'Total estimado',
        onreq:'Precio a confirmar', date:'Fecha', name:'Nombre', note:'Notas'}
  }[LANG];

  let msg = L.hi;
  Object.keys(items).forEach(id=>{
    const c = CART_CATALOG[id];
    if(!c) return;
    const qty = items[id];
    const priceLabel = typeof c.price === 'number' ? ('$'+c.price+' x '+qty+' = $'+(c.price*qty).toFixed(2)) : L.onreq;
    msg += '\n- ' + t(c.key) + ' x' + qty + ' — ' + priceLabel;
  });
  if(tt.subtotal > 0){
    msg += '\n\n'+L.sub+': $'+tt.subtotal.toFixed(2);
    msg += '\n'+L.tax+': $'+tt.tax.toFixed(2);
    msg += '\n'+L.total+': $'+tt.total.toFixed(2);
  }
  if(form.date) msg += '\n\n'+L.date+': '+form.date;
  if(form.name) msg += '\n'+L.name+': '+form.name;
  if(form.note) msg += '\n'+L.note+': '+form.note;
  return msg;
}

document.addEventListener('DOMContentLoaded', ()=>{
  cartRender();

  // add / remove / qty / send (event delegation: works for any number of
  // cart instances on the page, and for elements added to the DOM later)
  document.addEventListener('click', (e)=>{
    const addBtn = e.target.closest('[data-cart-add]');
    if(addBtn){
      const id = addBtn.dataset.cartAdd;
      if(cartGetItems()[id]) cartRemove(id); else cartAdd(id);
      return;
    }
    const rmBtn = e.target.closest('[data-cart-remove]');
    if(rmBtn){ cartRemove(rmBtn.dataset.cartRemove); return; }
    const incBtn = e.target.closest('[data-cart-qty-inc]');
    if(incBtn){ const id = incBtn.dataset.cartQtyInc; cartSetQty(id, (cartGetItems()[id]||0) + 1); return; }
    const decBtn = e.target.closest('[data-cart-qty-dec]');
    if(decBtn){ const id = decBtn.dataset.cartQtyDec; cartSetQty(id, (cartGetItems()[id]||0) - 1); return; }
    const quickAddBtn = e.target.closest('[data-cart-quickadd-add]');
    if(quickAddBtn){
      const wrap = quickAddBtn.closest('.cart-inline__quickadd');
      const sel = wrap && wrap.querySelector('[data-cart-quickadd]');
      if(sel && sel.value){ cartAdd(sel.value); sel.value=''; }
      return;
    }
    const sendBtn = e.target.closest('[data-cart-send]');
    if(sendBtn){
      if(sendBtn.disabled || Object.keys(cartGetItems()).length === 0) return;
      const msg = cartBuildMessage(cartGetForm());
      const waUrl = 'https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(msg);
      gtag_report_conversion(waUrl, true, 'cart');
      return;
    }
  });

  // shared date/name/note fields: may appear more than once on the same
  // page (drawer + inline copy), so every matching field is restored and
  // kept in sync with the others as the user types.
  const savedForm = cartGetForm();
  ['date','name','note'].forEach(f=>{
    document.querySelectorAll('[name="cart'+f.charAt(0).toUpperCase()+f.slice(1)+'"]').forEach(el=>{
      if(savedForm[f]) el.value = savedForm[f];
      if(el.showPicker){ el.addEventListener('click', ()=>{ try{ el.showPicker(); }catch(err){} }); }
    });
  });
  document.addEventListener('input', (e)=>{
    const el = e.target;
    if(!el.name || !/^cart(Date|Name|Note)$/.test(el.name)) return;
    const key = el.name.replace(/^cart/,'');
    const form = cartGetForm();
    form[key.charAt(0).toLowerCase()+key.slice(1)] = el.value;
    cartSaveForm(form);
    document.querySelectorAll('[name="'+el.name+'"]').forEach(other=>{ if(other !== el) other.value = el.value; });
  });

  // drawer open/close
  const drawer = document.querySelector('[data-cart-drawer]');
  const toggleBtn = document.querySelector('[data-cart-toggle]');
  if(drawer && toggleBtn){
    const closeBtns = drawer.querySelectorAll('[data-cart-close]');
    const open = ()=>{ drawer.classList.add('is-open'); toggleBtn.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; };
    const close = ()=>{ drawer.classList.remove('is-open'); toggleBtn.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };
    window.cartOpenDrawer = open;
    toggleBtn.addEventListener('click', ()=> drawer.classList.contains('is-open') ? close() : open());
    closeBtns.forEach(b=> b.addEventListener('click', close));
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
  }
});
