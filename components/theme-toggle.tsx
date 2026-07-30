"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ label }: { label: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      className="icon-link theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <Sun className="theme-sun" size={18} />
      <Moon className="theme-moon" size={18} />
    </button>
  );
}
