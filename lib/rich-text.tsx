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

export function stripMarkers(text: string) {
  return text.replace(/\*\*?([^*]+)\*\*?/g, "$1");
}
