"use client";

import {
	Home,
	User,
	Briefcase,
	Mail,
	Clock,
	MessageSquare,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavbarMain() {
	const navItems = [
		{ name: "Accueil", url: "#", icon: Home },
		{ name: "À propos", url: "#about", icon: User },
		{ name: "Parcours", url: "#timeline", icon: Clock },
		{ name: "Projets", url: "#projects", icon: Briefcase },
		{ name: "Témoignages", url: "#testimonials", icon: MessageSquare },
		{ name: "Contact", url: "#contact", icon: Mail },
	];

	return <NavBar items={navItems} />;
}
