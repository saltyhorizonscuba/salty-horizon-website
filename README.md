# Salty Horizon — site web

Site web codé à la main (HTML/CSS/JS, sans framework ni générateur), responsive, optimisé. Actuellement statique, mais la stack est amenée à évoluer (backend, build) à mesure du projet.

## ⚠️ Instructions pour Claude Code / toute instance Claude

Ces règles s'appliquent à **toute session Claude Code** travaillant sur ce dépôt, quelle que soit la conversation qui l'a ouverte.

- **Interdiction absolue de pousser, merger ou déployer sur `main` sans autorisation explicite de l'administrateur.** `main` est la branche de **production** : elle est servie en ligne sur notre propre serveur, hébergé chez **Hostinger**, via déploiement Git (hPanel) branché sur cette branche. Toute mise à jour du site en ligne passe par `main`.
- Le travail courant (features, corrections, réorganisation) se fait sur `dev` ou une branche dédiée, jamais directement sur `main`.
- **Avant tout push vers `dev` (ou toute branche partagée), demander confirmation explicite à l'admin sur les modifications**, même si le travail semble prêt et testé. Le commit local ne pose pas de problème ; c'est le push qui doit être validé.
- Avant tout push vers `main`, toute création/fermeture de pull request vers `main`, ou tout déploiement, **demander confirmation explicite à l'admin**, même si le travail semble prêt et testé.
- Cette règle vaut aussi pour les actions irréversibles ou à fort impact : force push, suppression de branche, réécriture d'historique, modification de la config d'hébergement/domaine.
- Dépôt GitHub : `github.com/saltyhorizonscuba/salty-horizon-website`. Branches : `main` (prod, protégée par cette règle), `dev` (travail courant).
- Stack actuelle : code fait à la main (pas de build, pas de framework, pas de dépendances npm) — toute modification est directement visible en rechargeant les fichiers HTML. Ça n'est pas garanti de le rester : ne pas supposer que le site restera statique.

## Contenu du dossier
- `index.html` — page d'accueil immersive (hero, à propos, expériences, Las Catalinas, galerie, équipe, avis, réservation, contact)
- `experiences.html` — détail des expériences + tarifs
- `private-charters.html` — charters privés
- `css/styles.css` — tout le design (identité océan/sable) + responsive
- `js/script.js` — trilingue EN/FR/ES, galerie lightbox, carrousel d'avis, réservation → WhatsApp, animations
- `images/` — toutes les photos, **en local et optimisées** (plus aucune dépendance à Wix)
- `docs/DSD-Medical-Statement.pdf` — déclaration médicale du participant DSD
- `favicon.png` / `favicon.svg` — icône d'onglet
- `sitemap.xml` + `robots.txt` — pour le référencement Google

## Aperçu
Ouvre `index.html` dans un navigateur (double-clic). **Garde tout le dossier** (y compris `images/`) tel quel — les fichiers se référencent entre eux.

## Fonctionnalités
- **Trilingue EN/FR/ES** : sélecteur en haut à droite, mémorise la langue choisie.
- **Réservation → WhatsApp** : le formulaire ouvre WhatsApp (+506 8775 9641) avec un message pré-rempli (expérience, date, nb de personnes, nom, message). Aucun backend requis.
- **Galerie** : clic sur une photo = agrandissement (flèches / Échap au clavier).
- **Animations** : apparition au défilement, hero parallax, carrousel d'avis, en-tête qui se condense.

## Optimisations en place
- **Responsive** ordinateur + mobile (menu hamburger, grilles adaptatives 3→2→1 colonnes).
- **Images optimisées** (~3,3 Mo au total) ; le hero utilise `srcset` (version légère servie sur mobile).
- **Chargement différé** (`loading="lazy"`) des images sous la ligne de flottaison.
- **Filet de sécurité** : le contenu s'affiche même si le JavaScript ne se charge pas.
- **SEO technique** : titres + meta optimisés, Open Graph, données structurées (LocalBusiness / SportsActivityLocation), HTML sémantique, textes alternatifs, favicon, sitemap, robots.

## Bon à savoir — SEO multilingue
Les traductions FR/ES sont appliquées par JavaScript sur **une seule URL**. Google indexe donc la version **anglaise**. C'est un choix volontaire (simple à gérer, parfait pour l'expérience visiteur et pour Google Ads). Pour être référencé séparément en français/espagnol, il faudrait un jour des pages dédiées `/fr/` et `/es/` — pas nécessaire pour démarrer.

## À personnaliser avant / après la mise en ligne
1. **Domaine** : mettre à jour l'adresse `saltyhorizondiving.com` dans les balises `canonical`, `og:url`, `og:image`, dans `sitemap.xml` et `robots.txt` avec ton domaine final.
2. **Numéro WhatsApp** : `+506 8775 9641`, défini dans `js/script.js` (`WA_PHONE`) et les liens `wa.me/50687759641`.
3. **Avis clients** : 4 témoignages d'exemple (sauf le premier, réel). À remplacer par de vrais avis Google au fil du temps.
4. **Tarifs** : Initiation piscine 80 $, Discover Scuba 170 $, Fun Dive Catalinas 130 $, Bat Islands 350 $, Snorkeling 80 $ — vérifie qu'ils sont à jour.

## Hébergement
Le site tourne sur notre propre serveur, chez **Hostinger**. Le déploiement se fait via la fonctionnalité Git de hPanel, connectée à la branche `main` de ce dépôt : chaque mise à jour de `main` est déployée en production (auto-déploiement si activé côté hPanel, sinon déploiement manuel depuis hPanel).

Les options d'hébergement gratuit (Netlify, Vercel, GitHub Pages) ne sont plus d'actualité pour ce projet.
