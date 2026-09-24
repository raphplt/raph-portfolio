import { notFound } from "next/navigation";
import {
  createCaseStudyOgImage,
  ogSize,
} from "@/components/portfolio-og-image";
import { isCaseStudySlug } from "@/lib/case-study-metadata";

export const alt = "Étude de cas · Raphaël Plassart";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) notFound();

  return createCaseStudyOgImage("fr", slug);
}
