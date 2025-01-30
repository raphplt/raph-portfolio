"use client";
import { Image, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0 flex flex-col gap-4">
					<h1 className="text-2xl font-bold">Raphaël Plassart</h1>
					<Image aria-hidden src="/Logo.png" alt="Logo" width={50} height={50} />
					<p className="text-sm">
						© {new Date().getFullYear()} - Tous droits réservés
					</p>
				</div>
				<nav className="flex flex-col md:flex-row items-center gap-6">
					<a href="#home" className="text-sm hover:text-gray-400">
						Accueil
					</a>
					<a href="#analyse" className="text-sm hover:text-gray-400">
						Analyse marketing gratuite
					</a>

					<Popover>
						<PopoverTrigger>
							<a className="text-sm hover:text-gray-400">Blog</a>
						</PopoverTrigger>
						<PopoverContent>Bientôt disponible !</PopoverContent>
					</Popover>

					<a
						href="mailto:waheb.moad@gmail.com"
						className="text-sm hover:text-gray-400"
					>
						Contact
					</a>
				</nav>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<Popover>
						<PopoverTrigger>
							<div>
								<Icon icon="mdi:facebook" className="text-2xl" />
							</div>
						</PopoverTrigger>
						<PopoverContent>Bientôt disponible !</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger>
							<div>
								<Icon icon="mdi:linkedin" className="text-2xl" />
							</div>
						</PopoverTrigger>
						<PopoverContent>Bientôt disponible !</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger>
							<div>
								<Icon icon="mdi:instagram" className="text-2xl" />
							</div>
						</PopoverTrigger>
						<PopoverContent>Bientôt disponible !</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger>
							<div>
								<Icon icon="mdi:mail" className="text-2xl" />
							</div>
						</PopoverTrigger>
						<PopoverContent>Bientôt disponible !</PopoverContent>
					</Popover>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
