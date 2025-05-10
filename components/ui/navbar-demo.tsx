"use client";

import { Home, User, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
	const navItems = [
		{ name: "Accueil", url: "#", icon: Home },
		{ name: "À propos", url: "#about", icon: User },
		{ name: "Projets", url: "#projects", icon: Briefcase },
		{ name: "Contact", url: "#contact", icon: Mail },
	];

	return <NavBar items={navItems} />;
}
