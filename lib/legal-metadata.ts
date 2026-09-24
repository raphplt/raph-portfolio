import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/content";
import { legal, legalPath, type LegalDocKey } from "@/lib/legal";
import { SITE_URL } from "@/lib/projects";

export function legalMetadata(locale: Locale, doc: LegalDocKey): Metadata {
  const page = legal[locale].docs[doc];

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: `${page.title} - Raphaël Plassart` },
    description: page.intro,
    alternates: {
      canonical: legalPath(locale, doc),
      languages: Object.fromEntries(
        locales.map((item) => [item, legalPath(item, doc)]),
      ),
    },
    // Pages utiles aux visiteurs, sans intérêt pour les moteurs de recherche.
    robots: { index: false, follow: true },
  };
}
