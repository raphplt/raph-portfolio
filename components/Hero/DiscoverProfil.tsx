import { motion } from "framer-motion";
import React from "react";

const DiscoverProfil = () => {
	return (
		<motion.a
			href="#about"
			className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-y-2 text-default-300 dark:text-gray-300 z-10"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.8, duration: 0.5 }}
			whileHover={{ scale: 1.1 }}
		>
			<span className="text-sm font-medium">Découvrir mon profil</span>
			<motion.div
				animate={{
					y: [0, 5, 0],
				}}
				transition={{
					repeat: Infinity,
					duration: 1.5,
					ease: "easeInOut",
				}}
				className="w-6 h-10 border-2 border-default-300 dark:border-gray-300 rounded-full flex justify-center"
			>
				<motion.div
					className="w-1.5 h-1.5 bg-default-300 dark:bg-gray-300 rounded-full mt-2"
					animate={{
						y: [0, 12, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 1.5,
						ease: "easeInOut",
					}}
				/>
			</motion.div>
		</motion.a>
	);
};

export default DiscoverProfil;
