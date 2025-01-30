import React, { useState, useEffect } from "react";
import ListTechnos from "./ListTechnos";
import PreviewProject from "./PreviewProject";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const TopSection = () => {
	const [cards, setCards] = useState([
		{
			title: "Melios",
			description: "L'application de gestion de tâches ultime.",
			technologies: ["ReactNative", "Firebase", "Expo"],
			image: "/Melios.png",
		},
		{
			title: "Novacoach",
			description: "La plateforme de gestion pour les coachs.",
			technologies: ["NextJS", "ExpressJS", "Vercel"],
			image: "/Novacoach.png",
		},
		{
			title: "Raphotos",
			description: "La galerie de mes plus belles photos",
			technologies: ["NextJS", "TailwindCSS", "Vercel"],
			image: "/Raphotos.png",
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
		<section className="flex flex-row items-center justify-between lg:h-screen">
			<div className="flex flex-col gap-y-6 px-20">
				<h2 className="text-6xl font-semibold">👋 Hello, I’m</h2>
				<h1 className="inline font-semibold from-secondary to-tertiary text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
					Raphael Plassart
				</h1>
				<h2 className="text-6xl font-semibold">Full Stack Developer</h2>
				<ListTechnos />
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
