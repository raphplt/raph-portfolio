"use client";

import { Home, User, Briefcase, MessageSquare } from "lucide-react";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
	{ name: "Accueil", href: "#home", icon: Home },
	{ name: "À propos", href: "#about", icon: User },
	{ name: "Projets", href: "#projects", icon: Briefcase },
	{ name: "Contact", href: "#contact", icon: MessageSquare },
];

export function NavbarMain() {
	const activeSection = useActiveSection([
		"home",
		"about",
		"projects",
		"contact",
	]);

	return (
		<nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
			<div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
				{navItems.map((item) => {
					const isActive = activeSection === item.href.replace("#", "");

					return (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"relative cursor-pointer text-sm font-semibold rounded-full transition-colors",
								"text-foreground/80 hover:text-primary",
								isActive && "bg-muted text-primary",
								"px-6 py-2"
							)}
						>
							<span
								className="transition-opacity duration-200 inline"
								style={{ color: "white" }}
							>
								{item.name}
							</span>
							{isActive && (
								<motion.div
									layoutId="lamp"
									className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
									initial={false}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 30,
									}}
								>
									<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-secondary rounded-t-full">
										<div className="absolute w-12 h-6 bg-secondary/20 rounded-full blur-md -top-2 -left-2" />
										<div className="absolute w-8 h-6 bg-secondary/20 rounded-full blur-md -top-1" />
										<div className="absolute w-4 h-4 bg-secondary/20 rounded-full blur-sm top-0 left-2" />
									</div>
								</motion.div>
							)}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
