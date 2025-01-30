"use client";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<div className="flex flex-row items-center justify-between fixed top-0 w-full px-20 h-16 shadow-md bg-white/30 z-50">
			<div className="flex flex-row items-center gap-x-2">
				<Image src={"/Logo.png"} alt="Logo" width={50} height={50} />
				<p className="font-bold">Raphael Plassart</p>
			</div>
			<nav className="flex flex-row gap-x-10">
				<Link href="/about" className="text-black font-semibold">
					A propos
				</Link>
				<Link href="/projects" className="text-black font-semibold">
					Mes projets
				</Link>
				<Link href="/projects" className="text-black font-semibold">
					Stack
				</Link>
				<Button
					as={Link}
					href="mailto:raphael.plassart@gmail.com"
					color="primary"
					variant="bordered"
					endContent={<Icon icon="lucide:send" />}
				>
					Contact
				</Button>
			</nav>
		</div>
	);
};

export default Header;
