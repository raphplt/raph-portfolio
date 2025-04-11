/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LeftColumn = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const [cards, setCards] = useState([
		{
			title: "Melios",
			description: "L'application de gestion de tâches ultime.",
			technologies: ["ReactNative", "Firebase", "Expo"],
			image: "/Melios.png",
			icon: "game-icons:greek-temple",
			color: "#4F46E5",
		},
		{
			title: "Penfolio",
			description: "Le générateur de portfolio pour les développeurs.",
			technologies: ["NextJS", "TailwindCSS", "Vercel"],
			image: "/Penfolio.png",
			icon: "material-symbols:globe",
			color: "#3B82F6",
		},
		{
			title: "Novacoach",
			description: "La plateforme de gestion pour les coachs.",
			technologies: ["NextJS", "ExpressJS", "Vercel"],
			image: "/Novacoach.png",
			icon: "mdi:dumbbell",
			color: "#10B981",
		},
		{
			title: "Raphotos",
			description: "La galerie de mes plus belles photos",
			technologies: ["NextJS", "TailwindCSS", "Vercel"],
			image: "/Raphotos.png",
			icon: "mdi:camera",
			color: "#F59E0B",
		},
	]);

	useEffect(() => {
		const interval = setInterval(rotateCards, 5000);
		return () => clearInterval(interval);
	}, []);

	const rotateCards = () => {
		setCards((prevCards) => {
			const newOrder = [...prevCards];
			newOrder.push(newOrder.shift()!);
			return newOrder;
		});
		setCurrentCardIndex((prev) => (prev + 1) % cards.length);
	};

	return (
		<div className="relative h-[200px] xl:h-[500px] 2xl:h-[600px] w-11/12 mx-auto mb-10 xl:mb-0 xl:w-[500px] 2xl:w-[600px] flex items-center justify-center z-10">
			<motion.div
				className="w-full h-full relative"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.7 }}
			>
				<AnimatePresence>
					{cards.map((card, index) => (
						<motion.div
							key={card.title}
							className="absolute top-0 left-0 w-full h-full cursor-pointer"
							style={{
								zIndex: cards.length - index,
								rotateY: index === 0 ? 0 : index * 3,
								rotateZ: index === 0 ? 0 : index * -2,
							}}
							initial={{
								scale: 1 - index * 0.08,
								y: index * 30,
								x: index * -20,
								opacity: index === 0 ? 1 : 0.7 - index * 0.2,
								filter: `blur(${index * 1}px)`,
							}}
							animate={{
								scale: 1 - index * 0.08,
								y: index * 30,
								x: index * -20,
								opacity: index === 0 ? 1 : 0.7 - index * 0.2,
								filter: `blur(${index * 1}px)`,
							}}
							exit={{
								scale: 0.8,
								opacity: 0,
								transition: { duration: 0.3 },
							}}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							onClick={() => (index === 0 ? rotateCards() : null)}
							whileHover={
								index === 0 ? { scale: 1.03, transition: { duration: 0.2 } } : {}
							}
						>
							<div
								className={`relative h-full w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
									index === 0 ? "shadow-xl ring-1 ring-gray-200 dark:ring-gray-700" : ""
								}`}
							>
								<Image
									src={card.image}
									alt={card.title}
									fill
									className="object-cover object-center"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
									<div className="flex items-center gap-x-3 mb-2">
										<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
											<Icon icon={card.icon} width={24} color={card.color} />
										</div>
										<h3 className="text-2xl font-bold text-white">{card.title}</h3>
									</div>
									<p className="text-white/90 mb-3 line-clamp-2">{card.description}</p>
									<div className="flex flex-wrap gap-2">
										{card.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
											>
												{tech}
											</span>
										))}
									</div>
									{index === 0 && (
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.2 }}
											className="mt-4"
										>
											<Button
												color="secondary"
												size="sm"
												variant="solid"
												className="text-white"
												endContent={<Icon icon="mdi:arrow-right" width={16} />}
											>
												Voir le projet
											</Button>
										</motion.div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Project progress indicators */}
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 py-4">
				{[0, 1, 2].map((i) => (
					<motion.button
						key={i}
						className={`w-2 h-2 rounded-full ${
							i === currentCardIndex % 3
								? "bg-secondary"
								: "bg-gray-300 dark:bg-gray-600"
						}`}
						whileHover={{ scale: 1.5 }}
						onClick={() => {
							// Logic to show specific card
							while (currentCardIndex % 3 !== i) {
								rotateCards();
							}
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default LeftColumn;
