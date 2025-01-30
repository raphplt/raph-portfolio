"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<div className="fixed top-0 w-full h-16 shadow-md bg-white/30 z-50 px-6 md:px-20 flex items-center justify-between">
			<div className="flex items-center gap-x-2">
				<Image src="/Logo.png" alt="Logo" width={50} height={50} />
				<p className="font-bold">Raphael Plassart</p>
			</div>

			{/* Desktop Navigation */}
			<nav className="hidden md:flex gap-x-10">
				<Link href="#home" className="text-black font-semibold">
					Accueil
				</Link>
				<Link href="#about" className="text-black font-semibold">
					A propos
				</Link>
				<Link href="#projects" className="text-black font-semibold">
					Mes projets
				</Link>
				<Link href="#contact" className="text-black font-semibold">
					Formulaire de contact
				</Link>
				<Button
					as={Link}
					href="mailto:raphael.plassart@gmail.com"
					color="primary"
					variant="bordered"
					endContent={<Icon icon="lucide:send" />}
				>
					Me contacter
				</Button>
			</nav>

			{/* Mobile Menu Button */}
			<button className="md:hidden" onClick={toggleMenu}>
				<Icon icon="mdi:menu" className="text-3xl" />
			</button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-white text-xl space-y-6 z-50">
					<button
						className="absolute top-6 right-6 text-white text-3xl"
						onClick={closeMenu}
					>
						<Icon icon="mdi:close" />
					</button>
					<Link href="#home" onPress={closeMenu}>
						Accueil
					</Link>
					<Link href="#about" onPress={closeMenu}>
						A propos
					</Link>
					<Link href="#projects" onPress={closeMenu}>
						Mes projets
					</Link>
					<Link href="#contact" onPress={closeMenu}>
						Formulaire de contact
					</Link>
					<Button
						as={Link}
						href="mailto:raphael.plassart@gmail.com"
						color="primary"
						variant="bordered"
						endContent={<Icon icon="lucide:send" />}
						onPress={closeMenu}
					>
						Me contacter
					</Button>
				</div>
			)}
		</div>
	);
};

export default Header;
