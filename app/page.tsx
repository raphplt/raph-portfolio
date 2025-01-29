"use client";
import React from "react";
import ListTechnos from "@/components/ListTechnos";
import PreviewProject from "@/components/PreviewProject";

const Home = () => {
	return (
		<section className="flex flex-row items-center justify-between lg:h-screen">
			<div className="flex flex-col gap-y-6 ml-20">
				<h2 className="text-6xl font-semibold">👋Hello, I’m</h2>
				<h1 className="text-7xl font-bold">Raphael Plassart</h1>
				<h2 className="text-6xl font-semibold">Full Stack Developer</h2>
				<ListTechnos />
			</div>

			<div className="flex flex-col gap-y-6 mr-20" style={{ maxWidth: "400px" }}>
				<PreviewProject
					title="Project 1"
					description="Description of project 1"
					technologies={["React", "NextJS", "TailwindCSS"]}
					image="https://placehold.co/600x400"
				/>
				<PreviewProject
					title="Project 2"
					description="Description of project 2"
					technologies={["ReactNative", "Expo", "TypeScript"]}
					image="https://placehold.co/600x400"
				/>

				<PreviewProject
					title="Project 3"
					description="Description of project 3"
					technologies={["NestJS", "TypeORM", "PostgreSQL"]}
					image="https://placehold.co/600x400"
				/>
			</div>
		</section>
	);
};

export default Home;
