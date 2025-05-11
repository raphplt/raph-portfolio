"use client";

import * as React from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
	undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = React.useState<Theme>("dark");

	React.useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
