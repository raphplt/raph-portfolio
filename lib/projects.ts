// Données non traduites des projets : noms, liens, visuels, stacks.
// Les textes traduits vivent dans lib/content.ts et lib/case-studies.ts.

export type Visual = {
  src: string;
  width: number;
  height: number;
};

export type CaseStudySlug = "qoredb" | "pulse" | "tcg-nexus";

export type CaseStudyAsset = {
  slug: CaseStudySlug;
  name: string;
  year: string;
  cover: Visual | null;
  links: { href: string; kind: "site" | "source" }[];
  stack: string[];
  gallery: Visual[];
};

export const caseStudyAssets: Record<CaseStudySlug, CaseStudyAsset> = {
  qoredb: {
    slug: "qoredb",
    name: "QoreDB",
    year: "2026",
    cover: {
      src: "/images/projects/qoredb/query.webp",
      width: 1604,
      height: 1004,
    },
    links: [
      { href: "https://qoredb.com/", kind: "site" },
      { href: "https://github.com/QoreDB/QoreDB", kind: "source" },
    ],
    stack: ["Rust", "Tauri", "React 19", "TypeScript", "SQLx", "DuckDB"],
    gallery: [
      {
        src: "/images/projects/qoredb/query-safety.webp",
        width: 1600,
        height: 1050,
      },
      {
        src: "/images/projects/qoredb/er-diagram.webp",
        width: 1600,
        height: 1050,
      },
    ],
  },
  pulse: {
    slug: "pulse",
    name: "Pulse",
    year: "2024",
    // Produit client : pas de capture publique, la couverture est typographique.
    cover: null,
    links: [],
    stack: [
      "Turborepo",
      "NestJS",
      "Next.js",
      "Expo",
      "Tauri",
      "Symfony",
      "MySQL",
      "Docker",
    ],
    gallery: [],
  },
  "tcg-nexus": {
    slug: "tcg-nexus",
    name: "TCG Nexus",
    year: "2025",
    cover: {
      src: "/images/projects/TCGNexus.png",
      width: 1675,
      height: 1088,
    },
    links: [
      { href: "https://tcg-nexus.org/", kind: "site" },
      { href: "https://github.com/raphplt/tcg-nexus", kind: "source" },
    ],
    stack: [
      "Next.js",
      "NestJS",
      "Expo",
      "FastAPI",
      "OpenCV",
      "PostgreSQL",
      "pgvector",
    ],
    gallery: [
      {
        src: "/images/projects/qoredb/er-diagram.webp",
        width: 1600,
        height: 1050,
      },
    ],
  },
};

export const caseStudyOrder: CaseStudySlug[] = ["qoredb", "pulse", "tcg-nexus"];

export type ShippedSlug = "melios" | "zevent-radar" | "quori";

export type ShippedAsset = {
  slug: ShippedSlug;
  name: string;
  year: string;
  href: string;
  image: Visual;
  stack: string[];
};

export const shippedProjects: ShippedAsset[] = [
  {
    slug: "melios",
    name: "Melios",
    year: "2024",
    href: "https://raphplt.github.io/melios-web/",
    image: { src: "/images/projects/Melios.png", width: 1100, height: 1100 },
    stack: ["React Native", "Expo", "Firebase"],
  },
  {
    slug: "zevent-radar",
    name: "ZEvent Radar",
    year: "2026",
    href: "https://zgoals.xyz/",
    image: {
      src: "/images/projects/ZEventRadar.png",
      width: 1440,
      height: 1220,
    },
    stack: ["React", "Cloudflare Workers", "PWA"],
  },
  {
    slug: "quori",
    name: "Quori",
    year: "2025",
    href: "https://github.com/raphplt/quori",
    image: { src: "/images/projects/Quori.png", width: 2538, height: 1371 },
    stack: ["Next.js", "NestJS", "PostgreSQL"],
  },
];

export type LabSlug = "penfolio" | "myriade" | "clear-mind" | "raphotos";

export type LabAsset = {
  slug: LabSlug;
  name: string;
  year: string;
  href: string;
  image: string;
  tag: string;
};

export const labProjects: LabAsset[] = [
  {
    slug: "penfolio",
    name: "Penfolio",
    year: "2025",
    href: "https://github.com/raphplt/portfolio-maker",
    image: "/images/projects/Penfolio.png",
    tag: "Next.js · NestJS",
  },
  {
    slug: "myriade",
    name: "Myriade",
    year: "2024",
    href: "https://github.com/raphplt/myriade",
    image: "/images/projects/Myriade.png",
    tag: "Python · Search",
  },
  {
    slug: "clear-mind",
    name: "Clear Mind",
    year: "2024",
    href: "https://github.com/raphplt/clear-mind",
    image: "/images/projects/Clear-Mind.png",
    tag: "Extension · JS",
  },
  {
    slug: "raphotos",
    name: "Raphotos",
    year: "2026",
    href: "https://github.com/raphplt/raphotos",
    image: "/images/projects/Raphotos.png",
    tag: "Next.js · Photo",
  },
];

export const SITE_URL = "https://www.raphael-plassart.com";
export const EMAIL = "contact@raphael-plassart.com";
export const GITHUB_URL = "https://github.com/raphplt";
export const LINKEDIN_URL = "https://www.linkedin.com/in/rapha%C3%ABl-plassart/";
export const ATLAS_URL = "https://atlas.raphael-plassart.com";
