"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Github, LucideLinkedin, SendIcon } from "lucide-react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const textStyle =
		"text-gray-800 hover:text-primary transition-colors duration-300 text-sm font-semibold";

	return (
		<div className="fixed top-2 w-full z-50 ">
			<div className="flex items-center justify-between container mx-auto h-16 px-4 md:px-8 backdrop-blur-md bg-white/50 border-b border-white/20 shadow-lg rounded-full">
				<button
					className="flex items-center gap-x-4"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<Image
						src="/Logo.png"
						alt="Logo"
						width={100}
						height={100}
						className="w-8 h-8"
					/>
					<p className="font-bold text-gray-900 text-md">Raphael Plassart</p>
				</button>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-x-6 items-center">
					<Link href="#home" className={textStyle}>
						Accueil
					</Link>
					<Link href="#about" className={textStyle}>
						A propos
					</Link>
					<Link href="#projects" className={textStyle}>
						Mes projets
					</Link>
					<Link href="#contact" className={textStyle}>
						Formulaire de contact
					</Link>
					<div className="flex items-center gap-x-4">
						<Button
							as={Link}
							href="https://github.com/raphplt"
							color="primary"
							isIconOnly
							variant="bordered"
							target="_blank"
							className="backdrop-blur-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-300"
						>
							<Github size={20} />
						</Button>
						<Button
							as={Link}
							href="https://www.linkedin.com/in/rapha%C3%ABl-plassart/"
							color="primary"
							isIconOnly
							variant="bordered"
							target="_blank"
							className="backdrop-blur-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-300"
						>
							<LucideLinkedin size={20} />
						</Button>
					</div>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
					onClick={toggleMenu}
				>
					<Icon icon="mdi:menu" className="text-2xl text-gray-800" />
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div className="fixed inset-0 backdrop-blur-lg bg-white/70 flex flex-col items-center justify-center space-y-8 z-50 animate-fadeIn">
					<button
						className="absolute top-6 right-6 text-gray-800 p-2 rounded-full hover:bg-white/20 transition-colors"
						onClick={closeMenu}
					>
						<Icon icon="mdi:close" className="text-2xl" />
					</button>
					<Link
						href="#home"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Accueil
					</Link>
					<Link
						href="#about"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						A propos
					</Link>
					<Link
						href="#projects"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Mes projets
					</Link>
					<Link
						href="#contact"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Formulaire de contact
					</Link>
					<Button
						as={Link}
						href="mailto:raphael.plassart@gmail.com"
						color="primary"
						variant="bordered"
						endContent={<SendIcon />}
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