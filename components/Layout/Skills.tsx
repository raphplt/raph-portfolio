"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
	const sectionVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="skills" className="h-screen bg-gray-100 py-20">
			<motion.h1
				initial="hidden"
				animate="visible"
				variants={sectionVariants}
				className="text-4xl font-bold text-center mb-10"
			>
				Développeur Fullstack, je suis spécialisé dans le développement
				d'applications web et mobile.
			</motion.h1>
			<div className="flex flex-row items-start justify-evenly w-10/12 mx-auto">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={itemVariants}
					className="bg-white p-6 rounded-lg shadow-lg"
				>
					<h2 className="text-2xl font-semibold mb-4">Frontend</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Vue</li>
					</ul>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={itemVariants}
					className="bg-white p-6 rounded-lg shadow-lg"
				>
					<h2 className="text-2xl font-semibold mb-4">Backend</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>Node.js</li>
						<li>Express</li>
						<li>PHP</li>
						<li>Laravel</li>
					</ul>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={itemVariants}
					className="bg-white p-6 rounded-lg shadow-lg"
				>
					<h2 className="text-2xl font-semibold mb-4">Mobile</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>React Native</li>
						<li>Flutter</li>
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
