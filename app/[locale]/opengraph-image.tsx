import { notFound } from "next/navigation";
import {
  createPortfolioOgImage,
  ogSize,
} from "@/components/portfolio-og-image";
import { isLocale } from "@/lib/content";

export const alt =
  "Raphaël Plassart · Full-stack Product Engineer, creator of QoreDB";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fr") {
    notFound();
  }

  return createPortfolioOgImage(locale);
}
