import { motion } from "framer-motion";
import { useState } from "react";

export default function Switch({ isOn, handleToggle }) {
	return (
		<div
			className={`flex items-center cursor-pointer w-16 h-8 p-1 rounded-full ${
				isOn ? "bg-green-500" : "bg-gray-300"
			}`}
			onClick={handleToggle}
		>
			<motion.div
				className="w-6 h-6 bg-white rounded-full shadow-md"
				layout
				transition={{ type: "spring", stiffness: 700, damping: 30 }}
			/>
		</div>
	);
}
