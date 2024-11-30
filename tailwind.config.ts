import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				gunmetal: "#19323cff",
				roseTaupe: "#8c5e58ff",
				darkCyan: "#4b8f8cff",
				ivory: "#fdfbedff",
			},
			animation: {
				"advanced-rgb": "advanced-rgb 6s ease infinite",
			},
			keyframes: {
				"advanced-rgb": {
					"0%": { "background-color": "#3a4a5e" }, // pastel gunmetal
					"25%": { "background-color": "#b58a84" }, // pastel roseTaupe
					"50%": { "background-color": "#7fb3b0" }, // pastel darkCyan
					"75%": { "background-color": "#d3cfcf" }, // pastel ivory
					"100%": { "background-color": "#3a4a5e" }, // Retour à pastel gunmetal
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							foreground: "#ffffff",
							DEFAULT: "#19323cff",
						},
						secondary: {
							foreground: "#ffffff",
							DEFAULT: "#8c5e58ff",
						},
						danger: "#4b8f8cff",
						background: "#fdfbedff",
						foreground: "#19323cff",
					},
				},
				dark: {
					colors: {
						primary: "#19323cff",
						secondary: "#8c5e58ff",
						danger: "#4b8f8cff",
						background: "#19323cff",
						foreground: "#fdfbedff",
					},
				},
			},
		}),
	],
};

export default config;
