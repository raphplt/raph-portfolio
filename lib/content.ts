import type { LabSlug, ShippedSlug } from "@/lib/projects";

export const locales = ["fr", "en", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
};

type Card = {
  title: string;
  text: string;
};

type ProjectCopy = {
  type: string;
  description: string;
  proof: string;
};

export type Job = {
  period: string;
  company: string;
  place: string;
  role: string;
  points: string[];
  stack: string;
  caseStudy?: "pulse";
};

type Degree = {
  period: string;
  title: string;
  school: string;
};

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  aria: {
    skip: string;
    top: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    github: string;
    language: string;
    theme: string;
    qoreImage: string;
    qoreTech: string;
    discover: string;
    projectPreview: string;
  };
  game: {
    title: string;
    subtitle: string;
    intro: string;
    start: string;
    close: string;
    pause: string;
    resume: string;
    score: string;
    best: string;
    lives: string;
    gameOver: string;
    finalScore: string;
    replay: string;
    controls: string;
    objective: string;
    leaderboard: string;
    emptyLeaderboard: string;
    nickname: string;
    nicknamePlaceholder: string;
    saveScore: string;
    scoreSaved: string;
    closeLeaderboard: string;
    leaderboardUnavailable: string;
    savingScore: string;
    saveScoreError: string;
  };
  nav: {
    work: string;
    experience: string;
    skills: string;
    approach: string;
    lab: string;
    contact: string;
  };
  hero: {
    lines: [string, string, string];
    role: string;
    base: string;
    lead: string;
    ctaWork: string;
    ctaContact: string;
    cv: string;
    statusLabel: string;
    status: string;
    lookingLabel: string;
    looking: string;
  };
  work: {
    label: string;
    title: string;
    lead: string;
    featured: {
      kicker: string;
      status: string;
      tagline: string;
      challengeLabel: string;
      challenge: string;
      buildLabel: string;
      build: [string, string, string];
      metricLabel: string;
      metricValue: string;
      metricCaption: string;
    };
    visit: string;
    source: string;
    readCase: string;
    casesLabel: string;
    cases: Record<"pulse" | "tcg-nexus", { type: string; description: string }>;
    shippedLabel: string;
    shipped: Record<ShippedSlug, ProjectCopy>;
    archiveText: string;
    archiveLink: string;
  };
  experience: {
    label: string;
    title: string;
    lead: string;
    jobs: Job[];
    readCase: string;
    educationLabel: string;
    education: Degree[];
    cv: string;
  };
  skills: {
    label: string;
    title: string;
    lead: string;
    items: [Card, Card, Card, Card];
  };
  approach: {
    label: string;
    title: string;
    paragraphs: [string, string, string];
    quote: string;
    principles: [Card, Card, Card];
  };
  lab: {
    label: string;
    title: string;
    lead: string;
    gameKicker: string;
    gameText: string;
    gamePlay: string;
    items: Record<LabSlug, string>;
  };
  contact: {
    label: string;
    lines: [string, string, string];
    lead: string;
    emailLabel: string;
    cvLabel: string;
    locationLabel: string;
    location: string;
    statusLabel: string;
    availability: string;
    atlas: { label: string; text: string; cta: string };
  };
  footer: {
    note: string;
    rights: string;
    top: string;
    legal: string;
    privacy: string;
  };
  caseStudy: {
    back: string;
    kicker: string;
    role: string;
    period: string;
    team: string;
    stack: string;
    visit: string;
    source: string;
    next: string;
    privateNote: string;
    contactTitle: string;
    contactText: string;
    contactCta: string;
  };
};

export const skillStacks = [
  "React · Next.js · TypeScript · Tailwind · Motion",
  "React Native · Expo · EAS · Play Store",
  "Rust · Tauri · SQLx · Linux",
  "NestJS · Node.js · Symfony · PostgreSQL · MySQL · Redis · Docker",
] as const;

const fr: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Développeur full-stack à Paris, trois ans en startup. J’ai mené Pulse, un SaaS B2B, du POC à la production, et je construis QoreDB, un client de bases de données open source en Rust. Disponible en novembre 2026.",
    ogDescription:
      "Je construis les outils que je voulais utiliser. Web, mobile, desktop, infrastructure.",
  },
  aria: {
    skip: "Aller au contenu",
    top: "Retour en haut",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    github: "Profil GitHub de Raphaël",
    language: "Choisir la langue",
    theme: "Changer de thème",
    qoreImage: "Éditeur SQL et grille de résultats dans QoreDB",
    qoreTech: "Technologies QoreDB",
    discover: "Découvrir",
    projectPreview: "Aperçu du projet",
  },
  game: {
    title: "RP / CORE RUNNER",
    subtitle: "Transmission arcade interceptée",
    intro:
      "Récupère les noyaux orange, évite les météores et tiens le plus longtemps possible.",
    start: "Lancer la mission",
    close: "Quitter le jeu",
    pause: "Mettre en pause",
    resume: "Reprendre",
    score: "Score",
    best: "Record",
    lives: "Vies",
    gameOver: "Signal perdu",
    finalScore: "Score final",
    replay: "Rejouer",
    controls: "← → / A D / glisser",
    objective: "Noyau +100 · Météore −1 vie",
    leaderboard: "Classement",
    emptyLeaderboard: "Aucun score enregistré",
    nickname: "Ton pseudo (facultatif)",
    nicknamePlaceholder: "PILOTE",
    saveScore: "Enregistrer",
    scoreSaved: "Score enregistré",
    closeLeaderboard: "Fermer le classement",
    leaderboardUnavailable: "Classement momentanément indisponible",
    savingScore: "Enregistrement…",
    saveScoreError: "Impossible d’enregistrer ce score",
  },
  nav: {
    work: "Projets",
    experience: "Parcours",
    skills: "Savoir-faire",
    approach: "Approche",
    lab: "Labo",
    contact: "Contact",
  },
  hero: {
    lines: ["JE CONSTRUIS", "LES OUTILS *que*", "*je voulais* UTILISER."],
    role: "Full-stack product engineer",
    base: "Paris · remote possible",
    lead: "Développeur full-stack, trois ans en startup. J’ai mené **Pulse**, un SaaS B2B, du POC à la production, et je construis **QoreDB**, un client de bases de données open source en Rust.",
    ctaWork: "Voir les projets",
    ctaContact: "Me contacter",
    cv: "Télécharger le CV",
    statusLabel: "Disponibilité",
    status: "Novembre 2026",
    lookingLabel: "Je cherche",
    looking: "Mon prochain poste, dans une équipe produit",
  },
  work: {
    label: "Projets",
    title: "Du code qui a fini par servir à quelqu’un.",
    lead: "Une sélection courte. Chacun de ces produits est allé jusqu’en production, avec des utilisateurs et des tickets à traiter.",
    featured: {
      kicker: "Fondateur · produit · ingénierie",
      status: "Open source · actif",
      tagline:
        "Un client de bases de données local-first qui réunit SQL et NoSQL dans la même fenêtre.",
      challengeLabel: "Le problème",
      challenge:
        "Les outils existants sont puissants et pénibles. La difficulté, c’était de rendre le mien confortable sans le rendre bête : les gens qui ouvrent un client SQL savent ce qu’ils font.",
      buildLabel: "Ce que j’ai construit",
      build: [
        "Un cœur Rust et une coquille Tauri : 34 bases de données derrière une seule interface",
        "Des identifiants dans le trousseau du système et des garde-fous explicites sur les bases de production",
        "Un éditeur de requêtes rapide, avec l’autocomplétion branchée sur le schéma réel",
      ],
      metricLabel: "Aujourd’hui",
      metricValue: "15 000+",
      metricCaption: "téléchargements en huit mois",
    },
    visit: "Voir le site",
    source: "Voir le code",
    readCase: "Lire l’étude de cas",
    casesLabel: "Études de cas",
    cases: {
      pulse: {
        type: "SaaS B2B · Tkorp",
        description:
          "Une plateforme de gestion de flottes de casques VR, menée du POC à la V1 en production, puis reprise entièrement après une réorganisation de l’équipe.",
      },
      "tcg-nexus": {
        type: "Web & mobile · Lead technique",
        description:
          "Une plateforme pour les joueurs de Pokémon TCG : marketplace, tournois, collections, decks et scan de cartes depuis le mobile.",
      },
    },
    shippedLabel: "Autres produits livrés",
    shipped: {
      melios: {
        type: "Mobile · Cofondateur",
        description:
          "Une application de développement personnel gamifiée, incubée à l’ESSEC et publiée sur l’App Store et le Play Store.",
        proof: "150+ bêta-testeurs",
      },
      "zevent-radar": {
        type: "Web · Temps réel",
        description:
          "Le second écran du ZEvent : cagnottes en direct, donation goals à portée et alertes quand un palier approche. Tenu pendant les 77 heures de l’édition.",
        proof: "Cloudflare Workers",
      },
      quori: {
        type: "SaaS · Full-stack",
        description:
          "Votre activité GitHub transformée en publications LinkedIn présentables. Rédaction, édition, planification.",
        proof: "NestJS · Redis",
      },
    },
    archiveText:
      "Et une soixantaine d’autres dépôts : moteurs de recherche, extensions, jeux, APIs et expérimentations abandonnées avec dignité.",
    archiveLink: "Ouvrir l’archive GitHub",
  },
  experience: {
    label: "Parcours",
    title: "Trois ans en startup, du POC à la production.",
    lead: "En alternance avec l’ETNA, dans des équipes où l’on m’a confié des produits entiers plutôt que des tickets isolés.",
    jobs: [
      {
        period: "Janv. 2024 — aujourd’hui",
        company: "Tkorp",
        place: "Clichy",
        role: "Développeur full-stack, mobile & desktop",
        points: [
          "Conception et développement de Pulse, plateforme SaaS B2B de gestion de flottes de casques VR, du POC à la V1 en production.",
          "Reprise de toute la plateforme après une réorganisation de l’équipe : architecture, back, front, mobile et déploiement.",
          "Application mobile publiée sur le Play Store ; plateforme adoptée par plusieurs clients, avec plus de 50 utilisateurs réguliers.",
        ],
        stack: "Turborepo · NestJS · Next.js · Expo · Tauri · MySQL · Docker",
        caseStudy: "pulse",
      },
      {
        period: "Mars 2023 — janv. 2024",
        company: "Mes Allocs",
        place: "Paris",
        role: "Développeur full-stack",
        points: [
          "Maintenance et modernisation du back-office de gestion des aides : plus de 1 800 aides, un million d’utilisateurs par an.",
          "API Express.js et MongoDB, tests unitaires et automatisation.",
          "Sites internationaux (Italie, Espagne, Portugal) en Nuxt.js et WordPress, dans une équipe de quatre développeurs avec un prestataire externe.",
        ],
        stack: "Express.js · MongoDB · Nuxt.js · WordPress",
      },
    ],
    readCase: "Étude de cas Pulse",
    educationLabel: "Formation",
    education: [
      {
        period: "2025 — 2026",
        title: "Master of Science, architecte de systèmes d’information",
        school: "ETNA · Ivry-sur-Seine",
      },
      {
        period: "2022 — 2025",
        title: "Bachelor, concepteur de projets SI",
        school: "ETNA · Ivry-sur-Seine",
      },
    ],
    cv: "Télécharger le CV",
  },
  skills: {
    label: "Savoir-faire",
    title: "Full-stack, au sens propre.",
    lead: "Web, mobile, desktop, back-end : j’ai livré sur les quatre, ce qui me permet de suivre une fonctionnalité de l’interface jusqu’à la base de données.",
    items: [
      {
        title: "Interfaces",
        text: "Le pixel compte, mais un écran qui répond tout de suite compte plus. C’est aussi la première chose qu’on sacrifie quand le planning se resserre.",
      },
      {
        title: "Mobile",
        text: "De l’idée au store. Le code est la partie facile ; ce sont les certificats, les revues et les captures d’écran qui font traîner une sortie. Je fais aussi cette partie-là.",
      },
      {
        title: "Desktop & systèmes",
        text: "Rust quand la performance compte vraiment : des binaires natifs, un démarrage instantané, et de la mémoire qui reste raisonnable.",
      },
      {
        title: "Backend & production",
        text: "Des API, des données, des pipelines. Et des logs qui servent à quelque chose le jour où ça casse.",
      },
    ],
  },
  approach: {
    label: "Approche",
    title: "Je n’ai jamais su m’arrêter à « ça marche ».",
    paragraphs: [
      "La plupart des logiciels que j’utilise tous les jours sont corrects. Rarement mieux. Pendant des années, j’ai supposé que quelqu’un finirait par s’en occuper.",
      "QoreDB est né d’un agacement précis : un client de base de données lent, hostile, et qui me laissait vider une table de production sans jamais me demander si j’étais sûr. Depuis, le compteur de téléchargements m’a confirmé que **l’agacement était partagé**.",
      "C’est à peu près comme ça que je travaille : je pars d’une gêne concrète et je remonte jusqu’à la cause. Ça me prend plus de temps que prévu, presque à chaque fois.",
    ],
    quote:
      "La moitié du travail commence le jour où quelqu’un d’autre l’installe.",
    principles: [
      {
        title: "Penser système",
        text: "L’interface, l’architecture et l’infra racontent le même produit. Quand je les traite séparément, je le paie plus tard.",
      },
      {
        title: "Construire pour le réel",
        text: "Les erreurs, les cas limites et la sécurité sont dans le produit dès le premier jour. Les ajouter à la fin coûte toujours plus cher.",
      },
      {
        title: "Polir l’essentiel",
        text: "Les détails qui comptent sont ceux que personne ne remarque : un état de chargement, un message d’erreur clair, un raccourci clavier qui tombe juste.",
      },
    ],
  },
  lab: {
    label: "Labo",
    title: "Le reste du temps.",
    lead: "Ce que je construis quand personne ne l’a demandé. Certains ont trouvé leurs utilisateurs, les autres m’ont appris quelque chose.",
    gameKicker: "Pièce jouable",
    gameText:
      "Un arcade en canvas, écrit pour le plaisir. Le classement est en PostgreSQL, parce qu’il fallait bien une excuse pour brancher une base.",
    gamePlay: "Lancer le jeu",
    items: {
      penfolio:
        "Un générateur de portfolios qui agrège GitHub, LinkedIn et Behance. 200 portfolios créés.",
      myriade: "Un moteur de recherche expérimental, écrit en Python.",
      "clear-mind":
        "Une extension navigateur qui bloque les sites distrayants et compte le temps regagné.",
      raphotos:
        "Mon site de photographie. Le seul projet où le sujet n’est pas du code.",
    },
  },
  contact: {
    label: "Contact",
    lines: [
      "VOTRE ÉQUIPE CONSTRUIT",
      "UN PRODUIT *exigeant* ?",
      "PARLONS-EN.",
    ],
    lead: "Je cherche mon prochain poste à partir de novembre 2026 : une équipe produit, des sujets qu’on me laisse traiter en entier, et des gens prêts à refaire une fois qu’on a compris le problème.",
    emailLabel: "Écrivez-moi",
    cvLabel: "Curriculum vitae",
    locationLabel: "Basé à",
    location: "Paris · remote possible",
    statusLabel: "Disponibilité",
    availability: "À partir de novembre 2026",
    atlas: {
      label: "Côté freelance",
      text: "Un site pour votre activité ? C’est le rôle d’*Atlas*, mon studio freelance : des sites rapides et bien référencés pour les artisans, les TPE et les indépendants.",
      cta: "Découvrir Atlas",
    },
  },
  footer: {
    note: "Conçu et développé à Paris.",
    rights: "Tous droits réservés",
    top: "Haut de page",
    legal: "Mentions légales",
    privacy: "Confidentialité",
  },
  caseStudy: {
    back: "Tous les projets",
    kicker: "Étude de cas",
    role: "Rôle",
    period: "Période",
    team: "Équipe",
    stack: "Stack",
    visit: "Voir le site",
    source: "Voir le code",
    next: "Étude suivante",
    privateNote:
      "Produit client : le code n’est pas public.",
    contactTitle: "Un poste qui ressemble à ça ?",
    contactText:
      "Je suis disponible à partir de novembre 2026. Le plus simple est de m’écrire.",
    contactCta: "M’écrire",
  },
};

const en: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Full-stack developer in Paris, three years in startups. I took Pulse, a B2B SaaS, from proof of concept to production, and I build QoreDB, an open-source database client in Rust. Available from November 2026.",
    ogDescription:
      "I build the tools I wanted to use. Web, mobile, desktop, infrastructure.",
  },
  aria: {
    skip: "Skip to content",
    top: "Back to top",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    github: "Raphaël's GitHub profile",
    language: "Choose language",
    theme: "Change theme",
    qoreImage: "SQL editor and result grid in QoreDB",
    qoreTech: "QoreDB technologies",
    discover: "Discover",
    projectPreview: "Project preview",
  },
  game: {
    title: "RP / CORE RUNNER",
    subtitle: "Arcade transmission intercepted",
    intro:
      "Collect the orange cores, dodge meteors and survive as long as possible.",
    start: "Launch mission",
    close: "Quit game",
    pause: "Pause",
    resume: "Resume",
    score: "Score",
    best: "Best",
    lives: "Lives",
    gameOver: "Signal lost",
    finalScore: "Final score",
    replay: "Play again",
    controls: "← → / A D / drag",
    objective: "Core +100 · Meteor −1 life",
    leaderboard: "Leaderboard",
    emptyLeaderboard: "No saved score yet",
    nickname: "Your nickname (optional)",
    nicknamePlaceholder: "PILOT",
    saveScore: "Save score",
    scoreSaved: "Score saved",
    closeLeaderboard: "Close leaderboard",
    leaderboardUnavailable: "Leaderboard temporarily unavailable",
    savingScore: "Saving…",
    saveScoreError: "Unable to save this score",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    skills: "Craft",
    approach: "Approach",
    lab: "Lab",
    contact: "Contact",
  },
  hero: {
    lines: ["I BUILD THE", "TOOLS *I wished*", "*existed.*"],
    role: "Full-stack product engineer",
    base: "Paris · open to remote",
    lead: "Full-stack developer, three years in startups. I took **Pulse**, a B2B SaaS, from proof of concept to production, and I build **QoreDB**, an open-source database client written in Rust.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    cv: "Download résumé",
    statusLabel: "Available",
    status: "November 2026",
    lookingLabel: "Looking for",
    looking: "My next role, on a product team",
  },
  work: {
    label: "Work",
    title: "Code that ended up being useful to someone.",
    lead: "A short selection. Each of these products made it to production, with users and a backlog of tickets.",
    featured: {
      kicker: "Founder · product · engineering",
      status: "Open source · active",
      tagline:
        "A local-first database client that brings SQL and NoSQL together in the same window.",
      challengeLabel: "The problem",
      challenge:
        "Existing tools are powerful and tedious. The hard part was making mine comfortable without making it dumb: people who open a SQL client know what they are doing.",
      buildLabel: "What I built",
      build: [
        "A Rust core and a Tauri shell: 34 databases behind a single interface",
        "Credentials kept in the system keychain, and explicit guardrails on production databases",
        "A fast query editor, with autocompletion wired to the actual schema",
      ],
      metricLabel: "Today",
      metricValue: "15,000+",
      metricCaption: "downloads in eight months",
    },
    visit: "Visit the site",
    source: "View the code",
    readCase: "Read the case study",
    casesLabel: "Case studies",
    cases: {
      pulse: {
        type: "B2B SaaS · Tkorp",
        description:
          "A platform for managing fleets of VR headsets, taken from proof of concept to a V1 in production, then taken over entirely after the team was reorganised.",
      },
      "tcg-nexus": {
        type: "Web & mobile · Tech lead",
        description:
          "A platform for Pokémon TCG players: marketplace, tournaments, collections, decks and card scanning from a phone.",
      },
    },
    shippedLabel: "Other shipped products",
    shipped: {
      melios: {
        type: "Mobile · Co-founder",
        description:
          "A gamified personal-development app, incubated at ESSEC and published on the App Store and Google Play.",
        proof: "150+ beta testers",
      },
      "zevent-radar": {
        type: "Web · Real time",
        description:
          "The ZEvent second screen: live donation totals, goals within reach and alerts when a milestone is closing in. Held up across the 77 hours of the event.",
        proof: "Cloudflare Workers",
      },
      quori: {
        type: "SaaS · Full-stack",
        description:
          "Your GitHub activity turned into LinkedIn posts that hold up. Writing, editing, scheduling.",
        proof: "NestJS · Redis",
      },
    },
    archiveText:
      "Plus roughly sixty other repositories: search engines, extensions, games, APIs and experiments abandoned with dignity.",
    archiveLink: "Open the GitHub archive",
  },
  experience: {
    label: "Experience",
    title: "Three years in startups, from proof of concept to production.",
    lead: "Work-study alongside ETNA, on teams that trusted me with whole products rather than isolated tickets.",
    jobs: [
      {
        period: "Jan 2024 — present",
        company: "Tkorp",
        place: "Clichy, France",
        role: "Full-stack, mobile & desktop developer",
        points: [
          "Designed and built Pulse, a B2B SaaS for managing VR headset fleets, from proof of concept to a V1 in production.",
          "Took over the whole platform after the team was reorganised: architecture, back end, front end, mobile and deployment.",
          "Mobile app published on Google Play; platform adopted by several clients, with 50+ regular users.",
        ],
        stack: "Turborepo · NestJS · Next.js · Expo · Tauri · MySQL · Docker",
        caseStudy: "pulse",
      },
      {
        period: "Mar 2023 — Jan 2024",
        company: "Mes Allocs",
        place: "Paris, France",
        role: "Full-stack developer",
        points: [
          "Maintained and modernised the back office for social benefits: 1,800+ benefits, one million users a year.",
          "Express.js and MongoDB API, unit tests and automation.",
          "International sites (Italy, Spain, Portugal) in Nuxt.js and WordPress, on a team of four developers alongside an external agency.",
        ],
        stack: "Express.js · MongoDB · Nuxt.js · WordPress",
      },
    ],
    readCase: "Pulse case study",
    educationLabel: "Education",
    education: [
      {
        period: "2025 — 2026",
        title: "Master of Science, information systems architect",
        school: "ETNA · Ivry-sur-Seine",
      },
      {
        period: "2022 — 2025",
        title: "Bachelor, information systems project design",
        school: "ETNA · Ivry-sur-Seine",
      },
    ],
    cv: "Download résumé",
  },
  skills: {
    label: "Craft",
    title: "Full-stack, in the literal sense.",
    lead: "Web, mobile, desktop, back end: I have shipped on all four, which lets me follow a feature from the interface down to the database.",
    items: [
      {
        title: "Interfaces",
        text: "Pixels matter, but a screen that answers immediately matters more. It is also the first thing to go when the schedule tightens.",
      },
      {
        title: "Mobile",
        text: "From idea to store. The code is the easy part; it is the certificates, the reviews and the screenshots that drag a release out. I do that part too.",
      },
      {
        title: "Desktop & systems",
        text: "Rust when performance genuinely matters: native binaries, instant startup, and memory use that stays reasonable.",
      },
      {
        title: "Backend & production",
        text: "APIs, data, pipelines. And logs that are actually useful on the day it breaks.",
      },
    ],
  },
  approach: {
    label: "Approach",
    title: "I never learned to stop at “it works”.",
    paragraphs: [
      "Most of the software I use every day is fine. Rarely better than that. For years I assumed someone would eventually get around to fixing it.",
      "QoreDB came out of one very specific irritation: a database client that was slow, hostile, and perfectly happy to let me wipe a production table without ever asking if I was sure. The download counter has since confirmed that **the irritation was shared**.",
      "That is roughly how I work: I start from a concrete annoyance and trace it back to its cause. It takes longer than I planned, just about every time.",
    ],
    quote: "Half the work starts the day someone else installs it.",
    principles: [
      {
        title: "Think in systems",
        text: "Interface, architecture and infrastructure describe the same product. When I treat them separately, I pay for it later.",
      },
      {
        title: "Build for the real world",
        text: "Errors, edge cases and security are in the product from day one. Adding them at the end always costs more.",
      },
      {
        title: "Polish what matters",
        text: "The details that matter are the ones nobody notices: a loading state, a clear error message, a keyboard shortcut that lands where you expect.",
      },
    ],
  },
  lab: {
    label: "Lab",
    title: "The rest of the time.",
    lead: "What I build when nobody asked for it. Some found their users, the others taught me something.",
    gameKicker: "Playable piece",
    gameText:
      "A canvas arcade, written for the fun of it. The leaderboard runs on PostgreSQL, because I needed an excuse to plug in a database.",
    gamePlay: "Launch the game",
    items: {
      penfolio:
        "A portfolio generator that aggregates GitHub, LinkedIn and Behance. 200 portfolios created.",
      myriade: "An experimental search engine, written in Python.",
      "clear-mind":
        "A browser extension that blocks distracting sites and counts the time you win back.",
      raphotos:
        "My photography site. The only project where the subject is not code.",
    },
  },
  contact: {
    label: "Contact",
    lines: ["YOUR TEAM IS BUILDING", "A *demanding* PRODUCT?", "LET’S TALK."],
    lead: "I am looking for my next role from November 2026: a product team, subjects I get to handle end to end, and people willing to redo something once we understand the problem.",
    emailLabel: "Write to me",
    cvLabel: "Résumé",
    locationLabel: "Based in",
    location: "Paris · open to remote",
    statusLabel: "Available",
    availability: "From November 2026",
    atlas: {
      label: "Freelance work",
      text: "Need a website for your business? That’s what *Atlas*, my freelance studio, is for: fast, well-ranked websites for craftspeople, small businesses and independents.",
      cta: "Visit Atlas",
    },
  },
  footer: {
    note: "Designed and built in Paris.",
    rights: "All rights reserved",
    top: "Back to top",
    legal: "Legal notice",
    privacy: "Privacy",
  },
  caseStudy: {
    back: "All projects",
    kicker: "Case study",
    role: "Role",
    period: "Period",
    team: "Team",
    stack: "Stack",
    visit: "Visit the site",
    source: "View the code",
    next: "Next case study",
    privateNote:
      "Client product: the code is not public.",
    contactTitle: "A role that looks like this?",
    contactText:
      "I am available from November 2026. The simplest way is to write to me.",
    contactCta: "Write to me",
  },
};

const es: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Desarrollador full-stack en París, tres años en startups. Llevé Pulse, un SaaS B2B, de la prueba de concepto a producción, y construyo QoreDB, un cliente de bases de datos de código abierto en Rust. Disponible en noviembre de 2026.",
    ogDescription:
      "Construyo las herramientas que quería usar. Web, móvil, escritorio, infraestructura.",
  },
  aria: {
    skip: "Ir al contenido",
    top: "Volver arriba",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    github: "Perfil de GitHub de Raphaël",
    language: "Elegir idioma",
    theme: "Cambiar de tema",
    qoreImage: "Editor SQL y tabla de resultados en QoreDB",
    qoreTech: "Tecnologías de QoreDB",
    discover: "Descubrir",
    projectPreview: "Vista previa del proyecto",
  },
  game: {
    title: "RP / CORE RUNNER",
    subtitle: "Transmisión arcade interceptada",
    intro:
      "Recoge los núcleos naranjas, esquiva los meteoros y aguanta el mayor tiempo posible.",
    start: "Lanzar la misión",
    close: "Salir del juego",
    pause: "Pausar",
    resume: "Reanudar",
    score: "Puntuación",
    best: "Récord",
    lives: "Vidas",
    gameOver: "Señal perdida",
    finalScore: "Puntuación final",
    replay: "Jugar otra vez",
    controls: "← → / A D / arrastrar",
    objective: "Núcleo +100 · Meteoro −1 vida",
    leaderboard: "Clasificación",
    emptyLeaderboard: "Ninguna puntuación guardada",
    nickname: "Tu apodo (opcional)",
    nicknamePlaceholder: "PILOTO",
    saveScore: "Guardar",
    scoreSaved: "Puntuación guardada",
    closeLeaderboard: "Cerrar la clasificación",
    leaderboardUnavailable: "Clasificación no disponible por ahora",
    savingScore: "Guardando…",
    saveScoreError: "No se puede guardar esta puntuación",
  },
  nav: {
    work: "Proyectos",
    experience: "Trayectoria",
    skills: "Oficio",
    approach: "Enfoque",
    lab: "Laboratorio",
    contact: "Contacto",
  },
  hero: {
    lines: ["CONSTRUYO LAS", "*herramientas que*", "QUERÍA *usar*."],
    role: "Full-stack product engineer",
    base: "París · remoto posible",
    lead: "Desarrollador full-stack, tres años en startups. Llevé **Pulse**, un SaaS B2B, de la prueba de concepto a producción, y construyo **QoreDB**, un cliente de bases de datos de código abierto en Rust.",
    ctaWork: "Ver los proyectos",
    ctaContact: "Contactarme",
    cv: "Descargar el CV",
    statusLabel: "Disponible",
    status: "Noviembre de 2026",
    lookingLabel: "Busco",
    looking: "Mi próximo puesto, en un equipo de producto",
  },
  work: {
    label: "Proyectos",
    title: "Código que acabó sirviéndole a alguien.",
    lead: "Una selección corta. Cada uno de estos productos llegó a producción, con usuarios y tickets que atender.",
    featured: {
      kicker: "Fundador · producto · ingeniería",
      status: "Código abierto · activo",
      tagline:
        "Un cliente de base de datos local-first que reúne SQL y NoSQL en la misma ventana.",
      challengeLabel: "El problema",
      challenge:
        "Las herramientas existentes son potentes y pesadas. Lo difícil era hacer la mía cómoda sin volverla tonta: quien abre un cliente SQL sabe lo que hace.",
      buildLabel: "Lo que construí",
      build: [
        "Un núcleo en Rust y una carcasa Tauri: 34 bases de datos tras una sola interfaz",
        "Credenciales guardadas en el llavero del sistema y protecciones explícitas sobre las bases de producción",
        "Un editor de consultas rápido, con autocompletado conectado al esquema real",
      ],
      metricLabel: "Hoy",
      metricValue: "15 000+",
      metricCaption: "descargas en ocho meses",
    },
    visit: "Ver el sitio",
    source: "Ver el código",
    readCase: "Leer el caso de estudio",
    casesLabel: "Casos de estudio",
    cases: {
      pulse: {
        type: "SaaS B2B · Tkorp",
        description:
          "Una plataforma de gestión de flotas de visores de RV, llevada de la prueba de concepto a una V1 en producción, y asumida por completo tras una reorganización del equipo.",
      },
      "tcg-nexus": {
        type: "Web y móvil · Líder técnico",
        description:
          "Una plataforma para jugadores de Pokémon TCG: marketplace, torneos, colecciones, mazos y escaneo de cartas desde el móvil.",
      },
    },
    shippedLabel: "Otros productos entregados",
    shipped: {
      melios: {
        type: "Móvil · Cofundador",
        description:
          "Una aplicación de desarrollo personal gamificada, incubada en ESSEC y publicada en la App Store y Google Play.",
        proof: "150+ beta-testers",
      },
      "zevent-radar": {
        type: "Web · Tiempo real",
        description:
          "La segunda pantalla del ZEvent: donaciones en directo, goals al alcance y alertas cuando se acerca un hito. Aguantó las 77 horas del evento.",
        proof: "Cloudflare Workers",
      },
      quori: {
        type: "SaaS · Full-stack",
        description:
          "Tu actividad de GitHub convertida en publicaciones de LinkedIn presentables. Redacción, edición, planificación.",
        proof: "NestJS · Redis",
      },
    },
    archiveText:
      "Y unos sesenta repositorios más: motores de búsqueda, extensiones, juegos, APIs y experimentos abandonados con dignidad.",
    archiveLink: "Abrir el archivo de GitHub",
  },
  experience: {
    label: "Trayectoria",
    title: "Tres años en startups, de la prueba de concepto a producción.",
    lead: "En alternancia con la ETNA, en equipos que me confiaron productos enteros en lugar de tickets sueltos.",
    jobs: [
      {
        period: "Ene. 2024 — hoy",
        company: "Tkorp",
        place: "Clichy, Francia",
        role: "Desarrollador full-stack, móvil y escritorio",
        points: [
          "Diseño y desarrollo de Pulse, un SaaS B2B de gestión de flotas de visores de RV, de la prueba de concepto a una V1 en producción.",
          "Asumí toda la plataforma tras una reorganización del equipo: arquitectura, back, front, móvil y despliegue.",
          "Aplicación móvil publicada en Google Play; plataforma adoptada por varios clientes, con más de 50 usuarios habituales.",
        ],
        stack: "Turborepo · NestJS · Next.js · Expo · Tauri · MySQL · Docker",
        caseStudy: "pulse",
      },
      {
        period: "Mar. 2023 — ene. 2024",
        company: "Mes Allocs",
        place: "París, Francia",
        role: "Desarrollador full-stack",
        points: [
          "Mantenimiento y modernización del back-office de gestión de ayudas: más de 1 800 ayudas, un millón de usuarios al año.",
          "API en Express.js y MongoDB, pruebas unitarias y automatización.",
          "Sitios internacionales (Italia, España, Portugal) en Nuxt.js y WordPress, en un equipo de cuatro desarrolladores con un proveedor externo.",
        ],
        stack: "Express.js · MongoDB · Nuxt.js · WordPress",
      },
    ],
    readCase: "Caso de estudio Pulse",
    educationLabel: "Formación",
    education: [
      {
        period: "2025 — 2026",
        title: "Master of Science, arquitecto de sistemas de información",
        school: "ETNA · Ivry-sur-Seine",
      },
      {
        period: "2022 — 2025",
        title: "Grado, diseño de proyectos de sistemas de información",
        school: "ETNA · Ivry-sur-Seine",
      },
    ],
    cv: "Descargar el CV",
  },
  skills: {
    label: "Oficio",
    title: "Full-stack, en sentido literal.",
    lead: "Web, móvil, escritorio, back-end: he entregado en los cuatro, así que puedo seguir una funcionalidad desde la interfaz hasta la base de datos.",
    items: [
      {
        title: "Interfaces",
        text: "El píxel cuenta, pero una pantalla que responde al instante cuenta más. Y es lo primero que se sacrifica cuando aprieta el calendario.",
      },
      {
        title: "Móvil",
        text: "De la idea a la tienda. El código es la parte fácil; son los certificados, las revisiones y las capturas las que alargan un lanzamiento. Esa parte también la hago yo.",
      },
      {
        title: "Escritorio y sistemas",
        text: "Rust cuando el rendimiento importa de verdad: binarios nativos, arranque instantáneo y un consumo de memoria razonable.",
      },
      {
        title: "Backend y producción",
        text: "APIs, datos, pipelines. Y logs que sirven de algo el día que se rompe.",
      },
    ],
  },
  approach: {
    label: "Enfoque",
    title: "Nunca supe conformarme con «funciona».",
    paragraphs: [
      "La mayoría del software que uso a diario es correcto. Rara vez algo más. Durante años di por hecho que alguien acabaría por arreglarlo.",
      "QoreDB nació de una molestia muy concreta: un cliente de base de datos lento, hostil, y encantado de dejarme vaciar una tabla de producción sin preguntarme nunca si estaba seguro. Desde entonces, el contador de descargas me ha confirmado que **la molestia era compartida**.",
      "Así es más o menos como trabajo: parto de una incomodidad concreta y remonto hasta su causa. Me lleva más tiempo del previsto, casi siempre.",
    ],
    quote:
      "La mitad del trabajo empieza el día en que otra persona lo instala.",
    principles: [
      {
        title: "Pensar en sistemas",
        text: "La interfaz, la arquitectura y la infra cuentan el mismo producto. Cuando los trato por separado, lo pago más tarde.",
      },
      {
        title: "Construir para lo real",
        text: "Los errores, los casos límite y la seguridad están en el producto desde el primer día. Añadirlos al final siempre sale más caro.",
      },
      {
        title: "Pulir lo esencial",
        text: "Los detalles que cuentan son los que nadie nota: un estado de carga, un mensaje de error claro, un atajo de teclado que cae donde debe.",
      },
    ],
  },
  lab: {
    label: "Laboratorio",
    title: "El resto del tiempo.",
    lead: "Lo que construyo cuando nadie lo ha pedido. Algunos encontraron sus usuarios, los demás me enseñaron algo.",
    gameKicker: "Pieza jugable",
    gameText:
      "Un arcade en canvas, escrito por gusto. La clasificación va en PostgreSQL, porque hacía falta una excusa para enchufar una base de datos.",
    gamePlay: "Lanzar el juego",
    items: {
      penfolio:
        "Un generador de portfolios que agrega GitHub, LinkedIn y Behance. 200 portfolios creados.",
      myriade: "Un motor de búsqueda experimental, escrito en Python.",
      "clear-mind":
        "Una extensión de navegador que bloquea los sitios que distraen y cuenta el tiempo recuperado.",
      raphotos:
        "Mi sitio de fotografía. El único proyecto donde el tema no es código.",
    },
  },
  contact: {
    label: "Contacto",
    lines: ["¿TU EQUIPO CONSTRUYE", "UN PRODUCTO *exigente*?", "HABLEMOS."],
    lead: "Busco mi próximo puesto a partir de noviembre de 2026: un equipo de producto, temas que me dejen llevar de principio a fin, y gente dispuesta a rehacer algo cuando el problema ya se entiende.",
    emailLabel: "Escríbeme",
    cvLabel: "Currículum",
    locationLabel: "Desde",
    location: "París · remoto posible",
    statusLabel: "Disponible",
    availability: "A partir de noviembre de 2026",
    atlas: {
      label: "Trabajo freelance",
      text: "¿Necesitas una web para tu negocio? Para eso está *Atlas*, mi estudio freelance: sitios rápidos y bien posicionados para artesanos, pequeñas empresas e independientes.",
      cta: "Descubrir Atlas",
    },
  },
  footer: {
    note: "Diseñado y desarrollado en París.",
    rights: "Todos los derechos reservados",
    top: "Volver arriba",
    legal: "Aviso legal",
    privacy: "Privacidad",
  },
  caseStudy: {
    back: "Todos los proyectos",
    kicker: "Caso de estudio",
    role: "Rol",
    period: "Periodo",
    team: "Equipo",
    stack: "Stack",
    visit: "Ver el sitio",
    source: "Ver el código",
    next: "Siguiente caso",
    privateNote:
      "Producto de cliente: el código no es público.",
    contactTitle: "¿Un puesto que se parezca a esto?",
    contactText:
      "Estoy disponible a partir de noviembre de 2026. Lo más sencillo es escribirme.",
    contactCta: "Escribirme",
  },
};

const de: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Full-Stack-Entwickler in Paris, drei Jahre in Startups. Ich habe Pulse, ein B2B-SaaS, vom Proof of Concept bis in die Produktion geführt und baue QoreDB, einen quelloffenen Datenbank-Client in Rust. Verfügbar ab November 2026.",
    ogDescription:
      "Ich baue die Werkzeuge, die ich benutzen wollte. Web, Mobil, Desktop, Infrastruktur.",
  },
  aria: {
    skip: "Zum Inhalt springen",
    top: "Zurück nach oben",
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    github: "GitHub-Profil von Raphaël",
    language: "Sprache wählen",
    theme: "Design wechseln",
    qoreImage: "SQL-Editor und Ergebnistabelle in QoreDB",
    qoreTech: "QoreDB-Technologien",
    discover: "Entdecken",
    projectPreview: "Projektvorschau",
  },
  game: {
    title: "RP / CORE RUNNER",
    subtitle: "Arcade-Übertragung abgefangen",
    intro:
      "Sammle die orangen Kerne, weiche den Meteoren aus und halte so lange wie möglich durch.",
    start: "Mission starten",
    close: "Spiel verlassen",
    pause: "Pausieren",
    resume: "Fortsetzen",
    score: "Punkte",
    best: "Rekord",
    lives: "Leben",
    gameOver: "Signal verloren",
    finalScore: "Endpunktzahl",
    replay: "Nochmal spielen",
    controls: "← → / A D / ziehen",
    objective: "Kern +100 · Meteor −1 Leben",
    leaderboard: "Rangliste",
    emptyLeaderboard: "Noch keine Punktzahl gespeichert",
    nickname: "Dein Spitzname (optional)",
    nicknamePlaceholder: "PILOT",
    saveScore: "Speichern",
    scoreSaved: "Punktzahl gespeichert",
    closeLeaderboard: "Rangliste schließen",
    leaderboardUnavailable: "Rangliste vorübergehend nicht verfügbar",
    savingScore: "Wird gespeichert…",
    saveScoreError: "Diese Punktzahl kann nicht gespeichert werden",
  },
  nav: {
    work: "Projekte",
    experience: "Werdegang",
    skills: "Handwerk",
    approach: "Haltung",
    lab: "Labor",
    contact: "Kontakt",
  },
  hero: {
    lines: ["ICH BAUE DIE", "*Werkzeuge, die ich*", "BRAUCHTE."],
    role: "Full-stack product engineer",
    base: "Paris · Remote möglich",
    lead: "Full-Stack-Entwickler, drei Jahre in Startups. Ich habe **Pulse**, ein B2B-SaaS, vom Proof of Concept bis in die Produktion geführt und baue **QoreDB**, einen quelloffenen Datenbank-Client in Rust.",
    ctaWork: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    cv: "Lebenslauf herunterladen",
    statusLabel: "Verfügbar",
    status: "November 2026",
    lookingLabel: "Ich suche",
    looking: "Meine nächste Stelle in einem Produktteam",
  },
  work: {
    label: "Projekte",
    title: "Code, der am Ende jemandem genützt hat.",
    lead: "Eine kurze Auswahl. Jedes dieser Produkte ging in Produktion, mit Nutzenden und offenen Tickets.",
    featured: {
      kicker: "Gründer · Produkt · Engineering",
      status: "Open Source · aktiv",
      tagline:
        "Ein Local-first-Datenbank-Client, der SQL und NoSQL in einem Fenster vereint.",
      challengeLabel: "Das Problem",
      challenge:
        "Die vorhandenen Werkzeuge sind mächtig und mühsam. Schwierig war, meines bequem zu machen, ohne es dumm zu machen: Wer einen SQL-Client öffnet, weiß, was er tut.",
      buildLabel: "Was ich gebaut habe",
      build: [
        "Ein Rust-Kern und eine Tauri-Hülle: 34 Datenbanken hinter einer einzigen Oberfläche",
        "Zugangsdaten im Schlüsselbund des Systems und ausdrückliche Schutzgeländer für Produktionsdatenbanken",
        "Ein schneller Abfrage-Editor, dessen Autovervollständigung am echten Schema hängt",
      ],
      metricLabel: "Heute",
      metricValue: "15 000+",
      metricCaption: "Downloads in acht Monaten",
    },
    visit: "Website ansehen",
    source: "Code ansehen",
    readCase: "Fallstudie lesen",
    casesLabel: "Fallstudien",
    cases: {
      pulse: {
        type: "B2B-SaaS · Tkorp",
        description:
          "Eine Plattform zur Verwaltung von VR-Headset-Flotten, vom Proof of Concept bis zur V1 in Produktion geführt und nach einer Umstrukturierung des Teams vollständig übernommen.",
      },
      "tcg-nexus": {
        type: "Web & Mobil · Technische Leitung",
        description:
          "Eine Plattform für Pokémon-TCG-Spielende: Marktplatz, Turniere, Sammlungen, Decks und Karten-Scan per Smartphone.",
      },
    },
    shippedLabel: "Weitere gelieferte Produkte",
    shipped: {
      melios: {
        type: "Mobil · Mitgründer",
        description:
          "Eine spielerische App zur Persönlichkeitsentwicklung, an der ESSEC inkubiert und im App Store und bei Google Play veröffentlicht.",
        proof: "150+ Beta-Tester",
      },
      "zevent-radar": {
        type: "Web · Echtzeit",
        description:
          "Der Second Screen des ZEvent: Spenden in Echtzeit, erreichbare Goals und Alerts, wenn ein Meilenstein näher rückt. Hielt die 77 Stunden der Edition durch.",
        proof: "Cloudflare Workers",
      },
      quori: {
        type: "SaaS · Full-stack",
        description:
          "Deine GitHub-Aktivität, übersetzt in vorzeigbare LinkedIn-Beiträge. Schreiben, Bearbeiten, Planen.",
        proof: "NestJS · Redis",
      },
    },
    archiveText:
      "Und rund sechzig weitere Repositories: Suchmaschinen, Erweiterungen, Spiele, APIs und würdevoll aufgegebene Experimente.",
    archiveLink: "GitHub-Archiv öffnen",
  },
  experience: {
    label: "Werdegang",
    title: "Drei Jahre in Startups, vom Proof of Concept bis in die Produktion.",
    lead: "Dual an der ETNA, in Teams, die mir ganze Produkte anvertraut haben statt einzelner Tickets.",
    jobs: [
      {
        period: "Jan. 2024 — heute",
        company: "Tkorp",
        place: "Clichy, Frankreich",
        role: "Full-Stack-, Mobile- & Desktop-Entwickler",
        points: [
          "Konzeption und Entwicklung von Pulse, einem B2B-SaaS zur Verwaltung von VR-Headset-Flotten, vom Proof of Concept bis zur V1 in Produktion.",
          "Übernahme der gesamten Plattform nach einer Umstrukturierung des Teams: Architektur, Backend, Frontend, Mobil und Deployment.",
          "Mobile App bei Google Play veröffentlicht; Plattform von mehreren Kunden eingesetzt, mit über 50 regelmäßig Nutzenden.",
        ],
        stack: "Turborepo · NestJS · Next.js · Expo · Tauri · MySQL · Docker",
        caseStudy: "pulse",
      },
      {
        period: "März 2023 — Jan. 2024",
        company: "Mes Allocs",
        place: "Paris, Frankreich",
        role: "Full-Stack-Entwickler",
        points: [
          "Wartung und Modernisierung des Backoffice für Sozialleistungen: über 1 800 Leistungen, eine Million Nutzende pro Jahr.",
          "API mit Express.js und MongoDB, Unit-Tests und Automatisierung.",
          "Internationale Websites (Italien, Spanien, Portugal) mit Nuxt.js und WordPress, in einem Team aus vier Entwicklern mit einer externen Agentur.",
        ],
        stack: "Express.js · MongoDB · Nuxt.js · WordPress",
      },
    ],
    readCase: "Fallstudie Pulse",
    educationLabel: "Ausbildung",
    education: [
      {
        period: "2025 — 2026",
        title: "Master of Science, Architekt für Informationssysteme",
        school: "ETNA · Ivry-sur-Seine",
      },
      {
        period: "2022 — 2025",
        title: "Bachelor, Konzeption von IT-Projekten",
        school: "ETNA · Ivry-sur-Seine",
      },
    ],
    cv: "Lebenslauf herunterladen",
  },
  skills: {
    label: "Handwerk",
    title: "Full-stack, im wörtlichen Sinn.",
    lead: "Web, Mobil, Desktop, Backend: Ich habe auf allen vier geliefert und kann eine Funktion so von der Oberfläche bis zur Datenbank begleiten.",
    items: [
      {
        title: "Oberflächen",
        text: "Das Pixel zählt, aber ein Bildschirm, der sofort antwortet, zählt mehr. Und genau daran wird zuerst gespart, wenn der Zeitplan eng wird.",
      },
      {
        title: "Mobil",
        text: "Von der Idee bis in den Store. Der Code ist der einfache Teil; es sind die Zertifikate, die Reviews und die Screenshots, die ein Release in die Länge ziehen. Den Teil mache ich auch.",
      },
      {
        title: "Desktop & Systeme",
        text: "Rust, wenn Leistung wirklich zählt: native Binaries, sofortiger Start und ein Speicherverbrauch, der im Rahmen bleibt.",
      },
      {
        title: "Backend & Produktion",
        text: "APIs, Daten, Pipelines. Und Logs, die an dem Tag etwas taugen, an dem es bricht.",
      },
    ],
  },
  approach: {
    label: "Haltung",
    title: "Bei „es funktioniert“ konnte ich nie aufhören.",
    paragraphs: [
      "Die meiste Software, die ich täglich benutze, ist in Ordnung. Selten mehr. Jahrelang bin ich davon ausgegangen, dass sich irgendwann jemand darum kümmert.",
      "QoreDB entstand aus einem sehr konkreten Ärgernis: ein Datenbank-Client, der langsam und unwirsch war und mich eine Produktionstabelle leeren ließ, ohne je zu fragen, ob ich sicher sei. Der Download-Zähler hat mir seitdem bestätigt, dass **viele denselben Ärger hatten**.",
      "Ungefähr so arbeite ich: Ich beginne bei einem konkreten Unbehagen und gehe zurück bis zur Ursache. Es dauert jedes Mal länger als geplant.",
    ],
    quote:
      "Die Hälfte der Arbeit beginnt an dem Tag, an dem jemand anderes es installiert.",
    principles: [
      {
        title: "In Systemen denken",
        text: "Oberfläche, Architektur und Betrieb erzählen dasselbe Produkt. Wenn ich sie getrennt behandle, zahle ich später dafür.",
      },
      {
        title: "Für die Wirklichkeit bauen",
        text: "Fehler, Randfälle und Sicherheit stecken vom ersten Tag an im Produkt. Sie am Ende nachzurüsten kostet immer mehr.",
      },
      {
        title: "Das Wesentliche polieren",
        text: "Die Details, die zählen, bemerkt niemand: ein Ladezustand, eine klare Fehlermeldung, ein Tastenkürzel, das dort liegt, wo man es sucht.",
      },
    ],
  },
  lab: {
    label: "Labor",
    title: "Die übrige Zeit.",
    lead: "Was ich baue, wenn niemand danach gefragt hat. Einige haben ihre Nutzenden gefunden, die anderen haben mir etwas beigebracht.",
    gameKicker: "Spielbares Stück",
    gameText:
      "Ein Canvas-Arcade, aus Spaß geschrieben. Die Rangliste läuft auf PostgreSQL, weil es einen Vorwand brauchte, eine Datenbank anzuschließen.",
    gamePlay: "Spiel starten",
    items: {
      penfolio:
        "Ein Portfolio-Generator, der GitHub, LinkedIn und Behance zusammenführt. 200 erstellte Portfolios.",
      myriade: "Eine experimentelle Suchmaschine, in Python geschrieben.",
      "clear-mind":
        "Eine Browser-Erweiterung, die ablenkende Seiten blockiert und die zurückgewonnene Zeit zählt.",
      raphotos:
        "Meine Fotografie-Website. Das einzige Projekt, dessen Gegenstand kein Code ist.",
    },
  },
  contact: {
    label: "Kontakt",
    lines: [
      "IHR TEAM BAUT",
      "EIN *anspruchsvolles* PRODUKT?",
      "SPRECHEN WIR.",
    ],
    lead: "Ich suche ab November 2026 meine nächste Stelle: ein Produktteam, Themen, die ich von Anfang bis Ende verantworten darf, und Menschen, die bereit sind, etwas neu zu bauen, sobald das Problem verstanden ist.",
    emailLabel: "Schreib mir",
    cvLabel: "Lebenslauf",
    locationLabel: "Standort",
    location: "Paris · Remote möglich",
    statusLabel: "Verfügbar",
    availability: "Ab November 2026",
    atlas: {
      label: "Freelance",
      text: "Sie brauchen eine Website für Ihr Unternehmen? Dafür gibt es *Atlas*, mein Freelance-Studio: schnelle, gut auffindbare Websites für Handwerk, kleine Betriebe und Selbstständige.",
      cta: "Atlas entdecken",
    },
  },
  footer: {
    note: "Entworfen und entwickelt in Paris.",
    rights: "Alle Rechte vorbehalten",
    top: "Nach oben",
    legal: "Impressum",
    privacy: "Datenschutz",
  },
  caseStudy: {
    back: "Alle Projekte",
    kicker: "Fallstudie",
    role: "Rolle",
    period: "Zeitraum",
    team: "Team",
    stack: "Stack",
    visit: "Website ansehen",
    source: "Code ansehen",
    next: "Nächste Fallstudie",
    privateNote:
      "Kundenprodukt: Der Code ist nicht öffentlich.",
    contactTitle: "Eine Stelle, die so aussieht?",
    contactText:
      "Ich bin ab November 2026 verfügbar. Am einfachsten schreibst du mir.",
    contactCta: "Schreib mir",
  },
};

export const content: Record<Locale, PortfolioContent> = { fr, en, es, de };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale) {
  return locale === "fr" ? "/" : `/${locale}`;
}
