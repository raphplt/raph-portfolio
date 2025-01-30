import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	display: "swap",
	weight: "500",
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
		<html lang="fr">
			<body className={`${poppins.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}