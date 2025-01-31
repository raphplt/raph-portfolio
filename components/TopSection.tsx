import React, { useState, useEffect } from "react";
import ListTechnos from "./ListTechnos";
import PreviewProject from "./PreviewProject";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";

const TopSection = () => {
	const [cards, setCards] = useState([
		{
			title: "Melios",
			description: "L'application de gestion de tâches ultime.",
			technologies: ["ReactNative", "Firebase", "Expo"],
			image: "/Melios.png",
			icon: "game-icons:greek-temple",
		},
		{
			title: "Novacoach",
			description: "La plateforme de gestion pour les coachs.",
			technologies: ["NextJS", "ExpressJS", "Vercel"],
			image: "/Novacoach.png",
			icon: "mdi:dumbbell",
		},
		{
			title: "Raphotos",
			description: "La galerie de mes plus belles photos",
			technologies: ["NextJS", "TailwindCSS", "Vercel"],
			image: "/Raphotos.png",
			icon: "mdi:camera",
		},
	]);

	const rotateCards = () => {
		setCards((prevCards) => {
			const newOrder = [...prevCards];
			newOrder.push(newOrder.shift()!);
			return newOrder;
		});
	};

	useEffect(() => {
		const interval = setInterval(rotateCards, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="flex flex-col xl:flex-row items-center justify-around xl:justify-between min-h-screen xl:bg-gradient-to-r from-white via-gray-100 to-gray-300 relative overflow-hidden"
		>
			<div className="flex flex-col gap-y-6 xl:px-12 2xl:px-32 px-4">
				<h2 className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold">
					👋 Hello, I’m
				</h2>
				<h1 className="inline font-semibold from-secondary to-tertiary text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] text-2xl lg:text-5xl 2xl:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
					Raphael Plassart
				</h1>
				<h2 className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold">
					Full Stack Developer
				</h2>
				<ListTechnos />

				<div className="flex flex-row gap-x-4 mt-2 xl:mt-12">
					<Button
						color="secondary"
						className="text-white"
						startContent={<Icon icon="mdi:github" width={24} />}
						as={Link}
						href="https://github.com/raphplt"
						target="_blank"
					>
						GitHub
					</Button>

					<Button
						color="secondary"
						variant="bordered"
						startContent={<Icon icon="mdi:linkedin" width={24} />}
						as={Link}
						href="https://www.linkedin.com/in/rapha%C3%ABl-plassart/"
						target="_blank"
					>
						LinkedIn
					</Button>
				</div>
			</div>

			<div className="relative flex flex-row items-center justify-center mx-auto">
				{cards.map((card, index) => (
					<motion.div
						key={card.title}
						className="absolute"
						style={{
							zIndex: cards.length - index,
						}}
						initial={{
							translateY: index * -30,
							translateX: index * -40,
							scale: 1 - index * 0.1,
						}}
						animate={{
							translateY: index * -30,
							translateX: index * -40,
							scale: 1 - index * 0.1,
						}}
						transition={{
							duration: 0.5,
						}}
						onClick={index === 0 ? rotateCards : undefined}
					>
						<PreviewProject
							title={card.title}
							description={card.description}
							technologies={card.technologies}
							image={card.image}
							icon={card.icon}
						/>
					</motion.div>
				))}
			</div>

			<a
				href="#about"
				className="absolute bottom-5 text-black mx-auto w-fit left-1/2"
			>
				<Icon icon="mdi:arrow-down" className="animate-bounce" width={24} />
			</a>
		</section>
	);
};

export default TopSection;
