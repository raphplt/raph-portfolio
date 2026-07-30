import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.raphael-plassart.com";

  return locales.map((locale) => ({
      url: `${baseUrl}${localePath(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${baseUrl}${localePath(item)}`]),
        ),
      },
    }));
}
