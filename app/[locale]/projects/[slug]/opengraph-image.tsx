import { notFound } from "next/navigation";
import {
  createCaseStudyOgImage,
  ogSize,
} from "@/components/portfolio-og-image";
import { isCaseStudySlug } from "@/lib/case-study-metadata";
import { isLocale } from "@/lib/content";

export const alt = "Case study · Raphaël Plassart";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "fr" || !isCaseStudySlug(slug)) {
    notFound();
  }

  return createCaseStudyOgImage(locale, slug);
}
