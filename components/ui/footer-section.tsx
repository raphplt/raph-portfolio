"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

function MainFooter() {
	return (
		<footer className="relative border-t bg-background text-foreground transition-colors duration-300">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl z-[-1]" />
			<div className="container mx-auto px-4 py-12 relative z-10">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					<div className="relative">
						<h2 className="mb-4 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
							Rejoignez ma newsletter
						</h2>
						<p className="mb-6 text-muted-foreground text-sm">
							Je vous envoie des nouvelles de mes projets et des articles
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
							<a href="#home" className="block transition-colors hover:text-primary">
								Accueil
							</a>
							<a href="#about" className="block transition-colors hover:text-primary">
								À propos
							</a>
							<a
								href="#timeline"
								className="block transition-colors hover:text-primary"
							>
								Parcours
							</a>
							<a href="#cv" className="block transition-colors hover:text-primary">
								CV
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
							<p className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								raphael.plassart@gmail.com
							</p>
							<p className="flex items-center gap-2">
								<Linkedin className="h-4 w-4" />
								linkedin.com/in/raphaël-plassart
							</p>
							<p className="flex items-center gap-2">
								<Github className="h-4 w-4" />
								github.com/raphplt
							</p>
						</address>
					</div>
					<div className="relative">
						<h3 className="mb-4 text-lg font-semibold">Réseaux sociaux</h3>
						<div className="mb-6 flex space-x-4">
							<Button
								variant="outline"
								size="icon"
								className="rounded-full"
								onClick={() => {
									window.open(
										"https://www.linkedin.com/in/rapha%C3%ABl-plassart/",
										"_blank"
									);
								}}
							>
								<Linkedin className="h-4 w-4" />
								<span className="sr-only">LinkedIn</span>
							</Button>

							<Button
								variant="outline"
								size="icon"
								className="rounded-full"
								onClick={() => {
									window.open("https://github.com/raphplt", "_blank");
								}}
							>
								<Github className="h-4 w-4" />
								<span className="sr-only">Github</span>
							</Button>

							<Button
								variant="outline"
								size="icon"
								className="rounded-full"
								onClick={() => {
									window.open("https://www.instagram.com/raph.otos/", "_blank");
								}}
							>
								<Instagram className="h-4 w-4" />
								<span className="sr-only">Instagram</span>
							</Button>
						</div>
						<ThemeToggle />
					</div>
				</div>
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Raphaël Plassart. Tous droits réservés.
					</p>
					<nav className="flex gap-4 text-sm">
						<a href="/privacy" className="transition-colors hover:text-primary">
							Politique de confidentialité
						</a>
						<a href="/terms" className="transition-colors hover:text-primary">
							Conditions d&apos;utilisation
						</a>
						<a href="/legal" className="transition-colors hover:text-primary">
							Mentions légales
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export { MainFooter };
