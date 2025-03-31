import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
	content: [
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#6c584cff",
				secondary: "#a98467ff",
				background: "#fff",
				tertiary: "#adc178ff",
				foreground: "#dde5b6ff",
				danger: "#a98467ff",
				warning: "#f0ead2ff",
				parchment: "#f0ead2ff",
				"tea-green": "#dde5b6ff",
				olivine: "#adc178ff",
				chamoisee: "#a98467ff",
				umber: "#6c584cff",
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			backgroundImage: {
				"gradient-light":
					"linear-gradient(to right, #f0ead2ff, #dde5b6ff, #adc178ff, #a98467ff, #6c584cff)",
				"gradient-dark":
					"linear-gradient(to right, #0f172a, #1e293b, #334155, #475569, #6c584cff)",
				"gradient-soft": "linear-gradient(to right, #ffffff, #f0ead2ff, #dde5b6ff)",
				"gradient-subtle": "linear-gradient(to bottom, #ffffff, #f0ead2ff)",
				"gradient-accent": "linear-gradient(to right, #ffffff, #adc178ff)",
				"gradient-warm": "linear-gradient(to right, #ffffff, #a98467ff, #6c584cff)",
				"gradient-cool": "linear-gradient(to right, #ffffff, #dde5b6ff, #adc178ff)",
				"gradient-diagonal": "linear-gradient(135deg, #f0ead2ff, #adc178ff)",
				"gradient-radial": "radial-gradient(circle, #ffffff, #f0ead2ff)",
				"gradient-top": "linear-gradient(to bottom, #f0ead2ff, #adc178ff)",
				"gradient-bottom": "linear-gradient(to bottom, #adc178ff, #6c584cff)",
			},
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: "#6c584cff",
						secondary: "#a98467ff",
						danger: "#adc178ff",
						warning: "#f0ead2ff",
					},
				},
				dark: {
					colors: {
						primary: "#a98467ff",
						secondary: "#6c584cff",
						danger: "#adc178ff",
						warning: "#f0ead2ff",
					},
				},
			},
		}),
	],
} satisfies Config;