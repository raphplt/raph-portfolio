export const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem("theme");
      const systemDark = matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = saved === "dark" || saved === "light"
        ? saved
        : systemDark ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {}
  })();
`;
