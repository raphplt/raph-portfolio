# Portfolio — Raphaël Plassart

Portfolio personnel de Raphaël Plassart, full-stack product engineer et
créateur de [QoreDB](https://github.com/QoreDB/QoreDB).

## Direction

Le site adopte une direction « engineered precision » : composition
éditoriale, interfaces inspirées des outils techniques et animation signature
en SVG/CSS. Il met l’accent sur les preuves, les décisions d’ingénierie et les
produits livrés.

## Stack

- Next.js 16 et React 19
- TypeScript
- CSS natif
- Lucide pour les pictogrammes d’interface
- Image Optimization et métadonnées Open Graph natives de Next.js
- Thèmes clair et sombre persistants
- Internationalisation statique en français, anglais, espagnol et allemand
- Mini-jeu Core Runner et classement global via PostgreSQL

Le rendu principal est statique. Les animations ne nécessitent ni Three.js, ni
runtime d’animation côté client, et respectent `prefers-reduced-motion`.

## Routes

- `/` : français
- `/en` : anglais
- `/es` : espagnol
- `/de` : allemand

Chaque version possède sa langue de document, ses métadonnées, ses liens
`hreflang` et son image Open Graph localisée.

## Classement Core Runner sur Vercel

Le classement utilise les routes API Next.js et une base PostgreSQL. Pour
l’activer sans configuration manuelle :

1. ouvrir le projet dans Vercel ;
2. aller dans **Storage** puis installer **Neon** depuis le Marketplace ;
3. relier la base au projet et redéployer.

L’intégration ajoute automatiquement `DATABASE_URL`. La table et son index sont
créés au premier appel de l’API. `CORE_RUNNER_SECRET` peut être défini
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
