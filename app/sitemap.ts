import type { MetadataRoute } from "next";
import { caseStudyPath } from "@/lib/case-studies";
import { localePath, locales } from "@/lib/content";
import { SITE_URL, caseStudyOrder } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((item) => [item, `${SITE_URL}${localePath(item)}`]),
      ),
    },
  }));

  const studies = caseStudyOrder.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${caseStudyPath(locale, slug)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${SITE_URL}${caseStudyPath(item, slug)}`]),
        ),
      },
    })),
  );

  return [...home, ...studies];
}
