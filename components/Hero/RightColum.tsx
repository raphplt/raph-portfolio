/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@heroui/react";
import { motion, useTransform } from "framer-motion";
import React from "react";
import ListTechnos from "../ListTechnos";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const RightColum = ({ scrollYProgress }: { scrollYProgress: any }) => {
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	// Text animation variants
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.15,
				duration: 0.8,
				ease: [0.25, 0.1, 0.25, 1.0],
			},
		}),
	};

	// Character by character animation variants
	const nameLetters = "Raphael Plassart".split("");

	return (
		<motion.div
			className="flex flex-col gap-y-5 md:gap-y-8 z-10 md:order-1"
			style={{ y: textY }}
		>
			<motion.div
				className="inline-flex items-center gap-x-3 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
			>
				<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
				<span className="text-sm font-medium">
					Disponible pour de nouveaux projets
				</span>
			</motion.div>

			<motion.h2
				className="font-medium text-lg md:text-2xl text-gray-600 dark:text-gray-300"
				custom={1}
				initial="hidden"
				animate="visible"
				variants={textVariants}
			>
				Bonjour, je m&apos;appelle
			</motion.h2>

			<div className="overflow-hidden">
				<motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">
					{nameLetters.map((letter, index) => (
						<motion.span
							key={index}
							className="inline-block"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.8 + index * 0.04,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							{letter === " " ? <span>&nbsp;</span> : letter}
						</motion.span>
					))}
				</motion.h1>
			</div>

			<motion.h3
				className="text-xl md:text-3xl font-bold bg-gradient-to-r from-secondary-700 to-secondary-500 bg-clip-text text-transparent"
				custom={3}
				initial="hidden"
				animate="visible"
				variants={textVariants}
			>
				Je crée des expériences web remarquables
			</motion.h3>

			<motion.p
				className="text-default-700 dark:text-gray-300 max-w-lg leading-relaxed"
				custom={4}
				initial="hidden"
				animate="visible"
				variants={textVariants}
			>
				Développeur fullstack passionné par la création d&apos;applications web et
				mobiles modernes, avec un focus sur la performance et l&apos;expérience
				utilisateur.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.6 }}
				className="mt-2"
			>
				<ListTechnos />
			</motion.div>

			<motion.div
				className="flex flex-wrap gap-4 mt-4 items-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.4, duration: 0.6 }}
			>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 1.6, duration: 0.5 }}
				>
					<Button
						color="primary"
						className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-400 text-white shadow-lg 
                before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] 
                before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                hover:shadow-primary-500/50 hover:shadow-xl transition-all duration-300
                hover:translate-y-[-2px]"
						startContent={
							<motion.div
								animate={{ rotate: [0, 10, 0] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								<Icon icon="mdi:rocket-launch" width={20} />
							</motion.div>
						}
						as={Link}
						href="#contact"
						size="lg"
					>
						Démarrer un projet
					</Button>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 2.0, duration: 0.5 }}
				>
					<Button
						color="primary"
						className="relative overflow-hidden bg-white text-primary-600 border-2 border-primary-400
                before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] 
                before:bg-gradient-to-r before:from-transparent before:via-primary-100 before:to-transparent
                hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-400 hover:text-white 
                shadow-lg hover:shadow-primary-500/50 hover:shadow-xl transition-all duration-300
                hover:translate-y-[-2px]"
						startContent={
							<motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
								<Icon icon="mdi:file-document-outline" width={20} />
							</motion.div>
						}
						as={Link}
						href="#projects"
						size="lg"
					>
						Voir mes projets
					</Button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default RightColum;
