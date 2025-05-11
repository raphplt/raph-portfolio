import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Raphael Plassart",
	description:
		"Développeur fullstack passionné par la création d'applications web et mobiles modernes, avec un focus sur la performance et l'expérience utilisateur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
				>
					{children}
				</body>
			</html>
		);
}
