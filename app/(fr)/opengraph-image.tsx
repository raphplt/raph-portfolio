import {
  createPortfolioOgImage,
  ogSize,
} from "@/components/portfolio-og-image";

export const alt =
  "Raphaël Plassart · Full-stack Product Engineer, créateur de QoreDB";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createPortfolioOgImage("fr");
}
