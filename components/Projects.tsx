import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectsList = [
	{
		title: "Portfolio",
		description: "Portfolio website built with Next.js and Tailwind CSS.",
		technologies: ["Next.js", "Tailwind CSS"],
		image: "https://placehold.co/600x400",
		icon: "mdi:home",
		link: "",
	},
	{
		title: "Portfolio",
		description: "Portfolio website built with Next.js and Tailwind CSS.",
		technologies: ["Next.js", "Tailwind CSS"],
		image: "https://placehold.co/600x400",
		icon: "mdi:home",
		link: "",
	},
	{
		title: "Portfolio",
		description: "Portfolio website built with Next.js and Tailwind CSS.",
		technologies: ["Next.js", "Tailwind CSS"],
		image: "https://placehold.co/600x400",
		icon: "mdi:home",
		link: "",
	},
	{
		title: "Portfolio",
		description: "Portfolio website built with Next.js and Tailwind CSS.",
		technologies: ["Next.js", "Tailwind CSS"],
		image: "https://placehold.co/600x400",
		icon: "mdi:home",
		link: "",
	},
	{
		title: "Portfolio",
		description: "Portfolio website built with Next.js and Tailwind CSS.",
		technologies: ["Next.js", "Tailwind CSS"],
		image: "https://placehold.co/600x400",
		icon: "mdi:home",
		link: "",
	},
];

const Projects = () => {
	return (
		<div className="mb-20">
			<h2 className="text-4xl font-bold text-center mb-10 text-default-800">
				Mes projets
			</h2>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-2/3 mx-auto">
				{ProjectsList.map((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
