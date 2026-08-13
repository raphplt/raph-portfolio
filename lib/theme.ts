export const themeScript = `
  (() => {
    try {
      const root = document.documentElement;
      const saved = localStorage.getItem("theme");
      const systemDark = matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = saved === "dark" || saved === "light"
        ? saved
        : systemDark ? "dark" : "light";
      root.dataset.theme = theme;
      root.style.colorScheme = theme;

      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.dataset.motion = reduce ? "off" : "on";

      if (reduce || sessionStorage.getItem("rp-boot") === "1") {
        root.dataset.boot = "done";
      }
    } catch (_) {}
  })();
`;

export const noScriptStyles = `
  [style*="opacity:0"],
  [style*="opacity: 0"] {
    opacity: 1 !important;
    transform: none !important;
  }
  .boot { display: none !important; }
  .grain, .cursor-dot, .cursor-ring { display: none !important; }
`;
