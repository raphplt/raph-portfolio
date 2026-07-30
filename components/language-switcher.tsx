"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  languageNames,
  localePath,
  locales,
  type Locale,
} from "@/lib/content";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const menu = menuRef.current;

      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.removeAttribute("open");
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.removeAttribute("open");
        menuRef.current.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details className="language-menu" ref={menuRef}>
      <summary aria-label={label} title={label}>
        <Languages size={17} />
        <span>{locale.toUpperCase()}</span>
      </summary>
      <div>
        {locales.map((item) => (
          <Link
            aria-current={item === locale ? "page" : undefined}
            href={localePath(item)}
            hrefLang={item}
            key={item}
            lang={item}
          >
            <span>{item.toUpperCase()}</span>
            {languageNames[item]}
          </Link>
        ))}
      </div>
    </details>
  );
}
