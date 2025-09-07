export function generateJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Raphaël Plassart",
    "jobTitle": "Développeur Fullstack",
    "description": "Développeur fullstack passionné par la création d'applications web et mobiles modernes",
    "url": "https://raphael-plassart.dev",
    "image": "https://raphael-plassart.dev/og-image.jpg",
    "email": "raphael.plassart@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "ETNA - École des Technologies Numériques Avancées"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "PostgreSQL",
      "Firebase"
    ],
    "sameAs": [
      "https://linkedin.com/in/raphaël-plassart",
      "https://github.com/raphplt"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Melios"
      },
      {
        "@type": "Organization", 
        "name": "Tkorp"
      }
    ]
  };

  return jsonLd;
}
