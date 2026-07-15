# SEO / GEO — Project Context

Document de référence factuel pour le sous-agent `head-of-seo-geo`. Toute information ci-dessous a été vérifiée par lecture directe des fichiers du dépôt à la date indiquée. Ce qui n'a pas pu être vérifié dans le repo est marqué **« à confirmer »** — jamais inventé.

**Dernière vérification complète : 2026-07-12**, par lecture de : `README.md`, `AMELIORATIONS.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `.well-known/agents.json`, `.htaccess`, `.gitignore`, les 5 pages `.html`, `css/styles.css`, `js/script.js`, et l'historique Git (`git log`).

**Mise à jour partielle : 2026-07-14** (revue hebdomadaire SEO Lead), après un chantier majeur mené le 2026-07-13/14 : architecture multilingue réelle (`/fr/`, `/es/`), tracking GA4 + conversion Google Ads sur les clics WhatsApp, favicon remplacé, 9 images recompressées, `sitemap.xml` et `llms.txt` mis à jour. Voir `SEO_AUDIT_LOG.md` pour le détail daté. Les sections 3, 4, 5, 6, 7 et 8 ci-dessous ont été revérifiées et corrigées en conséquence ; le reste du document date toujours du 12/07.

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
- **Avis Google réel confirmé** : au moins 1 avis (Mohammed Abdul Moiz) confirmé réel par le propriétaire lors d'une session antérieure ; les 5 autres avis affichés sont soit des avis Google réels ajoutés depuis, soit — à l'origine — des exemples. **à confirmer** : statut exact (réel vs exemple) de chacun des 6 avis un par un.
- **Note globale confirmée par l'utilisateur (2026-07-12)** : 9 avis, 5 étoiles. Ajoutée en `aggregateRating` dans le JSON-LD de `index.html`. C'est un **instantané** — l'utilisateur indique que le nombre d'avis augmente régulièrement — à remettre à jour manuellement de temps en temps (voir `SEO_AUDIT_LOG.md` et le backlog dans `AMELIORATIONS.md`).

## 2. Stack technique

- Site **statique codé à la main** : HTML/CSS/JS, **aucun framework, aucun build, aucune dépendance npm**.
- Toute modification de fichier est immédiatement visible (pas d'étape de compilation).
- Le README indique explicitement que cette stack **peut évoluer** (backend, build) — ne pas supposer qu'elle restera statique indéfiniment.
- **Hébergement** : serveur propre chez **Hostinger**, déploiement via la fonctionnalité Git de hPanel branchée sur `main`.
- **Git** : dépôt `github.com/saltyhorizonscuba/salty-horizon-website`. Branche `main` = production (protégée, push/merge/déploiement interdits sans autorisation explicite de l'admin). Branche `dev` = travail courant. Toute autre action à fort impact (force-push, suppression de branche, réécriture d'historique, config d'hébergement/domaine) requiert aussi une confirmation explicite. *(Règles définies dans `README.md`, section « Instructions pour Claude Code / toute instance Claude » — s'appliquent à toute session, donc aussi à ce sous-agent.)*
- `AMELIORATIONS.md` est **local uniquement** : retiré du suivi Git (`git rm --cached`, commit `25d4b14`) et listé dans `.gitignore`. C'est le seul fichier avec ce statut dans le dépôt.

## 3. Inventaire des pages

5 pages « produit » en anglais, chacune dupliquée nativement en `/fr/` et `/es/` (voir section 5), plus un blog anglais-only de 6 pages. 21 pages HTML au total dans le sitemap.

| Fichier (EN) | URL canonique | `<title>` (EN) | Rôle |
|---|---|---|---|
| `index.html` | `/` | Private Scuba Diving in Tamarindo, Costa Rica \| Salty Horizon | Accueil : hero, about, expériences, Las Catalinas, galerie, équipe, avis, réservation, FAQ courte, contact |
| `experiences.html` | `/experiences.html` | Scuba Diving Experiences in Tamarindo \| Salty Horizon | Détail des 5 expériences + tarifs |
| `padi-courses.html` | `/padi-courses.html` | PADI Courses in Tamarindo, Costa Rica \| Salty Horizon | Cours PADI Open Water ($540) et Advanced Open Water ($500), programme jour par jour |
| `private-charters.html` | `/private-charters.html` | Private Boat Charters in Tamarindo, Costa Rica \| Salty Horizon | Charters privés (scuba, snorkeling, paddle, e-foil, jet ski) |
| `scuba-diving-tamarindo-faq.html` | `/scuba-diving-tamarindo-faq.html` | Scuba Diving in Tamarindo, Costa Rica: FAQ \| Salty Horizon | FAQ de 43 questions, 11 sections (table des matières ancrée) |

Chacune de ces 5 pages existe aussi à l'identique (structure, schéma) en `fr/*.html` et `es/*.html`, avec titre/meta/contenu/JSON-LD traduits — voir section 5.

Le blog (`blog/index.html` + 5 articles) reste anglais uniquement, choix assumé de l'utilisateur (2026-07-13) — pas de `blog/fr/` ni `blog/es/`.

Toutes les URLs canoniques/hreflang/sitemap utilisent l'extension `.html` de façon cohérente (vérifié par grep sur les 21 pages + `sitemap.xml`). **Exception corrigée le 2026-07-14** : `llms.txt` utilisait des URLs sans extension (`/experiences`, `/padi-courses`…) sans règle de réécriture correspondante dans `.htaccess` — aligné sur les URLs `.html` vérifiées partout ailleurs.

**Tarifs affichés** (cohérents entre `index.html`, `experiences.html`, `padi-courses.html`, `llms.txt` et le JSON-LD) :
- Intro to Scuba (Pool) : dès $80
- Discover Scuba Diving : dès $170
- Fun Dive Las Catalinas : dès $130
- Fun Dive Bat Islands : sur devis (« Contact us »)
- Snorkeling privé : dès $80
- PADI Open Water Diver : dès $540 (3 jours)
- PADI Advanced Open Water Diver : dès $500 (2-3 jours selon la FAQ)

## 4. Métadonnées & schéma structuré (JSON-LD)

Présent sur **toutes** les pages : `<meta name="robots" content="index, follow">`, canonical, hreflang (`en`/`fr`/`es`/`x-default`, **réciproques et résolutifs depuis le 2026-07-13** — voir section 5), Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image` + `width`/`height`), `twitter:card=summary_large_image`.

| Page | Types JSON-LD présents |
|---|---|
| `index.html` | `SportsActivityLocation` (`@id=#business`, avec `review[]`, pas d'`aggregateRating`), `FAQPage` (5 Q/R), `Person` ×2 (`@id=#camille`, `@id=#julien`) |
| `experiences.html` | `WebPage`, `BreadcrumbList` |
| `padi-courses.html` | `Course` ×2 (Open Water avec `timeRequired:"P3D"`, Advanced Open Water sans `timeRequired`), chacun avec `provider` → `@id=#business` et `instructor` → `@id=#camille`/`#julien`, `Offer` (prix+devise), `BreadcrumbList` |
| `private-charters.html` | `WebPage`, `BreadcrumbList` |
| `scuba-diving-tamarindo-faq.html` | `WebPage`, `BreadcrumbList`, `FAQPage` (43 Q/R) |

Les entités `#business`, `#camille`, `#julien` sont **partagées par référence `@id`** entre pages (pas de duplication d'entité) — confirmé sur `padi-courses.html`, y compris depuis les versions `fr/`/`es/` (même `@id` absolu réutilisé, pas de doublon par langue).

**Pages `fr/*.html` et `es/*.html`** : mêmes types de schéma que leur équivalent anglais, avec `name`/`description`/`inLanguage` traduits et `@id`/`url` propres à chaque langue (ex. `.../fr/experiences.html#webpage`). Exception assumée : `reviewBody` dans le schéma `SportsActivityLocation` de `index.html`/`fr/index.html`/`es/index.html` reste **dans sa langue d'origine sur les 3 versions** (ce sont des citations attribuées à de vraies personnes — les traduire les dénaturerait). Le contenu des 43 Q/R `FAQPage` est en revanche entièrement traduit sur `fr/scuba-diving-tamarindo-faq.html`/`es/scuba-diving-tamarindo-faq.html`.

## 5. Internationalisation

**Réécrite le 2026-07-14 — l'architecture décrite ici a changé le 2026-07-13, ne pas se fier à une version antérieure de cette section.**

- Chaque langue a maintenant sa **propre URL statique** : `/`, `/experiences.html`… en anglais ; `/fr/`, `/fr/experiences.html`… en français ; `/es/`, `/es/experiences.html`… en espagnol. `fr/` et `es/` sont des répertoires réels contenant des fichiers HTML complets, pas une redirection ni un rendu JS.
- `<html lang="...">` correspond réellement à la langue de chaque fichier (`en`/`fr`/`es`) — vérifié sur les 15 pages produit.
- Le contenu FR/ES est **natif dans le HTML brut** de `fr/*.html`/`es/*.html`, pas injecté par JS : un crawler qui n'exécute pas JavaScript voit le contenu traduit complet, y compris le JSON-LD.
- hreflang `en`/`fr`/`es`/`x-default` sont **réciproques et résolutifs** : chaque page liste les 4 variantes avec les 3 vraies URLs distinctes (vérifié : contenu identique — même bloc de 4 balises — sur `index.html`, `fr/index.html`, `es/index.html`). `x-default` pointe vers la version anglaise.
- Le sélecteur de langue (EN/FR/ES, coin haut droit du header) est maintenant un vrai lien `<a href>` vers l'URL sœur, avec `hreflang` et `class="active"` sur la langue courante — plus un bouton qui déclenchait un changement JS en place.
- `js/script.js` garde `applyLang()`/`I18N`/`data-i18n` comme **filet de sécurité** : au chargement, la page ré-applique sa propre langue (déduite de `<html lang>`) par-dessus le HTML déjà correct, pour rattraper une éventuelle faute de frappe dans le contenu statique — ce n'est plus ce mécanisme qui *détermine* la langue affichée.
- Le blog (`blog/*.html`) reste anglais uniquement (choix assumé) — pas de `blog/fr/` ni `blog/es/`. Les pages `fr/`/`es/` renvoient vers `../blog/index.html` (donc vers du contenu anglais) dans leur nav — décision cohérente avec le choix "blog anglais only", mais à garder en tête si jamais un blog FR/ES est envisagé un jour.
- **Avis JSON-LD (`reviewBody`)** : volontairement **non traduits**, identiques dans les 3 langues (voir section 4) — ce sont des citations attribuées.

## 6. GEO / AEO (référencement pour moteurs IA)

- `robots.txt` autorise explicitement : `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `PerplexityBot`, `Bytespider`, `CCBot`, en plus de `User-agent: *`.
- `.well-known/agents.json` : fiche de découverte (nom, description, url, `capabilities: ["contact","booking"]`, contact). Une seule URL (page d'accueil anglaise), pas de mention fr/es/blog — pas de problème identifié à date, ce fichier reste volontairement minimal.
- `llms.txt` : résumé de l'entreprise + liste des 5 pages produit (EN) + section langues (`/fr/`, `/es/`) + section Journal (blog, 6 pages) + faits clés. **Corrigé le 2026-07-14** : contenait des URLs sans extension `.html` (probable 404, aucune règle de réécriture correspondante dans `.htaccess`) et ne listait ni les pages fr/es ni le blog — chaque URL du fichier a été revérifiée contre un fichier réel existant.
- Entités JSON-LD reliées entre pages via `@id` partagés (section 4) — aide un LLM/crawler à comprendre qu'il s'agit de la même entité business/personnes sur tout le site, y compris entre langues.
- `FAQPage` présent sur `index.html` (5 Q/R) et sur la page FAQ dédiée (43 Q/R), traduit intégralement sur `fr/`/`es/` — format que les moteurs génératifs et les featured snippets exploitent directement.

## 7. Conventions du dépôt (constatées dans le code/l'historique Git)

- **Cache-busting** : paramètre `?v=N` sur les liens CSS/JS/certaines images. État actuel confirmé identique sur les 21 pages : `css/styles.css?v=40`, `js/script.js?v=31`. D'après l'historique Git, ce numéro est incrémenté juste avant un push vers `main` (commits dédiés « Bump cache-busting versions… »), pas à chaque commit local.
- **Images** : servies localement (plus de dépendance Wix), `width`/`height` explicites, `loading="lazy"` sous la ligne de flottaison, `fetchpriority="high"` + `<picture>`/`srcset` sur l'image LCP de chaque page. Convention de traitement : redimensionnement ~1500px (2000-2400px pour les héros pleine largeur), JPEG qualité ~84-88. **2026-07-14** : 9 images qui dépassaient cette qualité cible (proche de 95-100, jusqu'à 4× plus lourdes que nécessaire) ont été recompressées à qualité 85 sans perte visible (~785 Ko économisés) ; 11 autres images testées n'ont montré aucun vrai gain avec l'encodeur JPEG disponible (GDI+/.NET) et ont été laissées intactes plutôt que d'ajouter une perte de génération inutile.
- **`.htaccess`** : force `https+www` en un seul redirect, compression gzip, cache navigateur (images 1 an, CSS/JS 1 mois), en-têtes de sécurité de base (`X-Content-Type-Options`, `Referrer-Policy`, HSTS). Pas de règle de réécriture d'URL (voir section 3, correction `llms.txt`).
- **Sécurité de contenu** : le contenu textuel reste visible si le JS ne charge pas — vrai maintenant par construction (HTML natif par langue), et non plus seulement parce que la version anglaise sert de secours (voir section 5).
- **Réservation** : formulaire → lien WhatsApp pré-rempli (pas de backend). Numéro défini une seule fois (`WA_PHONE` dans `js/script.js`).
- **Analytics/tracking** (ajouté 2026-07-14) : GA4 (`G-MGJK95GCH7`) et conversion Google Ads (`AW-18323127988/lGLDCLXTuNAcELT9kqFE`) via un seul chargement `gtag.js` par page (deux `gtag('config', ...)`, pas deux scripts). `gtag_report_conversion()` dans `js/script.js` déclenche l'événement de conversion sur **tout** clic vers `wa.me` — 4 flux JS existants (formulaire de réservation, boutons charter/AOW/OW) plus un écouteur délégué unique qui capte les liens `<a href="https://wa.me/...">` statiques du HTML (54 occurrences sur 21 pages), avec repli automatique si `gtag` n'est pas chargé (bloqueur de pub) pour ne jamais bloquer un vrai clic client.
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

Encore ouverts (nécessitent une donnée ou une décision de l'utilisateur — voir backlog dans `AMELIORATIONS.md`) :

7. **`private-charters.html` nettement plus courte** que les 4 autres pages (une intro + 3 cartes courtes, pas de détails bateau/capacité/itinéraire/tarif indicatif) — confirmé par lecture complète du fichier. Toujours vrai au 2026-07-14, y compris sur ses versions fr/es (même structure clonée). Bloqué faute de données réelles (capacité bateau, itinéraires, tarif indicatif) que seul l'utilisateur peut fournir.
8. **Pas de `preconnect` vers `googletagmanager.com` ni `wa.me`** (repéré 2026-07-14) — friction réseau évitable sur le chemin de conversion WhatsApp, qui est justement suivi par tracking depuis le 14/07. Faible effort, pas encore fait au moment de la rédaction de cette section (voir `SEO_AUDIT_LOG.md` pour le statut à jour).

*Remarque de fiabilité : un audit SEO/GEO antérieur avait été consigné uniquement dans la mémoire de session de Claude (hors dépôt). En comparant cette mémoire à l'état réel actuel des fichiers, deux écarts ont été trouvés : une date de commit citée comme "2026-07-13" qui n'existe pas dans l'historique Git réel (le commit correspondant, `6d7e1d7`, est daté du 2026-07-10), et un point classé "encore ouvert" (URLs canoniques soi-disant sans extension `.html`) qui s'est révélé faux — toutes les URLs vérifiées utilisent bien `.html`. D'où l'intérêt de ce fichier versionné dans le dépôt plutôt qu'une mémoire d'agent invisible et non diffable.*

## 9. Sources

Fichiers lus intégralement ou en grande partie pour produire ce document : `README.md`, `AMELIORATIONS.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `.well-known/agents.json`, `.htaccess`, `.gitignore`, `index.html`, `experiences.html`, `private-charters.html`, `padi-courses.html`, `scuba-diving-tamarindo-faq.html`, `css/styles.css` (en-tête), `js/script.js` (en-tête + table `I18N`), `git log` (historique des commits).

**Mise à jour 2026-07-14** : revérification par grep/lecture directe de `fr/index.html`, `es/index.html`, `fr/scuba-diving-tamarindo-faq.html`, hreflang sur les 3 versions de la home, `.htaccess` (règles de réécriture), `js/script.js` (bloc `gtag_report_conversion`), `sitemap.xml`, `llms.txt` — pas de nouvelle lecture complète des 5 pages EN restantes ni de `robots.txt`, considérés inchangés depuis le 12/07 (à revérifier si une future revue en doute).

Aucune information de ce document ne provient d'une source externe au dépôt. Aucune donnée Search Console/GA4/Ads/Clarity réelle n'était disponible au moment de la mise à jour du 2026-07-14 — les points liés au trafic/conversions réels restent donc basés sur le code, pas sur des métriques observées.
