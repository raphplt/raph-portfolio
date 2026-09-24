import { Fragment, type ReactNode } from "react";

export function renderAccented(text: string): ReactNode {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <em className="serif" key={index}>
          {part.slice(1, -1)}
        </em>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    );
}

// **gras** pour les noms propres qu'on veut faire ressortir dans un paragraphe.
export function renderStrong(text: string): ReactNode {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    );
}

export function stripMarkers(text: string) {
  return text.replace(/\*\*?([^*]+)\*\*?/g, "$1");
}
