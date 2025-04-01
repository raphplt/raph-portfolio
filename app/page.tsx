"use client";
import React from "react";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const Home = () => {
	return (
		<motion.main
			className="overflow-x-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<HeroSection />
			<AboutMe />
			<Projects />
			<Contact />
		</motion.main>
	);
};

export default Home;