# SEO / GEO — Project Context

Document de référence factuel pour le sous-agent `head-of-seo-geo`. Toute information ci-dessous a été vérifiée par lecture directe des fichiers du dépôt à la date indiquée. Ce qui n'a pas pu être vérifié dans le repo est marqué **« à confirmer »** — jamais inventé.

**Dernière vérification complète : 2026-07-12**, par lecture de : `README.md`, `AMELIORATIONS.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `.well-known/agents.json`, `.htaccess`, `.gitignore`, les 5 pages `.html`, `css/styles.css`, `js/script.js`, et l'historique Git (`git log`).

**Mise à jour partielle : 2026-07-14** (revue hebdomadaire SEO Lead), après un chantier majeur mené le 2026-07-13/14 : architecture multilingue réelle (`/fr/`, `/es/`), tracking GA4 + conversion Google Ads sur les clics WhatsApp, favicon remplacé, 9 images recompressées, `sitemap.xml` et `llms.txt` mis à jour. Voir `SEO_AUDIT_LOG.md` pour le détail daté. Les sections 3, 4, 5, 6, 7 et 8 ci-dessous ont été revérifiées et corrigées en conséquence ; le reste du document date toujours du 12/07.

**Mise à jour majeure : 2026-08-01** (rattrapage documentaire après deux chantiers non consignés). Revérification complète par lecture directe des fichiers réels (pas de confiance aveugle au changelog fourni) : `git log`/`git show --stat` sur les commits `30a1e78`, `e13c9f8`, `8f1c5eb`, `69c9699` (+ leurs équivalents `main` `01df0f4`/`f13a3a5`/`81fb3e9`/`e91f505`), `sitemap.xml` (compte + `lastmod`), `llms.txt`, JSON-LD des 5 nouvelles pages produit + des 2 pages guide, tarifs sur `index.html`/`experiences.html`/`padi-courses.html`/`llms.txt`/pages produit, `js/core.js` (fix wa.me), `js/i18n-en.js` + `scuba-diving-tamarindo-faq.html` (fix `tfaq.a38`), cartes `card.*.d` sur `index.html`/`experiences.html`, `aggregateRating` sur les 3 langues de la home, hreflang/nav dropdown/liens internes site-wide. **Confirmé identique `main` local vs `dev` local (`git diff --stat main dev` vide)** : tout ce qui suit est bien en production, malgré `origin/dev` distant qui n'a pas encore reçu les 2 derniers commits (poussés seulement vers `main` via cherry-pick) — détail d'hygiène Git sans impact sur le contenu documenté ici. Les sections 3, 4, 5, 6, 7 et 8 ci-dessous reflètent cet état vérifié le 2026-08-01.

---

## 1. Identité de l'entreprise

- **Nom** : Salty Horizon Exclusive Scuba Diving
- **Activité** : plongée sous-marine PADI privée et personnalisée, snorkeling, charters privés
- **Localisation** : Tamarindo, Guanacaste, Costa Rica (zone : Playa Langosta d'après l'iframe Google Maps de `index.html`)
- **Coordonnées géo indiquées en JSON-LD** : latitude 10.2993, longitude -85.8400
- **Contact** : WhatsApp +506 8775 9641 · email saltyhorizon.scuba@gmail.com
- **Réseaux** : Instagram [@saltyhorizondiving](https://www.instagram.com/saltyhorizondiving)
- **Équipe** :
  - Camille Segonne — PADI OWSI & MSDT
  - Julien Escales — PADI OWSI
  - Trilingue EN/FR/ES pour les deux instructeurs
- **Langues du site/service** : anglais, français, espagnol
- **Sites de plongée** :
  - Catalina Islands (Las Catalinas) — env. 20 îlots volcaniques, golfe de Papagayo, ~40 min de bateau depuis Tamarindo, tous niveaux
  - Bat Islands (Islas Murciélago) — rencontres requins-bouledogues, mai à novembre, certification Advanced Open Water requise, dans le secteur marin de l'Área de Conservación Guanacaste (SINAC)
- **Domaine de production** : `https://www.saltyhorizondiving.com/`
- **Tous les avis confirmés réels par le propriétaire (2026-07-28)** : les 14 avis affichés dans le JSON-LD `SportsActivityLocation` de `index.html` (et FR/ES) sont tous de vrais avis clients, aucun n'est un exemple/placeholder. Point précédemment marqué « à confirmer » — clos.
- **Note globale confirmée par l'utilisateur (2026-07-12)** : 9 avis, 5 étoiles. Ajoutée en `aggregateRating` dans le JSON-LD de `index.html`. C'est un **instantané** — l'utilisateur indique que le nombre d'avis augmente régulièrement — à remettre à jour manuellement de temps en temps (voir `SEO_AUDIT_LOG.md` et le backlog dans `AMELIORATIONS.md`).

## 2. Stack technique

- Site **statique codé à la main** : HTML/CSS/JS, **aucun framework, aucun build, aucune dépendance npm**.
- Toute modification de fichier est immédiatement visible (pas d'étape de compilation).
- Le README indique explicitement que cette stack **peut évoluer** (backend, build) — ne pas supposer qu'elle restera statique indéfiniment.
- **Hébergement** : serveur propre chez **Hostinger**, déploiement via la fonctionnalité Git de hPanel branchée sur `main`.
- **Git** : dépôt `github.com/saltyhorizonscuba/salty-horizon-website`. Branche `main` = production (protégée, push/merge/déploiement interdits sans autorisation explicite de l'admin). Branche `dev` = travail courant. Toute autre action à fort impact (force-push, suppression de branche, réécriture d'historique, config d'hébergement/domaine) requiert aussi une confirmation explicite. *(Règles définies dans `README.md`, section « Instructions pour Claude Code / toute instance Claude » — s'appliquent à toute session, donc aussi à ce sous-agent.)*
- `AMELIORATIONS.md` est **local uniquement** : retiré du suivi Git (`git rm --cached`, commit `25d4b14`) et listé dans `.gitignore`. C'est le seul fichier avec ce statut dans le dépôt.

## 3. Inventaire des pages

**Restructuration majeure le 2026-07-31 (commit `30a1e78`, « Split Experiences into standalone product/guide pages, add shopping cart, translate everything to FR/ES »)** : l'ancienne section à ancres `experiences.html#intro`/`#discover`/`#catalinas`/`#bat`/`#snorkel` a été éclatée en **5 pages produit réservables indépendantes**, distinctes des **2 pages guide informatives** créées le 2026-07-23 (`catalina-islands-diving.html`/`bat-islands-diving.html`, jusque-là non commitées) qui couvrent les mêmes destinations mais sans intention transactionnelle. Les 2 catégories coexistent et se renvoient l'une à l'autre (voir maillage interne ci-dessous). `catalina-islands-diving.html`/`bat-islands-diving.html` ont aussi reçu leurs traductions `fr`/`es` et leurs balises hreflang à cette occasion — le point « anglais uniquement » signalé le 2026-07-23 est donc clos.

12 pages « produit/guide » en anglais (hors page de vérification Google Search Console `googlef4121f0e79961b40.html`, hors SEO), chacune dupliquée nativement en `/fr/` et `/es/` (voir section 5), plus un blog anglais-only de 7 articles (2 nouveaux ajoutés le 2026-07-21 : « The Top 10 Things to Do in Tamarindo » et « The 10 Best Beaches Near Tamarindo », schéma `BlogPosting`+`FAQPage`+`BreadcrumbList`).

| Fichier (EN) | URL canonique | Rôle | Schéma JSON-LD | Prix (`Offer`) |
|---|---|---|---|---|
| `index.html` | `/` | Accueil : hero, about, expériences (cartes + panier), Las Catalinas, galerie, équipe, avis, réservation, FAQ courte, contact | `SportsActivityLocation`, `FAQPage` (5 Q/R), `Person`×2 | — |
| `experiences.html` | `/experiences.html` | Hub des 6 expériences (5 produits + cours), cartes avec ajout au panier | `WebPage`, `BreadcrumbList` | — |
| `discover-scuba-diving.html` | `/discover-scuba-diving.html` | Produit : baptême de plongée en mer, 2 plongées guidées, aucune certification requise | `WebPage`, `Offer`, `BreadcrumbList`, `FAQPage` (4 Q/R) | $195 |
| `intro-to-scuba-diving.html` | `/intro-to-scuba-diving.html` | Produit : initiation en piscine, dès 10 ans | `WebPage`, `Offer`, `BreadcrumbList` | $80 |
| `fun-dive-catalina-islands.html` | `/fun-dive-catalina-islands.html` | Produit : 2 plongées guidées Las Catalinas, plongeurs certifiés | `WebPage`, `Offer`, `BreadcrumbList`, `FAQPage` (4 Q/R) | $140 |
| `fun-dive-bat-islands.html` | `/fun-dive-bat-islands.html` | Produit : 3 plongées guidées Bat Islands (requins-bouledogues), Advanced OW requis | `WebPage`, `BreadcrumbList`, `FAQPage` (4 Q/R) | sur devis, pas d'`Offer` |
| `snorkeling-tamarindo.html` | `/snorkeling-tamarindo.html` | Produit : snorkeling privé guidé, tous niveaux | `WebPage`, `Offer`, `BreadcrumbList` | $90 |
| `catalina-islands-diving.html` | `/catalina-islands-diving.html` | Guide informatif Las Catalinas (géographie, saisonnalité, espèces) — renvoie vers `fun-dive-catalina-islands.html` pour réserver | `WebPage`, `BreadcrumbList`, `FAQPage` (5 Q/R) | — |
| `bat-islands-diving.html` | `/bat-islands-diving.html` | Guide informatif Bat Islands (statut de protection, sécurité, saisonnalité) — renvoie vers `fun-dive-bat-islands.html` pour réserver | `WebPage`, `BreadcrumbList`, `FAQPage` (5 Q/R) | — |
| `padi-courses.html` | `/padi-courses.html` | Cours PADI Open Water ($540) et Advanced Open Water ($500), programme jour par jour | `Course`×2, `Offer`×2, `BreadcrumbList` | $540 / $500 |
| `private-charters.html` | `/private-charters.html` | Charters privés à bord du catamaran partenaire Playgrounds (plongée, snorkeling, paddle, e-foil, jet ski, observation des baleines, surf) | `WebPage`, `BreadcrumbList` | — |
| `scuba-diving-tamarindo-faq.html` | `/scuba-diving-tamarindo-faq.html` | FAQ de 43 questions, 11 sections (table des matières ancrée) | `WebPage`, `BreadcrumbList`, `FAQPage` (43 Q/R) | — |

Chacune de ces 12 pages existe aussi à l'identique (structure, schéma) en `fr/*.html` et `es/*.html`, avec titre/meta/contenu/JSON-LD traduits — voir section 5.

**Maillage interne produit ↔ guide** : les 2 pages produit Catalinas/Bat (`fun-dive-*`) contiennent chacune un lien « Learn more about diving at the X Islands » vers la page guide correspondante ; les 2 pages guide se renvoient l'une à l'autre. Les dropdowns de nav (header, homepage, pages produit) pointent vers les 5 pages produit réservables, pas vers les 2 pages guide — cohérent avec leur rôle (nav = parcours d'achat). **Constat factuel, pas un problème** : les pages guide ne sont pas linkées depuis `experiences.html`, `scuba-diving-tamarindo-faq.html` ni le blog — leur seule voie d'entrée interne est via les pages produit correspondantes (+ hreflang + sitemap). À garder à l'œil si leur indexation/trafic organique semble faible, mais pas une action à mener sans donnée de performance réelle.

**Panier d'achat (`js/cart.js`, ajouté le 2026-07-31)** : remplace l'ancien formulaire de réservation simple. Bouton panier dans la nav (icône, compteur), tiroir (`cart-drawer`) avec récapitulatif, boutons « Add to cart » sur les cartes homepage/`experiences.html` et sur chaque page produit, checkout via un seul lien WhatsApp pré-rempli récapitulant la sélection (pas de backend, cohérent avec le reste du site).

Le blog (`blog/index.html` + 7 articles) reste anglais uniquement, choix assumé de l'utilisateur (2026-07-13) — pas de `blog/fr/` ni `blog/es/`.

Toutes les URLs canoniques/hreflang/sitemap utilisent l'extension `.html` de façon cohérente (revérifié le 2026-08-01 sur les 12 pages EN + `sitemap.xml`, 44 URLs). **Exception corrigée le 2026-07-14** : `llms.txt` utilisait des URLs sans extension — corrigé, et revérifié à jour le 2026-08-01 (liste bien les 12 pages EN + sections fr/es + blog, tarifs alignés).

**Tarifs affichés** (revérifiés le 2026-08-01, cohérents entre `index.html`, `experiences.html`, `padi-courses.html`, les 5 pages produit, `llms.txt` et le JSON-LD — **changement de prix le 2026-07-31**, aucune valeur périmée trouvée) :
- Intro to Scuba (Pool) : dès $80 (inchangé)
- Discover Scuba Diving : dès $195 (était $170 avant le 2026-07-31)
- Fun Dive Las Catalinas : dès $140 (était $130 avant le 2026-07-31)
- Fun Dive Bat Islands : sur devis (« Contact us »), inchangé
- Snorkeling privé : dès $90 (était $80 avant le 2026-07-31)
- PADI Open Water Diver : dès $540 (3 jours), inchangé
- PADI Advanced Open Water Diver : dès $500 (2-3 jours selon la FAQ), inchangé

## 4. Métadonnées & schéma structuré (JSON-LD)

Présent sur **toutes** les pages : `<meta name="robots" content="index, follow">`, canonical, hreflang (`en`/`fr`/`es`/`x-default`, **réciproques et résolutifs depuis le 2026-07-13** — voir section 5), Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image` + `width`/`height`), `twitter:card=summary_large_image`.

Le détail par page (types + prix `Offer`) est dans le tableau de la section 3 — non dupliqué ici pour éviter deux sources qui divergent. Rappel des points transverses :

- `index.html` : `SportsActivityLocation` (`@id=#business`, avec `review[]` **et `aggregateRating`** — `ratingValue:5`, `reviewCount:14`, ajouté le 2026-07-12, revérifié inchangé le 2026-08-01 sur les 3 langues), `FAQPage` (5 Q/R), `Person`×2 (`@id=#camille`, `@id=#julien`). *(Correction au tableau du 2026-07-14 : la mention « pas d'`aggregateRating` » qui figurait ici jusqu'au 2026-07-28 était déjà obsolète depuis le 2026-07-12 — corrigée à cette occasion.)*
- `padi-courses.html` : `Course`×2 (Open Water avec `timeRequired:"P3D"`, Advanced Open Water sans `timeRequired`), chacun avec `provider` → `@id=#business` et `instructor` → `@id=#camille`/`#julien`, `Offer`×2 (prix+devise), `BreadcrumbList`. Inchangé depuis le 12/07 malgré les chantiers de fin juillet.
- Les 5 nouvelles pages produit (2026-07-31) utilisent `Offer` en entité de `@graph` séparée (pas de `Product` racine) — cohérent avec le style déjà en place sur `padi-courses.html`. `fun-dive-bat-islands.html` n'a volontairement pas d'`Offer` (prix sur devis, pas de valeur à annoncer) — décision cohérente, pas un oubli.
- Les 2 pages guide (`catalina-islands-diving.html`/`bat-islands-diving.html`) restent volontairement sans `Offer` : ce sont des pages informatives, la réservation se fait sur les pages produit correspondantes.

Les entités `#business`, `#camille`, `#julien` sont **partagées par référence `@id`** entre pages (pas de duplication d'entité) — confirmé sur `padi-courses.html` et les 7 nouvelles pages du 2026-07-31, y compris depuis les versions `fr/`/`es/` (même `@id` absolu réutilisé, pas de doublon par langue).

**Pages `fr/*.html` et `es/*.html`** : mêmes types de schéma que leur équivalent anglais, avec `name`/`description`/`inLanguage` traduits et `@id`/`url` propres à chaque langue (ex. `.../fr/experiences.html#webpage`). Exception assumée : `reviewBody` dans le schéma `SportsActivityLocation` de `index.html`/`fr/index.html`/`es/index.html` reste **dans sa langue d'origine sur les 3 versions** (ce sont des citations attribuées à de vraies personnes — les traduire les dénaturerait). Le contenu des 43 Q/R `FAQPage` est en revanche entièrement traduit sur `fr/scuba-diving-tamarindo-faq.html`/`es/scuba-diving-tamarindo-faq.html`, tout comme les Q/R des nouvelles pages produit/guide.

**Contenu de secours statique (fallback non-JS) des cartes d'expérience** : `index.html`, `experiences.html` (EN) + `fr/experiences.html` + `es/experiences.html` avaient des balises `<p data-i18n="card.X.d"></p>` **vides** — un crawler n'exécutant pas JS (GPTBot, ClaudeBot, PerplexityBot) voyait des cartes avec seulement titre + prix, sans description. **Corrigé le 2026-08-01** : texte de secours rempli avec la copie i18n existante, même convention que les 5 pages produit du 2026-07-31 (qui l'avaient dès leur création). `fr/index.html`/`es/index.html` avaient déjà ce texte correctement — seul le hub `experiences.html` (3 langues) + la home EN étaient touchés. Noter que le système de clés a changé au passage du 07-31 : `card.1.d`/`card.2.d`… (numérique) est devenu `card.intro.d`/`card.discover.d`… (nommé par produit), sans lien avec ce bug de contenu vide.

## 5. Internationalisation

**Réécrite le 2026-07-14 — l'architecture décrite ici a changé le 2026-07-13, ne pas se fier à une version antérieure de cette section.**

- Chaque langue a maintenant sa **propre URL statique** : `/`, `/experiences.html`… en anglais ; `/fr/`, `/fr/experiences.html`… en français ; `/es/`, `/es/experiences.html`… en espagnol. `fr/` et `es/` sont des répertoires réels contenant des fichiers HTML complets, pas une redirection ni un rendu JS.
- `<html lang="...">` correspond réellement à la langue de chaque fichier (`en`/`fr`/`es`) — vérifié sur les 12 pages produit/guide (36 fichiers avec leurs versions `fr`/`es`, revérifié le 2026-08-01 après l'ajout des 7 nouvelles pages du 2026-07-31, y compris `catalina-islands-diving.html`/`bat-islands-diving.html` qui n'avaient pas encore de `fr`/`es` avant cette date).
- Le contenu FR/ES est **natif dans le HTML brut** de `fr/*.html`/`es/*.html`, pas injecté par JS : un crawler qui n'exécute pas JavaScript voit le contenu traduit complet, y compris le JSON-LD.
- hreflang `en`/`fr`/`es`/`x-default` sont **réciproques et résolutifs** : chaque page liste les 4 variantes avec les 3 vraies URLs distinctes (vérifié : contenu identique — même bloc de 4 balises — sur `index.html`, `fr/index.html`, `es/index.html`). `x-default` pointe vers la version anglaise.
- Le sélecteur de langue (EN/FR/ES, coin haut droit du header) est maintenant un vrai lien `<a href>` vers l'URL sœur, avec `hreflang` et `class="active"` sur la langue courante — plus un bouton qui déclenchait un changement JS en place.
- `js/core.js` garde `applyLang()`/`data-i18n` comme **filet de sécurité** : au chargement, la page ré-applique sa propre langue (déduite de `<html lang>`) par-dessus le HTML déjà correct, pour rattraper une éventuelle faute de frappe dans le contenu statique — ce n'est plus ce mécanisme qui *détermine* la langue affichée. **Depuis le 2026-07-17**, le dictionnaire de traduction n'est plus dans ce fichier : chaque page charge `js/i18n-en.js` (ou `-fr`/`-es`) puis `js/core.js`, qui lit `I18N_DATA` (défini par le fichier de langue). Voir section 7.
- Le blog (`blog/*.html`) reste anglais uniquement (choix assumé) — pas de `blog/fr/` ni `blog/es/`. Les pages `fr/`/`es/` renvoient vers `../blog/index.html` (donc vers du contenu anglais) dans leur nav — décision cohérente avec le choix "blog anglais only", mais à garder en tête si jamais un blog FR/ES est envisagé un jour.
- **Avis JSON-LD (`reviewBody`)** : volontairement **non traduits**, identiques dans les 3 langues (voir section 4) — ce sont des citations attribuées.

## 6. GEO / AEO (référencement pour moteurs IA)

- `robots.txt` autorise explicitement : `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `PerplexityBot`, `Bytespider`, `CCBot`, en plus de `User-agent: *`.
- **Décision utilisateur (2026-07-28) : `CCBot` reste autorisé tel quel.** Point rouvert à chaque audit depuis le 2026-07-12 sans arbitrage — désormais clos, aucun changement à `robots.txt` à proposer sur ce sujet.
- `.well-known/agents.json` : fiche de découverte (nom, description, url, `capabilities: ["contact","booking"]`, contact). Une seule URL (page d'accueil anglaise), pas de mention fr/es/blog — pas de problème identifié à date, ce fichier reste volontairement minimal.
- `llms.txt` : résumé de l'entreprise + liste des 12 pages produit/guide (EN) + section langues (`/fr/`, `/es/`, chacune listant les 11 pages hors home) + section Journal (blog, 7 articles) + faits clés. **Corrigé le 2026-07-14** : contenait des URLs sans extension `.html` — chaque URL revérifiée contre un fichier réel existant. **Revérifié à jour le 2026-08-01** après la restructuration du 2026-07-31 : les 7 nouvelles pages (5 produit + 2 guide, ces dernières déjà présentes depuis le 07-23 mais confirmées) y figurent avec les tarifs à jour ($195/$140/$90), cohérent avec `sitemap.xml` (44 URLs).
- Entités JSON-LD reliées entre pages via `@id` partagés (section 4) — aide un LLM/crawler à comprendre qu'il s'agit de la même entité business/personnes sur tout le site, y compris entre langues.
- `FAQPage` présent sur `index.html` (5 Q/R) et sur la page FAQ dédiée (43 Q/R), traduit intégralement sur `fr/`/`es/` — format que les moteurs génératifs et les featured snippets exploitent directement.

## 7. Conventions du dépôt (constatées dans le code/l'historique Git)

- **Cache-busting** : paramètre `?v=N` sur les liens CSS/JS/certaines images. D'après l'historique Git, ce numéro est incrémenté juste avant un push vers `main` (commits dédiés « Bump cache-busting versions… »), pas à chaque commit local. **Depuis le 2026-07-17**, le JS est réparti sur 2 fichiers par page : `js/core.js` (logique, commun aux 36 pages EN/FR/ES depuis le 2026-07-31, était 21 avant) + `js/i18n-en.js`/`-fr`/`-es` (dictionnaire de traduction, un seul par page selon sa langue, `?v=1`→`?v=3` sur les nouvelles pages du 07-31, quelques clés ajoutées pour le panier/les nouveaux titres) — a remplacé l'unique `js/script.js` (supprimé). `css/styles.css` (`?v=65` au 2026-08-01, styles du panier/nouvelles pages ajoutés au même fichier, pas de nouveau fichier CSS créé).
- **Images** : servies localement (plus de dépendance Wix), `width`/`height` explicites, `loading="lazy"` sous la ligne de flottaison, `fetchpriority="high"` + `<picture>`/`srcset` sur l'image LCP de chaque page. Convention de traitement : redimensionnement ~1500px (2000-2400px pour les héros pleine largeur), JPEG qualité ~84-88. **2026-07-14** : 9 images qui dépassaient cette qualité cible (proche de 95-100, jusqu'à 4× plus lourdes que nécessaire) ont été recompressées à qualité 85 sans perte visible (~785 Ko économisés) ; 11 autres images testées n'ont montré aucun vrai gain avec l'encodeur JPEG disponible (GDI+/.NET) et ont été laissées intactes plutôt que d'ajouter une perte de génération inutile.
- **`.htaccess`** : force `https+www` en un seul redirect, compression gzip, cache navigateur (images 1 an, CSS/JS 1 mois), en-têtes de sécurité de base (`X-Content-Type-Options`, `Referrer-Policy`, HSTS). Pas de règle de réécriture d'URL (voir section 3, correction `llms.txt`).
- **Sécurité de contenu** : le contenu textuel reste visible si le JS ne charge pas — vrai maintenant par construction (HTML natif par langue), et non plus seulement parce que la version anglaise sert de secours (voir section 5).
- **Réservation** : formulaire → lien WhatsApp pré-rempli (pas de backend). Numéro défini une seule fois (`WA_PHONE` dans `js/core.js`).
- **Analytics/tracking** (ajouté 2026-07-14) : GA4 (`G-MGJK95GCH7`) et conversion Google Ads (`AW-18323127988/lGLDCLXTuNAcELT9kqFE`) via un seul chargement `gtag.js` par page (deux `gtag('config', ...)`, pas deux scripts). `gtag_report_conversion()` dans `js/core.js` déclenche l'événement de conversion sur **tout** clic vers `wa.me` — flux JS (charter/AOW/OW, **et depuis le 2026-07-31 le checkout du panier `js/cart.js` — vérifié : `cart.js` appelle bien `gtag_report_conversion()`, pas un `window.location` direct, donc couvert par la même logique**) plus un écouteur délégué unique qui capte les liens `<a href="https://wa.me/...">` statiques du HTML (102 occurrences sur 44 fichiers au 2026-08-01, contre 54/21 pages avant la restructuration), avec repli automatique si `gtag` n'est pas chargé (bloqueur de pub) pour ne jamais bloquer un vrai clic client. **Fix du 2026-07-31 (commit `e13c9f8`)** : les navigateurs stricts (Safari notamment) bloquaient l'onglet ouvert par un clic WhatsApp car `window.open()` était appelé de façon asynchrone (après le callback `gtag`) — corrigé en ouvrant l'onglet vide **de façon synchrone** dans le gestionnaire de clic (`window.open('', '_blank')`) puis en fixant son `location` une fois la conversion trackée. Revérifié le 2026-08-01 par lecture directe de `js/core.js` (lignes 10-24) : le correctif est dans la fonction centrale `gtag_report_conversion()`, donc actif pour tous les flux qui l'appellent (statiques + JS + panier), pas seulement certains boutons.
- **`js/core.js` + `js/i18n-{en,fr,es}.js`** (2026-07-17) : voir le point cache-busting ci-dessus pour le détail du découpage — motivé par un audit Lighthouse réel montrant `script.js` comme maillon le plus long de la chaîne critique (2.5s), ~80% de son poids étant un dictionnaire de traduction 3 langues chargé en entier sur chaque page. Poids JS par page : ~123 Ko → ~48-52 Ko selon la langue.
- **Favicon** (changé 2026-07-14) : `favicon.svg` (vague + soleil/lune, couleurs de marque) est maintenant la source servie via `<link rel="icon">` sur toutes les pages, avec `favicon.png` régénéré à partir du même SVG en repli PNG. L'ancien `favicon.png` était le logo complet avec texte, illisible en taille favicon — cause probable de l'icône générique affichée par Google avant correction.

## 8. Incohérences et écarts constatés

Corrigés le 2026-07-12 (détails et raisonnement dans `SEO_AUDIT_LOG.md`) :

1. ~~`aggregateRating` absent~~ → ajouté dans `index.html` (5★, 9 avis, chiffres fournis par l'utilisateur). Valeur instantanée à remettre à jour périodiquement.
2. ~~4 images sans `loading="lazy"`~~ → corrigé pour `about.jpg` (index), `camcourse.jpg` et `discover.jpg` (padi-courses). Cas à part : `charter-sunset.jpg` (private-charters) s'est avéré être probablement l'élément LCP de sa page (pas d'image de fond sur son `pagehero`) et non un candidat au lazy-loading — il a reçu `preload`+`fetchpriority="high"` à la place, comme sur les autres pages.
3. **`hasCourseInstance`/`timeRequired` (Advanced Open Water)** — décision documentée de ne pas les ajouter : `hasCourseInstance` suppose des séances programmées à date fixe, ce qui ne correspond pas à un cours privé à la demande ; `timeRequired` attend une durée unique et la FAQ indique une plage (« 2 à 3 jours »). Voir `SEO_AUDIT_LOG.md`.

Corrigés le 2026-07-13/14 (détails dans `SEO_AUDIT_LOG.md`) :

4. ~~**hreflang non résolutif**~~ → chaque langue a désormais sa vraie URL statique (`/fr/`, `/es/`), hreflang réciproque et résolutif, contenu natif dans le HTML brut. Voir section 5. C'était le point d'origine qui a déclenché tout le chantier du 13/07.
5. ~~**FR/ES invisibles au premier rendu HTML**~~ → même correction que le point 4 : le HTML brut de `fr/*.html`/`es/*.html` contient le contenu traduit complet, plus besoin d'exécuter le JS.
6. ~~**`llms.txt` : URLs sans extension, pages fr/es et blog absentes**~~ → corrigé le 2026-07-14 (voir section 6). Repéré lors de la revue hebdomadaire, pas dans l'audit du 12/07.

Corrigé le 2026-07-14 (suite) :

7. ~~**`preconnect` manquant vers `googletagmanager.com`/`wa.me`**~~ → `<link rel="preconnect">` ajouté vers les deux origines sur les 21 pages, juste après les préconnexions fonts existantes.

Résolu le 2026-07-28 (côté EN) :

8. ~~**`private-charters.html` nettement plus courte**~~ → refonte complète autour du partenariat Playgrounds (bateau, capacité 8 invités/3 cabines, capitaine, itinéraires, observation des baleines, pêche sportive, tarifs indicatifs via CTA). **Mais** rouvert sous une autre forme : les versions FR/ES n'ont pas suivi cette refonte (4 commits de contenu EN-only le 2026-07-28) — voir point 9 ci-dessous et `SEO_AUDIT_LOG.md` 2026-07-28.

Résolus le 2026-07-28 (suite), toujours vrais au 2026-08-01 :

9. ~~**`private-charters.html` FR/ES en retard sur la refonte EN**~~ → parité structurelle complète atteinte le 2026-07-28 (3 passes : contenu manquant ajouté, puis refonte structurelle complète, puis fix du composant `.lightbox` manquant en FR/ES). **Revérifié le 2026-08-01** : le commit du 2026-07-31 (`30a1e78`) a retouché les 3 versions de `private-charters.html` de façon symétrique (+38 lignes EN, FR, ES — ajout hreflang/sélecteur de langue), sans rouvrir l'écart. `<h2>`/`<section>` : 7/8 sur les 3 langues, `<title>` mentionne « Playgrounds » sur les 3. Clos.
10. ~~**2 liens internes cassés vers `catalina-islands-diving.html`/`bat-islands-diving.html`**~~ → **non pertinent depuis le 2026-07-31** : ces 2 pages sont maintenant publiées (commit `30a1e78`), donc un lien vers elles n'est plus cassé. Le dropdown de nav de `private-charters.html` (et de toutes les autres pages) pointe en réalité vers `fun-dive-catalina-islands.html`/`fun-dive-bat-islands.html` (les pages produit réservables, pas les pages guide) — vérifié le 2026-08-01, aucun lien mort trouvé site-wide vers l'une ou l'autre catégorie de page. Clos.
11. ~~**Section « Las Catalinas » (home) sans fond navy en FR/ES**~~ → `section--dark` ajouté à `fr/index.html`/`es/index.html` le 2026-07-28. **Revérifié le 2026-08-01** après la réécriture de `index.html`/`fr/index.html`/`es/index.html` du 2026-07-31 (98-156 lignes touchées chacune) : les 3 versions ont toujours `class="section section--dark" id="catalinas"` — le fix n'a pas été écrasé par la restructuration. Clos.

Corrigés le 2026-08-01 (round 3, voir `SEO_AUDIT_LOG.md` pour le détail) :

12. ~~**FAQ EN : réponse d'annulation périmée**~~ → `scuba-diving-tamarindo-faq.html` (secours statique, clé `tfaq.a38`) affichait « Free cancellation up to 24 hours » alors que le JSON-LD de la page et `js/i18n-en.js` avaient déjà la vraie politique par paliers. FR/ES avaient déjà le bon texte. Corrigé pour aligner l'EN.
13. ~~**Cartes d'expérience : description de secours vide (non-JS)**~~ → voir section 4 pour le détail. Corrigé sur `index.html`, `experiences.html`, `fr/experiences.html`, `es/experiences.html`.
14. ~~**`sitemap.xml` : 20 `lastmod` périmés**~~ → home, `private-charters.html`, `padi-courses.html`, `scuba-diving-tamarindo-faq.html` + leurs `fr`/`es`, + les 8 pages du blog gardaient une date antérieure à la restructuration du 07-31 alors que leur contenu avait réellement changé ce jour-là (vérifié `git log` par fichier, pas une simple supposition). Corrigées à `2026-07-31`.

Encore ouvert :

15. **`<h1>` de la home = image logo sans texte visible/crawlable** (signalé à l'utilisateur, pas encore corrigé, pas une régression — état de longue date) : `index.html` ligne du hero, `<h1><picture>...<img class="hero__logo" ... alt="Salty Horizon"></picture></h1>` — le seul signal textuel pour un moteur est l'attribut `alt`, pas du texte réel dans le DOM. Affaiblit le signal de pertinence on-page du H1 le plus important du site (pas cassé, mais sous-optimal). Correction possible : texte visuellement masqué (`sr-only`) en plus du logo, ou logo en `background-image` avec un vrai `<h1>` texte par-dessus — à trancher avec l'utilisateur (implique une décision de design, pas juste du code).

Résolu le 2026-08-01 (documentation, pas du code) :

16. ~~**`SEO_PROJECT_CONTEXT.md`/`SEO_AUDIT_LOG.md` en retard de deux chantiers** (restructuration du 07-31, corrections round 3 du 08-01)~~ → rattrapage effectué ce jour même par relecture directe des fichiers réels (pas du changelog fourni sans vérification) — voir `SEO_AUDIT_LOG.md` 2026-08-01 pour le détail. Clos.

*Remarque de fiabilité : un audit SEO/GEO antérieur avait été consigné uniquement dans la mémoire de session de Claude (hors dépôt). En comparant cette mémoire à l'état réel actuel des fichiers, deux écarts ont été trouvés : une date de commit citée comme "2026-07-13" qui n'existe pas dans l'historique Git réel (le commit correspondant, `6d7e1d7`, est daté du 2026-07-10), et un point classé "encore ouvert" (URLs canoniques soi-disant sans extension `.html`) qui s'est révélé faux — toutes les URLs vérifiées utilisent bien `.html`. D'où l'intérêt de ce fichier versionné dans le dépôt plutôt qu'une mémoire d'agent invisible et non diffable. **Deuxième illustration du même principe, 2026-08-01** : ce fichier lui-même est resté périmé pendant deux chantiers (07-31, 08-01) avant ce rattrapage — preuve que même un fichier versionné doit être explicitement revérifié à chaque mission plutôt que supposé à jour.*

## 9. Sources

Fichiers lus intégralement ou en grande partie pour produire ce document : `README.md`, `AMELIORATIONS.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `.well-known/agents.json`, `.htaccess`, `.gitignore`, `index.html`, `experiences.html`, `private-charters.html`, `padi-courses.html`, `scuba-diving-tamarindo-faq.html`, `css/styles.css` (en-tête), `js/script.js` (en-tête + table `I18N`), `git log` (historique des commits).

**Mise à jour 2026-07-14** : revérification par grep/lecture directe de `fr/index.html`, `es/index.html`, `fr/scuba-diving-tamarindo-faq.html`, hreflang sur les 3 versions de la home, `.htaccess` (règles de réécriture), `js/script.js` (bloc `gtag_report_conversion`), `sitemap.xml`, `llms.txt` — pas de nouvelle lecture complète des 5 pages EN restantes ni de `robots.txt`, considérés inchangés depuis le 12/07 (à revérifier si une future revue en doute).

Aucune information de ce document ne provient d'une source externe au dépôt. Aucune donnée Search Console/GA4/Ads/Clarity réelle n'était disponible au moment de la mise à jour du 2026-07-14 — les points liés au trafic/conversions réels restent donc basés sur le code, pas sur des métriques observées.

**Semrush (2026-07-28) : ne pas utiliser, l'utilisateur n'a pas de compte.** 3 audits consécutifs ont tenté un appel Semrush (`domain_overview`) en supposant à tort un problème de quota — en réalité il n'y a simplement pas de compte associé. Ne plus retenter cet outil dans les audits futurs ; volume de recherche/mots-clés réels restent **indisponibles**, à traiter comme une limite permanente et non comme un point à rouvrir périodiquement.

**Mise à jour 2026-08-01 (rattrapage documentaire, pas un nouvel audit)** : `git log`/`git show --stat` sur les commits du 07-31/08-01 (EN et `main`), `sitemap.xml` (intégral), `llms.txt` (intégral), JSON-LD complet des 7 nouvelles pages (5 produit + les 2 pages guide revérifiées), `js/core.js` (bloc `gtag_report_conversion` + écouteur délégué wa.me), `js/cart.js` (flux checkout), `js/i18n-en.js` (clé `tfaq.a38`), `scuba-diving-tamarindo-faq.html` (secours statique), cartes `data-i18n="card.*.d"` sur `index.html`/`experiences.html`/`fr/experiences.html`/`es/experiences.html`, `aggregateRating` sur les 3 langues de la home, hreflang + nav dropdown sur les pages produit/guide, comparaison structurelle (`h2`/`section`) des 3 langues de `private-charters.html`, comparaison `git diff --stat main dev` (contenu local identique malgré `origin/dev` en retard de 2 commits non poussés). Pas de nouvelle lecture complète de `robots.txt`/`.htaccess`/`.well-known/agents.json` (aucun changelog ne les mentionnait, considérés inchangés depuis le 2026-07-28 — à revérifier si une future revue en doute).
