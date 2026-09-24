export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raphaël Plassart",
    jobTitle: "Full-stack Product Engineer",
    description:
      "Développeur full-stack, trois ans en startup : Pulse, un SaaS B2B mené du POC à la production, et QoreDB, un client de bases de données open source en Rust.",
    url: "https://www.raphael-plassart.com",
    email: "mailto:contact@raphael-plassart.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "ETNA - École des Technologies Numériques Avancées",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "NestJS",
      "Rust",
      "Tauri",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Linux",
    ],
    sameAs: [
      "https://www.linkedin.com/in/rapha%C3%ABl-plassart/",
      "https://github.com/raphplt",
      "https://github.com/QoreDB/QoreDB",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Tkorp",
    },
    owns: {
      "@type": "SoftwareApplication",
      name: "QoreDB",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS, Windows, Linux",
      url: "https://www.qoredb.com",
    },
  };
}
