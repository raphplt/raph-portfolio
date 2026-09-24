# Portfolio Raphaël Plassart

Portfolio personnel de Raphaël Plassart, full-stack product engineer et
créateur de [QoreDB](https://github.com/QoreDB/QoreDB).

## Direction

Le site suit une direction « éditorial brutaliste » : typographie condensée
très large, grille de composition visible, grain, accent unique orange et
contrepoint serif italique. Les animations sont orchestrées avec Motion et un
défilement lissé par Lenis, et respectent toutes `prefers-reduced-motion`.

Pièces signature, volontairement peu nombreuses :

- champ ASCII en canvas qui respire et se creuse sous le curseur ;
- mini-jeu Core Runner jouable depuis le Labo ;
- surlignage des mots-clés à l'entrée du texte d'approche dans le viewport ;
- visuels du Labo en bichromie orange, en couleur au survol ;
- entrées du hero et des études de cas en CSS pur, sans attendre le JS.

## Stack

- Next.js 16 et React 19
- TypeScript
- CSS natif, écrit à la main (aucun framework utilitaire)
- Motion pour l'orchestration, Lenis pour le défilement
- Archivo (variable, axe de chasse), Instrument Serif et Geist Mono
- Lucide pour les pictogrammes d'interface
- Image Optimization et métadonnées Open Graph natives de Next.js
- Thèmes clair et sombre persistants
- Internationalisation statique en français, anglais, espagnol et allemand
- Mini-jeu Core Runner et classement global via PostgreSQL

Le rendu principal reste statique.

## Architecture

| Fichier | Rôle |
| --- | --- |
| `lib/content.ts` | Contenu de l'accueil, typé, dans les quatre langues |
| `lib/case-studies.ts` | Études de cas (QoreDB, Pulse, TCG Nexus), dans les quatre langues |
| `lib/projects.ts` | Données non traduites : liens, visuels, stacks |
| `lib/rich-text.tsx` | Rendu des segments `*accentués*` (serif italique) et `**gras**` |
| `lib/fonts.ts` | Chargement des trois familles et variables CSS |
| `lib/theme.ts` | Script d'amorçage (thème, mouvement) et repli sans JS |
| `components/chrome.tsx` | Grain, grille et défilement Lenis |
| `components/anim.tsx` | Primitives : révélation, titre masqué, compteur, bandeau, parallaxe |
| `components/ascii-field.tsx` | Champ ASCII en canvas 2D |
| `components/portfolio-page.tsx` | Composition de l'accueil (composant serveur) |
| `components/case-study-page.tsx` | Gabarit des études de cas |

## Routes

- `/` : français
- `/en` : anglais
- `/es` : espagnol
- `/de` : allemand
- `/projets/[slug]` : études de cas en français
- `/[locale]/projects/[slug]` : études de cas dans les autres langues

Chaque version possède sa langue de document, ses métadonnées, ses liens
`hreflang` et son image Open Graph localisée.

## Classement Core Runner sur Vercel

Le classement utilise les routes API Next.js et une base PostgreSQL. Pour
l'activer sans configuration manuelle :

1. ouvrir le projet dans Vercel ;
2. aller dans **Storage** puis installer **Neon** depuis le Marketplace ;
3. relier la base au projet et redéployer.

L'intégration ajoute automatiquement `DATABASE_URL`. La table et son index sont
créés au premier appel de l'API. `CORE_RUNNER_SECRET` peut être défini
séparément, mais reste facultatif.

## Développement

```bash
npm install
npm run dev
```

Vérifications :

```bash
npm run typecheck
npm run lint
npm run build
```
