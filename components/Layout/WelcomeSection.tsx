"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeSection() {
	const roles = ["frontend", "backend", "mobile"];
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
		}, 2000);
		return () => clearInterval(interval);
	}, [roles.length]);

	return (
		<section
			className="h-screen w-full"
			style={{
				backgroundImage: "url('/assets/Gradient.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col w-10/12 pt-20 mx-auto">
				<h1 className="text-8xl">Hi, I'm Raphaël</h1>
				<div className="overflow-hidden h-24">
					<AnimatePresence>
						<motion.h2
							key={roles[currentRoleIndex]}
							className="text-8xl"
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: "0%", opacity: 1 }}
							exit={{ y: "-100%", opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							{roles[currentRoleIndex]}
						</motion.h2>
					</AnimatePresence>
					<div>developer</div>
				</div>
			</div>
		</section>
	);
}
