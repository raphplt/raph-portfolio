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
				primary: {
					50: "#f0f6ff",
					100: "#e0edff",
					200: "#c7ddff",
					300: "#a4c5ff",
					400: "#799fff",
					500: "#476eff",
					600: "#2b45ff",
					700: "#1a2ee6",
					800: "#1826bf",
					900: "#1c2998",
					DEFAULT: "#2b45ff",
				},
				secondary: {
					50: "#f3f7fc",
					100: "#e5eff8",
					200: "#c6dff2",
					300: "#94c5e6",
					400: "#59a6d7",
					500: "#3488c3",
					600: "#266ba4",
					700: "#215686",
					800: "#1f4870",
					900: "#1e3d5f",
					DEFAULT: "#266ba4",
				},
				accent: {
					50: "#fff7ed",
					100: "#ffedd5",
					200: "#fed7aa",
					300: "#fdba74",
					400: "#fb923c",
					500: "#f97316",
					600: "#ea580c",
					700: "#c2410c",
					800: "#9a3412",
					900: "#7c2d12",
					DEFAULT: "#f97316",
				},
				neutral: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
					DEFAULT: "#6b7280",
				},
				success: {
					50: "#ecfdf5",
					100: "#d1fae5",
					200: "#a7f3d0",
					300: "#6ee7b7",
					400: "#34d399",
					500: "#10b981",
					600: "#059669",
					700: "#047857",
					800: "#065f46",
					900: "#064e3b",
					DEFAULT: "#10b981",
				},
				warning: {
					50: "#fffbeb",
					100: "#fef3c7",
					200: "#fde68a",
					300: "#fcd34d",
					400: "#fbbf24",
					500: "#f59e0b",
					600: "#d97706",
					700: "#b45309",
					800: "#92400e",
					900: "#78350f",
					DEFAULT: "#f59e0b",
				},
				danger: {
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					600: "#dc2626",
					700: "#b91c1c",
					800: "#991b1b",
					900: "#7f1d1d",
					DEFAULT: "#ef4444",
				},
			},
			backgroundImage: {
				"gradient-primary-flow":
					"linear-gradient(to bottom, #f0f6ff, #e0edff, #c7ddff, #a4c5ff, #799fff, #476eff, #2b45ff, #1a2ee6, #1826bf)",
				"gradient-secondary-flow":
					"linear-gradient(to bottom, #1826bf, #1f4870, #215686, #266ba4, #3488c3, #59a6d7, #94c5e6, #c6dff2)",
				"gradient-accent-flow":
					"linear-gradient(to bottom, #c6dff2, #fff7ed, #ffedd5, #fed7aa, #fdba74, #fb923c, #f97316, #ea580c)",
				"gradient-neutral-flow":
					"linear-gradient(to bottom, #ea580c, #ec754f, #ee8e7e, #efa69d, #f0bdba, #e2d3d5, #d1d5db, #9ca3af, #6b7280, #4b5563, #374151, #1f2937)",

				"gradient-primary-soft":
					"linear-gradient(to bottom, #f0f6ff, #e0edff, #c7ddff)",
				"gradient-secondary-soft":
					"linear-gradient(to bottom, #c7ddff, #f3f7fc, #e5eff8)",
				"gradient-accent-soft":
					"linear-gradient(to bottom, #e5eff8, #fff7ed, #ffedd5)",
				"gradient-neutral-soft":
					"linear-gradient(to bottom, #ffedd5, #f9fafb, #f3f4f6)",
				"gradient-success-soft":
					"linear-gradient(to bottom, #f3f4f6, #ecfdf5, #d1fae5)",
			},
		},
		animation: {
			fadeIn: "fadeIn 1s ease-out forwards",
		},
		keyframes: {
			fadeIn: {
				"0%": { opacity: "0", transform: "translateY(20px)" },
				"100%": { opacity: "1", transform: "translateY(0)" },
			},
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#2b45ff",
							foreground: "#ffffff",
						},
						secondary: {
							DEFAULT: "#266ba4",
							foreground: "#ffffff",
						},
						success: "#10b981",
						warning: "#f59e0b",
						danger: "#ef4444",
					},
				},
				dark: {
					colors: {
						primary: "#476eff",
						secondary: "#3488c3",
						success: "#34d399",
						warning: "#fbbf24",
						danger: "#f87171",
					},
				},
			},
		}),
	],
} satisfies Config;