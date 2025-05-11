"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react";

function MainFooter() {
	const [isDarkMode, setIsDarkMode] = React.useState(true);
	// const [isChatOpen, setIsChatOpen] = React.useState(false);

	React.useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<footer className="relative border-t bg-background text-foreground transition-colors duration-300">
			<div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					<div className="relative">
						<h2 className="mb-4 text-3xl font-bold tracking-tight">Contactez-moi</h2>
						<p className="mb-6 text-muted-foreground">
							Disponible pour de nouveaux projets
						</p>
						<form className="relative">
							<Input
								type="email"
								placeholder="Votre email"
								className="pr-12 backdrop-blur-sm"
							/>
							<Button
								type="submit"
								size="icon"
								className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
							>
								<Send className="h-4 w-4" />
								<span className="sr-only">Envoyer</span>
							</Button>
						</form>
						<div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">Navigation</h3>
						<nav className="space-y-2 text-sm">
							<a href="#" className="block transition-colors hover:text-primary">
								Accueil
							</a>
							<a href="#about" className="block transition-colors hover:text-primary">
								À propos
							</a>
							<a
								href="#projects"
								className="block transition-colors hover:text-primary"
							>
								Projets
							</a>
							<a
								href="#contact"
								className="block transition-colors hover:text-primary"
							>
								Contact
							</a>
						</nav>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">Contact</h3>
						<address className="space-y-2 text-sm not-italic">
							<p>Email: contact@raphaelplassart.com</p>
							<p>LinkedIn: linkedin.com/in/raphaelplassart</p>
							<p>GitHub: github.com/raphaelplassart</p>
						</address>
					</div>
					<div className="relative">
						<h3 className="mb-4 text-lg font-semibold">Réseaux sociaux</h3>
						<div className="mb-6 flex space-x-4">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="outline" size="icon" className="rounded-full">
											<Linkedin className="h-4 w-4" />
											<span className="sr-only">LinkedIn</span>
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Connectez-vous sur LinkedIn</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="outline" size="icon" className="rounded-full">
											<Twitter className="h-4 w-4" />
											<span className="sr-only">Twitter</span>
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Suivez-moi sur Twitter</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="outline" size="icon" className="rounded-full">
											<Instagram className="h-4 w-4" />
											<span className="sr-only">Instagram</span>
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Suivez-moi sur Instagram</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
						<div className="flex items-center space-x-2">
							<Sun className="h-4 w-4" />
							<Switch
								id="dark-mode"
								checked={isDarkMode}
								onCheckedChange={setIsDarkMode}
							/>
							<Moon className="h-4 w-4" />
							<Label htmlFor="dark-mode" className="sr-only">
								Changer le thème
							</Label>
						</div>
					</div>
				</div>
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
					<p className="text-sm text-muted-foreground">
						© 2024 Raphaël Plassart. Tous droits réservés.
					</p>
					<nav className="flex gap-4 text-sm">
						<a href="#" className="transition-colors hover:text-primary">
							Politique de confidentialité
						</a>
						<a href="#" className="transition-colors hover:text-primary">
							Conditions d&apos;utilisation
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export { MainFooter };
