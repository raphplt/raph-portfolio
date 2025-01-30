"use client";
import { Button, Link } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<div className="flex flex-row items-center justify-between fixed top-0 w-full px-20 h-16 shadow-md bg-white z-50">
			<Image src={"/Logo.png"} alt="Logo" width={50} height={50} className="" />
			<nav className="flex flex-row gap-x-10">
				<Link href="/about" className="text-black ">
					A propos
				</Link>
				<Link href="/projects" className="text-black ">
					Mes projets
				</Link>
				<Link href="/projects" className="text-black">
					Stack
				</Link>
				<Button
					as={Link}
					href="/contact"
					color="primary"
					variant="bordered"
					// className="from-secondary to-tertiary bg-gradient-to-b text-white"
				>
					Contact
				</Button>
			</nav>
		</div>
	);
};

export default Header;
