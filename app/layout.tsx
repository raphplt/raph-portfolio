import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Raphaël Plassart - Portfolio",
	description: "Portfolio de Raphaël Plassart, développeur fullstack",
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
