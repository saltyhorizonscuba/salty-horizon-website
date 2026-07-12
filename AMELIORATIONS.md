# Chantiers possibles

Idées et pistes d'amélioration identifiées mais volontairement mises de côté pour plus tard. Pas de travail engagé tant qu'un point n'est pas explicitement relancé.

---

## Images en WebP/AVIF ("Improve image delivery")

**Constat** : l'audit performance (Hostinger/PageSpeed) score 0/100 sur "Improve image delivery" car le site sert uniquement du JPEG. Un format moderne (WebP, voire AVIF) au même niveau de qualité produit des fichiers ~25-40% plus légers — **ce n'est pas un compromis sur la qualité**, juste un meilleur codec. Les JPEG restent en fallback (compat vieux navigateurs + aperçus réseaux sociaux via `og:image`).

**Ce que ça impliquerait** :
- Générer une version `.webp` de chaque photo du site (~25 fichiers uniques), à la même qualité perçue que les JPEG actuels (convention q84-88).
- Remplacer chaque `<img>` par `<picture><source type="image/webp">…<img fallback jpg></picture>` sur les 5 pages (~30 occurrences).
- Garder les JPEG tels quels pour `og:image` (compatibilité réseaux sociaux).

**Bloquant actuel** : aucun outil de conversion WebP disponible sur la machine de travail (pas de `cwebp`, ImageMagick, node ou python installés). Deux options à trancher le moment venu :
1. Installer un outil de conversion en local et je fais la conversion + le balisage.
2. Vérifier d'abord si Hostinger propose déjà une optimisation/conversion d'images automatique côté serveur (certains hébergeurs le font au niveau CDN, ce qui réglerait le point sans travail de notre côté).

**Verdict** : vaut le coup sur le principe (gain réel, zéro impact sur la qualité visuelle), mais plus lourd que les fixes précédents. À relancer quand prêt.

---

*(Nouvelles idées à ajouter ici au fil des discussions.)*
