/* ============================================================
   SALTY HORIZON — interactions, i18n (EN/FR/ES), booking
   ============================================================ */
const WA_PHONE = '50687759641'; // WhatsApp number, international format

/* ---------------- Google Ads conversion tracking (WhatsApp clicks) ---------------- */
// Fires a Google Ads conversion event, then redirects to `url`. If gtag.js
// didn't load (ad blockers, network) or its callback never fires, a short
// timeout still lets the user through — a lost conversion beats a dead link.
function gtag_report_conversion(url, openInNewTab){
  let navigated = false;
  const go = ()=>{
    if(navigated) return;
    navigated = true;
    if(openInNewTab) window.open(url, '_blank');
    else window.location = url;
  };
  if(typeof gtag !== 'function'){ go(); return false; }
  gtag('event', 'conversion', {
    'send_to': 'AW-18323127988/lGLDCLXTuNAcELT9kqFE',
    'value': 1.0,
    'currency': 'USD',
    'event_callback': go
  });
  setTimeout(go, 1000);
  return false;
}

/* ---------------- Translations (data loaded separately per language) ---------------- */
const LANG = document.documentElement.lang;
const t = (k)=> (typeof I18N_DATA !== 'undefined' && I18N_DATA[k]) || k;

function applyLang(){
  if(typeof I18N_DATA === 'undefined') return;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{ el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-content]').forEach(el=>{ el.setAttribute('content', t(el.dataset.i18nContent)); });
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  // language: each language now lives at its own URL (/, /fr/, /es/), so the
  // page's own lang attribute is the source of truth. This page loads only its
  // own language's data (js/i18n-XX.js, included before this file), and
  // applyLang() re-applies it on load as a safety net for any static-content typo.
  applyLang();

  // re-align to the URL hash once the whole page (images, fonts, translated
  // text) has finished loading and settled — page content loading after the
  // browser's initial anchor jump shifts section heights and throws it off.
  // Scroll instantly (bypassing the global smooth scroll-behavior) so it
  // doesn't visibly animate past the target on arrival.
  if(location.hash){
    const landOnHash=()=>{
      const target=document.querySelector(location.hash);
      if(!target) return;
      target.scrollIntoView({behavior:'instant'});
    };
    window.addEventListener('load', landOnHash);
    setTimeout(landOnHash, 400);
  }

  // same-page anchor links (nav, "Meet the team", hero CTAs...): clicking
  // one further up the page scrolls past lazy-loaded images (gallery, etc.)
  // that have no reserved height, so they grow mid-scroll and the smooth
  // scroll animation lands short of the target. Re-align once it settles.
  document.addEventListener('click', (e)=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a || a.getAttribute('href').length<2) return;
    const target=document.querySelector(a.getAttribute('href'));
    if(target) setTimeout(()=>target.scrollIntoView(), 700);
  });

  // header scroll state
  const header=document.querySelector('.header');
  const topBtn=document.querySelector('.fab .top');
  const onScroll=()=>{
    const y=window.scrollY;
    if(header) header.classList.toggle('scrolled', y>40);
    if(topBtn) topBtn.classList.toggle('show', y>600);
  };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // mobile nav
  const burger=document.querySelector('.burger');
  const links=document.querySelector('.nav-links');
  if(burger&&links){
    burger.addEventListener('click', ()=>{ burger.classList.toggle('open'); links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{ burger.classList.remove('open'); links.classList.remove('open'); }));
  }

  // reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.14});
  document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

  // counters
  const counters=document.querySelectorAll('[data-count]');
  if(counters.length){
    const cio=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el=e.target, target=parseFloat(el.dataset.count), suf=el.dataset.suffix||'';
        const dec=(target%1!==0)?1:0; let cur=0; const step=target/55;
        const tick=()=>{ cur+=step; if(cur>=target){ el.textContent=target.toFixed(dec)+suf; } else { el.textContent=cur.toFixed(dec)+suf; requestAnimationFrame(tick);} };
        tick(); cio.unobserve(el);
      });
    },{threshold:.5});
    counters.forEach(c=>cio.observe(c));
  }

  // gallery lightbox
  const lb=document.querySelector('.lightbox');
  if(lb){
    const lbImg=lb.querySelector('img');
    const figs=[...document.querySelectorAll('.gallery figure')];
    const srcs=figs.map(f=>f.dataset.full || f.querySelector('img').src);
    let idx=0;
    const show=(i)=>{ idx=(i+srcs.length)%srcs.length; lbImg.src=srcs[idx]; };
    const open=(i)=>{ show(i); lb.classList.add('open'); document.body.style.overflow='hidden'; };
    const close=()=>{ lb.classList.remove('open'); document.body.style.overflow=''; };
    figs.forEach((f,i)=>f.addEventListener('click',()=>open(i)));
    lb.querySelector('.lb-next').addEventListener('click',e=>{e.stopPropagation();show(idx+1);});
    lb.querySelector('.lb-prev').addEventListener('click',e=>{e.stopPropagation();show(idx-1);});
    lb.querySelector('.lb-close').addEventListener('click',close);
    lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
    document.addEventListener('keydown',e=>{ if(!lb.classList.contains('open'))return; if(e.key==='Escape')close(); if(e.key==='ArrowRight')show(idx+1); if(e.key==='ArrowLeft')show(idx-1); });
  }

  // testimonials carousel
  const slides=[...document.querySelectorAll('.tslide')];
  const dotsWrap=document.querySelector('.tdots');
  if(slides.length && dotsWrap){
    let cur=0, timer;
    slides.forEach((s,i)=>{ const b=document.createElement('button'); b.addEventListener('click',()=>{go(i);reset();}); dotsWrap.appendChild(b); });
    const dots=[...dotsWrap.children];
    const go=(i)=>{ slides[cur].classList.remove('active'); dots[cur].classList.remove('active'); cur=(i+slides.length)%slides.length; slides[cur].classList.add('active'); dots[cur].classList.add('active'); };
    const reset=()=>{ clearInterval(timer); timer=setInterval(()=>go(cur+1),6000); };
    go(0); reset();
  }

  // booking -> WhatsApp
  const bookForm=document.querySelector('#bookForm');
  if(bookForm){
    bookForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const optEl=bookForm.experience.selectedOptions[0];
      const exp=(optEl && optEl.value) ? optEl.textContent.trim() : '';
      if(!exp){ alert(t('book.alert')); bookForm.experience.focus(); return; }
      const date=bookForm.date.value, people=bookForm.people.value, name=bookForm.name.value, note=bookForm.note.value;
      const L={en:{hi:'Hi Salty Horizon! I would like to book a dive.',exp:'Experience',date:'Preferred date',people:'People',name:'Name',note:'Notes'},
               fr:{hi:'Bonjour Salty Horizon ! Je souhaite réserver une plongée.',exp:'Expérience',date:'Date souhaitée',people:'Personnes',name:'Nom',note:'Remarques'},
               es:{hi:'¡Hola Salty Horizon! Quiero reservar una inmersión.',exp:'Experiencia',date:'Fecha',people:'Personas',name:'Nombre',note:'Notas'}}[LANG];
      let msg=L.hi+'\n\n'+L.exp+': '+exp;
      if(date) msg+='\n'+L.date+': '+date;
      if(people) msg+='\n'+L.people+': '+people;
      if(name) msg+='\n'+L.name+': '+name;
      if(note) msg+='\n'+L.note+': '+note;
      const waUrl='https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(msg);
      gtag_report_conversion(waUrl, true);
    });
  }

  // charter WhatsApp buttons
  document.querySelectorAll('[data-wa-charter]').forEach(b=>{
    b.addEventListener('click',(e)=>{ e.preventDefault(); gtag_report_conversion('https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(t('wa.charter')), true); });
  });

  // Course "more info" WhatsApp buttons
  document.querySelectorAll('[data-wa-aowinfo]').forEach(b=>{
    b.addEventListener('click',(e)=>{ e.preventDefault(); gtag_report_conversion('https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(t('wa.aowInfo')), true); });
  });
  document.querySelectorAll('[data-wa-owinfo]').forEach(b=>{
    b.addEventListener('click',(e)=>{ e.preventDefault(); gtag_report_conversion('https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(t('wa.owInfo')), true); });
  });

  // Every static WhatsApp link in the page markup (floating button, footer,
  // contact section, etc.) — one delegated listener catches all of them,
  // including any added to the DOM later, so no per-link wiring is needed.
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href^="https://wa.me/"]');
    if(!a) return;
    e.preventDefault();
    gtag_report_conversion(a.href, a.target === '_blank');
  });

  // generic "book this experience" links: prefill select + scroll
  document.querySelectorAll('[data-book]').forEach(el=>{
    el.addEventListener('click',(e)=>{
      const val=el.dataset.book;
      const sel=document.querySelector('#bookForm [name="experience"]');
      if(sel){ e.preventDefault(); sel.value=val; document.querySelector('#book').scrollIntoView({behavior:'smooth'}); }
    });
  });

  // learn more toggles (experiences)
  document.querySelectorAll('[data-learnmore]').forEach(b=>{
    b.addEventListener('click',()=>{ const p=document.getElementById(b.dataset.learnmore); if(p){ p.hidden=!p.hidden; b.classList.toggle('is-open'); } });
  });

  // course schedule toggle (mobile)
  document.querySelectorAll('[data-schedule-toggle]').forEach(b=>{
    b.addEventListener('click',()=>{
      const content=b.parentElement.querySelector('.schedule-content');
      if(!content) return;
      content.hidden=!content.hidden;
      b.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(!content.hidden));
    });
  });

  // "what's included" toggle (mobile)
  document.querySelectorAll('[data-incl-toggle]').forEach(b=>{
    b.addEventListener('click',()=>{
      const content=b.parentElement.querySelector('.incl-content');
      if(!content) return;
      content.hidden=!content.hidden;
      b.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(!content.hidden));
    });
  });

  // FAQ accordion
  document.querySelectorAll('[data-faq-toggle]').forEach(b=>{
    b.addEventListener('click',()=>{
      const item=b.closest('.faq-item');
      const content=item ? item.querySelector('.faq-a') : b.parentElement.querySelector('.faq-a');
      if(!content) return;
      content.hidden=!content.hidden;
      b.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(!content.hidden));
    });
  });

  // reviews carousel prev/next buttons
  document.querySelectorAll('.review-carousel').forEach(carousel=>{
    const grid=carousel.querySelector('.review-grid');
    const prev=carousel.querySelector('[data-review-prev]');
    const next=carousel.querySelector('[data-review-next]');
    if(!grid || !prev || !next) return;
    let cachedStep=null;
    const measureStep=()=>{
      const card=grid.querySelector('.review-card');
      const gap=parseFloat(getComputedStyle(grid).columnGap) || 0;
      cachedStep = card ? card.offsetWidth + gap : grid.clientWidth * 0.8;
    };
    window.addEventListener('resize', ()=>{ cachedStep=null; }, {passive:true});
    const step=()=>{ if(cachedStep===null) measureStep(); return cachedStep; };
    prev.addEventListener('click', ()=> grid.scrollBy({left:-step(), behavior:'smooth'}));
    next.addEventListener('click', ()=> grid.scrollBy({left:step(), behavior:'smooth'}));
  });

  // gallery carousel prev/next buttons
  document.querySelectorAll('.gallery').forEach(carousel=>{
    const track=carousel.querySelector('.gallery-track');
    const prev=carousel.querySelector('[data-gallery-prev]');
    const next=carousel.querySelector('[data-gallery-next]');
    if(!track || !prev || !next) return;
    let cachedStep=null;
    const measureStep=()=>{
      const item=track.querySelector('figure');
      const gap=parseFloat(getComputedStyle(track).columnGap) || 0;
      cachedStep = item ? item.offsetWidth + gap : track.clientWidth * 0.8;
    };
    window.addEventListener('resize', ()=>{ cachedStep=null; }, {passive:true});
    const step=()=>{ if(cachedStep===null) measureStep(); return cachedStep; };
    prev.addEventListener('click', ()=> track.scrollBy({left:-step(), behavior:'smooth'}));
    next.addEventListener('click', ()=> track.scrollBy({left:step(), behavior:'smooth'}));
  });

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
