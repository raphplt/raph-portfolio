import type { Locale } from "@/lib/content";

// Pages légales. Le texte décrit ce que le site fait réellement : pas de
// cookie, pas de mesure d'audience, deux clés en localStorage et le classement
// Core Runner. À mettre à jour si l'un de ces points change.
// Liens : syntaxe [libellé](url), rendue par components/legal-page.tsx.

export type LegalDocKey = "legal" | "privacy";

export type LegalDoc = {
  title: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

type LegalCopy = {
  updated: string;
  docs: Record<LegalDocKey, LegalDoc>;
};

const slugs: Record<LegalDocKey, { fr: string; other: string }> = {
  legal: { fr: "mentions-legales", other: "legal" },
  privacy: { fr: "confidentialite", other: "privacy" },
};

export function legalPath(locale: Locale, doc: LegalDocKey) {
  return locale === "fr"
    ? `/${slugs[doc].fr}`
    : `/${locale}/${slugs[doc].other}`;
}

const EMAIL_LINK =
  "[contact@raphael-plassart.com](mailto:contact@raphael-plassart.com)";

export const legal: Record<Locale, LegalCopy> = {
  fr: {
    updated: "Dernière mise à jour : 24 septembre 2026",
    docs: {
      legal: {
        title: "Mentions légales",
        intro:
          "Ce site est le portfolio personnel de Raphaël Plassart, édité à titre non professionnel.",
        sections: [
          {
            title: "Éditeur",
            paragraphs: [
              "Raphaël Plassart, directeur de la publication.",
              `Contact : ${EMAIL_LINK}`,
              "Conformément à l’article 6, III, 2 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, les éléments d’identification de l’éditeur ont été communiqués à l’hébergeur.",
            ],
          },
          {
            title: "Hébergement",
            paragraphs: [
              "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. [vercel.com](https://vercel.com)",
            ],
          },
          {
            title: "Propriété intellectuelle",
            paragraphs: [
              "Les textes, le design et le code de ce site appartiennent à Raphaël Plassart, sauf mention contraire. Leur reproduction sans autorisation n’est pas permise.",
              "Les noms, logos et captures de produits tiers cités restent la propriété de leurs titulaires. TCG Nexus est un projet indépendant, non affilié à Nintendo, Game Freak ou The Pokémon Company.",
            ],
          },
          {
            title: "Liens externes",
            paragraphs: [
              "Ce site renvoie vers d’autres sites (GitHub, LinkedIn, sites des projets). Je n’ai pas la main sur leur contenu et ne peux en être tenu responsable.",
            ],
          },
          {
            title: "Données personnelles",
            paragraphs: [
              "Le traitement des données est décrit dans la [politique de confidentialité](/confidentialite).",
            ],
          },
        ],
      },
      privacy: {
        title: "Confidentialité",
        intro:
          "Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni de publicité. Voici, précisément, ce qu’il traite.",
        sections: [
          {
            title: "Responsable du traitement",
            paragraphs: [`Raphaël Plassart, ${EMAIL_LINK}`],
          },
          {
            title: "Quand vous m’écrivez",
            paragraphs: [
              "Votre adresse e-mail et le contenu de votre message sont conservés dans ma messagerie le temps nécessaire à notre échange. Ils ne sont ni revendus, ni partagés.",
            ],
          },
          {
            title: "Classement de Core Runner",
            paragraphs: [
              "Si vous enregistrez un score, le pseudo que vous choisissez, votre score, la date et un identifiant de partie aléatoire sont stockés dans une base PostgreSQL hébergée par Neon, puis affichés publiquement dans le classement. N’y mettez pas d’information personnelle.",
              "Ce traitement repose sur votre consentement, exprimé en enregistrant le score. Les scores restent dans le classement jusqu’à ce que vous m’en demandiez la suppression.",
            ],
          },
          {
            title: "Stockage local du navigateur",
            paragraphs: [
              "Deux informations restent dans le stockage local de votre navigateur et ne me sont jamais transmises : votre préférence de thème (clair ou sombre) et votre meilleur score à Core Runner. Vous pouvez les effacer depuis les réglages de votre navigateur.",
            ],
          },
          {
            title: "Hébergement et prestataires",
            paragraphs: [
              "Vercel, l’hébergeur, traite des données techniques de connexion (adresse IP, navigateur, pages demandées) pour diffuser le site et le protéger. Les polices sont servies depuis ce site : aucune requête n’est envoyée à Google Fonts.",
              "Vercel et Neon peuvent traiter des données hors de l’Union européenne, avec les garanties prévues par le RGPD (clauses contractuelles types).",
            ],
          },
          {
            title: "Vos droits",
            paragraphs: [
              `Vous pouvez demander l’accès à vos données, leur rectification ou leur suppression, et vous opposer à leur traitement, en écrivant à ${EMAIL_LINK}. Vous pouvez aussi adresser une réclamation à la [CNIL](https://www.cnil.fr).`,
            ],
          },
        ],
      },
    },
  },
  en: {
    updated: "Last updated: 24 September 2026",
    docs: {
      legal: {
        title: "Legal notice",
        intro:
          "This site is the personal portfolio of Raphaël Plassart, published on a non-commercial basis.",
        sections: [
          {
            title: "Publisher",
            paragraphs: [
              "Raphaël Plassart, publication director.",
              `Contact: ${EMAIL_LINK}`,
              "In accordance with Article 6, III, 2 of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy, the publisher’s identification details have been provided to the hosting provider.",
            ],
          },
          {
            title: "Hosting",
            paragraphs: [
              "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. [vercel.com](https://vercel.com)",
            ],
          },
          {
            title: "Intellectual property",
            paragraphs: [
              "The text, design and code of this site belong to Raphaël Plassart unless stated otherwise. They may not be reproduced without permission.",
              "Names, logos and screenshots of third-party products remain the property of their owners. TCG Nexus is an independent project, not affiliated with Nintendo, Game Freak or The Pokémon Company.",
            ],
          },
          {
            title: "External links",
            paragraphs: [
              "This site links to other sites (GitHub, LinkedIn, project websites). I have no control over their content and cannot be held responsible for it.",
            ],
          },
          {
            title: "Personal data",
            paragraphs: [
              "How data is handled is described in the [privacy policy](/en/privacy).",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy",
        intro:
          "This site sets no cookies and uses no analytics or advertising tools. Here is exactly what it processes.",
        sections: [
          {
            title: "Data controller",
            paragraphs: [`Raphaël Plassart, ${EMAIL_LINK}`],
          },
          {
            title: "When you write to me",
            paragraphs: [
              "Your email address and message are kept in my mailbox for as long as our exchange requires. They are never sold or shared.",
            ],
          },
          {
            title: "Core Runner leaderboard",
            paragraphs: [
              "If you save a score, the nickname you choose, your score, the date and a random game identifier are stored in a PostgreSQL database hosted by Neon, then shown publicly on the leaderboard. Do not put personal information in it.",
              "This relies on your consent, given by saving the score. Scores stay on the leaderboard until you ask me to delete them.",
            ],
          },
          {
            title: "Browser local storage",
            paragraphs: [
              "Two pieces of information stay in your browser’s local storage and are never sent to me: your theme preference (light or dark) and your best Core Runner score. You can clear them from your browser settings.",
            ],
          },
          {
            title: "Hosting and providers",
            paragraphs: [
              "Vercel, the hosting provider, processes technical connection data (IP address, browser, requested pages) to serve and protect the site. Fonts are served from this site: no request is sent to Google Fonts.",
              "Vercel and Neon may process data outside the European Union, under the safeguards provided by the GDPR (standard contractual clauses).",
            ],
          },
          {
            title: "Your rights",
            paragraphs: [
              `You can request access to your data, its correction or deletion, and object to its processing, by writing to ${EMAIL_LINK}. You can also lodge a complaint with the [CNIL](https://www.cnil.fr), the French data protection authority.`,
            ],
          },
        ],
      },
    },
  },
  es: {
    updated: "Última actualización: 24 de septiembre de 2026",
    docs: {
      legal: {
        title: "Aviso legal",
        intro:
          "Este sitio es el portfolio personal de Raphaël Plassart, publicado a título no profesional.",
        sections: [
          {
            title: "Editor",
            paragraphs: [
              "Raphaël Plassart, director de la publicación.",
              `Contacto: ${EMAIL_LINK}`,
              "De acuerdo con el artículo 6, III, 2 de la ley francesa n.º 2004-575 del 21 de junio de 2004 sobre la confianza en la economía digital, los datos de identificación del editor se han comunicado al proveedor de alojamiento.",
            ],
          },
          {
            title: "Alojamiento",
            paragraphs: [
              "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos. [vercel.com](https://vercel.com)",
            ],
          },
          {
            title: "Propiedad intelectual",
            paragraphs: [
              "Los textos, el diseño y el código de este sitio pertenecen a Raphaël Plassart, salvo indicación contraria. No se permite su reproducción sin autorización.",
              "Los nombres, logotipos y capturas de productos de terceros siguen siendo propiedad de sus titulares. TCG Nexus es un proyecto independiente, no afiliado a Nintendo, Game Freak ni The Pokémon Company.",
            ],
          },
          {
            title: "Enlaces externos",
            paragraphs: [
              "Este sitio enlaza con otros sitios (GitHub, LinkedIn, sitios de los proyectos). No controlo su contenido y no puedo hacerme responsable de él.",
            ],
          },
          {
            title: "Datos personales",
            paragraphs: [
              "El tratamiento de los datos se describe en la [política de privacidad](/es/privacy).",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacidad",
        intro:
          "Este sitio no instala ninguna cookie ni utiliza herramientas de analítica o publicidad. Esto es exactamente lo que trata.",
        sections: [
          {
            title: "Responsable del tratamiento",
            paragraphs: [`Raphaël Plassart, ${EMAIL_LINK}`],
          },
          {
            title: "Cuando me escribes",
            paragraphs: [
              "Tu dirección de correo y tu mensaje se conservan en mi buzón el tiempo necesario para nuestro intercambio. No se venden ni se comparten.",
            ],
          },
          {
            title: "Clasificación de Core Runner",
            paragraphs: [
              "Si guardas una puntuación, el apodo que elijas, tu puntuación, la fecha y un identificador de partida aleatorio se almacenan en una base PostgreSQL alojada por Neon y se muestran públicamente en la clasificación. No incluyas información personal.",
              "Este tratamiento se basa en tu consentimiento, expresado al guardar la puntuación. Las puntuaciones permanecen en la clasificación hasta que me pidas su eliminación.",
            ],
          },
          {
            title: "Almacenamiento local del navegador",
            paragraphs: [
              "Dos datos se quedan en el almacenamiento local de tu navegador y nunca me llegan: tu preferencia de tema (claro u oscuro) y tu mejor puntuación en Core Runner. Puedes borrarlos desde los ajustes del navegador.",
            ],
          },
          {
            title: "Alojamiento y proveedores",
            paragraphs: [
              "Vercel, el proveedor de alojamiento, trata datos técnicos de conexión (dirección IP, navegador, páginas solicitadas) para servir y proteger el sitio. Las fuentes se sirven desde este sitio: no se envía ninguna petición a Google Fonts.",
              "Vercel y Neon pueden tratar datos fuera de la Unión Europea, con las garantías previstas por el RGPD (cláusulas contractuales tipo).",
            ],
          },
          {
            title: "Tus derechos",
            paragraphs: [
              `Puedes solicitar el acceso a tus datos, su rectificación o supresión, y oponerte a su tratamiento, escribiendo a ${EMAIL_LINK}. También puedes presentar una reclamación ante la [CNIL](https://www.cnil.fr), la autoridad francesa de protección de datos.`,
            ],
          },
        ],
      },
    },
  },
  de: {
    updated: "Zuletzt aktualisiert: 24. September 2026",
    docs: {
      legal: {
        title: "Impressum",
        intro:
          "Diese Website ist das persönliche Portfolio von Raphaël Plassart und wird nicht gewerblich betrieben.",
        sections: [
          {
            title: "Herausgeber",
            paragraphs: [
              "Raphaël Plassart, verantwortlich für den Inhalt.",
              `Kontakt: ${EMAIL_LINK}`,
              "Gemäß Artikel 6, III, 2 des französischen Gesetzes Nr. 2004-575 vom 21. Juni 2004 über das Vertrauen in die digitale Wirtschaft wurden die Identifikationsdaten des Herausgebers dem Hosting-Anbieter mitgeteilt.",
            ],
          },
          {
            title: "Hosting",
            paragraphs: [
              "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. [vercel.com](https://vercel.com)",
            ],
          },
          {
            title: "Urheberrecht",
            paragraphs: [
              "Texte, Gestaltung und Code dieser Website gehören Raphaël Plassart, sofern nicht anders angegeben. Eine Vervielfältigung ohne Erlaubnis ist nicht gestattet.",
              "Namen, Logos und Screenshots von Produkten Dritter bleiben Eigentum ihrer Inhaber. TCG Nexus ist ein unabhängiges Projekt und nicht mit Nintendo, Game Freak oder The Pokémon Company verbunden.",
            ],
          },
          {
            title: "Externe Links",
            paragraphs: [
              "Diese Website verlinkt auf andere Websites (GitHub, LinkedIn, Projektseiten). Auf deren Inhalt habe ich keinen Einfluss und übernehme dafür keine Verantwortung.",
            ],
          },
          {
            title: "Personenbezogene Daten",
            paragraphs: [
              "Wie Daten verarbeitet werden, steht in der [Datenschutzerklärung](/de/privacy).",
            ],
          },
        ],
      },
      privacy: {
        title: "Datenschutz",
        intro:
          "Diese Website setzt keine Cookies und nutzt keine Analyse- oder Werbewerkzeuge. Hier steht genau, was sie verarbeitet.",
        sections: [
          {
            title: "Verantwortlicher",
            paragraphs: [`Raphaël Plassart, ${EMAIL_LINK}`],
          },
          {
            title: "Wenn du mir schreibst",
            paragraphs: [
              "Deine E-Mail-Adresse und deine Nachricht bleiben so lange in meinem Postfach, wie unser Austausch es erfordert. Sie werden weder verkauft noch weitergegeben.",
            ],
          },
          {
            title: "Rangliste von Core Runner",
            paragraphs: [
              "Wenn du eine Punktzahl speicherst, werden der von dir gewählte Spitzname, die Punktzahl, das Datum und eine zufällige Spielkennung in einer von Neon gehosteten PostgreSQL-Datenbank gespeichert und öffentlich in der Rangliste angezeigt. Gib dort keine persönlichen Informationen an.",
              "Grundlage ist deine Einwilligung, die du mit dem Speichern der Punktzahl erteilst. Die Einträge bleiben in der Rangliste, bis du ihre Löschung verlangst.",
            ],
          },
          {
            title: "Lokaler Speicher des Browsers",
            paragraphs: [
              "Zwei Angaben bleiben im lokalen Speicher deines Browsers und werden nie an mich übertragen: deine Designwahl (hell oder dunkel) und deine beste Punktzahl in Core Runner. Du kannst sie in den Browsereinstellungen löschen.",
            ],
          },
          {
            title: "Hosting und Dienstleister",
            paragraphs: [
              "Vercel, der Hosting-Anbieter, verarbeitet technische Verbindungsdaten (IP-Adresse, Browser, aufgerufene Seiten), um die Website auszuliefern und zu schützen. Die Schriften werden von dieser Website selbst ausgeliefert: Es geht keine Anfrage an Google Fonts.",
              "Vercel und Neon können Daten außerhalb der Europäischen Union verarbeiten, mit den in der DSGVO vorgesehenen Garantien (Standardvertragsklauseln).",
            ],
          },
          {
            title: "Deine Rechte",
            paragraphs: [
              `Du kannst Auskunft über deine Daten, ihre Berichtigung oder Löschung verlangen und der Verarbeitung widersprechen, indem du an ${EMAIL_LINK} schreibst. Außerdem kannst du dich bei der [CNIL](https://www.cnil.fr), der französischen Datenschutzbehörde, beschweren.`,
            ],
          },
        ],
      },
    },
  },
};
