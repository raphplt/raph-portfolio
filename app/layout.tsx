import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Raphaël Plassart - Développeur Fullstack | Portfolio",
	description:
		"Portfolio de Raphaël Plassart, développeur fullstack passionné. Découvrez mes projets React, Next.js, Node.js et React Native. Spécialisé en développement web et mobile moderne.",
	keywords: [
		"développeur fullstack",
		"React",
		"Next.js",
		"Node.js",
		"TypeScript",
		"React Native",
		"portfolio",
		"développement web",
		"développement mobile",
	],
	authors: [{ name: "Raphaël Plassart" }],
	creator: "Raphaël Plassart",
	publisher: "Raphaël Plassart",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://raphael-plassart.dev",
		title: "Raphaël Plassart - Développeur Fullstack",
		description:
			"Portfolio de Raphaël Plassart, développeur fullstack passionné par la création d'applications web et mobiles modernes.",
		siteName: "Portfolio Raphaël Plassart",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Raphaël Plassart - Développeur Fullstack",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Raphaël Plassart - Développeur Fullstack",
		description:
			"Portfolio de Raphaël Plassart, développeur fullstack passionné par la création d'applications web et mobiles modernes.",
		images: ["/og-image.jpg"],
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
