# Portfolio — Raphaël Plassart

Portfolio personnel de Raphaël Plassart, full-stack product engineer et
créateur de [QoreDB](https://github.com/QoreDB/QoreDB).

## Direction

Le site suit une direction « éditorial brutaliste » : typographie condensée
très large, grille de composition visible, grain, accent unique orange et
contrepoint serif italique. Les animations sont orchestrées avec Motion et un
défilement lissé par Lenis, et respectent toutes `prefers-reduced-motion`.

Pièces signature :

- rideau d'ouverture chiffré, joué une seule fois par session ;
- champ ASCII en canvas qui respire et se creuse sous le curseur ;
- curseur personnalisé à trois états (repos, lien, étiquette) ;
- bandeau défilant dont la vitesse et le sens suivent le défilement ;
- aperçu de projet qui suit le curseur sur la liste des réalisations ;
- surlignage des mots-clés à l'entrée du manifeste dans le viewport ;
- compteurs animés et révélations en cascade.

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
| `lib/content.ts` | Tout le contenu éditorial, typé, dans les quatre langues |
| `lib/rich-text.tsx` | Rendu des segments `*accentués*` en serif italique |
| `lib/fonts.ts` | Chargement des trois familles et variables CSS |
| `lib/theme.ts` | Script d'amorçage (thème, mouvement, rideau) et repli sans JS |
| `components/chrome.tsx` | Grain, grille, curseur, rideau, Lenis, contexte « prêt » |
| `components/anim.tsx` | Primitives : révélation, titre masqué, compteur, bandeau, parallaxe |
| `components/ascii-field.tsx` | Champ ASCII en canvas 2D |
| `components/portfolio-page.tsx` | Composition de la page (composant serveur) |

## Routes

- `/` : français
- `/en` : anglais
- `/es` : espagnol
- `/de` : allemand

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
