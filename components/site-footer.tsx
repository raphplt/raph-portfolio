import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import type { Locale, PortfolioContent } from "@/lib/content";
import { ATLAS_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/projects";

// Atlas existe en FR, EN et IT : les autres langues du portfolio pointent vers l'anglais.
export function atlasUrl(locale: Locale) {
  return locale === "fr" ? ATLAS_URL : `${ATLAS_URL}/en`;
}

export function SiteFooter({
  copy,
  locale,
}: {
  copy: PortfolioContent;
  locale: Locale;
}) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p className="footer-note">
          <b>{copy.footer.note}</b>
          {copy.footer.built}
        </p>

        <div className="footer-links">
          <a href={GITHUB_URL} rel="noreferrer" target="_blank">
            <GitHubIcon size={15} />
            GitHub
          </a>
          <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
            <LinkedInIcon size={15} />
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={15} strokeWidth={1.8} />
            Email
          </a>
          <a href={atlasUrl(locale)} rel="noopener" target="_blank">
            <ArrowUpRight size={15} strokeWidth={1.8} />
            Atlas
          </a>
        </div>

        <div className="footer-meta mono">
          <span>
            © {new Date().getFullYear()} Raphaël Plassart ·{" "}
            {copy.footer.rights}
          </span>
          <a className="link" href="#top">
            {copy.footer.top}
            <ArrowUp size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
