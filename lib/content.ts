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

type Project = {
  type: string;
  description: string;
  proof: string;
};

type LabItem = {
  text: string;
};

type JourneyItem = {
  date: string;
  title: string;
  text: string;
};

export type PortfolioContent = {
  meta: { title: string; description: string; ogDescription: string };
  aria: {
    skip: string;
    top: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    github: string;
    linkedin: string;
    email: string;
    language: string;
    theme: string;
    proof: string;
    qoreImage: string;
    qoreTech: string;
    discover: string;
    projectPreview: string;
    ticker: string;
    progress: string;
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
  boot: { role: string; enter: string };
  nav: {
    manifesto: string;
    work: string;
    skills: string;
    lab: string;
    about: string;
    contact: string;
  };
  hero: {
    lines: [string, string, string];
    role: string;
    place: string;
    lead: string;
    ctaWork: string;
    ctaContact: string;
    cv: string;
    scroll: string;
    statusLabel: string;
    status: string;
    localTime: string;
  };
  ticker: string[];
  manifesto: {
    index: string;
    title: string;
    paragraphs: [string, string, string];
    quote: string;
  };
  stats: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
  ];
  work: {
    index: string;
    title: string;
    lead: string;
    featuredLabel: string;
    status: string;
    visit: string;
    source: string;
    kicker: string;
    tagline: string;
    challengeLabel: string;
    challenge: string;
    buildLabel: string;
    build: [string, string, string];
    metricLabel: string;
    metricValue: string;
    metricCaption: string;
    selectedLabel: string;
    projects: [Project, Project, Project];
    archiveText: string;
    archiveLink: string;
    view: string;
  };
  skills: {
    index: string;
    title: string;
    lead: string;
    items: [Card, Card, Card, Card];
    stackLabel: string;
    console: [string, string, string, string];
  };
  lab: {
    index: string;
    title: string;
    lead: string;
    gameKicker: string;
    gameText: string;
    gamePlay: string;
    items: [
      LabItem,
      LabItem,
      LabItem,
      LabItem,
      LabItem,
      LabItem,
      LabItem,
      LabItem,
    ];
  };
  about: {
    index: string;
    title: string;
    lead: string;
    quote: string;
    principles: [Card, Card, Card];
    journeyLabel: string;
    journeyTitle: string;
    journey: [JourneyItem, JourneyItem, JourneyItem, JourneyItem, JourneyItem];
    now: string;
  };
  contact: {
    index: string;
    lines: [string, string];
    lead: string;
    emailLabel: string;
    cvLabel: string;
    location: string;
    availability: string;
    social: string;
  };
  footer: { note: string; built: string; rights: string; top: string };
};

export const consoleStack = [
  "React · Next.js · TypeScript · TanStack · Tailwind · Motion",
  "NestJS · Node.js · Rust · REST · GraphQL · WebSockets",
  "PostgreSQL · MongoDB · Redis · SQLite · MySQL · Prisma",
  "Docker · GitHub Actions · Linux · VPS · Cloudflare · Vercel",
] as const;

export const skillStacks = [
  "React · Next.js · TypeScript · Tailwind · Motion",
  "React Native · Expo · Firebase · EAS",
  "Rust · Tauri · SQLx · Linux",
  "NestJS · PostgreSQL · Redis · Docker · CI/CD",
] as const;

const fr: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Développeur full-stack à Paris. Je conçois et livre des produits web, mobile et desktop, de l’architecture à la production. Créateur de QoreDB.",
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
    linkedin: "Profil LinkedIn de Raphaël",
    email: "Envoyer un email à Raphaël",
    language: "Choisir la langue",
    theme: "Changer de thème",
    proof: "Quelques repères",
    qoreImage: "Table de données et explorateur de schéma dans QoreDB",
    qoreTech: "Technologies QoreDB",
    discover: "Découvrir",
    projectPreview: "Aperçu du projet",
    ticker: "Bandeau défilant",
    progress: "Progression de lecture",
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
  boot: {
    role: "FULL-STACK PRODUCT ENGINEER",
    enter: "Entrer",
  },
  nav: {
    manifesto: "Manifeste",
    work: "Projets",
    skills: "Savoir-faire",
    lab: "Laboratoire",
    about: "Approche",
    contact: "Contact",
  },
  hero: {
    lines: ["JE CONSTRUIS", "LES OUTILS *que*", "*je voulais* UTILISER."],
    role: "FULL-STACK PRODUCT ENGINEER",
    place: "PARIS · 48.8566° N",
    lead: "Web, mobile, desktop, infrastructure. Je prends les sujets en entier, du premier schéma jusqu’à la mise en production et aux semaines qui suivent.",
    ctaWork: "Voir les projets",
    ctaContact: "Me contacter",
    cv: "Télécharger le CV",
    scroll: "Défiler",
    statusLabel: "Statut",
    status: "Disponible en novembre 2026",
    localTime: "Heure locale",
  },
  ticker: [
    "QOREDB",
    "15 000 TÉLÉCHARGEMENTS",
    "RUST",
    "TAURI",
    "TYPESCRIPT",
    "REACT NATIVE",
    "NESTJS",
    "POSTGRESQL",
    "OPEN SOURCE",
    "PARIS",
  ],
  manifesto: {
    index: "01 / MANIFESTE",
    title: "Je n’ai jamais su m’arrêter à « ça marche ».",
    paragraphs: [
      "La plupart des logiciels que j’utilise tous les jours sont corrects. Rarement mieux. Pendant des années, j’ai supposé que quelqu’un finirait par s’en occuper.",
      "QoreDB est né d’un agacement précis : un client de base de données lent, hostile, et qui me laissait vider une table de production sans jamais me demander si j’étais sûr. Depuis, le compteur de téléchargements m’a confirmé que **l’agacement était partagé**.",
      "C’est à peu près comme ça que je travaille : je pars d’une gêne concrète et je remonte jusqu’à la cause. Ça me prend plus de temps que prévu, presque à chaque fois.",
    ],
    quote: "Un produit fini, c’est un produit dont il n’y a plus rien à dire.",
  },
  stats: [
    { value: "15 000+", label: "téléchargements QoreDB" },
    { value: "60+", label: "dépôts publics" },
    { value: "4", label: "plateformes livrées" },
    { value: "3+", label: "années en production" },
  ],
  work: {
    index: "02 / PROJETS",
    title: "Du code qui a fini par servir à quelqu’un.",
    lead: "Une sélection courte. Chacun de ces produits est parti d’un problème que j’avais vraiment, et chacun est allé jusqu’en production, avec des utilisateurs et des tickets à traiter.",
    featuredLabel: "PROJET PHARE",
    status: "Open source · actif",
    visit: "Voir le site",
    source: "Voir le code",
    kicker: "FONDATEUR · PRODUIT · INGÉNIERIE",
    tagline:
      "Un client de base de données local-first qui réunit SQL et NoSQL dans la même fenêtre.",
    challengeLabel: "LE PROBLÈME",
    challenge:
      "Les outils existants sont puissants et pénibles. La difficulté, c’était de rendre le mien confortable sans le rendre bête : les gens qui ouvrent un client SQL savent ce qu’ils font.",
    buildLabel: "CE QUE J’AI CONSTRUIT",
    build: [
      "Un cœur Rust, une coquille Tauri, 15 drivers derrière une seule interface",
      "Un coffre chiffré et des garde-fous explicites sur les bases de production",
      "Un éditeur de requêtes rapide, avec l’autocomplétion branchée sur le schéma réel",
    ],
    metricLabel: "AUJOURD’HUI",
    metricValue: "15 000+",
    metricCaption: "téléchargements en quelques mois",
    selectedLabel: "AUTRES PRODUITS LIVRÉS",
    projects: [
      {
        type: "Mobile · Cofondateur",
        description:
          "Une application de développement personnel gamifiée, pensée pour tenir plus de trois jours. Cofondée, menée du concept jusqu’aux stores.",
        proof: "150+ bêta-testeurs",
      },
      {
        type: "SaaS · Full-stack",
        description:
          "Votre activité GitHub transformée en publications LinkedIn présentables. Rédaction, édition, planification.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Lead technique",
        description:
          "Un écosystème pour joueurs de cartes : tournois, marketplace et analyse assistée par IA. Livré en ligne.",
        proof: "Équipe de 5",
      },
    ],
    archiveText:
      "Et une soixantaine d’autres dépôts : moteurs de recherche, extensions, jeux, APIs et expérimentations abandonnées avec dignité.",
    archiveLink: "Ouvrir l’archive GitHub",
    view: "Voir",
  },
  skills: {
    index: "03 / SAVOIR-FAIRE",
    title: "Full-stack, au sens propre.",
    lead: "J’apprends une technologie quand un projet en a besoin, et je m’arrête quand l’ensemble tient debout sans moi.",
    items: [
      {
        title: "Interfaces",
        text: "Le pixel compte, mais un écran qui répond tout de suite compte plus. C’est aussi la première chose qu’on sacrifie quand le planning se resserre.",
      },
      {
        title: "Mobile",
        text: "De l’idée au store. Le code est la partie facile ; ce sont les certificats, les revues et les captures d’écran qui font traîner une sortie. Je fais aussi cette partie-là.",
      },
      {
        title: "Desktop & systèmes",
        text: "Rust quand la performance compte vraiment : des binaires natifs, un démarrage instantané, et de la mémoire qui reste raisonnable.",
      },
      {
        title: "Backend & production",
        text: "Des API, des données, des pipelines. Et des logs qui servent à quelque chose le jour où ça casse.",
      },
    ],
    stackLabel: "STACK",
    console: ["frontend", "backend", "données", "livraison"],
  },
  lab: {
    index: "04 / LABORATOIRE",
    title: "Le reste du temps.",
    lead: "Ce que je construis quand personne ne l’a demandé. Certains ont trouvé leurs utilisateurs, les autres m’ont appris quelque chose.",
    gameKicker: "PIÈCE JOUABLE",
    gameText:
      "Un arcade en canvas, écrit pour le plaisir. Le classement est en PostgreSQL, parce qu’il fallait bien une excuse pour brancher une base.",
    gamePlay: "Lancer le jeu",
    items: [
      {
        text: "Un générateur de portfolios qui agrège GitHub, LinkedIn et Behance. 200 portfolios créés.",
      },
      {
        text: "Une plateforme de vérification de faits assistée par IA.",
      },
      {
        text: "Une extension navigateur qui bloque les sites distrayants et compte le temps regagné.",
      },
      {
        text: "Une plateforme coach–client : programmes de sport, exercices, suivi et messagerie.",
      },
      {
        text: "Un moteur de recherche expérimental, écrit en Python.",
      },
      {
        text: "Un site de données pour Pokémon GO, construit en Svelte.",
      },
      {
        text: "Un comparateur pour trancher une bonne fois : est-ce que ça valait le coup ?",
      },
      {
        text: "Mon site de photographie. Le seul projet où le sujet n’est pas du code.",
      },
    ],
  },
  about: {
    index: "05 / APPROCHE",
    title: "Ce que je fais quand le code marche déjà.",
    lead: "Je passe plus de temps à comprendre le problème qu’à écrire la solution. Ça se voit six mois plus tard, le jour où il faut y revenir.",
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
        text: "Les détails qui comptent sont ceux que personne ne remarque : un état de chargement, un message d’erreur clair, un raccourci clavier qui tombe juste.",
      },
    ],
    journeyLabel: "PARCOURS",
    journeyTitle:
      "Du développement web à la construction d’un produit desktop open source.",
    journey: [
      {
        date: "2022-2024",
        title: "ETNA · Bachelor informatique",
        text: "Socle d’ingénierie et apprentissage par projets, avec des rendus à date fixe.",
      },
      {
        date: "2023-2024",
        title: "Mes Allocs · Développeur full-stack",
        text: "Produit web, back-office, travail en équipe et premiers vrais utilisateurs derrière le code.",
      },
      {
        date: "depuis 2024",
        title: "Tkorp · Développeur full-stack & mobile",
        text: "Pulse, du prototype à la production et au Play Store. Le passage du « ça marche » au « ça tient ».",
      },
      {
        date: "2025-2026",
        title: "ETNA · Master of Science informatique",
        text: "Architecture logicielle et pilotage de projets complexes, en parallèle de l’alternance.",
      },
      {
        date: "depuis 2026",
        title: "QoreDB · Fondateur & ingénieur",
        text: "Un produit desktop open source en Rust et Tauri. Le premier problème que j’ai réglé pour de bon au lieu de le contourner.",
      },
    ],
    now: "En cours",
  },
  contact: {
    index: "06 / LA SUITE",
    lines: [
      "VOUS AVEZ UN PRODUIT *ambitieux*.",
      "CONSTRUISONS-LE *correctement*.",
    ],
    lead: "Je cherche une équipe exigeante et des sujets qu’on me laisse traiter en entier. Et des gens prêts à refaire une fois qu’on a compris le problème.",
    emailLabel: "Écrivez-moi",
    cvLabel: "Curriculum vitae",
    location: "Paris · France · Remote",
    availability: "Disponible à partir de novembre 2026",
    social: "Ailleurs",
  },
  footer: {
    note: "Conçu et développé à Paris.",
    built: "Archivo, Instrument Serif, Geist Mono. Un seul fichier CSS.",
    rights: "Tous droits réservés",
    top: "Haut de page",
  },
};

const en: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Full-stack developer in Paris. I design and ship web, mobile and desktop products, from architecture to production. Creator of QoreDB.",
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
    linkedin: "Raphaël's LinkedIn profile",
    email: "Email Raphaël",
    language: "Choose language",
    theme: "Change theme",
    proof: "Key figures",
    qoreImage: "Data table and schema explorer in QoreDB",
    qoreTech: "QoreDB technologies",
    discover: "Discover",
    projectPreview: "Project preview",
    ticker: "Scrolling banner",
    progress: "Reading progress",
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
  boot: {
    role: "FULL-STACK PRODUCT ENGINEER",
    enter: "Enter",
  },
  nav: {
    manifesto: "Manifesto",
    work: "Work",
    skills: "Craft",
    lab: "Lab",
    about: "Approach",
    contact: "Contact",
  },
  hero: {
    lines: ["I BUILD THE", "TOOLS *I wished*", "*existed.*"],
    role: "FULL-STACK PRODUCT ENGINEER",
    place: "PARIS · 48.8566° N",
    lead: "Web, mobile, desktop, infrastructure. I take projects end to end, from the first schema to the deployment and the weeks that follow.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    cv: "Download résumé",
    scroll: "Scroll",
    statusLabel: "Status",
    status: "Available from November 2026",
    localTime: "Local time",
  },
  ticker: [
    "QOREDB",
    "15,000 DOWNLOADS",
    "RUST",
    "TAURI",
    "TYPESCRIPT",
    "REACT NATIVE",
    "NESTJS",
    "POSTGRESQL",
    "OPEN SOURCE",
    "PARIS",
  ],
  manifesto: {
    index: "01 / MANIFESTO",
    title: "I never learned to stop at “it works”.",
    paragraphs: [
      "Most of the software I use every day is fine. Rarely better than that. For years I assumed someone would eventually get around to fixing it.",
      "QoreDB came out of one very specific irritation: a database client that was slow, hostile, and perfectly happy to let me wipe a production table without ever asking if I was sure. The download counter has since confirmed that **the irritation was shared**.",
      "That is roughly how I work: I start from a concrete annoyance and trace it back to its cause. It takes longer than I planned, just about every time.",
    ],
    quote:
      "A finished product is a product there is nothing left to say about.",
  },
  stats: [
    { value: "15,000+", label: "QoreDB downloads" },
    { value: "60+", label: "public repositories" },
    { value: "4", label: "platforms shipped" },
    { value: "3+", label: "years in production" },
  ],
  work: {
    index: "02 / WORK",
    title: "Code that ended up being useful to someone.",
    lead: "A short selection. Each of these products started from a problem I genuinely had, and each one made it to production, with users and a backlog of tickets.",
    featuredLabel: "FEATURED",
    status: "Open source · active",
    visit: "Visit the site",
    source: "View the code",
    kicker: "FOUNDER · PRODUCT · ENGINEERING",
    tagline:
      "A local-first database client that brings SQL and NoSQL together in the same window.",
    challengeLabel: "THE PROBLEM",
    challenge:
      "Existing tools are powerful and tedious. The hard part was making mine comfortable without making it dumb: people who open a SQL client know what they are doing.",
    buildLabel: "WHAT I BUILT",
    build: [
      "A Rust core, a Tauri shell, 15 drivers behind a single interface",
      "An encrypted vault and explicit guardrails on production databases",
      "A fast query editor, with autocompletion wired to the actual schema",
    ],
    metricLabel: "TODAY",
    metricValue: "15,000+",
    metricCaption: "downloads in a few months",
    selectedLabel: "OTHER SHIPPED PRODUCTS",
    projects: [
      {
        type: "Mobile · Co-founder",
        description:
          "A gamified personal-development app designed to survive past day three. Co-founded and taken from concept to the stores.",
        proof: "150+ beta testers",
      },
      {
        type: "SaaS · Full-stack",
        description:
          "Your GitHub activity turned into LinkedIn posts that hold up. Writing, editing, scheduling.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Tech lead",
        description:
          "An ecosystem for card-game players: tournaments, marketplace and AI-assisted analysis. Shipped online.",
        proof: "Team of 5",
      },
    ],
    archiveText:
      "Plus roughly sixty other repositories: search engines, extensions, games, APIs and experiments abandoned with dignity.",
    archiveLink: "Open the GitHub archive",
    view: "View",
  },
  skills: {
    index: "03 / CRAFT",
    title: "Full-stack, in the literal sense.",
    lead: "I pick up a technology when a project needs it, and I stop when the whole thing stands up without me.",
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
    stackLabel: "STACK",
    console: ["frontend", "backend", "data", "delivery"],
  },
  lab: {
    index: "04 / LAB",
    title: "The rest of the time.",
    lead: "What I build when nobody asked for it. Some found their users, the others taught me something.",
    gameKicker: "PLAYABLE PIECE",
    gameText:
      "A canvas arcade, written for the fun of it. The leaderboard runs on PostgreSQL, because I needed an excuse to plug in a database.",
    gamePlay: "Launch the game",
    items: [
      {
        text: "A portfolio generator that aggregates GitHub, LinkedIn and Behance. 200 portfolios created.",
      },
      { text: "An AI-assisted fact-checking platform." },
      {
        text: "A browser extension that blocks distracting sites and counts the time you win back.",
      },
      {
        text: "A coach-to-client platform: training programmes, exercises, tracking and messaging.",
      },
      { text: "An experimental search engine, written in Python." },
      { text: "A data site for Pokémon GO, built with Svelte." },
      {
        text: "A comparison tool to settle it once and for all: was it worth it?",
      },
      {
        text: "My photography site. The only project where the subject is not code.",
      },
    ],
  },
  about: {
    index: "05 / APPROACH",
    title: "What I do once the code already works.",
    lead: "I spend more time understanding the problem than writing the solution. It shows six months later, on the day someone has to go back into it.",
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
    journeyLabel: "JOURNEY",
    journeyTitle:
      "From web development to building an open-source desktop product.",
    journey: [
      {
        date: "2022-2024",
        title: "ETNA · Bachelor in computer science",
        text: "Engineering foundations and project-based learning, with hard deadlines.",
      },
      {
        date: "2023-2024",
        title: "Mes Allocs · Full-stack developer",
        text: "Web product, back office, teamwork, and the first real users sitting behind the code.",
      },
      {
        date: "since 2024",
        title: "Tkorp · Full-stack & mobile developer",
        text: "Pulse, from prototype to production and the Play Store. The move from “it works” to “it holds”.",
      },
      {
        date: "2025-2026",
        title: "ETNA · Master of Science in computer science",
        text: "Software architecture and complex project management, alongside the apprenticeship.",
      },
      {
        date: "since 2026",
        title: "QoreDB · Founder & engineer",
        text: "An open-source desktop product in Rust and Tauri. The first problem I fixed for good instead of working around it.",
      },
    ],
    now: "Ongoing",
  },
  contact: {
    index: "06 / WHAT'S NEXT",
    lines: ["YOU HAVE AN *ambitious* PRODUCT.", "LET'S BUILD IT *properly*."],
    lead: "I am looking for a demanding team and subjects I get to handle end to end. And people willing to redo something once we understand the problem.",
    emailLabel: "Write to me",
    cvLabel: "Résumé",
    location: "Paris · France · Remote",
    availability: "Available from November 2026",
    social: "Elsewhere",
  },
  footer: {
    note: "Designed and built in Paris.",
    built: "Archivo, Instrument Serif, Geist Mono. One single CSS file.",
    rights: "All rights reserved",
    top: "Back to top",
  },
};

const es: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Desarrollador full-stack en París. Diseño y entrego productos web, móviles y de escritorio, de la arquitectura a la producción. Creador de QoreDB.",
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
    linkedin: "Perfil de LinkedIn de Raphaël",
    email: "Escribir a Raphaël",
    language: "Elegir idioma",
    theme: "Cambiar de tema",
    proof: "Cifras clave",
    qoreImage: "Tabla de datos y explorador de esquemas en QoreDB",
    qoreTech: "Tecnologías de QoreDB",
    discover: "Descubrir",
    projectPreview: "Vista previa del proyecto",
    ticker: "Banda deslizante",
    progress: "Progreso de lectura",
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
  boot: {
    role: "FULL-STACK PRODUCT ENGINEER",
    enter: "Entrar",
  },
  nav: {
    manifesto: "Manifiesto",
    work: "Proyectos",
    skills: "Oficio",
    lab: "Laboratorio",
    about: "Enfoque",
    contact: "Contacto",
  },
  hero: {
    lines: ["CONSTRUYO LAS", "*herramientas que*", "QUERÍA *usar*."],
    role: "FULL-STACK PRODUCT ENGINEER",
    place: "PARÍS · 48.8566° N",
    lead: "Web, móvil, escritorio, infraestructura. Asumo los proyectos de principio a fin, desde el primer esquema hasta la puesta en producción y las semanas siguientes.",
    ctaWork: "Ver los proyectos",
    ctaContact: "Contactarme",
    cv: "Descargar el CV",
    scroll: "Desplazar",
    statusLabel: "Estado",
    status: "Disponible desde noviembre de 2026",
    localTime: "Hora local",
  },
  ticker: [
    "QOREDB",
    "15 000 DESCARGAS",
    "RUST",
    "TAURI",
    "TYPESCRIPT",
    "REACT NATIVE",
    "NESTJS",
    "POSTGRESQL",
    "CÓDIGO ABIERTO",
    "PARÍS",
  ],
  manifesto: {
    index: "01 / MANIFIESTO",
    title: "Nunca supe conformarme con «funciona».",
    paragraphs: [
      "La mayoría del software que uso a diario es correcto. Rara vez algo más. Durante años di por hecho que alguien acabaría por arreglarlo.",
      "QoreDB nació de una molestia muy concreta: un cliente de base de datos lento, hostil, y encantado de dejarme vaciar una tabla de producción sin preguntarme nunca si estaba seguro. Desde entonces, el contador de descargas me ha confirmado que **la molestia era compartida**.",
      "Así es más o menos como trabajo: parto de una incomodidad concreta y remonto hasta su causa. Me lleva más tiempo del previsto, casi siempre.",
    ],
    quote:
      "Un producto terminado es un producto del que ya no queda nada que decir.",
  },
  stats: [
    { value: "15 000+", label: "descargas de QoreDB" },
    { value: "60+", label: "repositorios públicos" },
    { value: "4", label: "plataformas entregadas" },
    { value: "3+", label: "años en producción" },
  ],
  work: {
    index: "02 / PROYECTOS",
    title: "Código que acabó sirviéndole a alguien.",
    lead: "Una selección corta. Cada uno de estos productos partió de un problema que yo tenía de verdad, y cada uno llegó a producción, con usuarios y tickets que atender.",
    featuredLabel: "PROYECTO DESTACADO",
    status: "Código abierto · activo",
    visit: "Ver el sitio",
    source: "Ver el código",
    kicker: "FUNDADOR · PRODUCTO · INGENIERÍA",
    tagline:
      "Un cliente de base de datos local-first que reúne SQL y NoSQL en la misma ventana.",
    challengeLabel: "EL PROBLEMA",
    challenge:
      "Las herramientas existentes son potentes y pesadas. Lo difícil era hacer la mía cómoda sin volverla tonta: quien abre un cliente SQL sabe lo que hace.",
    buildLabel: "LO QUE CONSTRUÍ",
    build: [
      "Un núcleo en Rust, una carcasa Tauri, 15 drivers tras una sola interfaz",
      "Una bóveda cifrada y protecciones explícitas sobre las bases de producción",
      "Un editor de consultas rápido, con autocompletado conectado al esquema real",
    ],
    metricLabel: "HOY",
    metricValue: "15 000+",
    metricCaption: "descargas en pocos meses",
    selectedLabel: "OTROS PRODUCTOS ENTREGADOS",
    projects: [
      {
        type: "Móvil · Cofundador",
        description:
          "Una aplicación de desarrollo personal gamificada, pensada para durar más de tres días. Cofundada y llevada del concepto a las tiendas.",
        proof: "150+ beta-testers",
      },
      {
        type: "SaaS · Full-stack",
        description:
          "Tu actividad de GitHub convertida en publicaciones de LinkedIn presentables. Redacción, edición, planificación.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Líder técnico",
        description:
          "Un ecosistema para jugadores de cartas: torneos, marketplace y análisis asistido por IA. Publicado en línea.",
        proof: "Equipo de 5",
      },
    ],
    archiveText:
      "Y unos sesenta repositorios más: motores de búsqueda, extensiones, juegos, APIs y experimentos abandonados con dignidad.",
    archiveLink: "Abrir el archivo de GitHub",
    view: "Ver",
  },
  skills: {
    index: "03 / OFICIO",
    title: "Full-stack, en sentido literal.",
    lead: "Aprendo una tecnología cuando un proyecto la necesita, y paro cuando el conjunto se sostiene sin mí.",
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
    stackLabel: "STACK",
    console: ["frontend", "backend", "datos", "entrega"],
  },
  lab: {
    index: "04 / LABORATORIO",
    title: "El resto del tiempo.",
    lead: "Lo que construyo cuando nadie lo ha pedido. Algunos encontraron sus usuarios, los demás me enseñaron algo.",
    gameKicker: "PIEZA JUGABLE",
    gameText:
      "Un arcade en canvas, escrito por gusto. La clasificación va en PostgreSQL, porque hacía falta una excusa para enchufar una base de datos.",
    gamePlay: "Lanzar el juego",
    items: [
      {
        text: "Un generador de portfolios que agrega GitHub, LinkedIn y Behance. 200 portfolios creados.",
      },
      { text: "Una plataforma de verificación de hechos asistida por IA." },
      {
        text: "Una extensión de navegador que bloquea los sitios que distraen y cuenta el tiempo recuperado.",
      },
      {
        text: "Una plataforma entrenador–cliente: programas deportivos, ejercicios, seguimiento y mensajería.",
      },
      { text: "Un motor de búsqueda experimental, escrito en Python." },
      { text: "Un sitio de datos para Pokémon GO, construido con Svelte." },
      {
        text: "Un comparador para zanjarlo de una vez: ¿merecía la pena?",
      },
      {
        text: "Mi sitio de fotografía. El único proyecto donde el tema no es código.",
      },
    ],
  },
  about: {
    index: "05 / ENFOQUE",
    title: "Lo que hago cuando el código ya funciona.",
    lead: "Paso más tiempo entendiendo el problema que escribiendo la solución. Se nota seis meses después, el día en que hay que volver a meterse dentro.",
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
    journeyLabel: "TRAYECTORIA",
    journeyTitle:
      "Del desarrollo web a la construcción de un producto de escritorio de código abierto.",
    journey: [
      {
        date: "2022-2024",
        title: "ETNA · Grado en informática",
        text: "Base de ingeniería y aprendizaje por proyectos, con entregas a fecha fija.",
      },
      {
        date: "2023-2024",
        title: "Mes Allocs · Desarrollador full-stack",
        text: "Producto web, back-office, trabajo en equipo y los primeros usuarios reales detrás del código.",
      },
      {
        date: "desde 2024",
        title: "Tkorp · Desarrollador full-stack y móvil",
        text: "Pulse, del prototipo a la producción y a la Play Store. El paso de «funciona» a «aguanta».",
      },
      {
        date: "2025-2026",
        title: "ETNA · Máster en informática",
        text: "Arquitectura de software y gestión de proyectos complejos, en paralelo a la alternancia.",
      },
      {
        date: "desde 2026",
        title: "QoreDB · Fundador e ingeniero",
        text: "Un producto de escritorio de código abierto en Rust y Tauri. El primer problema que resolví de verdad en vez de esquivarlo.",
      },
    ],
    now: "En curso",
  },
  contact: {
    index: "06 / LO QUE SIGUE",
    lines: ["TIENES UN PRODUCTO *ambicioso*.", "CONSTRUYÁMOSLO *bien*."],
    lead: "Busco un equipo exigente y temas que me dejen llevar de principio a fin. Y gente dispuesta a rehacer algo cuando el problema ya se entiende.",
    emailLabel: "Escríbeme",
    cvLabel: "Currículum",
    location: "París · Francia · Remoto",
    availability: "Disponible a partir de noviembre de 2026",
    social: "En otros sitios",
  },
  footer: {
    note: "Diseñado y desarrollado en París.",
    built: "Archivo, Instrument Serif, Geist Mono. Un único archivo CSS.",
    rights: "Todos los derechos reservados",
    top: "Volver arriba",
  },
};

const de: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart · Full-stack Product Engineer",
    description:
      "Full-Stack-Entwickler in Paris. Ich konzipiere und liefere Web-, Mobil- und Desktop-Produkte, von der Architektur bis in die Produktion. Schöpfer von QoreDB.",
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
    linkedin: "LinkedIn-Profil von Raphaël",
    email: "Raphaël eine E-Mail schreiben",
    language: "Sprache wählen",
    theme: "Design wechseln",
    proof: "Kennzahlen",
    qoreImage: "Datentabelle und Schema-Explorer in QoreDB",
    qoreTech: "QoreDB-Technologien",
    discover: "Entdecken",
    projectPreview: "Projektvorschau",
    ticker: "Laufband",
    progress: "Lesefortschritt",
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
  boot: {
    role: "FULL-STACK PRODUCT ENGINEER",
    enter: "Eintreten",
  },
  nav: {
    manifesto: "Manifest",
    work: "Projekte",
    skills: "Handwerk",
    lab: "Labor",
    about: "Haltung",
    contact: "Kontakt",
  },
  hero: {
    lines: ["ICH BAUE DIE", "*Werkzeuge, die ich*", "BRAUCHTE."],
    role: "FULL-STACK PRODUCT ENGINEER",
    place: "PARIS · 48,8566° N",
    lead: "Web, Mobil, Desktop, Infrastruktur. Ich übernehme Projekte von Anfang bis Ende, vom ersten Schema bis zum Produktivgang und den Wochen danach.",
    ctaWork: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    cv: "Lebenslauf herunterladen",
    scroll: "Scrollen",
    statusLabel: "Status",
    status: "Verfügbar ab November 2026",
    localTime: "Ortszeit",
  },
  ticker: [
    "QOREDB",
    "15 000 DOWNLOADS",
    "RUST",
    "TAURI",
    "TYPESCRIPT",
    "REACT NATIVE",
    "NESTJS",
    "POSTGRESQL",
    "OPEN SOURCE",
    "PARIS",
  ],
  manifesto: {
    index: "01 / MANIFEST",
    title: "Bei „es funktioniert“ konnte ich nie aufhören.",
    paragraphs: [
      "Die meiste Software, die ich täglich benutze, ist in Ordnung. Selten mehr. Jahrelang bin ich davon ausgegangen, dass sich irgendwann jemand darum kümmert.",
      "QoreDB entstand aus einem sehr konkreten Ärgernis: ein Datenbank-Client, der langsam und unwirsch war und mich eine Produktionstabelle leeren ließ, ohne je zu fragen, ob ich sicher sei. Der Download-Zähler hat mir seitdem bestätigt, dass **viele denselben Ärger hatten**.",
      "Ungefähr so arbeite ich: Ich beginne bei einem konkreten Unbehagen und gehe zurück bis zur Ursache. Es dauert jedes Mal länger als geplant.",
    ],
    quote:
      "Ein fertiges Produkt ist ein Produkt, zu dem nichts mehr zu sagen bleibt.",
  },
  stats: [
    { value: "15 000+", label: "QoreDB-Downloads" },
    { value: "60+", label: "öffentliche Repositories" },
    { value: "4", label: "ausgelieferte Plattformen" },
    { value: "3+", label: "Jahre in der Produktion" },
  ],
  work: {
    index: "02 / PROJEKTE",
    title: "Code, der am Ende jemandem genützt hat.",
    lead: "Eine kurze Auswahl. Jedes dieser Produkte begann mit einem Problem, das ich wirklich hatte, und jedes ging in Produktion, mit Nutzenden und offenen Tickets.",
    featuredLabel: "HAUPTPROJEKT",
    status: "Open Source · aktiv",
    visit: "Website ansehen",
    source: "Code ansehen",
    kicker: "GRÜNDER · PRODUKT · ENGINEERING",
    tagline:
      "Ein Local-first-Datenbank-Client, der SQL und NoSQL in einem Fenster vereint.",
    challengeLabel: "DAS PROBLEM",
    challenge:
      "Die vorhandenen Werkzeuge sind mächtig und mühsam. Schwierig war, meines bequem zu machen, ohne es dumm zu machen: Wer einen SQL-Client öffnet, weiß, was er tut.",
    buildLabel: "WAS ICH GEBAUT HABE",
    build: [
      "Ein Rust-Kern, eine Tauri-Hülle, 15 Treiber hinter einer einzigen Oberfläche",
      "Ein verschlüsselter Tresor und ausdrückliche Schutzgeländer für Produktionsdatenbanken",
      "Ein schneller Abfrage-Editor, dessen Autovervollständigung am echten Schema hängt",
    ],
    metricLabel: "HEUTE",
    metricValue: "15 000+",
    metricCaption: "Downloads in wenigen Monaten",
    selectedLabel: "WEITERE GELIEFERTE PRODUKTE",
    projects: [
      {
        type: "Mobil · Mitgründer",
        description:
          "Eine spielerische App zur Persönlichkeitsentwicklung, gebaut, um länger als drei Tage zu überleben. Mitgegründet und vom Konzept bis in die Stores geführt.",
        proof: "150+ Beta-Tester",
      },
      {
        type: "SaaS · Full-stack",
        description:
          "Deine GitHub-Aktivität, übersetzt in vorzeigbare LinkedIn-Beiträge. Schreiben, Bearbeiten, Planen.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Technische Leitung",
        description:
          "Ein Ökosystem für Kartenspielende: Turniere, Marktplatz und KI-gestützte Analyse. Online geliefert.",
        proof: "Team aus 5",
      },
    ],
    archiveText:
      "Und rund sechzig weitere Repositories: Suchmaschinen, Erweiterungen, Spiele, APIs und würdevoll aufgegebene Experimente.",
    archiveLink: "GitHub-Archiv öffnen",
    view: "Ansehen",
  },
  skills: {
    index: "03 / HANDWERK",
    title: "Full-stack, im wörtlichen Sinn.",
    lead: "Ich lerne eine Technologie, wenn ein Projekt sie braucht, und höre auf, wenn das Ganze ohne mich steht.",
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
    stackLabel: "STACK",
    console: ["Frontend", "Backend", "Daten", "Auslieferung"],
  },
  lab: {
    index: "04 / LABOR",
    title: "Die übrige Zeit.",
    lead: "Was ich baue, wenn niemand danach gefragt hat. Einige haben ihre Nutzenden gefunden, die anderen haben mir etwas beigebracht.",
    gameKicker: "SPIELBARES STÜCK",
    gameText:
      "Ein Canvas-Arcade, aus Spaß geschrieben. Die Rangliste läuft auf PostgreSQL, weil es einen Vorwand brauchte, eine Datenbank anzuschließen.",
    gamePlay: "Spiel starten",
    items: [
      {
        text: "Ein Portfolio-Generator, der GitHub, LinkedIn und Behance zusammenführt. 200 erstellte Portfolios.",
      },
      { text: "Eine KI-gestützte Plattform zur Faktenprüfung." },
      {
        text: "Eine Browser-Erweiterung, die ablenkende Seiten blockiert und die zurückgewonnene Zeit zählt.",
      },
      {
        text: "Eine Coach-Kunden-Plattform: Trainingspläne, Übungen, Verfolgung und Nachrichten.",
      },
      { text: "Eine experimentelle Suchmaschine, in Python geschrieben." },
      { text: "Eine Datenseite für Pokémon GO, mit Svelte gebaut." },
      {
        text: "Ein Vergleichswerkzeug, um es ein für alle Mal zu klären: Hat es sich gelohnt?",
      },
      {
        text: "Meine Fotografie-Website. Das einzige Projekt, dessen Gegenstand kein Code ist.",
      },
    ],
  },
  about: {
    index: "05 / HALTUNG",
    title: "Was ich mache, wenn der Code schon läuft.",
    lead: "Ich verbringe mehr Zeit damit, das Problem zu verstehen, als die Lösung zu schreiben. Es zeigt sich sechs Monate später, wenn jemand wieder hineinmuss.",
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
    journeyLabel: "WERDEGANG",
    journeyTitle:
      "Von der Webentwicklung zum Bau eines quelloffenen Desktop-Produkts.",
    journey: [
      {
        date: "2022-2024",
        title: "ETNA · Bachelor Informatik",
        text: "Ingenieurgrundlagen und projektbasiertes Lernen, mit festen Abgabeterminen.",
      },
      {
        date: "2023-2024",
        title: "Mes Allocs · Full-Stack-Entwickler",
        text: "Webprodukt, Backoffice, Teamarbeit und die ersten echten Nutzenden hinter dem Code.",
      },
      {
        date: "seit 2024",
        title: "Tkorp · Full-Stack- & Mobile-Entwickler",
        text: "Pulse, vom Prototyp bis in die Produktion und in den Play Store. Der Schritt von „es läuft“ zu „es hält“.",
      },
      {
        date: "2025-2026",
        title: "ETNA · Master of Science Informatik",
        text: "Softwarearchitektur und Steuerung komplexer Projekte, parallel zur dualen Ausbildung.",
      },
      {
        date: "seit 2026",
        title: "QoreDB · Gründer & Ingenieur",
        text: "Ein quelloffenes Desktop-Produkt in Rust und Tauri. Das erste Problem, das ich wirklich gelöst habe, statt es zu umgehen.",
      },
    ],
    now: "Laufend",
  },
  contact: {
    index: "06 / WIE ES WEITERGEHT",
    lines: ["SIE HABEN EIN *ehrgeiziges* PRODUKT.", "BAUEN WIR ES *richtig*."],
    lead: "Ich suche ein anspruchsvolles Team und Themen, die ich ganz übernehmen darf. Und Menschen, die etwas neu machen, sobald das Problem klar ist.",
    emailLabel: "Schreiben Sie mir",
    cvLabel: "Lebenslauf",
    location: "Paris · Frankreich · Remote",
    availability: "Verfügbar ab November 2026",
    social: "Anderswo",
  },
  footer: {
    note: "In Paris entworfen und entwickelt.",
    built: "Archivo, Instrument Serif, Geist Mono. Eine einzige CSS-Datei.",
    rights: "Alle Rechte vorbehalten",
    top: "Nach oben",
  },
};

export const content: Record<Locale, PortfolioContent> = { fr, en, es, de };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale) {
  return locale === "fr" ? "/" : `/${locale}`;
}
