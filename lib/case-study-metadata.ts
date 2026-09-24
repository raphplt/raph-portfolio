import type { Metadata } from "next";
import { caseStudies, caseStudyPath } from "@/lib/case-studies";
import { content, locales, type Locale } from "@/lib/content";
import {
  SITE_URL,
  caseStudyAssets,
  caseStudyOrder,
  type CaseStudySlug,
} from "@/lib/projects";

const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
};

export function isCaseStudySlug(value: string): value is CaseStudySlug {
  return caseStudyOrder.includes(value as CaseStudySlug);
}

export function caseStudyMetadata(
  locale: Locale,
  slug: CaseStudySlug,
): Metadata {
  const asset = caseStudyAssets[slug];
  const study = caseStudies[slug][locale];
  const title = `${asset.name} · ${content[locale].caseStudy.kicker} - Raphaël Plassart`;
  const path = caseStudyPath(locale, slug);

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description: study.summary,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(
        locales.map((item) => [item, caseStudyPath(item, slug)]),
      ),
    },
    openGraph: {
      type: "article",
      locale: ogLocales[locale],
      url: path,
      title,
      description: study.tagline,
      siteName: "Raphaël Plassart",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.tagline,
    },
  };
}
