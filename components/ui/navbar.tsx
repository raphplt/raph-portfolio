"use client";

import { Home, User, Briefcase, MessageSquare } from "lucide-react";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";

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
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
			<div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
				{navItems.map((item) => {
					const Icon = item.icon;
					const isActive = activeSection === item.href.replace("#", "");

					return (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"relative cursor-pointer text-sm font-semibold rounded-full transition-colors",
								"text-foreground/80 hover:text-primary",
								isActive && "bg-muted text-primary",
								isMobile ? "px-3 py-2" : "px-6 py-2"
							)}
						>
							<span
								className={cn(
									"transition-opacity duration-200",
									isMobile ? "hidden" : "inline"
								)}
							>
								{item.name}
							</span>
							<span
								className={cn(
									"transition-opacity duration-200",
									isMobile ? "inline" : "hidden"
								)}
							>
								<Icon size={18} strokeWidth={2.5} />
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
				<div className="h-6 w-px bg-border mx-2" />
				<div className="mr-2">
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
}
