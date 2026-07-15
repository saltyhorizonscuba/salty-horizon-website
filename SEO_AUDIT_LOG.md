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

*Format pour les prochaines entrées : date, contexte de la mission, constats (avec méthode de vérification), corrections appliquées, décisions documentées sans code, points laissés ouverts et pourquoi.*
