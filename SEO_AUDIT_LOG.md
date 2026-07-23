# SEO / GEO — Audit Log

Historique daté des audits, constats et corrections effectués par le `head-of-seo-geo`. Ce fichier est la mémoire durable et versionnée du travail SEO/GEO — à consulter et compléter à chaque mission, plutôt que de dépendre de la mémoire de session d'un agent (qui peut dériver ou se tromper de date, comme constaté ci-dessous).

---

## 2026-07-12 — Mise en place du système SEO/GEO + corrections mineures

**Contexte** : première mission du `head-of-seo-geo` nouvellement créé. Analyse complète du dépôt (voir `SEO_PROJECT_CONTEXT.md`), comparaison avec un audit antérieur qui n'existait que dans la mémoire de session de Claude (hors dépôt).

**Écarts trouvés entre cette mémoire et l'état réel des fichiers** :
- La mémoire citait un commit daté du « 2026-07-13 » ; ce commit (`6d7e1d7`) est en réalité daté du 2026-07-10 dans `git log`.
- La mémoire listait « URLs canoniques/hreflang/sitemap sans extension `.html` » comme point encore ouvert ; vérification faite (grep sur les 5 pages + `sitemap.xml`) : toutes les URLs utilisent bien `.html` de façon cohérente. Ce point n'était donc plus d'actualité (déjà correct, pas de code à changer).
- Le décompte « 0 image sur 39 avec `width`/`height` » n'était plus exact : un commit ultérieur (`d819758`, 2026-07-12) avait déjà ajouté ces attributs presque partout. Seule exception restante : le `<img>` vide de la lightbox (`index.html`), qui n'a pas besoin de dimensions puisqu'il est rempli dynamiquement par JS.

**Corrections appliquées cette session** (sur `dev`, non poussées) :
1. `index.html` — ajout d'un `AggregateRating` (`ratingValue: 5`, `reviewCount: 9`) dans le schema `SportsActivityLocation`. Chiffres fournis directement par l'utilisateur (9 avis, 5 étoiles) le 2026-07-12. **Ce chiffre est un instantané, pas une valeur figée** : le nombre d'avis augmente régulièrement d'après l'utilisateur — à remettre à jour manuellement en même temps que le bloc d'avis statique (voir convention existante pour les avis).
2. `loading="lazy"` ajouté sur 3 images sous la ligne de flottaison qui ne l'avaient pas : `images/about.jpg` (`index.html`), `images/camcourse.jpg` et `images/discover.jpg` (`padi-courses.html`).
3. `private-charters.html` : son image `charter-sunset.jpg` est très probablement l'élément LCP de cette page (le `pagehero` de cette page n'a pas d'image de fond, contrairement aux autres pages) mais n'avait ni `preload` ni `fetchpriority`, contrairement à toutes les autres pages du site. Ajout de `<link rel="preload" as="image" href="images/charter-sunset.jpg?v=3">` dans le `<head>` et `fetchpriority="high"` sur la balise `<img>` correspondante — et non `loading="lazy"`, qui aurait été la mauvaise correction pour une image probablement au-dessus de la ligne de flottaison.

**Décision technique documentée (pas de code) — `hasCourseInstance`** : un audit antérieur proposait d'ajouter `hasCourseInstance` au schema `Course` de `padi-courses.html`. Ce type Schema.org sert à décrire des *séances programmées* (dates, statut). Salty Horizon vend des cours privés à la demande, sans calendrier fixe de sessions — `hasCourseInstance` ne correspond donc pas au modèle réel de l'activité. Décision : ne pas l'ajouter, pour éviter de fabriquer une structure de données qui ne reflète rien de réel. Le `timeRequired` de l'Advanced Open Water (« 2 à 3 jours » selon la FAQ) n'a pas non plus été ajouté au schema pour la même raison : `timeRequired` attend une durée unique (format `xsd:duration`), pas une plage, et forcer une valeur unique (ex. `P3D`) serait imprécis par rapport aux 2-3 jours réellement variables.

**Fichiers créés** :
- `.claude/agents/head-of-seo-geo.md` — sous-agent Claude Code dédié, persona Head of SEO/GEO.
- `SEO_PROJECT_CONTEXT.md` — base factuelle vérifiée (entreprise, pages, schéma, conventions).
- `SEO_AUDIT_LOG.md` — ce fichier.
- Backlog SEO ajouté dans `AMELIORATIONS.md` (fichier local, non suivi par Git) pour les points encore ouverts nécessitant une décision ou une donnée de l'utilisateur.

**Encore ouvert** (voir `AMELIORATIONS.md` pour le détail) : profondeur de contenu de `private-charters.html`, architecture multilingue réelle (`/fr/`, `/es/`), statut réel avis par avis (réel vs exemple), suivi périodique du chiffre `aggregateRating`.

---

## 2026-07-13/14 — Architecture multilingue réelle, tracking, hygiène technique

**Contexte** : partie de cette période n'a pas été menée par le sous-agent `head-of-seo-geo` lui-même mais par la session principale (l'agent n'était pas invocable via l'outil Agent pendant cette session — problème connu, à revérifier). Cette entrée reconstitue le travail a posteriori lors de la première revue hebdomadaire du SEO Lead (2026-07-14), pour que l'historique reste complet malgré ça.

**Déclencheur** : l'utilisateur a signalé que les 4 balises hreflang (en/fr/es/x-default) pointaient toutes vers la même URL anglaise — confirmé par `curl` sur le site en prod.

**Corrections appliquées (2026-07-13)** :
1. Construction d'une vraie architecture multilingue statique : `fr/` et `es/` créés en miroir des 5 pages EN (`index.html`, `experiences.html`, `padi-courses.html`, `private-charters.html`, `scuba-diving-tamarindo-faq.html`), avec `<html lang>` correct, canonical propre, hreflang réciproque et résolutif, JSON-LD traduit (`WebPage`/`BreadcrumbList`/`FAQPage`/`Course`), et chemins d'assets corrigés pour le sous-répertoire.
2. Décision : `reviewBody` (avis clients) reste non traduit dans les 3 langues — citations attribuées à de vraies personnes. FAQ (43 Q/R) entièrement traduite. Blog reste anglais uniquement (décision utilisateur), lien nav fr/es vers `../blog/`.
3. Sélecteur de langue transformé de bouton JS (changement en place) en vrais liens `<a href>` vers l'URL sœur.
4. `js/script.js` : `applyLang()`/`I18N` conservés comme filet de sécurité (ré-applique la langue de la page au chargement) plutôt que supprimés — réduit le risque par rapport à une réécriture complète.
5. `sitemap.xml` : 10 nouvelles URLs (5 fr + 5 es) ajoutées, puis 6 pages du blog qui n'y figuraient pas du tout (repéré lors d'une vérification demandée par l'utilisateur le 2026-07-13, corrigé le même jour).
6. Bug détecté et corrigé en cours de route : le script de traduction mécanique ratait silencieusement les valeurs du dictionnaire `I18N` écrites entre guillemets doubles (nécessaire quand le texte contient une apostrophe) — corrigé avant que ça n'affecte les pages déjà générées (vérifié : seule la page FAQ utilisait ces clés).

**Corrections appliquées (2026-07-14)** :
7. Tracking GA4 (`G-MGJK95GCH7`) ajouté sur les 21 pages, puis conversion Google Ads (`AW-18323127988/lGLDCLXTuNAcELT9kqFE`) fusionnée dans le même chargement `gtag.js` (pas de second tag, conforme à la consigne Google "un seul tag par page"). `gtag_report_conversion()` ajouté dans `js/script.js`, avec repli automatique (redirection directe) si `gtag` n'est pas chargé ou si son callback ne répond jamais sous 1s — pour qu'un bloqueur de pub ne puisse jamais transformer un clic WhatsApp en lien mort. Couvre les 4 flux JS existants + un écouteur délégué unique pour les 54 liens `<a href="wa.me/...">` statiques du HTML (21 pages), plutôt que d'instrumenter chaque lien individuellement.
8. Favicon remplacé : l'ancien `favicon.png` était le logo complet avec texte ("SALTY HORIZON EXCLUSIVE SCUBA DIVING"), illisible en taille favicon — cause probable de l'icône générique affichée par Google Search au lieu d'une vraie icône. Remplacé par un rendu du `favicon.svg` existant (vague + soleil/lune, déjà dans le repo mais jamais utilisé), testé visuellement lisible à 48×48px. `favicon.svg` ajouté en `<link rel="icon">` sur les 21 pages en plus du PNG.
9. 9 images recompressées (qualité JPEG ramenée à 85, mêmes dimensions) : `intro-pool.jpg`, `catalinas.jpg`, `fundive-home.jpg`, `colby.jpg`, `courses.jpg`, `about.jpg`, `charter-sunset.jpg`, `julien.jpg`, `sunrays.jpg` — ~785 Ko économisés au total, aucune perte visible constatée. 11 autres images testées avec le même traitement n'ont montré aucun gain réel (1% ou moins, `hero.jpg` a même grossi) avec l'encodeur JPEG disponible (System.Drawing/GDI+, pas d'ImageMagick ni de outil équivalent sur la machine) — reverties pour éviter une perte de génération sans bénéfice.
10. **Revue hebdomadaire SEO Lead (2026-07-14)** — 3 priorités identifiées :
    - `llms.txt` corrigé : URLs sans extension `.html` (aucune règle de réécriture dans `.htaccess` pour les justifier) remplacées par les URLs `.html` vérifiées ; sections `/fr/`/`es/` et Journal (blog, 6 pages) ajoutées — absentes du fichier alors qu'il est lu directement par les assistants IA pour décider quoi citer.
    - `SEO_PROJECT_CONTEXT.md`/`AMELIORATIONS.md` mis à jour pour refléter l'architecture multilingue réelle (étaient encore périmés, décrivaient l'ancien système JS mono-URL comme actuel).
    - `preconnect` manquant vers `googletagmanager.com` et `wa.me` — identifié puis **corrigé le même jour** : `<link rel="preconnect">` ajouté vers les deux origines sur les 21 pages, juste après les préconnexions fonts existantes.

**Fichiers créés** : `fr/index.html`, `fr/experiences.html`, `fr/padi-courses.html`, `fr/private-charters.html`, `fr/scuba-diving-tamarindo-faq.html`, `es/index.html`, `es/experiences.html`, `es/padi-courses.html`, `es/private-charters.html`, `es/scuba-diving-tamarindo-faq.html`, `googlef4121f0e79961b40.html` (vérification Google Search Console, hors périmètre SEO technique).

**Encore ouvert** : contenu de `private-charters.html` (inchangé, bloqué faute de données utilisateur), mise à jour périodique d'`aggregateRating`, statut avis par avis.

---

## 2026-07-16/17 — Audit Core Web Vitals réel (Lighthouse) + conversion WebP

**Contexte** : l'utilisateur a signalé un mauvais score PageSpeed/Hostinger mobile (plusieurs points à 0 : "Document request latency", "Improve image delivery", "Network dependency tree", "Reduce unused JavaScript", "Avoid multiple page redirects", "Forced reflow", "LCP request discovery"). Analyse d'abord faite par lecture de code (redirect testé en direct via `curl`, hypothèses sur le reste), puis l'utilisateur a installé Node.js, ce qui a permis d'installer Lighthouse et de lancer un vrai audit contre la prod (`https://www.saltyhorizondiving.com/`, mobile) plutôt que de deviner.

**Résultat réel (Lighthouse, score performance mobile : 59/100)** :
- **`redirects` = 1 (bon)** en testant l'URL canonique directement — contredit le test `curl` initial. Explication : Hostinger applique son propre forçage HTTPS *avant* que `.htaccess` ne s'exécute (redirige vers du non-www), notre règle rajoute ensuite le www — donc 2 sauts réels seulement pour une entrée par URL nue/http/non-www, invisibles quand on teste l'URL finale directement. **Toujours pas corrigé** — nécessite de vérifier dans hPanel Hostinger un éventuel réglage "Force WWW" combinable, hors de portée depuis le dépôt.
- **`lcp-discovery-insight` = 0, confirmé et corrigé** : le vrai élément LCP mobile n'est pas l'image de fond du hero mais `hero-logo.png` (le logo texte "SALTY HORIZON" dans le `<h1>`), sans aucune priorité — 4.03s de `resourceLoadDuration` sur les 5.0s de LCP total. Corrigé : `fetchpriority="high"` + `<link rel="preload">` ajoutés sur les 3 variantes de la home (EN/FR/ES).
- **`image-delivery-insight` = 0, confirmé** : ex. `intro-pool.jpg` gaspillait 365 Ko (format non moderne + dimensions surdimensionnées pour son usage). A motivé la conversion WebP ci-dessous.
- **`forced-reflow-insight` = 0** : 864ms non attribuables (très probablement des scripts tiers Google) contre seulement 70ms venant de notre propre `js/script.js`. Pas d'action prise — peu de marge sans dégrader le tracking.
- **`network-dependency-tree-insight` = 0** : `js/script.js` est le maillon le plus long de la chaîne critique (2.5s). Confirme l'hypothèse déjà notée : le dictionnaire `I18N` complet (3 langues) alourdit chaque page alors qu'une seule langue est utilisée par page depuis le passage au multilingue statique. **Pas corrigé** — refactor plus large (séparer le dictionnaire par langue, toucherait les 21 pages), signalé mais pas exécuté.
- **`unused-javascript` = 1 (bon)**, contrairement à l'hypothèse initiale (avant d'avoir la vraie donnée) que le dictionnaire I18N remonterait comme "JS inutile" — l'audit de couverture V8 ne le voit pas ainsi (la création de l'objet littéral compte comme "exécutée" même si peu de propriétés sont lues). Corrigé dans le raisonnement, pas dans le code.

**Conversion WebP (2026-07-17)** : Node.js maintenant disponible → bloquant historique levé (voir `AMELIORATIONS.md`). Les 29 images du site (27 JPEG + 2 PNG) converties via `sharp` : qualité 80 par défaut, qualité 92 pour `manta.jpg`/`hero-mobile.jpg` (bandes de compression visibles à 80 sur ces dégradés ciel/océan lisses — vérifié visuellement avant/après), qualité 90 pour les 2 PNG (canal alpha vérifié préservé : 4 canaux, `hasAlpha:true` avant et après). `hero.jpg` volontairement exclu (JPEG-only) : utilisé uniquement en `og:image`/JSON-LD, jamais affiché sur la page. Total : 7.4 Mo → 4.3 Mo (-42%). 93 balises `<img>` simples réécrites en `<picture><source type="image/webp">` par script, plus les 3 blocs `<picture>` du hero (ajout de sources webp respectant l'ordre média mobile/desktop) et les logos (nav + hero) traités manuellement. Ajout de `picture{display:contents}` dans `css/styles.css` — nécessaire car plusieurs composants (`.exp-card img` en `position:absolute`, `.gallery-track img`, `.member img`) dépendent de l'`<img>` comme enfant direct de leur conteneur ; sans ce correctif, le wrapper `<picture>` (`display:inline` par défaut) aurait pu perturber leur mise en page. Vérifié par capture d'écran pleine page après défilement (déclenche les animations `data-reveal` par `IntersectionObserver`) sur `index.html` et `experiences.html` — rien de cassé.

**Fichiers modifiés** : `index.html`, `fr/index.html`, `es/index.html` (priorité LCP + picture hero), les 21 pages HTML (balisage picture/webp), `css/styles.css` (`picture{display:contents}`), 29 nouveaux fichiers `images/*.webp`.

**Encore ouvert** : redirection double (nécessite hPanel), contenu `private-charters.html`, mise à jour périodique `aggregateRating`.

---

## 2026-07-17 (suite) — Séparation du dictionnaire I18N (network-dependency-tree-insight)

**Contexte** : suite directe du point "encore ouvert" ci-dessus. `js/script.js` (123 Ko) était le maillon le plus long de la chaîne critique (2.5s) mesurée par Lighthouse — ~80% de son poids était le dictionnaire de traduction complet EN+FR+ES, chargé en entier sur chaque page alors qu'une seule langue est utilisée par page depuis le passage au multilingue statique (13/07).

**Correction appliquée** : `js/script.js` supprimé, remplacé par :
- `js/core.js` (14 Ko) : toute la logique interactive (nav, formulaire, animations, carrousels, tracking conversion), sans aucune donnée de traduction.
- `js/i18n-en.js`, `js/i18n-fr.js`, `js/i18n-es.js` : un dictionnaire plat par langue (386 clés chacun, compte vérifié identique).

`applyLang()`/`t()` simplifiées pour lire directement `I18N_DATA` (un seul objet, plus d'indexation par code langue) puisque chaque page ne charge plus que sa propre langue. Les 21 pages mises à jour pour charger `js/i18n-XX.js` puis `js/core.js` (blog → `i18n-en.js`). Poids JS par page : ~123 Ko → ~48-52 Ko selon la langue (-57% à -61%).

**Vérification** : script Puppeteer sur les 21 pages (aucune erreur console/page, hors échecs attendus des balises gtag sous origine `file://`), traduction confirmée correcte sur les home EN/FR/ES et une sous-page (`experiences.html`/`fr/experiences.html`), capture d'écran pleine page après défilement sur `index.html` — rien de cassé visuellement.

**Fichiers modifiés** : `js/core.js` (nouveau), `js/i18n-en.js`/`i18n-fr.js`/`i18n-es.js` (nouveaux), `js/script.js` (supprimé), les 21 pages HTML (balises `<script>`).

**Encore ouvert** : redirection double (nécessite hPanel), contenu `private-charters.html`, mise à jour périodique `aggregateRating`.

---

---

## 2026-07-21 — Audit SEO/GEO complet (relance périodique), aucune correction appliquée

**Contexte** : audit demandé par l'utilisateur après enrichissement récent du blog (2 nouveaux articles), refonte de la grille blog en mosaïque, corrections mineures (contraste bouton avis, indicateur de scroll mobile). Mission d'audit pur — constats seulement, pas de code modifié (sauf ce fichier et `SEO_PROJECT_CONTEXT.md`).

**Méthode** : comparaison `origin/main` (prod réelle) vs `origin/dev` (git log/diff), lecture directe des fichiers, 4 audits Lighthouse réels contre `https://www.saltyhorizondiving.com/` (mobile, Node/Lighthouse 13.4.0 en CLI local — pas de simulation), tentative Semrush (`domain_overview`) — **échec : quota d'unités API épuisé**, aucune donnée de mots-clés/trafic/classement réelle disponible cette session, donc rien inventé sur ce plan.

**Constats principaux** :
1. **`image-delivery-insight` = 1 151 KiB de gaspillage, chiffre identique à l'audit du 2026-07-16/17** — confirmé toujours d'actualité malgré la conversion WebP de juillet : la conversion de format n'a pas réglé le vrai problème, qui est le **dimensionnement**. Vérifié précisément : `.exp-card img` (page d'accueil, ex. `intro-pool.webp` 1500×1001, `fundive-home.webp` 1206×1561, `bull-shark.webp`, `snorkel.webp`, `dsd.webp`) s'affiche dans une carte CSS de ~380-430px de large (`.exp-grid` 3 colonnes) mais est servi en une seule résolution ~1000-1600px de large, sans `srcset`/`sizes` responsive. Root cause confirmée par lecture croisée `css/styles.css` (`.exp-grid`, `.exp-card img`) + dimensions réelles des fichiers WebP (extraites par script Node, pas devinées).
2. **Nouveau constat, jamais audité avant** : le gabarit des articles de blog (`blog/*.html`, les 7 pages) n'a jamais reçu le traitement priorité LCP appliqué aux pages produit en juillet (préchargement + `fetchpriority="high"` sur l'image héros). Confirmé par Lighthouse sur `blog/top-10-things-to-do-tamarindo.html` : `lcp-discovery-insight` score 0, item du checklist « fetchpriority=high should be applied » = `false`. C'est un défaut structurel binaire (pas du bruit de mesure), présent sur les 7 articles puisqu'ils partagent le même gabarit `<figure class="article-hero">` sans `<link rel="preload">` ni `fetchpriority`.
3. **Variance de mesure notée** : 3 passes Lighthouse mobile sur la home le même jour ont donné des scores Performance de 59, 84 et 88 (LCP 8.1s vs 3.3s vs 3.3s) alors que rien n'avait changé dans le code entre les passes — cohérent avec de la variance réseau/hébergement réelle (Hostinger mutualisé), pas une régression de code. Les métriques stables sur les 3 passes (TBT ~190-310ms, `unused-javascript` = gtag.js à 128 KiB, `image-delivery-insight` = 1151 KiB identique) sont les chiffres fiables à retenir, pas la valeur LCP d'une passe isolée.
4. **Bonne nouvelle constatée, pas une action à mener** : le contenu de `private-charters.html`, signalé comme trop court depuis le 2026-07-12, est déjà largement retravaillé sur `dev` (commit `ba97387`, WIP) — partenariat catamaran Playgrounds (51 pieds, 8 invités, 3 cabines, capitaine, observation des baleines juillet-novembre, pêche sportive), entièrement traduit EN/FR/ES (vérifié dans `js/i18n-{en,fr,es}.js`), photos réelles, CTA WhatsApp. **Non fusionné sur `main`, donc invisible en prod** — bloqué uniquement sur validation client (message de commit : « pending client sign-off »), pas sur un manque de donnée ou de code.
5. **Rien de nouveau côté schéma structuré du blog** : `blog/index.html` référence bien les 7 articles par `@id` dans le `@graph` `Blog`/`blogPost` (pas de doublon, pas d'article manquant) ; chaque article a `BlogPosting`+`FAQPage`+`BreadcrumbList` correctement formés, liens internes vers `experiences.html#discover`/`#catalinas`/`private-charters.html`. `sitemap.xml` et `llms.txt` vérifiés à jour (7 articles + index, `lastmod` réalistes) — pas de régression malgré ce que le brief de relance laissait craindre.
6. **Accessibilité (Lighthouse, score 85/100, pas encore auditée en détail avant)** : `color-contrast` insuffisant sur `.eyebrow`/`.muted`/labels de formulaire, un saut de niveau de titre (`<h4>` dans le footer), 2 champs de formulaire (`date`, `people`) sans `<label>` associé, `<select name="experience">` sans nom accessible. Mineur, pas retenu en priorité cette semaine, mais à garder à l'œil (positionnement premium = attention aux détails).
7. **Toujours sans décision** : `robots.txt` autorise toujours `CCBot` par défaut (jamais tranché) ; pages dédiées Catalinas/Bat Islands toujours sans donnée de volume de recherche réelle pour trancher (Semrush indisponible cette session).

**Corrections appliquées cette session** : aucune sur le code du site (mission d'audit). `SEO_PROJECT_CONTEXT.md` section 3 mise à jour (comptage pages/blog obsolète : 21→23 URLs, 6→7 articles).

**Priorités recommandées à l'utilisateur** (voir réponse complète) : (1) préchargement LCP sur le gabarit des 7 articles de blog, (2) `srcset`/`sizes` responsive sur les images `.exp-card`, (3) décision de fusion de `private-charters.html` (dev→main) déjà prête, en attente de validation client uniquement.

**Encore ouvert** : mise à jour périodique `aggregateRating` (actuellement 14 avis/5★, à confirmer que ce chiffre reste exact), statut avis par avis, décision `CCBot`, données de volume de recherche réelles (Semrush à réessayer quand le quota sera renouvelé).

---

## 2026-07-21 — Correction priorité 1 : préchargement LCP sur le gabarit des 7 articles de blog

**Contexte** : suite directe de l'audit du même jour (ci-dessus), constat n°2. Correction demandée par l'utilisateur.

**Correction appliquée** : sur les 7 pages `blog/*.html` (`top-10-things-to-do-tamarindo`, `best-beaches-near-tamarindo`, `mantas-costa-rica-manta-ray-research`, `costa-rica-dive-destinations-comparison`, `things-to-do-tamarindo-beyond-diving`, `photographing-whitetip-sharks-sea-turtles`, `sea-turtles-tamarindo-species-guide`), ajout dans le `<head>` (juste après `twitter:card`, avant les `preconnect`, même emplacement que sur `index.html`) d'un `<link rel="preload" as="image" href="../images/<hero>.webp?v=X" fetchpriority="high">` pointant vers l'image héros réelle de chaque article, plus `fetchpriority="high"` sur le `<img>` correspondant dans `.article-hero`. Pour `mantas-costa-rica-manta-ray-research.html`, qui n'a jamais eu de wrapper `<picture>`/source WebP (incohérence pré-existante, hors scope de cette correction), le preload cible directement le `.jpg` réellement servi plutôt que d'inventer une conversion WebP non demandée.

**Vérification** : `grep` sur les 7 fichiers confirmant une paire preload+fetchpriority par article, chemin d'image identique entre le `<link rel="preload">` et le `<picture>`/`<img>` réel.

**Fichiers modifiés** : les 7 pages `blog/*.html` listées ci-dessus.

**Encore ouvert** : priorité 2 (`srcset`/`sizes` sur les images `.exp-card`) et priorité 3 (décision de fusion `private-charters.html`) restent à traiter séparément.

---

## 2026-07-21 — Correction priorité 2 : `srcset`/`sizes` responsive sur les images `.exp-card`, sans compromis qualité

**Contexte** : suite directe de l'audit du même jour, constat n°1. L'utilisateur a explicitement insisté : la qualité visuelle est un point de différenciation primordial pour ses clients, la correction ne doit provoquer **aucun changement visuel perceptible**, ni sur desktop ni sur mobile haute densité (retina).

**Diagnostic confirmé avant correction** : les 5 images (`intro-pool`, `dsd`, `fundive-home`, `bull-shark`, `snorkel`) s'affichent dans `.exp-card` à 398px de large maximum (3 colonnes, conteneur plafonné à 1240px) mais étaient servies à leur résolution native (1000-1600px), sans `srcset`. `dsd.jpg` et `snorkel.jpg` sont aussi réutilisés en grand format ailleurs (`experiences.html` `.exp-row__media`, `blog/index.html`, `blog/top-10-things-to-do-tamarindo.html` hero LCP) ; `bull-shark.jpg` est réutilisé dans la lightbox galerie en pleine résolution. Ces usages devaient rester inchangés.

**Approche retenue (pas de compression agressive, ajout d'une variante, pas de remplacement)** :
1. Génération via `sharp` d'une variante `-card` supplémentaire (900px de large, qualité JPEG 88 / WebP 85 — volontairement plus haute que la convention standard du site (~82-85) pour ce point précis) pour chacune des 5 images, sans toucher aux fichiers originaux : `intro-pool-card.jpg/.webp`, `dsd-card.jpg/.webp`, `fundive-home-card.jpg/.webp`, `bull-shark-card.jpg/.webp`, `snorkel-card.jpg/.webp`.
2. Sur `index.html`, `fr/index.html`, `es/index.html` — uniquement les 5 balises `<picture>` dans `.exp-grid` (repérées précisément pour ne pas toucher à l'occurrence lightbox de `bull-shark` à la ligne ~291, ni aux usages dans `experiences.html`) — ajout d'un `srcset` à deux candidats (900w variante compacte + largeur native d'origine) sur le `<source webp>` et sur l'`<img>`, avec `sizes="(min-width:981px) 398px, (min-width:561px) 46vw, 92vw"` calculé à partir des points de rupture réels de `.exp-grid` (3/2/1 colonnes) dans `css/styles.css`.

**Pourquoi c'est sans compromis qualité** : le navigateur choisit toujours le candidat dont la résolution native est ≥ à la résolution d'affichage réelle (taille CSS × densité de pixels de l'écran). Vérifié par mesure directe (`img.currentSrc`/`naturalWidth`) : à 1300px desktop (DPR 1), les 5 cartes chargent la variante 900w, affichée à 398px — 2,26x la définition d'affichage, largement au-dessus du seuil de netteté perceptible. À 390px mobile avec DPR 3 (résolution requise ≈1170px), la variante 900w est automatiquement écartée et le fichier ORIGINAL pleine résolution est chargé à sa place — comportement natif du navigateur (algorithme `srcset`), pas une règle codée à la main. Capture d'écran avant/après comparée visuellement : aucune différence perceptible.

**Gains** : `-card.webp` pèse 40 à 234 Ko contre 165 à 454 Ko pour les fichiers originaux selon l'image (`bull-shark`, déjà proche de 1000px nativement, gain marginal ; les 4 autres, gain significatif) — sur desktop/tablette (la majorité des chargements de cette page), c'est ce fichier compact qui est effectivement transféré.

**Vérification** : script Puppeteer avec deux profils d'écran (1300px DPR 1, 390px DPR 3) confirmant le fichier réellement chargé (`currentSrc`) par image ; capture d'écran pleine page de la section Experiences après défilement complet (déclenchement des animations `data-reveal`) — rendu identique à avant correction.

**Fichiers modifiés** : `index.html`, `fr/index.html`, `es/index.html` (5 balises `<picture>` chacun) ; 10 nouveaux fichiers image (`*-card.jpg`/`.webp` ×5).

**Encore ouvert** : priorité 3 (décision de fusion `private-charters.html`, dev→main) reste à traiter séparément, en attente de validation client uniquement.

---

## 2026-07-23 — Images restantes surdimensionnées : `logo.png` (23 pages) et `about.jpg` (home)

**Contexte** : suite du chantier "images restantes" identifié lors du point sur les chantiers structurels SEO. Même méthode que le 2026-07-21 (priorité 2) : variante compacte ajoutée, fichier original conservé comme repli haute densité, aucune perte de qualité visée.

**Corrections appliquées** :
1. `logo.png`/`logo.webp` (logo du header, présent sur les 23 pages du site) : affiché à ~140-177px seulement contre 1074px servi. Nouvelle variante `logo-compact.png`/`.webp` à 600px de large (10-16 Ko contre 44 Ko), avec `srcset` à deux candidats (600w/1074w) et `sizes="(max-width:520px) 140px, 177px"` reflétant les deux tailles CSS réelles (`.brand--logo img{height:66px}`, `52px` en scrolled/mobile).
2. `about.jpg`/`about.webp` (page À propos, les 3 langues) : affiché ~580-600px contre 1338px servi. Nouvelle variante `about-card.jpg`/`.webp` à 900px (117-187 Ko contre 336 Ko d'origine), `sizes="(min-width:981px) 601px, 92vw"` basé sur `.about-grid` (`1.05fr 1fr`, conteneur plafonné à 1240px).

**Vérification** : mesure directe de `img.currentSrc` (fichier réellement chargé, pas une estimation) à deux profils d'écran — desktop 1300px DPR1 (charge bien les variantes compactes) et mobile 390px DPR3 (le logo reste sur la variante compacte car 600w suffit même à cette densité ; `about` bascule automatiquement sur le fichier original pleine résolution, la variante compacte étant insuffisante à cette densité). Capture d'écran avant/après sur le header et la section About — rendu identique. Aucune erreur console sur un échantillon de 4 pages parmi les 23 touchées (`blog/index.html`, `fr/experiences.html`, `es/private-charters.html`, `scuba-diving-tamarindo-faq.html`).

**Fichiers modifiés** : 23 pages HTML (balise logo du header), `index.html`/`fr/index.html`/`es/index.html` (image About) ; 4 nouveaux fichiers image (`logo-compact.png`/`.webp`, `about-card.jpg`/`.webp`).

**Décision documentée, pas une correction** : `hero-mobile.webp` et `hero-logo.webp` volontairement laissés tels quels. `hero-mobile.webp` (1200×2133) est en réalité déjà bien dimensionné pour son usage réel (photo plein écran mobile à haute densité) — le gaspillage détecté par Lighthouse vient de son test sur un appareil à densité modérée (Moto G4, DPR 1.75), pas d'un vrai problème pour la majorité du trafic mobile réel (iPhones, DPR 3). `hero-logo.webp` est l'élément LCP de la page (déjà préchargé avec `fetchpriority="high"`) : le gain potentiel (~38 Ko) ne justifiait pas le risque d'une mauvaise coordination entre le préchargement et l'usage réel, qui pourrait dégrader le premier affichage au lieu de l'améliorer.

**Encore ouvert** : priorité 3 (décision de fusion `private-charters.html`, dev→main) ; décision `CCBot` ; données de volume de recherche réelles (Semrush).

---

*Format pour les prochaines entrées : date, contexte de la mission, constats (avec méthode de vérification), corrections appliquées, décisions documentées sans code, points laissés ouverts et pourquoi.*
