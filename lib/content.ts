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
    title: "Raphaël Plassart — Full-stack Product Engineer",
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
    title: "RP // CORE RUNNER",
    subtitle: "Transmission arcade interceptée",
    intro:
      "Récupère les noyaux verts, évite les météores et tiens le plus longtemps possible.",
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
    lead: "Web, mobile, desktop, infrastructure. Je prends les sujets en entier — du premier schéma jusqu’au jour où ça tourne pour de vrai, avec de vrais utilisateurs dessus.",
    ctaWork: "Voir les projets",
    ctaContact: "Me contacter",
    cv: "Télécharger le CV",
    scroll: "Défiler",
    statusLabel: "Statut",
    status: "Disponible — novembre 2026",
    localTime: "Heure locale",
  },
  ticker: [
    "QOREDB",
    "10 000 TÉLÉCHARGEMENTS",
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
      "La plupart des logiciels que j’utilise tous les jours sont corrects. Rarement mieux. Pendant longtemps, j’ai attendu que quelqu’un les répare. Puis **j’ai arrêté d’attendre**.",
      "QoreDB est né d’un agacement précis : un client de base de données lent, hostile, et qui me laissait vider une table de production sans jamais me demander si j’étais sûr. Dix mille téléchargements plus tard, **l’agacement était visiblement partagé**.",
      "C’est à peu près comme ça que je travaille. Je pars d’une gêne concrète, je remonte jusqu’à la cause, et je ne lâche pas avant que **le problème ait disparu** — pas seulement qu’il soit contourné.",
    ],
    quote:
      "Un produit fini, ce n’est pas un produit qui compile. C’est un produit dont il n’y a plus rien à dire.",
  },
  stats: [
    { value: "10 000+", label: "téléchargements QoreDB" },
    { value: "60+", label: "dépôts publics" },
    { value: "4", label: "surfaces maîtrisées" },
    { value: "3+", label: "années en production" },
  ],
  work: {
    index: "02 / PROJETS",
    title: "Du code qui a fini par servir à quelqu’un.",
    lead: "Une sélection courte. Chacun de ces produits est parti d’un problème que j’avais pour de bon, et chacun a fini en production — avec de vrais utilisateurs, et de vrais bugs à vingt-trois heures.",
    featuredLabel: "PROJET PHARE",
    status: "Open source · actif",
    visit: "Voir le site",
    source: "Voir le code",
    kicker: "FONDATEUR · PRODUIT · INGÉNIERIE",
    tagline:
      "Un client de base de données local-first qui réunit SQL et NoSQL dans une interface qu’on n’a pas envie de fermer.",
    challengeLabel: "LE PROBLÈME",
    challenge:
      "Les outils existants sont puissants et hostiles. Il fallait garder la puissance et jeter l’hostilité, sans transformer le produit en jouet pour débutants.",
    buildLabel: "CE QUE J’AI CONSTRUIT",
    build: [
      "Un cœur Rust, une coquille Tauri, quinze drivers derrière une seule interface",
      "Un coffre chiffré et des garde-fous explicites sur les bases de production",
      "Un éditeur de requêtes qui répond avant qu’on ait relâché la touche",
    ],
    metricLabel: "AUJOURD’HUI",
    metricValue: "10 000+",
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
          "Votre activité GitHub traduite en publications LinkedIn qu’on n’a pas honte de poster. Génération, édition, planification.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Lead technique",
        description:
          "Un écosystème pour joueurs de cartes : tournois, marketplace et analyse assistée par IA. Mené à cinq, livré en ligne.",
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
    lead: "Je ne collectionne pas les technologies. Je les relie jusqu’à ce que l’ensemble tienne debout sans moi.",
    items: [
      {
        title: "Interfaces",
        text: "Le pixel compte, le temps de réponse davantage. Des interfaces rapides, accessibles, qui ne facturent pas leur complexité à l’utilisateur.",
      },
      {
        title: "Mobile",
        text: "De l’idée au store. Publier une application, c’est quarante pour cent de code et soixante pour cent de tout le reste. Je fais aussi les soixante.",
      },
      {
        title: "Desktop & systèmes",
        text: "Rust quand la performance n’est pas négociable. Des binaires natifs qui ont fini de démarrer avant qu’on ait cligné des yeux.",
      },
      {
        title: "Backend & production",
        text: "Des API, des données, des pipelines. Et surtout : le jour où ça casse, savoir pourquoi en trois minutes.",
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
      "Un arcade en canvas écrit un dimanche après-midi. Classement mondial en PostgreSQL, parce qu’il fallait bien une excuse pour brancher une base.",
    gamePlay: "Lancer le jeu",
    items: [
      {
        text: "Un générateur de portfolios qui agrège GitHub, LinkedIn et Behance. Deux cents portfolios créés.",
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
    title: "Le perfectionnisme, rendu utile.",
    lead: "Pas la quête d’un code abstraitement parfait. Une exigence concrète : comprendre le problème avant de l’attaquer, et livrer quelque chose dont on peut encore être fier six mois plus tard.",
    quote:
      "Je n’appelle pas fini ce qui fonctionne seulement sur ma machine.",
    principles: [
      {
        title: "Penser système",
        text: "Interface, architecture et exploitation sont le même sujet. Les séparer, c’est simplement reporter le problème.",
      },
      {
        title: "Construire pour le réel",
        text: "La sécurité, les erreurs et les cas limites font partie du produit. Pas de la finition.",
      },
      {
        title: "Polir l’essentiel",
        text: "La précision se voit surtout dans les détails que l’utilisateur n’a plus besoin de remarquer.",
      },
    ],
    journeyLabel: "PARCOURS",
    journeyTitle:
      "Du développement web à la construction d’un produit desktop open source.",
    journey: [
      {
        date: "2022 — 2024",
        title: "ETNA · Bachelor informatique",
        text: "Socle d’ingénierie, apprentissage par projets, et la découverte que livrer est un métier à part entière.",
      },
      {
        date: "2023 — 2024",
        title: "Mes Allocs · Développeur full-stack",
        text: "Produit web, back-office, travail en équipe et premiers vrais utilisateurs derrière le code.",
      },
      {
        date: "2024 — auj.",
        title: "Tkorp · Développeur full-stack & mobile",
        text: "Pulse, du prototype à la production et au Play Store. Le passage du « ça marche » au « ça tient ».",
      },
      {
        date: "2025 — 2026",
        title: "ETNA · Master of Science informatique",
        text: "Architecture logicielle et pilotage de projets complexes, en parallèle de l’alternance.",
      },
      {
        date: "2026 — auj.",
        title: "QoreDB · Fondateur & ingénieur",
        text: "Un produit desktop open source en Rust et Tauri. Ma première réponse complète à un problème que j’avais.",
      },
    ],
    now: "En cours",
  },
  contact: {
    index: "06 / LA SUITE",
    lines: ["VOUS AVEZ UN PRODUIT *ambitieux*.", "CONSTRUISONS-LE *correctement*."],
    lead: "Je cherche une équipe exigeante, des sujets entiers, et des gens qui n’ont pas peur de refaire une fois que le problème est mieux compris.",
    emailLabel: "Écrivez-moi",
    cvLabel: "Curriculum vitae",
    location: "Paris · France · Remote",
    availability: "Disponible à partir de novembre 2026",
    social: "Ailleurs",
  },
  footer: {
    note: "Conçu et développé à Paris.",
    built: "Next.js, CSS écrit à la main, aucun template.",
    rights: "Tous droits réservés",
    top: "Haut de page",
  },
};

const en: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
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
    title: "RP // CORE RUNNER",
    subtitle: "Arcade transmission intercepted",
    intro:
      "Collect green cores, dodge meteors and survive as long as possible.",
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
    lead: "Web, mobile, desktop, infrastructure. I take subjects whole — from the first schema to the day it runs for real, with real users on it.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    cv: "Download résumé",
    scroll: "Scroll",
    statusLabel: "Status",
    status: "Available — November 2026",
    localTime: "Local time",
  },
  ticker: [
    "QOREDB",
    "10,000 DOWNLOADS",
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
      "Most of the software I use every day is fine. Rarely better than that. For a long time I waited for someone to fix it. Then **I stopped waiting**.",
      "QoreDB came out of one very specific irritation: a database client that was slow, hostile, and perfectly happy to let me wipe a production table without ever asking if I was sure. Ten thousand downloads later, **the irritation was clearly shared**.",
      "That is roughly how I work. I start from a concrete annoyance, trace it back to its cause, and refuse to let go until **the problem is gone** — not merely worked around.",
    ],
    quote:
      "A finished product is not a product that compiles. It is a product there is nothing left to say about.",
  },
  stats: [
    { value: "10,000+", label: "QoreDB downloads" },
    { value: "60+", label: "public repositories" },
    { value: "4", label: "surfaces mastered" },
    { value: "3+", label: "years in production" },
  ],
  work: {
    index: "02 / WORK",
    title: "Code that ended up being useful to someone.",
    lead: "A short selection. Each of these products started from a problem I genuinely had, and each one shipped — with real users, and real bugs at eleven at night.",
    featuredLabel: "FEATURED",
    status: "Open source · active",
    visit: "Visit the site",
    source: "View the code",
    kicker: "FOUNDER · PRODUCT · ENGINEERING",
    tagline:
      "A local-first database client that brings SQL and NoSQL together in an interface you have no urge to close.",
    challengeLabel: "THE PROBLEM",
    challenge:
      "Existing tools are powerful and hostile. The point was to keep the power and drop the hostility, without turning the product into a toy for beginners.",
    buildLabel: "WHAT I BUILT",
    build: [
      "A Rust core, a Tauri shell, fifteen drivers behind a single interface",
      "An encrypted vault and explicit guardrails on production databases",
      "A query editor that answers before you have released the key",
    ],
    metricLabel: "TODAY",
    metricValue: "10,000+",
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
          "Your GitHub activity turned into LinkedIn posts you are not embarrassed to publish. Generation, editing, scheduling.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Tech lead",
        description:
          "An ecosystem for card-game players: tournaments, marketplace and AI-assisted analysis. Led with a team of five, shipped online.",
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
    lead: "I do not collect technologies. I connect them until the whole thing stands up without me.",
    items: [
      {
        title: "Interfaces",
        text: "Pixels matter, response time matters more. Fast, accessible interfaces that do not bill their complexity to the user.",
      },
      {
        title: "Mobile",
        text: "From idea to store. Shipping an app is forty percent code and sixty percent everything else. I do the sixty too.",
      },
      {
        title: "Desktop & systems",
        text: "Rust when performance is not negotiable. Native binaries that finish launching before you have finished blinking.",
      },
      {
        title: "Backend & production",
        text: "APIs, data, pipelines. And above all: when it breaks, knowing why within three minutes.",
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
      "A canvas arcade written on a Sunday afternoon. Global leaderboard on PostgreSQL, because I needed an excuse to plug in a database.",
    gamePlay: "Launch the game",
    items: [
      {
        text: "A portfolio generator that aggregates GitHub, LinkedIn and Behance. Two hundred portfolios created.",
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
      { text: "A comparison tool to settle it once and for all: was it worth it?" },
      {
        text: "My photography site. The only project where the subject is not code.",
      },
    ],
  },
  about: {
    index: "05 / APPROACH",
    title: "Perfectionism, made useful.",
    lead: "Not the pursuit of abstractly perfect code. A concrete standard: understand the problem before attacking it, and ship something you can still be proud of six months later.",
    quote: "I do not call finished what only works on my machine.",
    principles: [
      {
        title: "Think in systems",
        text: "Interface, architecture and operations are the same subject. Separating them only postpones the problem.",
      },
      {
        title: "Build for the real world",
        text: "Security, errors and edge cases are part of the product. Not part of the polish.",
      },
      {
        title: "Polish what matters",
        text: "Precision shows mostly in the details the user no longer needs to notice.",
      },
    ],
    journeyLabel: "JOURNEY",
    journeyTitle:
      "From web development to building an open-source desktop product.",
    journey: [
      {
        date: "2022 — 2024",
        title: "ETNA · Bachelor in computer science",
        text: "Engineering foundations, project-based learning, and the discovery that shipping is a craft of its own.",
      },
      {
        date: "2023 — 2024",
        title: "Mes Allocs · Full-stack developer",
        text: "Web product, back office, teamwork, and the first real users sitting behind the code.",
      },
      {
        date: "2024 — now",
        title: "Tkorp · Full-stack & mobile developer",
        text: "Pulse, from prototype to production and the Play Store. The move from “it works” to “it holds”.",
      },
      {
        date: "2025 — 2026",
        title: "ETNA · Master of Science in computer science",
        text: "Software architecture and complex project management, alongside the apprenticeship.",
      },
      {
        date: "2026 — now",
        title: "QoreDB · Founder & engineer",
        text: "An open-source desktop product in Rust and Tauri. My first complete answer to a problem I had.",
      },
    ],
    now: "Ongoing",
  },
  contact: {
    index: "06 / WHAT'S NEXT",
    lines: ["YOU HAVE AN *ambitious* PRODUCT.", "LET'S BUILD IT *properly*."],
    lead: "I am looking for a demanding team, whole subjects, and people who are not afraid to redo something once the problem is better understood.",
    emailLabel: "Write to me",
    cvLabel: "Résumé",
    location: "Paris · France · Remote",
    availability: "Available from November 2026",
    social: "Elsewhere",
  },
  footer: {
    note: "Designed and built in Paris.",
    built: "Next.js, hand-written CSS, no template.",
    rights: "All rights reserved",
    top: "Back to top",
  },
};

const es: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
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
    title: "RP // CORE RUNNER",
    subtitle: "Transmisión arcade interceptada",
    intro:
      "Recoge los núcleos verdes, esquiva los meteoros y aguanta el mayor tiempo posible.",
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
    lead: "Web, móvil, escritorio, infraestructura. Asumo los temas enteros — desde el primer esquema hasta el día en que funciona de verdad, con usuarios reales encima.",
    ctaWork: "Ver los proyectos",
    ctaContact: "Contactarme",
    cv: "Descargar el CV",
    scroll: "Desplazar",
    statusLabel: "Estado",
    status: "Disponible — noviembre de 2026",
    localTime: "Hora local",
  },
  ticker: [
    "QOREDB",
    "10 000 DESCARGAS",
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
      "La mayoría del software que uso a diario es correcto. Rara vez algo más. Durante mucho tiempo esperé a que alguien lo arreglara. Después **dejé de esperar**.",
      "QoreDB nació de una molestia muy concreta: un cliente de base de datos lento, hostil, y encantado de dejarme vaciar una tabla de producción sin preguntarme nunca si estaba seguro. Diez mil descargas después, **la molestia era claramente compartida**.",
      "Así es más o menos como trabajo. Parto de una incomodidad concreta, remonto hasta su causa y no suelto hasta que **el problema desaparece** — no solo hasta que queda esquivado.",
    ],
    quote:
      "Un producto terminado no es un producto que compila. Es un producto del que ya no queda nada que decir.",
  },
  stats: [
    { value: "10 000+", label: "descargas de QoreDB" },
    { value: "60+", label: "repositorios públicos" },
    { value: "4", label: "superficies dominadas" },
    { value: "3+", label: "años en producción" },
  ],
  work: {
    index: "02 / PROYECTOS",
    title: "Código que acabó sirviéndole a alguien.",
    lead: "Una selección corta. Cada uno de estos productos partió de un problema que yo tenía de verdad, y cada uno acabó en producción — con usuarios reales y errores reales a las once de la noche.",
    featuredLabel: "PROYECTO DESTACADO",
    status: "Código abierto · activo",
    visit: "Ver el sitio",
    source: "Ver el código",
    kicker: "FUNDADOR · PRODUCTO · INGENIERÍA",
    tagline:
      "Un cliente de base de datos local-first que reúne SQL y NoSQL en una interfaz que no dan ganas de cerrar.",
    challengeLabel: "EL PROBLEMA",
    challenge:
      "Las herramientas existentes son potentes y hostiles. Había que conservar la potencia y tirar la hostilidad, sin convertir el producto en un juguete para principiantes.",
    buildLabel: "LO QUE CONSTRUÍ",
    build: [
      "Un núcleo en Rust, una carcasa Tauri, quince drivers tras una sola interfaz",
      "Una bóveda cifrada y protecciones explícitas sobre las bases de producción",
      "Un editor de consultas que responde antes de soltar la tecla",
    ],
    metricLabel: "HOY",
    metricValue: "10 000+",
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
          "Tu actividad de GitHub convertida en publicaciones de LinkedIn que no da vergüenza publicar. Generación, edición, planificación.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Líder técnico",
        description:
          "Un ecosistema para jugadores de cartas: torneos, marketplace y análisis asistido por IA. Dirigido en equipo de cinco, publicado en línea.",
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
    lead: "No colecciono tecnologías. Las conecto hasta que el conjunto se sostiene sin mí.",
    items: [
      {
        title: "Interfaces",
        text: "El píxel cuenta, el tiempo de respuesta más aún. Interfaces rápidas, accesibles, que no le cobran su complejidad al usuario.",
      },
      {
        title: "Móvil",
        text: "De la idea a la tienda. Publicar una aplicación es cuarenta por ciento de código y sesenta por ciento de todo lo demás. También hago el sesenta.",
      },
      {
        title: "Escritorio y sistemas",
        text: "Rust cuando el rendimiento no es negociable. Binarios nativos que terminan de arrancar antes de que hayas parpadeado.",
      },
      {
        title: "Backend y producción",
        text: "APIs, datos, pipelines. Y sobre todo: el día que se rompe, saber por qué en tres minutos.",
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
      "Un arcade en canvas escrito un domingo por la tarde. Clasificación mundial en PostgreSQL, porque hacía falta una excusa para enchufar una base de datos.",
    gamePlay: "Lanzar el juego",
    items: [
      {
        text: "Un generador de portfolios que agrega GitHub, LinkedIn y Behance. Doscientos portfolios creados.",
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
    title: "El perfeccionismo, vuelto útil.",
    lead: "No la búsqueda de un código abstractamente perfecto. Una exigencia concreta: entender el problema antes de atacarlo, y entregar algo de lo que seguir estando orgulloso seis meses después.",
    quote: "No llamo terminado a lo que solo funciona en mi máquina.",
    principles: [
      {
        title: "Pensar en sistemas",
        text: "Interfaz, arquitectura y explotación son el mismo tema. Separarlos solo aplaza el problema.",
      },
      {
        title: "Construir para lo real",
        text: "La seguridad, los errores y los casos límite forman parte del producto. No del acabado.",
      },
      {
        title: "Pulir lo esencial",
        text: "La precisión se nota sobre todo en los detalles que el usuario ya no necesita percibir.",
      },
    ],
    journeyLabel: "TRAYECTORIA",
    journeyTitle:
      "Del desarrollo web a la construcción de un producto de escritorio de código abierto.",
    journey: [
      {
        date: "2022 — 2024",
        title: "ETNA · Grado en informática",
        text: "Base de ingeniería, aprendizaje por proyectos, y el descubrimiento de que entregar es un oficio en sí mismo.",
      },
      {
        date: "2023 — 2024",
        title: "Mes Allocs · Desarrollador full-stack",
        text: "Producto web, back-office, trabajo en equipo y los primeros usuarios reales detrás del código.",
      },
      {
        date: "2024 — hoy",
        title: "Tkorp · Desarrollador full-stack y móvil",
        text: "Pulse, del prototipo a la producción y a la Play Store. El paso de «funciona» a «aguanta».",
      },
      {
        date: "2025 — 2026",
        title: "ETNA · Máster en informática",
        text: "Arquitectura de software y gestión de proyectos complejos, en paralelo a la alternancia.",
      },
      {
        date: "2026 — hoy",
        title: "QoreDB · Fundador e ingeniero",
        text: "Un producto de escritorio de código abierto en Rust y Tauri. Mi primera respuesta completa a un problema que tenía.",
      },
    ],
    now: "En curso",
  },
  contact: {
    index: "06 / LO QUE SIGUE",
    lines: ["TIENES UN PRODUCTO *ambicioso*.", "CONSTRUYÁMOSLO *bien*."],
    lead: "Busco un equipo exigente, temas enteros, y personas que no tengan miedo de rehacer algo una vez que el problema se entiende mejor.",
    emailLabel: "Escríbeme",
    cvLabel: "Currículum",
    location: "París · Francia · Remoto",
    availability: "Disponible a partir de noviembre de 2026",
    social: "En otros sitios",
  },
  footer: {
    note: "Diseñado y desarrollado en París.",
    built: "Next.js, CSS escrito a mano, sin plantilla.",
    rights: "Todos los derechos reservados",
    top: "Volver arriba",
  },
};

const de: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
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
    title: "RP // CORE RUNNER",
    subtitle: "Arcade-Übertragung abgefangen",
    intro:
      "Sammle die grünen Kerne, weiche den Meteoren aus und halte so lange wie möglich durch.",
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
    lead: "Web, Mobil, Desktop, Infrastruktur. Ich übernehme Themen ganz — vom ersten Schema bis zu dem Tag, an dem es wirklich läuft, mit echten Nutzenden darauf.",
    ctaWork: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    cv: "Lebenslauf herunterladen",
    scroll: "Scrollen",
    statusLabel: "Status",
    status: "Verfügbar — November 2026",
    localTime: "Ortszeit",
  },
  ticker: [
    "QOREDB",
    "10 000 DOWNLOADS",
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
      "Die meiste Software, die ich täglich benutze, ist in Ordnung. Selten mehr. Lange habe ich darauf gewartet, dass jemand sie repariert. Dann **habe ich aufgehört zu warten**.",
      "QoreDB entstand aus einem sehr konkreten Ärgernis: ein Datenbank-Client, der langsam und unwirsch war und mich eine Produktionstabelle leeren ließ, ohne je zu fragen, ob ich sicher sei. Zehntausend Downloads später war **der Ärger offensichtlich geteilt**.",
      "Ungefähr so arbeite ich. Ich beginne bei einem konkreten Unbehagen, gehe zurück bis zur Ursache und lasse nicht los, bevor **das Problem verschwunden ist** — nicht bloß umgangen.",
    ],
    quote:
      "Ein fertiges Produkt ist kein Produkt, das kompiliert. Es ist ein Produkt, zu dem nichts mehr zu sagen bleibt.",
  },
  stats: [
    { value: "10 000+", label: "QoreDB-Downloads" },
    { value: "60+", label: "öffentliche Repositories" },
    { value: "4", label: "beherrschte Ebenen" },
    { value: "3+", label: "Jahre in der Produktion" },
  ],
  work: {
    index: "02 / PROJEKTE",
    title: "Code, der am Ende jemandem genützt hat.",
    lead: "Eine kurze Auswahl. Jedes dieser Produkte begann mit einem Problem, das ich wirklich hatte, und jedes ging in Produktion — mit echten Nutzenden und echten Fehlern um dreiundzwanzig Uhr.",
    featuredLabel: "HAUPTPROJEKT",
    status: "Open Source · aktiv",
    visit: "Website ansehen",
    source: "Code ansehen",
    kicker: "GRÜNDER · PRODUKT · ENGINEERING",
    tagline:
      "Ein Local-first-Datenbank-Client, der SQL und NoSQL in einer Oberfläche vereint, die man nicht schließen möchte.",
    challengeLabel: "DAS PROBLEM",
    challenge:
      "Die vorhandenen Werkzeuge sind mächtig und unwirsch. Die Macht behalten, die Unwirschheit wegwerfen — ohne das Produkt in ein Spielzeug für Anfänger zu verwandeln.",
    buildLabel: "WAS ICH GEBAUT HABE",
    build: [
      "Ein Rust-Kern, eine Tauri-Hülle, fünfzehn Treiber hinter einer einzigen Oberfläche",
      "Ein verschlüsselter Tresor und ausdrückliche Schutzgeländer für Produktionsdatenbanken",
      "Ein Abfrage-Editor, der antwortet, bevor die Taste losgelassen ist",
    ],
    metricLabel: "HEUTE",
    metricValue: "10 000+",
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
          "Deine GitHub-Aktivität, übersetzt in LinkedIn-Beiträge, die man ohne Scham veröffentlicht. Erzeugung, Bearbeitung, Planung.",
        proof: "NestJS · Redis",
      },
      {
        type: "Web · Technische Leitung",
        description:
          "Ein Ökosystem für Kartenspielende: Turniere, Marktplatz und KI-gestützte Analyse. Im Fünferteam geführt, online geliefert.",
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
    lead: "Ich sammle keine Technologien. Ich verbinde sie, bis das Ganze ohne mich steht.",
    items: [
      {
        title: "Oberflächen",
        text: "Das Pixel zählt, die Antwortzeit mehr. Schnelle, zugängliche Oberflächen, die ihre Komplexität nicht den Nutzenden in Rechnung stellen.",
      },
      {
        title: "Mobil",
        text: "Von der Idee bis in den Store. Eine App zu veröffentlichen sind vierzig Prozent Code und sechzig Prozent alles andere. Die sechzig mache ich auch.",
      },
      {
        title: "Desktop & Systeme",
        text: "Rust, wenn Leistung nicht verhandelbar ist. Native Binaries, die fertig gestartet sind, bevor man geblinzelt hat.",
      },
      {
        title: "Backend & Produktion",
        text: "APIs, Daten, Pipelines. Und vor allem: an dem Tag, an dem es bricht, in drei Minuten wissen, warum.",
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
      "Ein Canvas-Arcade, an einem Sonntagnachmittag geschrieben. Weltweite Rangliste auf PostgreSQL, weil es einen Vorwand brauchte, eine Datenbank anzuschließen.",
    gamePlay: "Spiel starten",
    items: [
      {
        text: "Ein Portfolio-Generator, der GitHub, LinkedIn und Behance zusammenführt. Zweihundert erstellte Portfolios.",
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
    title: "Perfektionismus, nutzbar gemacht.",
    lead: "Nicht die Suche nach abstrakt perfektem Code. Ein konkreter Anspruch: das Problem verstehen, bevor man es angeht, und etwas liefern, auf das man auch sechs Monate später noch stolz sein kann.",
    quote: "Fertig nenne ich nicht, was nur auf meinem Rechner läuft.",
    principles: [
      {
        title: "In Systemen denken",
        text: "Oberfläche, Architektur und Betrieb sind dasselbe Thema. Sie zu trennen verschiebt das Problem nur.",
      },
      {
        title: "Für die Wirklichkeit bauen",
        text: "Sicherheit, Fehler und Randfälle gehören zum Produkt. Nicht zum Feinschliff.",
      },
      {
        title: "Das Wesentliche polieren",
        text: "Präzision zeigt sich vor allem in den Details, die Nutzende nicht mehr bemerken müssen.",
      },
    ],
    journeyLabel: "WERDEGANG",
    journeyTitle:
      "Von der Webentwicklung zum Bau eines quelloffenen Desktop-Produkts.",
    journey: [
      {
        date: "2022 — 2024",
        title: "ETNA · Bachelor Informatik",
        text: "Ingenieurgrundlagen, projektbasiertes Lernen und die Entdeckung, dass Ausliefern ein eigenes Handwerk ist.",
      },
      {
        date: "2023 — 2024",
        title: "Mes Allocs · Full-Stack-Entwickler",
        text: "Webprodukt, Backoffice, Teamarbeit und die ersten echten Nutzenden hinter dem Code.",
      },
      {
        date: "2024 — heute",
        title: "Tkorp · Full-Stack- & Mobile-Entwickler",
        text: "Pulse, vom Prototyp bis in die Produktion und in den Play Store. Der Schritt von „es läuft“ zu „es hält“.",
      },
      {
        date: "2025 — 2026",
        title: "ETNA · Master of Science Informatik",
        text: "Softwarearchitektur und Steuerung komplexer Projekte, parallel zur dualen Ausbildung.",
      },
      {
        date: "2026 — heute",
        title: "QoreDB · Gründer & Ingenieur",
        text: "Ein quelloffenes Desktop-Produkt in Rust und Tauri. Meine erste vollständige Antwort auf ein Problem, das ich hatte.",
      },
    ],
    now: "Laufend",
  },
  contact: {
    index: "06 / WIE ES WEITERGEHT",
    lines: ["SIE HABEN EIN *ehrgeiziges* PRODUKT.", "BAUEN WIR ES *richtig*."],
    lead: "Ich suche ein anspruchsvolles Team, ganze Themen und Menschen, die keine Angst davor haben, etwas neu zu machen, sobald das Problem besser verstanden ist.",
    emailLabel: "Schreiben Sie mir",
    cvLabel: "Lebenslauf",
    location: "Paris · Frankreich · Remote",
    availability: "Verfügbar ab November 2026",
    social: "Anderswo",
  },
  footer: {
    note: "In Paris entworfen und entwickelt.",
    built: "Next.js, handgeschriebenes CSS, kein Template.",
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
