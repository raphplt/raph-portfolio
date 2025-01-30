"use client";
import React from "react";
import TopSection from "@/components/TopSection";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<TopSection />
			<AboutMe />
			<Projects />
		</main>
	);
};

export default Home;