"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/context/theme-context";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			aria-label="Changer le thème"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none
				${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}`}
		>
			<span
				className={`absolute left-1 top-1 w-4 h-4 flex items-center justify-center rounded-full transition-transform duration-300
				${theme === "dark" ? "translate-x-6 bg-zinc-900" : "translate-x-0 bg-white"}`}
			>
				{theme === "dark" ? (
					<Moon className="w-3 h-3 text-yellow-300" />
				) : (
					<Sun className="w-3 h-3 text-yellow-500" />
				)}
			</span>
		</button>
	);
}
