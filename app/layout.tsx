import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Raphaël Portfolio",
	description: "Portfolio de Raphaël Plassart",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={inter.variable}>
			<body className="font-sans">
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}