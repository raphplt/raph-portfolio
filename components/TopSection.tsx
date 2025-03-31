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

	const headerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.2,
				duration: 0.6,
				ease: "easeOut",
			},
		}),
	};

	return (
		<section
			id="home"
			className="flex flex-col xl:flex-row items-center justify-around xl:justify-between min-h-screen bg-gradient-light relative overflow-hidden"
		>
			<motion.div
				className="flex flex-col gap-y-6 xl:px-12 2xl:px-32 px-4"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
			>
				<motion.h2
					className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={headerVariants}
				>
					👋 Hello, I&apos;m
				</motion.h2>

				<motion.h1
					className="inline font-semibold from-primary to-secondary text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] text-2xl lg:text-5xl 2xl:text-6xl bg-clip-text text-transparent bg-gradient-to-b"
					custom={2}
					initial="hidden"
					animate="visible"
					variants={headerVariants}
				>
					Raphael Plassart
				</motion.h1>

				<motion.h2
					className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold"
					custom={3}
					initial="hidden"
					animate="visible"
					variants={headerVariants}
				>
					Full Stack Developer
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
				>
					<ListTechnos />
				</motion.div>

				<motion.div
					className="flex flex-row gap-x-4 mt-2 xl:mt-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.6 }}
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
					</motion.div>

					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
					</motion.div>
				</motion.div>
			</motion.div>

			<motion.div
				className="relative flex flex-row items-center justify-center mx-auto"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
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
						whileHover={index === 0 ? { scale: 1.05 } : {}}
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
			</motion.div>

			<motion.a
				href="#about"
				className="absolute bottom-5 text-black mx-auto w-fit left-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.6 }}
				whileHover={{ scale: 1.2 }}
			>
				<Icon icon="mdi:arrow-down" className="animate-bounce" width={24} />
			</motion.a>
		</section>
	);
};

export default TopSection;