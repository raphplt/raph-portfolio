import type { Locale } from "@/lib/content";
import type { CaseStudySlug } from "@/lib/projects";

// Chaque chiffre et chaque fait de ces pages vient d'une source vérifiable :
// dépôts GitHub, README, CV. Rien d'inventé : mieux vaut une page courte.

export type CaseSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type CaseStudyCopy = {
  tagline: string;
  summary: string;
  role: string;
  period: string;
  team: string;
  coverAlt: string;
  facts: { value: string; label: string }[];
  sections: CaseSection[];
  captions: string[];
};

export function caseStudyPath(locale: Locale, slug: CaseStudySlug) {
  return locale === "fr" ? `/projets/${slug}` : `/${locale}/projects/${slug}`;
}

export const caseStudies: Record<CaseStudySlug, Record<Locale, CaseStudyCopy>> = {
  qoredb: {
    fr: {
      tagline:
        "Un client de bases de données local-first qui réunit SQL et NoSQL dans la même fenêtre.",
      summary:
        "Un produit desktop open source, conçu, développé, distribué et commercialisé seul, depuis la première ligne de Rust jusqu’aux clients payants de l’offre Pro.",
      role: "Fondateur · conception, développement, distribution",
      period: "Depuis janvier 2026",
      team: "Seul, en open source",
      coverAlt: "L’éditeur SQL de QoreDB et sa grille de résultats",
      facts: [
        { value: "15 000+", label: "téléchargements" },
        { value: "34", label: "bases de données supportées" },
        { value: "39", label: "versions publiées en huit mois" },
        { value: "140+", label: "étoiles sur GitHub" },
      ],
      sections: [
        {
          title: "Le point de départ",
          paragraphs: [
            "DBeaver, pgAdmin ou phpMyAdmin font le travail. Mais ils sont lents, datés, pleins de boîtes de dialogue d’une autre époque, et ils laissent vider une table de production sans rien demander.",
            "L’objectif de QoreDB : un outil natif et rapide, qui respecte les gens qui savent ce qu’ils font, tout en rendant les erreurs graves difficiles à commettre par accident.",
          ],
        },
        {
          title: "Les choix d’architecture",
          items: [
            "Rust et Tauri plutôt qu’Electron : un binaire léger, un démarrage instantané et une mémoire raisonnable, sur macOS, Windows et Linux.",
            "Un cœur découpé en crates (drivers, moteur de requêtes, SQL, service, CLI, serveur MCP). Chaque base passe par la même interface, ce qui a permis d’en supporter 34 sans réécrire l’application.",
            "Local-first et zéro télémétrie : les identifiants restent dans le trousseau du système, les données et les requêtes ne quittent jamais la machine.",
          ],
        },
        {
          title: "La sécurité comme fonctionnalité",
          paragraphs: [
            "Chaque connexion porte un environnement : dev, staging ou production. Les requêtes dangereuses sont interceptées et, sur une base de production, il faut retaper le nom de la base pour confirmer.",
            "Un mode bac à sable permet de préparer des modifications dans la grille, de relire le SQL généré, puis de l’appliquer ou de l’exporter. Les dégâts en production deviennent difficiles à faire par mégarde.",
          ],
        },
        {
          title: "Du projet au produit",
          paragraphs: [
            "QoreDB est open core : le cœur est sous licence Apache 2.0, les modules avancés (diagramme ER, diff de données, Time Travel…) sont réunis dans une offre Pro sous BUSL-1.1, qui a déjà ses clients payants.",
            "Une version sort environ toutes les deux semaines. Autour du code, il y a aussi un site, une documentation, une roadmap publique et une communauté Discord à faire vivre.",
          ],
        },
      ],
      captions: [
        "Sur une base de production, une requête dangereuse demande de retaper le nom de la base.",
        "Le diagramme ER interactif, ici sur le schéma de TCG Nexus.",
      ],
    },
    en: {
      tagline:
        "A local-first database client that brings SQL and NoSQL together in the same window.",
      summary:
        "An open-source desktop product, designed, built, distributed and sold on my own, from the first line of Rust to the paying customers of the Pro plan.",
      role: "Founder · design, engineering, distribution",
      period: "Since January 2026",
      team: "Solo, in the open",
      coverAlt: "The QoreDB SQL editor and its result grid",
      facts: [
        { value: "15,000+", label: "downloads" },
        { value: "34", label: "supported databases" },
        { value: "39", label: "releases in eight months" },
        { value: "140+", label: "GitHub stars" },
      ],
      sections: [
        {
          title: "Where it started",
          paragraphs: [
            "DBeaver, pgAdmin and phpMyAdmin get the job done. But they are slow, dated, full of dialogs from another era, and happy to let you wipe a production table without asking.",
            "The goal of QoreDB: a fast, native tool that respects people who know what they are doing, while making serious mistakes hard to make by accident.",
          ],
        },
        {
          title: "Architecture choices",
          items: [
            "Rust and Tauri rather than Electron: a small binary, instant startup and reasonable memory use, on macOS, Windows and Linux.",
            "A core split into crates (drivers, query engine, SQL, service, CLI, MCP server). Every database goes through the same interface, which is how it grew to 34 databases without rewriting the app.",
            "Local-first with zero telemetry: credentials stay in the system keychain, and data and queries never leave the machine.",
          ],
        },
        {
          title: "Safety as a feature",
          paragraphs: [
            "Every connection carries an environment: dev, staging or production. Dangerous queries are intercepted, and on a production database you have to type the database name again to confirm.",
            "A sandbox mode lets you stage edits in the grid, review the generated SQL, then apply or export it. Damaging production by accident becomes hard.",
          ],
        },
        {
          title: "From project to product",
          paragraphs: [
            "QoreDB is open core: the core is Apache 2.0, and advanced modules (ER diagram, data diff, Time Travel…) live in a Pro plan under BUSL-1.1 that already has paying customers.",
            "A release ships roughly every two weeks. Around the code there is also a website, documentation, a public roadmap and a Discord community to keep alive.",
          ],
        },
      ],
      captions: [
        "On a production database, a dangerous query asks you to type the database name again.",
        "The interactive ER diagram, here on the TCG Nexus schema.",
      ],
    },
    es: {
      tagline:
        "Un cliente de bases de datos local-first que reúne SQL y NoSQL en la misma ventana.",
      summary:
        "Un producto de escritorio de código abierto, diseñado, desarrollado, distribuido y comercializado en solitario, desde la primera línea de Rust hasta los clientes de pago de la oferta Pro.",
      role: "Fundador · diseño, desarrollo, distribución",
      period: "Desde enero de 2026",
      team: "En solitario, en abierto",
      coverAlt: "El editor SQL de QoreDB y su tabla de resultados",
      facts: [
        { value: "15 000+", label: "descargas" },
        { value: "34", label: "bases de datos compatibles" },
        { value: "39", label: "versiones en ocho meses" },
        { value: "140+", label: "estrellas en GitHub" },
      ],
      sections: [
        {
          title: "El punto de partida",
          paragraphs: [
            "DBeaver, pgAdmin o phpMyAdmin cumplen. Pero son lentos, anticuados, llenos de cuadros de diálogo de otra época, y te dejan vaciar una tabla de producción sin preguntar nada.",
            "El objetivo de QoreDB: una herramienta nativa y rápida, que respete a quien sabe lo que hace, y que haga difícil cometer errores graves por accidente.",
          ],
        },
        {
          title: "Decisiones de arquitectura",
          items: [
            "Rust y Tauri en lugar de Electron: un binario ligero, un arranque instantáneo y una memoria razonable, en macOS, Windows y Linux.",
            "Un núcleo dividido en crates (drivers, motor de consultas, SQL, servicio, CLI, servidor MCP). Cada base pasa por la misma interfaz, lo que permitió llegar a 34 sin reescribir la aplicación.",
            "Local-first y cero telemetría: las credenciales se quedan en el llavero del sistema; los datos y las consultas nunca salen de la máquina.",
          ],
        },
        {
          title: "La seguridad como funcionalidad",
          paragraphs: [
            "Cada conexión lleva un entorno: dev, staging o producción. Las consultas peligrosas se interceptan y, en una base de producción, hay que volver a escribir su nombre para confirmar.",
            "Un modo sandbox permite preparar cambios en la tabla, revisar el SQL generado y luego aplicarlo o exportarlo. Romper producción por descuido se vuelve difícil.",
          ],
        },
        {
          title: "Del proyecto al producto",
          paragraphs: [
            "QoreDB es open core: el núcleo está bajo licencia Apache 2.0 y los módulos avanzados (diagrama ER, diff de datos, Time Travel…) forman una oferta Pro bajo BUSL-1.1 que ya tiene clientes de pago.",
            "Sale una versión cada dos semanas aproximadamente. Alrededor del código hay también un sitio, una documentación, una hoja de ruta pública y una comunidad en Discord que mantener viva.",
          ],
        },
      ],
      captions: [
        "En una base de producción, una consulta peligrosa pide volver a escribir el nombre de la base.",
        "El diagrama ER interactivo, aquí sobre el esquema de TCG Nexus.",
      ],
    },
    de: {
      tagline:
        "Ein Local-first-Datenbank-Client, der SQL und NoSQL in einem Fenster vereint.",
      summary:
        "Ein quelloffenes Desktop-Produkt, allein konzipiert, entwickelt, verteilt und vermarktet, von der ersten Zeile Rust bis zu den zahlenden Kunden des Pro-Angebots.",
      role: "Gründer · Konzeption, Entwicklung, Vertrieb",
      period: "Seit Januar 2026",
      team: "Allein, als Open Source",
      coverAlt: "Der SQL-Editor von QoreDB mit Ergebnistabelle",
      facts: [
        { value: "15 000+", label: "Downloads" },
        { value: "34", label: "unterstützte Datenbanken" },
        { value: "39", label: "Releases in acht Monaten" },
        { value: "140+", label: "Sterne auf GitHub" },
      ],
      sections: [
        {
          title: "Der Ausgangspunkt",
          paragraphs: [
            "DBeaver, pgAdmin oder phpMyAdmin erledigen die Arbeit. Aber sie sind langsam, veraltet, voller Dialoge aus einer anderen Zeit und lassen einen eine Produktionstabelle leeren, ohne nachzufragen.",
            "Das Ziel von QoreDB: ein natives, schnelles Werkzeug, das Menschen respektiert, die wissen, was sie tun, und schwere Fehler aus Versehen schwer macht.",
          ],
        },
        {
          title: "Architekturentscheidungen",
          items: [
            "Rust und Tauri statt Electron: ein schlankes Binary, sofortiger Start und ein vernünftiger Speicherverbrauch, auf macOS, Windows und Linux.",
            "Ein Kern, aufgeteilt in Crates (Treiber, Abfrage-Engine, SQL, Service, CLI, MCP-Server). Jede Datenbank läuft über dieselbe Schnittstelle, so kamen 34 zusammen, ohne die App neu zu schreiben.",
            "Local-first und keine Telemetrie: Zugangsdaten bleiben im Schlüsselbund des Systems, Daten und Abfragen verlassen nie den Rechner.",
          ],
        },
        {
          title: "Sicherheit als Funktion",
          paragraphs: [
            "Jede Verbindung trägt eine Umgebung: Dev, Staging oder Produktion. Gefährliche Abfragen werden abgefangen, und auf einer Produktionsdatenbank muss man zur Bestätigung ihren Namen erneut eintippen.",
            "Ein Sandbox-Modus erlaubt, Änderungen in der Tabelle vorzubereiten, das erzeugte SQL zu prüfen und es dann anzuwenden oder zu exportieren. Schäden in der Produktion passieren so kaum noch aus Versehen.",
          ],
        },
        {
          title: "Vom Projekt zum Produkt",
          paragraphs: [
            "QoreDB ist Open Core: Der Kern steht unter Apache 2.0, erweiterte Module (ER-Diagramm, Daten-Diff, Time Travel…) bilden ein Pro-Angebot unter BUSL-1.1, das bereits zahlende Kunden hat.",
            "Etwa alle zwei Wochen erscheint ein Release. Rund um den Code gibt es außerdem eine Website, eine Dokumentation, eine öffentliche Roadmap und eine Discord-Community, die gepflegt werden will.",
          ],
        },
      ],
      captions: [
        "Auf einer Produktionsdatenbank verlangt eine gefährliche Abfrage, den Datenbanknamen erneut einzutippen.",
        "Das interaktive ER-Diagramm, hier mit dem Schema von TCG Nexus.",
      ],
    },
  },
  pulse: {
    fr: {
      tagline:
        "Une plateforme SaaS B2B pour piloter des flottes de casques de réalité virtuelle, menée du POC à la production.",
      summary:
        "Arrivé chez Tkorp en alternance pour construire Pulse à partir d’un POC, j’ai livré la V1, puis repris seul l’ensemble de la plateforme après une réorganisation de l’équipe.",
      role: "Développeur full-stack, mobile & desktop",
      period: "Depuis janvier 2024",
      team: "En équipe, puis seul responsable technique",
      coverAlt:
        "Le tableau de bord de Pulse : état du parc de casques, bibliothèque de contenus et liste des appareils",
      facts: [
        { value: "POC → V1", label: "mise en production" },
        { value: "50+", label: "utilisateurs réguliers" },
        { value: "Play Store", label: "application mobile publiée" },
      ],
      sections: [
        {
          title: "Le contexte",
          paragraphs: [
            "Des entreprises, des établissements scolaires et des structures médico-sociales utilisent des dizaines de casques de réalité virtuelle. Pulse leur permet de piloter cette flotte depuis une seule interface : déployer des contenus, suivre l’usage et l’état des appareils, les organiser par groupes et gérer les droits.",
            "Je suis arrivé chez Tkorp en janvier 2024, en alternance, pour concevoir et développer la plateforme à partir d’un POC. Le travail couvrait aussi une base historique en Symfony et PHP.",
          ],
        },
        {
          title: "Ce que j’ai construit",
          items: [
            "Une architecture en monorepo Turborepo : une API NestJS, un tableau de bord Next.js, une application mobile Expo et une application desktop Tauri.",
            "La V1 en production à partir du POC, en parallèle de la base historique.",
            "Une chaîne de livraison avec Docker et GitHub Actions, sur une base MySQL, et une application mobile publiée sur le Play Store.",
          ],
        },
        {
          title: "Reprendre toute la plateforme",
          paragraphs: [
            "Après une réorganisation de l’équipe, j’ai repris l’ensemble de Pulse : architecture, back, front, mobile et déploiement.",
            "C’est là que le travail a changé de nature : passer de « ça marche » à « ça tient », avec des clients qui utilisent le produit au quotidien.",
          ],
        },
        {
          title: "Aujourd’hui",
          paragraphs: [
            "Pulse est adoptée par plusieurs clients et compte plus de 50 utilisateurs réguliers.",
          ],
        },
      ],
      captions: [],
    },
    en: {
      tagline:
        "A B2B SaaS platform for running fleets of virtual-reality headsets, taken from proof of concept to production.",
      summary:
        "I joined Tkorp on a work-study contract to build Pulse from a proof of concept, shipped the V1, then took over the whole platform on my own after the team was reorganised.",
      role: "Full-stack, mobile & desktop developer",
      period: "Since January 2024",
      team: "On a team, then sole technical owner",
      coverAlt:
        "The Pulse dashboard: headset fleet health, content library and device list",
      facts: [
        { value: "PoC → V1", label: "shipped to production" },
        { value: "50+", label: "regular users" },
        { value: "Google Play", label: "mobile app published" },
      ],
      sections: [
        {
          title: "Context",
          paragraphs: [
            "Companies, schools and care facilities run dozens of virtual-reality headsets. Pulse lets them manage that fleet from a single interface: deploy content, track usage and device health, organise headsets into groups and manage permissions.",
            "I joined Tkorp in January 2024, on a work-study contract, to design and build the platform from a proof of concept. The work also covered a legacy Symfony and PHP codebase.",
          ],
        },
        {
          title: "What I built",
          items: [
            "A Turborepo monorepo architecture: a NestJS API, a Next.js dashboard, an Expo mobile app and a Tauri desktop app.",
            "The V1 in production, grown out of the proof of concept, alongside the legacy codebase.",
            "A delivery pipeline with Docker and GitHub Actions on a MySQL database, and a mobile app published on Google Play.",
          ],
        },
        {
          title: "Taking over the whole platform",
          paragraphs: [
            "After the team was reorganised, I took over all of Pulse: architecture, back end, front end, mobile and deployment.",
            "That is when the work changed in nature: moving from “it works” to “it holds”, with clients using the product every day.",
          ],
        },
        {
          title: "Today",
          paragraphs: [
            "Pulse has been adopted by several clients and has more than 50 regular users.",
          ],
        },
      ],
      captions: [],
    },
    es: {
      tagline:
        "Una plataforma SaaS B2B para gestionar flotas de visores de realidad virtual, llevada de la prueba de concepto a producción.",
      summary:
        "Llegué a Tkorp en alternancia para construir Pulse a partir de una prueba de concepto, entregué la V1 y después asumí en solitario toda la plataforma tras una reorganización del equipo.",
      role: "Desarrollador full-stack, móvil y escritorio",
      period: "Desde enero de 2024",
      team: "En equipo, después único responsable técnico",
      coverAlt:
        "El panel de Pulse: estado de la flota de visores, biblioteca de contenidos y lista de dispositivos",
      facts: [
        { value: "PoC → V1", label: "puesta en producción" },
        { value: "50+", label: "usuarios habituales" },
        { value: "Google Play", label: "aplicación móvil publicada" },
      ],
      sections: [
        {
          title: "El contexto",
          paragraphs: [
            "Empresas, centros educativos y residencias usan decenas de visores de realidad virtual. Pulse les permite gestionar esa flota desde una sola interfaz: desplegar contenidos, seguir el uso y el estado de los dispositivos, organizarlos por grupos y gestionar los permisos.",
            "Llegué a Tkorp en enero de 2024, en alternancia, para diseñar y desarrollar la plataforma a partir de una prueba de concepto. El trabajo también abarcaba una base histórica en Symfony y PHP.",
          ],
        },
        {
          title: "Lo que construí",
          items: [
            "Una arquitectura en monorepo Turborepo: una API NestJS, un panel en Next.js, una aplicación móvil Expo y una aplicación de escritorio Tauri.",
            "La V1 en producción a partir de la prueba de concepto, en paralelo a la base histórica.",
            "Una cadena de entrega con Docker y GitHub Actions sobre MySQL, y una aplicación móvil publicada en Google Play.",
          ],
        },
        {
          title: "Asumir toda la plataforma",
          paragraphs: [
            "Tras una reorganización del equipo, asumí todo Pulse: arquitectura, back, front, móvil y despliegue.",
            "Ahí cambió la naturaleza del trabajo: pasar de «funciona» a «aguanta», con clientes que usan el producto a diario.",
          ],
        },
        {
          title: "Hoy",
          paragraphs: [
            "Varios clientes usan Pulse, que cuenta con más de 50 usuarios habituales.",
          ],
        },
      ],
      captions: [],
    },
    de: {
      tagline:
        "Eine B2B-SaaS-Plattform zur Steuerung von VR-Headset-Flotten, vom Proof of Concept bis in die Produktion geführt.",
      summary:
        "Ich kam als dualer Student zu Tkorp, um Pulse aus einem Proof of Concept aufzubauen, habe die V1 ausgeliefert und nach einer Umstrukturierung des Teams die gesamte Plattform allein übernommen.",
      role: "Full-Stack-, Mobile- & Desktop-Entwickler",
      period: "Seit Januar 2024",
      team: "Im Team, dann allein technisch verantwortlich",
      coverAlt:
        "Das Pulse-Dashboard: Zustand der Headset-Flotte, Inhaltsbibliothek und Geräteliste",
      facts: [
        { value: "PoC → V1", label: "in Produktion gebracht" },
        { value: "50+", label: "regelmäßig Nutzende" },
        { value: "Google Play", label: "mobile App veröffentlicht" },
      ],
      sections: [
        {
          title: "Der Kontext",
          paragraphs: [
            "Unternehmen, Schulen und Pflegeeinrichtungen betreiben Dutzende VR-Headsets. Mit Pulse steuern sie diese Flotte über eine einzige Oberfläche: Inhalte ausrollen, Nutzung und Gerätezustand verfolgen, Headsets in Gruppen organisieren und Rechte verwalten.",
            "Ich kam im Januar 2024 im dualen Studium zu Tkorp, um die Plattform aus einem Proof of Concept heraus zu konzipieren und zu entwickeln. Die Arbeit umfasste auch eine gewachsene Codebasis in Symfony und PHP.",
          ],
        },
        {
          title: "Was ich gebaut habe",
          items: [
            "Eine Monorepo-Architektur mit Turborepo: eine NestJS-API, ein Next.js-Dashboard, eine Expo-App für Mobilgeräte und eine Tauri-Desktop-App.",
            "Die V1 in Produktion, aus dem Proof of Concept heraus, parallel zur alten Codebasis.",
            "Eine Auslieferungskette mit Docker und GitHub Actions auf MySQL, und eine bei Google Play veröffentlichte mobile App.",
          ],
        },
        {
          title: "Die ganze Plattform übernehmen",
          paragraphs: [
            "Nach einer Umstrukturierung des Teams habe ich Pulse vollständig übernommen: Architektur, Backend, Frontend, Mobil und Deployment.",
            "Da hat sich die Arbeit grundlegend verändert: von „es läuft“ zu „es hält“, mit Kunden, die das Produkt täglich nutzen.",
          ],
        },
        {
          title: "Heute",
          paragraphs: [
            "Pulse wird von mehreren Kunden eingesetzt und hat über 50 regelmäßig Nutzende.",
          ],
        },
      ],
      captions: [],
    },
  },
  "tcg-nexus": {
    fr: {
      tagline:
        "Une plateforme pour les joueurs de Pokémon TCG : marketplace, tournois, collections, decks et scan de cartes.",
      summary:
        "Un projet d’équipe mené à l’ETNA, pour lequel j’ai tenu le rôle de lead technique : architecture, CI/CD, revue des contributions et la plus grande partie du code.",
      role: "Lead technique",
      period: "2025 — 2026",
      team: "Équipe de 5, en sprints",
      coverAlt:
        "La page d’accueil de TCG Nexus : tournois, marketplace, decks tendances",
      facts: [
        { value: "850+", label: "commits sur environ 960" },
        { value: "20 000+", label: "cartes au catalogue" },
        { value: "5", label: "applications dans le monorepo" },
      ],
      sections: [
        {
          title: "Le projet",
          paragraphs: [
            "Les joueurs de Pokémon TCG jonglent entre plusieurs sites pour acheter et vendre des cartes, suivre leur collection, construire leurs decks et jouer des tournois. TCG Nexus réunit tout ça au même endroit.",
            "Le projet a été mené en équipe à l’ETNA, en sprints, avec une story map, un backlog priorisé et des points d’avancement réguliers.",
          ],
        },
        {
          title: "Mon rôle",
          paragraphs: [
            "Lead technique : l’architecture du monorepo, la mise en place de la CI/CD et du déploiement, la revue des contributions, et plus de 850 des quelque 960 commits du dépôt.",
          ],
        },
        {
          title: "L’architecture",
          items: [
            "Un monorepo Turborepo : front Next.js, API NestJS, application mobile Expo, un microservice Express pour récupérer le catalogue et un service Python pour la vision.",
            "PostgreSQL avec pgvector, et des sondes de santé qui vérifient la base, les migrations et le service de vision.",
            "Des cookies HttpOnly sur le web, des jetons dans le SecureStore sur mobile, et Google OAuth avec PKCE.",
          ],
        },
        {
          title: "Scanner une carte",
          paragraphs: [
            "Depuis le mobile, on photographie une carte. Le service Python (FastAPI, OpenCV, Tesseract) la détecte, redresse la perspective et lit son nom et son numéro, en comparant plusieurs images d’une même rafale pour garder la lecture la plus fiable.",
            "Si ce service tombe, l’API bascule sur un OCR de repli : le scan continue de fonctionner, en moins précis.",
          ],
        },
        {
          title: "Analyser un deck",
          paragraphs: [
            "Plutôt qu’un appel à un modèle générique, un moteur déterministe calcule les métriques d’un deck, et un index de similarité local propose des cartes et des decks proches. Les résultats sont explicables et ne coûtent rien à chaque requête.",
          ],
        },
      ],
      captions: ["Le schéma de la base, exploré dans QoreDB."],
    },
    en: {
      tagline:
        "A platform for Pokémon TCG players: marketplace, tournaments, collections, decks and card scanning.",
      summary:
        "A team project run at ETNA, where I acted as tech lead: architecture, CI/CD, reviewing contributions and most of the code.",
      role: "Tech lead",
      period: "2025 — 2026",
      team: "Team of 5, in sprints",
      coverAlt:
        "The TCG Nexus home page: tournaments, marketplace, trending decks",
      facts: [
        { value: "850+", label: "commits out of about 960" },
        { value: "20,000+", label: "cards in the catalogue" },
        { value: "5", label: "apps in the monorepo" },
      ],
      sections: [
        {
          title: "The project",
          paragraphs: [
            "Pokémon TCG players juggle several sites to buy and sell cards, track their collection, build decks and play tournaments. TCG Nexus brings all of that into one place.",
            "The project was run as a team at ETNA, in sprints, with a story map, a prioritised backlog and regular progress reviews.",
          ],
        },
        {
          title: "My role",
          paragraphs: [
            "Tech lead: the monorepo architecture, setting up CI/CD and deployment, reviewing contributions, and more than 850 of the roughly 960 commits in the repository.",
          ],
        },
        {
          title: "Architecture",
          items: [
            "A Turborepo monorepo: a Next.js front end, a NestJS API, an Expo mobile app, an Express microservice to fetch the catalogue and a Python vision service.",
            "PostgreSQL with pgvector, and health probes that check the database, migrations and the vision service.",
            "HttpOnly cookies on the web, tokens in SecureStore on mobile, and Google OAuth with PKCE.",
          ],
        },
        {
          title: "Scanning a card",
          paragraphs: [
            "From the mobile app, you take a photo of a card. The Python service (FastAPI, OpenCV, Tesseract) detects it, corrects the perspective and reads its name and number, comparing several frames from the same burst to keep the most reliable reading.",
            "If that service goes down, the API falls back to a secondary OCR: scanning keeps working, just less precisely.",
          ],
        },
        {
          title: "Analysing a deck",
          paragraphs: [
            "Rather than calling a generic model, a deterministic engine computes a deck’s metrics and a local similarity index suggests related cards and decks. The results are explainable and cost nothing per request.",
          ],
        },
      ],
      captions: ["The database schema, explored in QoreDB."],
    },
    es: {
      tagline:
        "Una plataforma para jugadores de Pokémon TCG: marketplace, torneos, colecciones, mazos y escaneo de cartas.",
      summary:
        "Un proyecto de equipo en la ETNA en el que fui líder técnico: arquitectura, CI/CD, revisión de contribuciones y la mayor parte del código.",
      role: "Líder técnico",
      period: "2025 — 2026",
      team: "Equipo de 5, en sprints",
      coverAlt:
        "La página de inicio de TCG Nexus: torneos, marketplace, mazos en tendencia",
      facts: [
        { value: "850+", label: "commits de unos 960" },
        { value: "20 000+", label: "cartas en el catálogo" },
        { value: "5", label: "aplicaciones en el monorepo" },
      ],
      sections: [
        {
          title: "El proyecto",
          paragraphs: [
            "Los jugadores de Pokémon TCG van de un sitio a otro para comprar y vender cartas, seguir su colección, construir mazos y jugar torneos. TCG Nexus lo reúne todo en un mismo lugar.",
            "El proyecto se hizo en equipo en la ETNA, por sprints, con un story map, un backlog priorizado y revisiones de avance regulares.",
          ],
        },
        {
          title: "Mi rol",
          paragraphs: [
            "Líder técnico: la arquitectura del monorepo, la puesta en marcha de la CI/CD y del despliegue, la revisión de contribuciones, y más de 850 de los cerca de 960 commits del repositorio.",
          ],
        },
        {
          title: "La arquitectura",
          items: [
            "Un monorepo Turborepo: front en Next.js, API NestJS, aplicación móvil Expo, un microservicio Express para obtener el catálogo y un servicio Python de visión.",
            "PostgreSQL con pgvector, y sondas de salud que comprueban la base, las migraciones y el servicio de visión.",
            "Cookies HttpOnly en la web, tokens en SecureStore en el móvil y Google OAuth con PKCE.",
          ],
        },
        {
          title: "Escanear una carta",
          paragraphs: [
            "Desde el móvil, se fotografía una carta. El servicio Python (FastAPI, OpenCV, Tesseract) la detecta, corrige la perspectiva y lee su nombre y su número, comparando varias imágenes de una misma ráfaga para quedarse con la lectura más fiable.",
            "Si ese servicio cae, la API pasa a un OCR de respaldo: el escaneo sigue funcionando, con menos precisión.",
          ],
        },
        {
          title: "Analizar un mazo",
          paragraphs: [
            "En lugar de llamar a un modelo genérico, un motor determinista calcula las métricas de un mazo y un índice de similitud local sugiere cartas y mazos cercanos. Los resultados son explicables y no cuestan nada por petición.",
          ],
        },
      ],
      captions: ["El esquema de la base, explorado en QoreDB."],
    },
    de: {
      tagline:
        "Eine Plattform für Pokémon-TCG-Spielende: Marktplatz, Turniere, Sammlungen, Decks und Karten-Scan.",
      summary:
        "Ein Teamprojekt an der ETNA, in dem ich die technische Leitung hatte: Architektur, CI/CD, Review der Beiträge und der größte Teil des Codes.",
      role: "Technische Leitung",
      period: "2025 — 2026",
      team: "Team aus 5, in Sprints",
      coverAlt:
        "Die Startseite von TCG Nexus: Turniere, Marktplatz, angesagte Decks",
      facts: [
        { value: "850+", label: "von rund 960 Commits" },
        { value: "20 000+", label: "Karten im Katalog" },
        { value: "5", label: "Apps im Monorepo" },
      ],
      sections: [
        {
          title: "Das Projekt",
          paragraphs: [
            "Wer Pokémon TCG spielt, wechselt zwischen mehreren Websites, um Karten zu kaufen und zu verkaufen, die Sammlung zu verfolgen, Decks zu bauen und Turniere zu spielen. TCG Nexus bringt all das an einen Ort.",
            "Das Projekt lief als Teamarbeit an der ETNA, in Sprints, mit Story Map, priorisiertem Backlog und regelmäßigen Fortschrittsreviews.",
          ],
        },
        {
          title: "Meine Rolle",
          paragraphs: [
            "Technische Leitung: die Architektur des Monorepos, der Aufbau von CI/CD und Deployment, das Review der Beiträge und über 850 der rund 960 Commits im Repository.",
          ],
        },
        {
          title: "Die Architektur",
          items: [
            "Ein Turborepo-Monorepo: Next.js-Frontend, NestJS-API, Expo-App für Mobilgeräte, ein Express-Microservice für den Katalog und ein Python-Dienst für die Bilderkennung.",
            "PostgreSQL mit pgvector und Health-Checks, die Datenbank, Migrationen und den Vision-Dienst prüfen.",
            "HttpOnly-Cookies im Web, Tokens im SecureStore auf dem Smartphone und Google OAuth mit PKCE.",
          ],
        },
        {
          title: "Eine Karte scannen",
          paragraphs: [
            "In der mobilen App fotografiert man eine Karte. Der Python-Dienst (FastAPI, OpenCV, Tesseract) erkennt sie, korrigiert die Perspektive und liest Name und Nummer, wobei er mehrere Bilder derselben Serie vergleicht und die verlässlichste Lesung behält.",
            "Fällt dieser Dienst aus, wechselt die API auf eine Ersatz-OCR: Der Scan funktioniert weiter, nur weniger genau.",
          ],
        },
        {
          title: "Ein Deck analysieren",
          paragraphs: [
            "Statt ein generisches Modell aufzurufen, berechnet eine deterministische Engine die Kennzahlen eines Decks, und ein lokaler Ähnlichkeitsindex schlägt verwandte Karten und Decks vor. Die Ergebnisse sind nachvollziehbar und kosten pro Anfrage nichts.",
          ],
        },
      ],
      captions: ["Das Datenbankschema, erkundet in QoreDB."],
    },
  },
};
