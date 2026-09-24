import { Fragment } from "react";

// Petites icônes en ASCII, dans l'esprit du champ ASCII du hero.
// {x} marque un segment en couleur d'accent ; {!x} le fait en plus clignoter.
const ICONS = {
  interface: [
    ".----------.",
    "| o o {o}    |",
    "|----------|",
    "| {##}  :::  |",
    "'----------'",
  ],
  mobile: [
    "  .------.",
    "  | ==== |",
    "  | {##}   |",
    "  |      |",
    "  '--()--'",
  ],
  terminal: [
    ".----------.",
    "| ~ $ run  |",
    "| > ok{!_}    |",
    "'----------'",
    "    _||_",
  ],
  server: [
    ".----------.",
    "| =  {!o} o   |",
    "|----------|",
    "| =  o {!o}   |",
    "'----------'",
  ],
  system: [
    "o   o   o",
    " \\  |  /",
    "  --{@}--",
    " /  |  \\",
    "o   o   o",
  ],
  guard: [
    " .-----.",
    " |=====|",
    " |  {!}  |",
    "  \\   /",
    "   '-'",
  ],
  polish: [
    "    .",
    "  \\ | /",
    " -- {!*} --",
    "  / | \\",
    "    '",
  ],
} as const;

export type AsciiIconName = keyof typeof ICONS;

function renderLine(line: string, lineIndex: number) {
  return line
    .split(/(\{!?[^}]+\})/g)
    .filter(Boolean)
    .map((part, index) => {
      const match = part.match(/^\{(!?)([^}]+)\}$/);
      if (!match) return <Fragment key={`${lineIndex}-${index}`}>{part}</Fragment>;

      return (
        <b
          className={match[1] ? "ascii-blink" : undefined}
          key={`${lineIndex}-${index}`}
        >
          {match[2]}
        </b>
      );
    });
}

export function AsciiIcon({ name }: { name: AsciiIconName }) {
  return (
    <pre aria-hidden="true" className="ascii-icon">
      {ICONS[name].map((line, index) => (
        <Fragment key={index}>
          {renderLine(line, index)}
          {index < ICONS[name].length - 1 && "\n"}
        </Fragment>
      ))}
    </pre>
  );
}
