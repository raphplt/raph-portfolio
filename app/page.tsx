"use client";
import React from "react";
import TopSection from "@/components/TopSection";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<TopSection />
			<AboutMe />
			<Projects />
			<Contact />
		</main>
	);
};

export default Home;