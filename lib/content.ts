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

type JourneyItem = {
  date: string;
  title: string;
  text: string;
};

export type PortfolioContent = {
  meta: { title: string; description: string; ogDescription: string };
  aria: {
    top: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    github: string;
    language: string;
    theme: string;
    proof: string;
    qoreImage: string;
    qoreTech: string;
    discover: string;
    projectPreview: string;
    systemMap: string;
    expandMap: string;
    closeMap: string;
    pauseMap: string;
    playMap: string;
    resetMap: string;
    selectMapNode: string;
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
  nav: { work: string; expertise: string; about: string; contact: string };
  hero: {
    role: string;
    location: string;
    before: string;
    accent: string;
    after: string;
    intro: string;
    projects: string;
    talk: string;
    now: string;
    currentRole: string;
  };
  proof: [string, string, string, string];
  work: {
    index: string;
    title: string;
    intro: string;
    featured: string;
    active: string;
    github: string;
    qoreIntro: string;
    challenge: string;
    challengeText: string;
    built: string;
    bullets: [string, string, string];
    today: string;
    downloads: string;
    projects: [Project, Project, Project];
    archiveText: string;
    archiveLink: string;
  };
  expertise: {
    index: string;
    title: string;
    intro: string;
    cards: [Card, Card, Card, Card];
    console: [string, string, string, string];
  };
  about: {
    index: string;
    title: string;
    intro: string;
    quote: string;
    principles: [Card, Card, Card];
    journeyIndex: string;
    journeyTitle: string;
    journey: [JourneyItem, JourneyItem, JourneyItem, JourneyItem, JourneyItem];
  };
  contact: {
    index: string;
    title: string;
    titleAccent: string;
    intro: string;
    github: string;
    location: string;
    availability: string;
  };
  footer: string;
};

const fr: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
    description:
      "Développeur full-stack à Paris. Je conçois et livre des produits web, mobile et desktop, de l’architecture à la production. Créateur de QoreDB.",
    ogDescription:
      "Web, mobile, desktop et infrastructure. Des produits conçus de bout en bout.",
  },
  aria: {
    top: "Retour en haut",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    github: "Profil GitHub de Raphaël",
    language: "Choisir la langue",
    theme: "Changer de thème",
    proof: "Quelques repères",
    qoreImage: "Table de données et explorateur de schéma dans QoreDB",
    qoreTech: "Technologies QoreDB",
    discover: "Découvrir",
    projectPreview: "Aperçu du projet",
    systemMap: "Carte de mon expertise technique",
    expandMap: "Agrandir la carte d’expertise",
    closeMap: "Fermer la carte agrandie",
    pauseMap: "Mettre les flux en pause",
    playMap: "Relancer les flux",
    resetMap: "Afficher la vue d’ensemble",
    selectMapNode: "Afficher le détail",
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
  nav: {
    work: "Projets",
    expertise: "Expertise",
    about: "Approche",
    contact: "Contact",
  },
  hero: {
    role: "FULL-STACK PRODUCT ENGINEER",
    location: "PARIS · FRANCE",
    before: "Je transforme des systèmes complexes en produits",
    accent: "simples",
    after: "à utiliser.",
    intro:
      "Web, mobile, desktop et infrastructure. Je conçois des produits de bout en bout, du premier schéma jusqu’à la production.",
    projects: "Voir mes projets",
    talk: "Discutons",
    now: "Actuellement",
    currentRole: "Développeur full-stack & mobile chez Tkorp",
  },
  proof: [
    "surfaces maîtrisées",
    "téléchargements QoreDB",
    "années d’expérience professionnelle",
    "produits livrés en production",
  ],
  work: {
    index: "01 / PROJETS SÉLECTIONNÉS",
    title: "Le code compte. Le produit livré davantage.",
    intro:
      "Une sélection resserrée de projets où j’ai dû penser interface, architecture, données et mise en production comme un seul sujet.",
    featured: "PROJET PHARE / 001",
    active: "Open source · actif",
    github: "Voir sur GitHub",
    qoreIntro:
      "Un client desktop local-first qui réunit les bases SQL et NoSQL dans une interface rapide, moderne et sécurisée.",
    challenge: "LE DÉFI",
    challengeText:
      "Remplacer des outils puissants mais datés par une expérience cohérente, native et sûre — sans cacher les besoins avancés.",
    built: "CE QUE J’AI CONSTRUIT",
    bullets: [
      "Architecture desktop Rust / Tauri",
      "Expérience unifiée pour 15 drivers",
      "Garde-fous production & coffre sécurisé",
    ],
    today: "AUJOURD’HUI",
    downloads: "téléchargements",
    projects: [
      {
        type: "Mobile · B2C",
        description:
          "Une application de développement personnel gamifiée, cofondée et menée du concept aux stores.",
        proof: "+150 bêta-testeurs",
      },
      {
        type: "SaaS · B2B",
        description:
          "Un produit qui transforme l’activité GitHub des développeurs en contenus LinkedIn prêts à publier.",
        proof: "Produit full-stack",
      },
      {
        type: "Web · Lead technique",
        description:
          "Un écosystème pour jeux de cartes : tournois, marketplace et outils d’analyse assistés par IA.",
        proof: "Projet mené en équipe",
      },
    ],
    archiveText:
      "Beaucoup d’autres explorations : photographie, IA, extensions, moteurs de recherche et applications mobiles.",
    archiveLink: "Explorer mes 60+ dépôts",
  },
  expertise: {
    index: "02 / EXPERTISE",
    title: "Full-stack, au sens littéral.",
    intro:
      "Je ne collectionne pas les technologies. Je les relie pour construire un produit cohérent, observable et maintenable.",
    cards: [
      {
        title: "Produits web",
        text: "Des interfaces rapides, accessibles et structurées autour du vrai usage.",
      },
      {
        title: "Mobile",
        text: "Des applications cross-platform pensées jusqu’à la publication sur les stores.",
      },
      {
        title: "Desktop & systèmes",
        text: "Des expériences natives qui assument la complexité sans la transmettre à l’utilisateur.",
      },
      {
        title: "Backend & DevOps",
        text: "Des API, données et pipelines suffisamment solides pour survivre au passage en production.",
      },
    ],
    console: ["frontend", "backend", "données", "livraison"],
  },
  about: {
    index: "03 / APPROCHE",
    title: "Le perfectionnisme, rendu utile.",
    intro:
      "Pas la quête d’un code abstraitement parfait. Une exigence concrète : comprendre le problème, réduire les angles morts et livrer quelque chose dont on peut être fier.",
    quote:
      "« Je n’appelle pas fini ce qui fonctionne seulement sur ma machine. »",
    principles: [
      {
        title: "Penser système",
        text: "Je relie expérience, architecture et exploitation dès le départ.",
      },
      {
        title: "Construire pour le réel",
        text: "Sécurité, erreurs et cas limites font partie du produit, pas de la finition.",
      },
      {
        title: "Polir l’essentiel",
        text: "La précision se voit dans les détails que l’utilisateur n’a plus à remarquer.",
      },
    ],
    journeyIndex: "PARCOURS / SIGNAL FORT",
    journeyTitle:
      "Du développement web à la construction d’un produit desktop open source.",
    journey: [
      {
        date: "2022—2024",
        title: "ETNA · Bachelor informatique",
        text: "Socle d’ingénierie et apprentissage par projets.",
      },
      {
        date: "2023—2024",
        title: "Mes Allocs · Full-stack developer",
        text: "Produit web, back-office et travail en équipe.",
      },
      {
        date: "2024—auj.",
        title: "Tkorp · Full-stack & mobile developer",
        text: "Pulse, du POC à la production et au Play Store.",
      },
      {
        date: "2025—2026",
        title: "ETNA · Master of Science informatique",
        text: "Architecture logicielle et pilotage de projets complexes.",
      },
      {
        date: "2026—auj.",
        title: "QoreDB · Founder & engineer",
        text: "Produit desktop open source, Rust, Tauri et data.",
      },
    ],
  },
  contact: {
    index: "04 / PROCHAIN CHAPITRE",
    title: "Vous avez un produit ambitieux.",
    titleAccent: "Construisons-le correctement.",
    intro:
      "Je recherche une équipe exigeante où je peux prendre en charge des sujets complets, apprendre vite et faire progresser le produit.",
    github: "Voir mon GitHub",
    location: "Paris · France · Remote",
    availability: "Disponible à partir de novembre 2026",
  },
  footer: "Conçu et développé avec intention.",
};

const en: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
    description:
      "Full-stack developer in Paris. I design and ship web, mobile and desktop products, from architecture to production. Creator of QoreDB.",
    ogDescription:
      "Web, mobile, desktop and infrastructure. Products built end to end.",
  },
  aria: {
    top: "Back to top",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    github: "Raphaël's GitHub profile",
    language: "Choose language",
    theme: "Change theme",
    proof: "Key figures",
    qoreImage: "Data table and schema explorer in QoreDB",
    qoreTech: "QoreDB technologies",
    discover: "Discover",
    projectPreview: "Project preview",
    systemMap: "Map of my technical expertise",
    expandMap: "Expand expertise map",
    closeMap: "Close expanded map",
    pauseMap: "Pause data flows",
    playMap: "Resume data flows",
    resetMap: "Show overview",
    selectMapNode: "Show details",
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
  nav: {
    work: "Work",
    expertise: "Expertise",
    about: "Approach",
    contact: "Contact",
  },
  hero: {
    role: "FULL-STACK PRODUCT ENGINEER",
    location: "PARIS · FRANCE",
    before: "I turn complex systems into products that feel",
    accent: "simple",
    after: "to use.",
    intro:
      "Web, mobile, desktop and infrastructure. I build products end to end, from the first schema to production.",
    projects: "View my work",
    talk: "Let's talk",
    now: "Currently",
    currentRole: "Full-stack & mobile developer at Tkorp",
  },
  proof: [
    "product surfaces",
    "QoreDB downloads",
    "years of professional experience",
    "products shipped to production",
  ],
  work: {
    index: "01 / SELECTED WORK",
    title: "Code matters. The product shipped matters more.",
    intro:
      "A focused selection of projects where interface, architecture, data and delivery had to work as one system.",
    featured: "FEATURED PROJECT / 001",
    active: "Open source · active",
    github: "View on GitHub",
    qoreIntro:
      "A local-first desktop client that brings SQL and NoSQL databases into one fast, modern and secure interface.",
    challenge: "THE CHALLENGE",
    challengeText:
      "Replace powerful but dated tools with a coherent, native and safe experience — without hiding advanced needs.",
    built: "WHAT I BUILT",
    bullets: [
      "Rust / Tauri desktop architecture",
      "One experience across 15 drivers",
      "Production guardrails & secure vault",
    ],
    today: "TODAY",
    downloads: "downloads",
    projects: [
      {
        type: "Mobile · B2C",
        description:
          "A gamified personal development app, co-founded and taken from concept to the app stores.",
        proof: "150+ beta testers",
      },
      {
        type: "SaaS · B2B",
        description:
          "A product that turns developers' GitHub activity into LinkedIn content ready to publish.",
        proof: "Full-stack product",
      },
      {
        type: "Web · Technical lead",
        description:
          "A trading-card ecosystem with tournaments, a marketplace and AI-assisted analysis tools.",
        proof: "Team-led project",
      },
    ],
    archiveText:
      "Many more explorations: photography, AI, browser extensions, search engines and mobile apps.",
    archiveLink: "Explore my 60+ repositories",
  },
  expertise: {
    index: "02 / EXPERTISE",
    title: "Full-stack, literally.",
    intro:
      "I do not collect technologies. I connect them to build products that are coherent, observable and maintainable.",
    cards: [
      {
        title: "Web products",
        text: "Fast, accessible interfaces structured around real user needs.",
      },
      {
        title: "Mobile",
        text: "Cross-platform apps designed all the way through store publication.",
      },
      {
        title: "Desktop & systems",
        text: "Native experiences that handle complexity without passing it on to users.",
      },
      {
        title: "Backend & DevOps",
        text: "APIs, data and pipelines strong enough to survive production.",
      },
    ],
    console: ["frontend", "backend", "data", "delivery"],
  },
  about: {
    index: "03 / APPROACH",
    title: "Perfectionism, made useful.",
    intro:
      "Not the pursuit of abstractly perfect code. A practical standard: understand the problem, reduce blind spots and ship something worth being proud of.",
    quote: "“I do not call it done if it only works on my machine.”",
    principles: [
      {
        title: "Think in systems",
        text: "I connect experience, architecture and operations from day one.",
      },
      {
        title: "Build for reality",
        text: "Security, errors and edge cases are part of the product, not the polish.",
      },
      {
        title: "Polish what matters",
        text: "Precision lives in the details users no longer have to notice.",
      },
    ],
    journeyIndex: "JOURNEY / STRONG SIGNAL",
    journeyTitle:
      "From web development to building an open-source desktop product.",
    journey: [
      {
        date: "2022—2024",
        title: "ETNA · Bachelor's in Computer Science",
        text: "Engineering foundations and project-based learning.",
      },
      {
        date: "2023—2024",
        title: "Mes Allocs · Full-stack developer",
        text: "Web product, back office and teamwork.",
      },
      {
        date: "2024—now",
        title: "Tkorp · Full-stack & mobile developer",
        text: "Pulse, from proof of concept to production and Play Store.",
      },
      {
        date: "2025—2026",
        title: "ETNA · Master of Science in Computer Science",
        text: "Software architecture and complex project leadership.",
      },
      {
        date: "2026—now",
        title: "QoreDB · Founder & engineer",
        text: "Open-source desktop product built with Rust, Tauri and data systems.",
      },
    ],
  },
  contact: {
    index: "04 / NEXT CHAPTER",
    title: "You have an ambitious product.",
    titleAccent: "Let's build it properly.",
    intro:
      "I am looking for a demanding team where I can own complete topics, learn fast and move the product forward.",
    github: "View my GitHub",
    location: "Paris · France · Remote",
    availability: "Available from November 2026",
  },
  footer: "Designed and developed with intention.",
};

const es: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
    description:
      "Desarrollador full-stack en París. Diseño y entrego productos web, móviles y de escritorio, desde la arquitectura hasta producción. Creador de QoreDB.",
    ogDescription:
      "Web, móvil, escritorio e infraestructura. Productos construidos de principio a fin.",
  },
  aria: {
    top: "Volver arriba",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    openMenu: "Abrir menú",
    github: "Perfil de GitHub de Raphaël",
    language: "Elegir idioma",
    theme: "Cambiar tema",
    proof: "Cifras clave",
    qoreImage: "Tabla de datos y explorador de esquemas en QoreDB",
    qoreTech: "Tecnologías de QoreDB",
    discover: "Descubrir",
    projectPreview: "Vista previa del proyecto",
    systemMap: "Mapa de mi experiencia técnica",
    expandMap: "Ampliar el mapa de experiencia",
    closeMap: "Cerrar el mapa ampliado",
    pauseMap: "Pausar los flujos",
    playMap: "Reanudar los flujos",
    resetMap: "Mostrar la vista general",
    selectMapNode: "Mostrar el detalle",
  },
  game: {
    title: "RP // CORE RUNNER",
    subtitle: "Transmisión arcade interceptada",
    intro:
      "Recoge los núcleos verdes, esquiva meteoritos y sobrevive todo lo posible.",
    start: "Iniciar misión",
    close: "Salir del juego",
    pause: "Pausar",
    resume: "Continuar",
    score: "Puntuación",
    best: "Récord",
    lives: "Vidas",
    gameOver: "Señal perdida",
    finalScore: "Puntuación final",
    replay: "Jugar de nuevo",
    controls: "← → / A D / deslizar",
    objective: "Núcleo +100 · Meteorito −1 vida",
    leaderboard: "Clasificación",
    emptyLeaderboard: "Aún no hay puntuaciones",
    nickname: "Tu alias (opcional)",
    nicknamePlaceholder: "PILOTO",
    saveScore: "Guardar",
    scoreSaved: "Puntuación guardada",
    closeLeaderboard: "Cerrar clasificación",
    leaderboardUnavailable: "Clasificación no disponible temporalmente",
    savingScore: "Guardando…",
    saveScoreError: "No se pudo guardar la puntuación",
  },
  nav: {
    work: "Proyectos",
    expertise: "Experiencia",
    about: "Enfoque",
    contact: "Contacto",
  },
  hero: {
    role: "FULL-STACK PRODUCT ENGINEER",
    location: "PARÍS · FRANCIA",
    before: "Transformo sistemas complejos en productos",
    accent: "fáciles",
    after: "de usar.",
    intro:
      "Web, móvil, escritorio e infraestructura. Construyo productos de principio a fin, desde el primer esquema hasta producción.",
    projects: "Ver mis proyectos",
    talk: "Hablemos",
    now: "Actualmente",
    currentRole: "Desarrollador full-stack y móvil en Tkorp",
  },
  proof: [
    "superficies de producto",
    "descargas de QoreDB",
    "años de experiencia profesional",
    "productos llevados a producción",
  ],
  work: {
    index: "01 / PROYECTOS SELECCIONADOS",
    title: "El código importa. El producto entregado, aún más.",
    intro:
      "Una selección de proyectos donde interfaz, arquitectura, datos y producción debían funcionar como un único sistema.",
    featured: "PROYECTO DESTACADO / 001",
    active: "Open source · activo",
    github: "Ver en GitHub",
    qoreIntro:
      "Un cliente de escritorio local-first que reúne bases SQL y NoSQL en una interfaz rápida, moderna y segura.",
    challenge: "EL RETO",
    challengeText:
      "Sustituir herramientas potentes pero anticuadas por una experiencia coherente, nativa y segura, sin ocultar las necesidades avanzadas.",
    built: "LO QUE CONSTRUÍ",
    bullets: [
      "Arquitectura de escritorio Rust / Tauri",
      "Una experiencia para 15 drivers",
      "Protecciones de producción y bóveda segura",
    ],
    today: "HOY",
    downloads: "descargas",
    projects: [
      {
        type: "Móvil · B2C",
        description:
          "Una app gamificada de desarrollo personal, cofundada y llevada desde el concepto hasta las stores.",
        proof: "+150 beta testers",
      },
      {
        type: "SaaS · B2B",
        description:
          "Un producto que transforma la actividad GitHub de los desarrolladores en contenido de LinkedIn listo para publicar.",
        proof: "Producto full-stack",
      },
      {
        type: "Web · Líder técnico",
        description:
          "Un ecosistema de cartas coleccionables con torneos, marketplace y herramientas de análisis asistidas por IA.",
        proof: "Proyecto liderado en equipo",
      },
    ],
    archiveText:
      "Muchas más exploraciones: fotografía, IA, extensiones, motores de búsqueda y aplicaciones móviles.",
    archiveLink: "Explorar mis más de 60 repositorios",
  },
  expertise: {
    index: "02 / EXPERIENCIA",
    title: "Full-stack, literalmente.",
    intro:
      "No colecciono tecnologías. Las conecto para construir productos coherentes, observables y mantenibles.",
    cards: [
      {
        title: "Productos web",
        text: "Interfaces rápidas y accesibles, estructuradas alrededor del uso real.",
      },
      {
        title: "Móvil",
        text: "Aplicaciones multiplataforma pensadas hasta su publicación en las stores.",
      },
      {
        title: "Escritorio y sistemas",
        text: "Experiencias nativas que gestionan la complejidad sin trasladarla al usuario.",
      },
      {
        title: "Backend y DevOps",
        text: "APIs, datos y pipelines lo bastante sólidos para producción.",
      },
    ],
    console: ["frontend", "backend", "datos", "entrega"],
  },
  about: {
    index: "03 / ENFOQUE",
    title: "Perfeccionismo útil.",
    intro:
      "No busco un código perfecto en abstracto. Busco entender el problema, reducir los puntos ciegos y entregar algo de lo que sentirse orgulloso.",
    quote:
      "« No considero terminado algo que solo funciona en mi máquina. »",
    principles: [
      {
        title: "Pensar en sistemas",
        text: "Conecto experiencia, arquitectura y operaciones desde el inicio.",
      },
      {
        title: "Construir para la realidad",
        text: "Seguridad, errores y casos límite forman parte del producto.",
      },
      {
        title: "Pulir lo esencial",
        text: "La precisión está en los detalles que el usuario ya no tiene que notar.",
      },
    ],
    journeyIndex: "TRAYECTORIA / SEÑAL FUERTE",
    journeyTitle:
      "Del desarrollo web a la construcción de un producto desktop open source.",
    journey: [
      {
        date: "2022—2024",
        title: "ETNA · Grado en Informática",
        text: "Fundamentos de ingeniería y aprendizaje por proyectos.",
      },
      {
        date: "2023—2024",
        title: "Mes Allocs · Full-stack developer",
        text: "Producto web, back office y trabajo en equipo.",
      },
      {
        date: "2024—hoy",
        title: "Tkorp · Full-stack & mobile developer",
        text: "Pulse, del POC a producción y Play Store.",
      },
      {
        date: "2025—2026",
        title: "ETNA · Master of Science en Informática",
        text: "Arquitectura de software y dirección de proyectos complejos.",
      },
      {
        date: "2026—hoy",
        title: "QoreDB · Founder & engineer",
        text: "Producto desktop open source con Rust, Tauri y sistemas de datos.",
      },
    ],
  },
  contact: {
    index: "04 / PRÓXIMO CAPÍTULO",
    title: "Tienes un producto ambicioso.",
    titleAccent: "Construyámoslo bien.",
    intro:
      "Busco un equipo exigente donde asumir temas completos, aprender rápido y hacer avanzar el producto.",
    github: "Ver mi GitHub",
    location: "París · Francia · Remoto",
    availability: "Disponible a partir de noviembre de 2026",
  },
  footer: "Diseñado y desarrollado con intención.",
};

const de: PortfolioContent = {
  meta: {
    title: "Raphaël Plassart — Full-stack Product Engineer",
    description:
      "Full-Stack-Entwickler in Paris. Ich entwickle Web-, Mobile- und Desktop-Produkte von der Architektur bis zur Produktion. Schöpfer von QoreDB.",
    ogDescription:
      "Web, Mobile, Desktop und Infrastruktur. Produkte von Anfang bis Ende.",
  },
  aria: {
    top: "Nach oben",
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openMenu: "Menü öffnen",
    github: "Raphaëls GitHub-Profil",
    language: "Sprache wählen",
    theme: "Theme wechseln",
    proof: "Kennzahlen",
    qoreImage: "Datentabelle und Schema-Explorer in QoreDB",
    qoreTech: "QoreDB-Technologien",
    discover: "Entdecken",
    projectPreview: "Projektvorschau",
    systemMap: "Karte meiner technischen Expertise",
    expandMap: "Expertise-Karte vergrößern",
    closeMap: "Vergrößerte Karte schließen",
    pauseMap: "Datenflüsse pausieren",
    playMap: "Datenflüsse fortsetzen",
    resetMap: "Übersicht anzeigen",
    selectMapNode: "Details anzeigen",
  },
  game: {
    title: "RP // CORE RUNNER",
    subtitle: "Arcade-Übertragung abgefangen",
    intro:
      "Sammle grüne Kerne, weiche Meteoriten aus und überlebe so lange wie möglich.",
    start: "Mission starten",
    close: "Spiel verlassen",
    pause: "Pausieren",
    resume: "Fortsetzen",
    score: "Punkte",
    best: "Rekord",
    lives: "Leben",
    gameOver: "Signal verloren",
    finalScore: "Endstand",
    replay: "Nochmal spielen",
    controls: "← → / A D / ziehen",
    objective: "Kern +100 · Meteorit −1 Leben",
    leaderboard: "Bestenliste",
    emptyLeaderboard: "Noch keine Punkte gespeichert",
    nickname: "Dein Name (optional)",
    nicknamePlaceholder: "PILOT",
    saveScore: "Speichern",
    scoreSaved: "Punktzahl gespeichert",
    closeLeaderboard: "Bestenliste schließen",
    leaderboardUnavailable: "Bestenliste vorübergehend nicht verfügbar",
    savingScore: "Wird gespeichert…",
    saveScoreError: "Punktzahl konnte nicht gespeichert werden",
  },
  nav: {
    work: "Projekte",
    expertise: "Expertise",
    about: "Ansatz",
    contact: "Kontakt",
  },
  hero: {
    role: "FULL-STACK PRODUCT ENGINEER",
    location: "PARIS · FRANKREICH",
    before: "Ich verwandle komplexe Systeme in",
    accent: "einfach",
    after: "nutzbare Produkte.",
    intro:
      "Web, Mobile, Desktop und Infrastruktur. Ich entwickle Produkte durchgängig – vom ersten Schema bis zur Produktion.",
    projects: "Projekte ansehen",
    talk: "Kontakt aufnehmen",
    now: "Aktuell",
    currentRole: "Full-Stack- & Mobile-Entwickler bei Tkorp",
  },
  proof: [
    "Produktbereiche",
    "QoreDB-Downloads",
    "Jahre Berufserfahrung",
    "Produkte in Produktion",
  ],
  work: {
    index: "01 / AUSGEWÄHLTE PROJEKTE",
    title: "Code zählt. Das gelieferte Produkt noch mehr.",
    intro:
      "Eine fokussierte Auswahl an Projekten, bei denen Interface, Architektur, Daten und Auslieferung als ein System funktionieren mussten.",
    featured: "LEITPROJEKT / 001",
    active: "Open Source · aktiv",
    github: "Auf GitHub ansehen",
    qoreIntro:
      "Ein Local-First-Desktop-Client, der SQL- und NoSQL-Datenbanken in einer schnellen, modernen und sicheren Oberfläche vereint.",
    challenge: "DIE HERAUSFORDERUNG",
    challengeText:
      "Leistungsstarke, aber veraltete Werkzeuge durch eine konsistente, native und sichere Erfahrung ersetzen – ohne fortgeschrittene Anforderungen zu verstecken.",
    built: "WAS ICH ENTWICKELT HABE",
    bullets: [
      "Desktop-Architektur mit Rust / Tauri",
      "Eine Oberfläche für 15 Treiber",
      "Produktionsschutz & sicherer Tresor",
    ],
    today: "HEUTE",
    downloads: "Downloads",
    projects: [
      {
        type: "Mobile · B2C",
        description:
          "Eine gamifizierte App zur Persönlichkeitsentwicklung, vom Konzept bis in die App Stores mitgegründet.",
        proof: "150+ Beta-Tester",
      },
      {
        type: "SaaS · B2B",
        description:
          "Ein Produkt, das GitHub-Aktivitäten von Entwicklern in veröffentlichungsfertige LinkedIn-Inhalte verwandelt.",
        proof: "Full-Stack-Produkt",
      },
      {
        type: "Web · Technical Lead",
        description:
          "Ein Sammelkarten-Ökosystem mit Turnieren, Marketplace und KI-gestützten Analysewerkzeugen.",
        proof: "Im Team geleitet",
      },
    ],
    archiveText:
      "Viele weitere Experimente: Fotografie, KI, Browser-Erweiterungen, Suchmaschinen und Mobile Apps.",
    archiveLink: "Meine 60+ Repositories entdecken",
  },
  expertise: {
    index: "02 / EXPERTISE",
    title: "Full-Stack, wortwörtlich.",
    intro:
      "Ich sammle keine Technologien. Ich verbinde sie zu kohärenten, beobachtbaren und wartbaren Produkten.",
    cards: [
      {
        title: "Web-Produkte",
        text: "Schnelle, barrierefreie Interfaces rund um reale Nutzerbedürfnisse.",
      },
      {
        title: "Mobile",
        text: "Plattformübergreifende Apps bis zur Veröffentlichung in den Stores.",
      },
      {
        title: "Desktop & Systeme",
        text: "Native Erlebnisse, die Komplexität bewältigen, ohne sie an Nutzer weiterzugeben.",
      },
      {
        title: "Backend & DevOps",
        text: "APIs, Daten und Pipelines, die der Produktion standhalten.",
      },
    ],
    console: ["frontend", "backend", "daten", "auslieferung"],
  },
  about: {
    index: "03 / ANSATZ",
    title: "Perfektionismus, sinnvoll eingesetzt.",
    intro:
      "Nicht die Suche nach abstrakt perfektem Code. Sondern der Anspruch, das Problem zu verstehen, blinde Flecken zu reduzieren und etwas Wertvolles auszuliefern.",
    quote:
      "„Ich nenne nichts fertig, das nur auf meiner Maschine funktioniert.“",
    principles: [
      {
        title: "In Systemen denken",
        text: "Ich verbinde Experience, Architektur und Betrieb von Anfang an.",
      },
      {
        title: "Für die Realität bauen",
        text: "Sicherheit, Fehler und Grenzfälle sind Teil des Produkts.",
      },
      {
        title: "Das Wesentliche verfeinern",
        text: "Präzision zeigt sich in Details, die Nutzer nicht mehr bemerken müssen.",
      },
    ],
    journeyIndex: "WERDEGANG / STARKES SIGNAL",
    journeyTitle:
      "Von der Webentwicklung zum Aufbau eines Open-Source-Desktop-Produkts.",
    journey: [
      {
        date: "2022—2024",
        title: "ETNA · Bachelor Informatik",
        text: "Engineering-Grundlagen und projektbasiertes Lernen.",
      },
      {
        date: "2023—2024",
        title: "Mes Allocs · Full-Stack-Entwickler",
        text: "Webprodukt, Backoffice und Teamarbeit.",
      },
      {
        date: "2024—heute",
        title: "Tkorp · Full-Stack- & Mobile-Entwickler",
        text: "Pulse, vom POC bis zur Produktion und in den Play Store.",
      },
      {
        date: "2025—2026",
        title: "ETNA · Master of Science Informatik",
        text: "Softwarearchitektur und Leitung komplexer Projekte.",
      },
      {
        date: "2026—heute",
        title: "QoreDB · Founder & Engineer",
        text: "Open-Source-Desktop-Produkt mit Rust, Tauri und Datensystemen.",
      },
    ],
  },
  contact: {
    index: "04 / NÄCHSTES KAPITEL",
    title: "Sie haben ein ambitioniertes Produkt.",
    titleAccent: "Bauen wir es richtig.",
    intro:
      "Ich suche ein anspruchsvolles Team, in dem ich ganzheitliche Themen verantworten, schnell lernen und das Produkt voranbringen kann.",
    github: "Mein GitHub ansehen",
    location: "Paris · Frankreich · Remote",
    availability: "Verfügbar ab November 2026",
  },
  footer: "Mit Absicht gestaltet und entwickelt.",
};

export const content: Record<Locale, PortfolioContent> = { fr, en, es, de };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale) {
  return locale === "fr" ? "/" : `/${locale}`;
}
