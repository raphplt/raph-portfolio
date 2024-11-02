"use client";
import { useState, useEffect } from "react";
import { WordsPullUp } from "../Common/Animations/WordPullUp";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Switch from "../Common/Animations/Switch";

export default function WelcomeSection() {
	const roles = ["frontend", "backend", "mobile"];
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false); // State to manage pause

	useEffect(() => {
		if (!isPaused) {
			const interval = setInterval(() => {
				setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
			}, 2000); // Synchronize interval with animation duration
			return () => clearInterval(interval);
		}
	}, [roles.length, isPaused]);

	const images = {
		frontend: "/assets/pc.svg",
		backend: "/assets/server.svg",
		mobile: "/assets/phone.svg",
	};

	const imageVariants = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
	};

	const handleToggle = () => setIsPaused(!isPaused); // Toggle pause state

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
					<Switch isOn={!isPaused} handleToggle={handleToggle} />
				</div>
				<div className="flex justify-center mt-10">
					<AnimatePresence mode="wait">
						<motion.img
							key={currentRoleIndex}
							src={images[roles[currentRoleIndex]]}
							alt={roles[currentRoleIndex]}
							variants={imageVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="w-1/3 h-auto"
						/>
					</AnimatePresence>
				</div>
			</div>

			<div
				className="absolute bottom-0 w-full text-center"
				onClick={() => {
					document.getElementById("skills")?.scrollIntoView({
						behavior: "smooth",
					});
				}}
			>
				<Icon
					icon="akar-icons:chevron-down"
					className="text-4xl mt-10 animate-bounce mx-auto"
				/>
			</div>
		</section>
	);
}