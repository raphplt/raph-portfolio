"use client";
import { useState, useEffect } from "react";
import { WordsPullUp } from "../Common/Animations/WordPullUp";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function WelcomeSection() {
	const roles: Array<keyof typeof images> = ["frontend", "backend", "mobile"];
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
		}, 2000);
		return () => clearInterval(interval);
	}, [roles.length]);

	const images = {
		frontend: "/assets/pc.svg",
		backend: "/assets/server.svg",
		mobile: "/assets/phone.svg",
	};

	const imageVariants = {
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
		exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
	};

	return (
		<section className="h-screen w-full">
			<div className="flex flex-col w-10/12 pt-20 mx-auto">
				<h1 className="text-8xl">👋 Hi, I&apos;m Raphaël</h1>
				<div className="flex pt-4 items-center ml-10">
					<p className="text-8xl pr-4">developer</p>
					<WordsPullUp
						key={currentRoleIndex}
						text={roles[currentRoleIndex]}
						className="text-8xl"
					/>
				</div>
				<div className="flex justify-center mt-10">
					<motion.img
						key={currentRoleIndex}
						src={images[roles[currentRoleIndex]]}
						variants={imageVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-1/3 h-auto"
					/>
				</div>
			</div>

			<div className="absolute bottom-0 w-full text-center">
				<Icon
					icon="akar-icons:chevron-down"
					className="text-4xl mt-10 animate-bounce mx-auto"
				/>
			</div>
		</section>
	);
}