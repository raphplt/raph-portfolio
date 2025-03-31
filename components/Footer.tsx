"use client";
import { Image, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-12 relative">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Brand Section */}
					<div className="flex flex-col items-center md:items-start gap-4">
						<h1 className="text-2xl font-bold">Raphaël Plassart</h1>
						<Image
							aria-hidden
							src="/Logo.png"
							alt="Logo"
							width={60}
							height={60}
							className="hover:scale-110 transition-transform duration-300"
						/>
						<p className="text-sm text-tea-green">
							© {new Date().getFullYear()} - Tous droits réservés
						</p>
					</div>

					{/* Navigation */}
					<nav className="flex flex-col items-center gap-4">
						<h2 className="text-lg font-semibold text-olivine mb-2">Navigation</h2>
						<a
							href="#home"
							className="text-tea-green hover:text-olivine transition-colors"
						>
							A propos
						</a>
						<a
							href="#projects"
							className="text-tea-green hover:text-olivine transition-colors"
						>
							Mes projets
						</a>
						<a
							href="#contact"
							className="text-tea-green hover:text-olivine transition-colors"
						>
							Contact
						</a>
					</nav>

					{/* Social Links */}
					<div className="flex flex-col items-center gap-4">
						<h2 className="text-lg font-semibold text-olivine mb-2">
							Réseaux sociaux
						</h2>
						<div className="flex gap-6">
							<Popover>
								<PopoverTrigger>
									<div className="hover:text-olivine transition-colors p-2 hover:scale-110">
										<Icon icon="mdi:facebook" className="text-2xl" />
									</div>
								</PopoverTrigger>
								<PopoverContent className="bg-parchment text-umber p-2">
									Bientôt disponible !
								</PopoverContent>
							</Popover>
							<Popover>
								<PopoverTrigger>
									<div className="hover:text-olivine transition-colors p-2 hover:scale-110">
										<Icon icon="mdi:linkedin" className="text-2xl" />
									</div>
								</PopoverTrigger>
								<PopoverContent className="bg-parchment text-umber p-2">
									Bientôt disponible !
								</PopoverContent>
							</Popover>
							<Popover>
								<PopoverTrigger>
									<div className="hover:text-olivine transition-colors p-2 hover:scale-110">
										<Icon icon="mdi:instagram" className="text-2xl" />
									</div>
								</PopoverTrigger>
								<PopoverContent className="bg-parchment text-umber p-2">
									Bientôt disponible !
								</PopoverContent>
							</Popover>
							<Popover>
								<PopoverTrigger>
									<div className="hover:text-olivine transition-colors p-2 hover:scale-110">
										<Icon icon="mdi:mail" className="text-2xl" />
									</div>
								</PopoverTrigger>
								<PopoverContent className="bg-parchment text-umber p-2">
									Bientôt disponible !
								</PopoverContent>
							</Popover>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;