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
				primary: "#7400b8ff",
				secondary: "#6930c3ff",
				background: "#fff",
				tertiary: "#5390d9ff",
				foreground: "#4ea8deff",
				danger: "#48bfe3ff",
				warning: "#56cfe1ff",
				"french-violet": "#7400b8ff",
				grape: "#6930c3ff",
				"slate-blue": "#5e60ceff",
				"united-nations-blue": "#5390d9ff",
				"picton-blue": "#4ea8deff",
				aero: "#48bfe3ff",
				"sky-blue": "#56cfe1ff",
				"tiffany-blue": "#64dfdfff",
				turquoise: "#72efddff",
				aquamarine: "#80ffdbff",
			},
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: "#7400b8ff",
						secondary: "#6930c3ff",
						danger: "#48bfe3ff",
						warning: "#56cfe1ff",
					},
				},
				dark: {
					colors: {
						primary: "#6930c3ff",
						secondary: "#7400b8ff",
						danger: "#48bfe3ff",
						warning: "#56cfe1ff",
					},
				},
			},
		}),
	],
} satisfies Config;
