# SEO / GEO — Project Context

Document de référence factuel pour le sous-agent `head-of-seo-geo`. Toute information ci-dessous a été vérifiée par lecture directe des fichiers du dépôt à la date indiquée. Ce qui n'a pas pu être vérifié dans le repo est marqué **« à confirmer »** — jamais inventé.

**Dernière vérification complète : 2026-07-12**, par lecture de : `README.md`, `AMELIORATIONS.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `.well-known/agents.json`, `.htaccess`, `.gitignore`, les 5 pages `.html`, `css/styles.css`, `js/script.js`, et l'historique Git (`git log`).

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

| Fichier | URL canonique | `<title>` | Rôle |
|---|---|---|---|
| `index.html` | `/` | Private Scuba Diving in Tamarindo, Costa Rica \| Salty Horizon | Accueil : hero, about, expériences, Las Catalinas, galerie, équipe, avis, réservation, FAQ courte, contact |
| `experiences.html` | `/experiences.html` | Scuba Diving Experiences in Tamarindo \| Salty Horizon | Détail des 5 expériences + tarifs |
| `padi-courses.html` | `/padi-courses.html` | PADI Courses in Tamarindo, Costa Rica \| Salty Horizon | Cours PADI Open Water ($540) et Advanced Open Water ($500), programme jour par jour |
| `private-charters.html` | `/private-charters.html` | Private Boat Charters in Tamarindo, Costa Rica \| Salty Horizon | Charters privés (scuba, snorkeling, paddle, e-foil, jet ski) |
| `scuba-diving-tamarindo-faq.html` | `/scuba-diving-tamarindo-faq.html` | Scuba Diving in Tamarindo, Costa Rica: FAQ \| Salty Horizon | FAQ de 43 questions, 11 sections (table des matières ancrée) |

Toutes les URLs canoniques/hreflang/sitemap utilisent l'extension `.html` de façon cohérente sur les 5 pages (vérifié par grep sur les 5 fichiers + `sitemap.xml`).

**Tarifs affichés** (cohérents entre `index.html`, `experiences.html`, `padi-courses.html`, `llms.txt` et le JSON-LD) :
- Intro to Scuba (Pool) : dès $80
- Discover Scuba Diving : dès $170
- Fun Dive Las Catalinas : dès $130
- Fun Dive Bat Islands : sur devis (« Contact us »)
- Snorkeling privé : dès $80
- PADI Open Water Diver : dès $540 (3 jours)
- PADI Advanced Open Water Diver : dès $500 (2-3 jours selon la FAQ)

## 4. Métadonnées & schéma structuré (JSON-LD)

Présent sur **toutes** les pages : `<meta name="robots" content="index, follow">`, canonical, hreflang (`en`/`fr`/`es`/`x-default`, tous auto-référencés vers la même URL — voir section 5), Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image` + `width`/`height`), `twitter:card=summary_large_image`.

| Page | Types JSON-LD présents |
|---|---|
| `index.html` | `SportsActivityLocation` (`@id=#business`, avec `review[]`, pas d'`aggregateRating`), `FAQPage` (5 Q/R), `Person` ×2 (`@id=#camille`, `@id=#julien`) |
| `experiences.html` | `WebPage`, `BreadcrumbList` |
| `padi-courses.html` | `Course` ×2 (Open Water avec `timeRequired:"P3D"`, Advanced Open Water sans `timeRequired`), chacun avec `provider` → `@id=#business` et `instructor` → `@id=#camille`/`#julien`, `Offer` (prix+devise), `BreadcrumbList` |
| `private-charters.html` | `WebPage`, `BreadcrumbList` |
| `scuba-diving-tamarindo-faq.html` | `WebPage`, `BreadcrumbList`, `FAQPage` (43 Q/R) |

Les entités `#business`, `#camille`, `#julien` sont **partagées par référence `@id`** entre pages (pas de duplication d'entité) — confirmé sur `padi-courses.html`.

## 5. Internationalisation

- `<html lang="en">` sur toutes les pages ; contenu visible **en anglais dans le HTML brut**.
- FR/ES sont appliqués **côté client par JavaScript** (`applyLang()` dans `js/script.js`, système `I18N` avec clés `data-i18n`/`data-i18n-content`/`data-i18n-ph`).
- Une seule URL par page pour les 3 langues (pas de `/fr/`, `/es/`). hreflang `en`/`fr`/`es`/`x-default` pointent tous vers la même URL — auto-référencement, pas de véritables pages alternatives.
- Conséquence vérifiée dans le code : un robot qui n'exécute pas JS (et la plupart des indexeurs classiques) ne voit que la version anglaise.
- Le `<title>` et le `<meta name="description">` sont mis à jour dynamiquement au changement de langue via `data-i18n`/`data-i18n-content` sur ces balises (clés `meta.*` par page, dans les 3 langues) — donc le premier rendu HTML est anglais, mais après un changement de langue côté client, l'onglet/la meta changent aussi.
- C'est un choix assumé (documenté dans `README.md`), pas un oubli.

## 6. GEO / AEO (référencement pour moteurs IA)

- `robots.txt` autorise explicitement : `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `PerplexityBot`, `Bytespider`, `CCBot`, en plus de `User-agent: *`.
- `.well-known/agents.json` : fiche de découverte (nom, description, url, `capabilities: ["contact","booking"]`, contact).
- `llms.txt` : résumé de l'entreprise + liste des 5 pages avec description + faits clés (localisation, contact, langues, sites de plongée).
- Entités JSON-LD reliées entre pages via `@id` partagés (section 4) — aide un LLM/crawler à comprendre qu'il s'agit de la même entité business/personnes sur tout le site.
- `FAQPage` présent sur `index.html` (5 Q/R) et sur la page FAQ dédiée (43 Q/R) — format que les moteurs génératifs et les featured snippets exploitent directement.

## 7. Conventions du dépôt (constatées dans le code/l'historique Git)

- **Cache-busting** : paramètre `?v=N` sur les liens CSS/JS/certaines images. État actuel confirmé identique sur les 5 pages : `css/styles.css?v=28`, `js/script.js?v=22`. D'après l'historique Git, ce numéro est incrémenté juste avant un push vers `main` (commits dédiés « Bump cache-busting versions… »).
- **Images** : servies localement (plus de dépendance Wix), `width`/`height` explicites, `loading="lazy"` sous la ligne de flottaison, `fetchpriority="high"` + `<picture>`/`srcset` sur l'image LCP de chaque page.
- **`.htaccess`** : force `https+www` en un seul redirect, compression gzip, cache navigateur (images 1 an, CSS/JS 1 mois), en-têtes de sécurité de base (`X-Content-Type-Options`, `Referrer-Policy`, HSTS).
- **Sécurité de contenu** : le contenu textuel reste visible si le JS ne charge pas (traductions appliquées par-dessus un HTML anglais déjà complet).
- **Réservation** : formulaire → lien WhatsApp pré-rempli (pas de backend). Numéro défini une seule fois (`WA_PHONE` dans `js/script.js`).

## 8. Incohérences et écarts constatés

Corrigés le 2026-07-12 (détails et raisonnement dans `SEO_AUDIT_LOG.md`) :

1. ~~`aggregateRating` absent~~ → ajouté dans `index.html` (5★, 9 avis, chiffres fournis par l'utilisateur). Valeur instantanée à remettre à jour périodiquement.
2. ~~4 images sans `loading="lazy"`~~ → corrigé pour `about.jpg` (index), `camcourse.jpg` et `discover.jpg` (padi-courses). Cas à part : `charter-sunset.jpg` (private-charters) s'est avéré être probablement l'élément LCP de sa page (pas d'image de fond sur son `pagehero`) et non un candidat au lazy-loading — il a reçu `preload`+`fetchpriority="high"` à la place, comme sur les autres pages.
3. **`hasCourseInstance`/`timeRequired` (Advanced Open Water)** — décision documentée de ne pas les ajouter : `hasCourseInstance` suppose des séances programmées à date fixe, ce qui ne correspond pas à un cours privé à la demande ; `timeRequired` attend une durée unique et la FAQ indique une plage (« 2 à 3 jours »). Voir `SEO_AUDIT_LOG.md`.

Encore ouverts (nécessitent une donnée ou une décision de l'utilisateur — voir backlog dans `AMELIORATIONS.md`) :

4. **hreflang non résolutif** : les balises `hreflang="fr"`/`"es"` pointent vers une URL dont le HTML brut est en anglais (voir section 5). Choix assumé, mais écart connu entre la promesse hreflang et le contenu brut réellement servi à un crawler.
5. **`private-charters.html` nettement plus courte** que les 4 autres pages (une intro + 3 cartes courtes, pas de détails bateau/capacité/itinéraire/tarif indicatif) — confirmé par lecture complète du fichier.
6. **FR/ES restent invisibles au premier rendu HTML** pour tout crawler n'exécutant pas JavaScript (voir section 5) — seul le `<title>`/meta se met à jour après un changement de langue côté client ; le corps de page reste anglais dans le HTML brut quoi qu'il arrive.

*Remarque de fiabilité : un audit SEO/GEO antérieur avait été consigné uniquement dans la mémoire de session de Claude (hors dépôt). En comparant cette mémoire à l'état réel actuel des fichiers, deux écarts ont été trouvés : une date de commit citée comme "2026-07-13" qui n'existe pas dans l'historique Git réel (le commit correspondant, `6d7e1d7`, est daté du 2026-07-10), et un point classé "encore ouvert" (URLs canoniques soi-disant sans extension `.html`) qui s'est révélé faux — toutes les URLs vérifiées utilisent bien `.html`. D'où l'intérêt de ce fichier versionné dans le dépôt plutôt qu'une mémoire d'agent invisible et non diffable.*

## 9. Sources

Fichiers lus intégralement ou en grande partie pour produire ce document : `README.md`, `AMELIORATIONS.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `.well-known/agents.json`, `.htaccess`, `.gitignore`, `index.html`, `experiences.html`, `private-charters.html`, `padi-courses.html`, `scuba-diving-tamarindo-faq.html`, `css/styles.css` (en-tête), `js/script.js` (en-tête + table `I18N`), `git log` (historique des commits).

Aucune information de ce document ne provient d'une source externe au dépôt.
