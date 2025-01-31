import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { Chip, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ProjectsList = [
	{
		title: "Melios",
		description:
			"L'application de gestion de tâches ultime. Développez vos compétences et obtenez des récompenses.",
		technologies: ["ReactNative", "Firebase", "Expo"],
		image: "/Melios.png",
		icon: "game-icons:greek-temple",
		link: "https://linktr.ee/Melios_app",
	},
	{
		title: "Novacoach",
		description:
			"La plateforme de gestion pour les coachs. Développez votre activité et gérez vos clients.",
		technologies: ["NextJS", "ExpressJS", "Vercel"],
		image: "/Novacoach.png",
		icon: "mdi:dumbbell",
		link: "https://github.com/raphplt/novacoach",
	},
	{
		title: "Raphotos",
		description: "La galerie de mes plus belles photos, triées par périodes.",
		technologies: ["NextJS", "TailwindCSS", "Vercel"],
		image: "/Raphotos.png",
		icon: "mdi:camera",
		link: "https://raphotos.fr",
	},
	{
		title: "Pokélab",
		description:
			"Une plateforme dédiée aux fans de Pokémon GO, avec des informations sur chaque Pokémon et un calculateur.",
		technologies: ["NextJS", "TailwindCSS", "Vercel"],
		image: "/Pokélab.png",
		icon: "mdi:pokeball",
		link: "https://pokelab-seven.vercel.app/",
	},
	{
		title: "Myriade",
		description:
			"Un moteur de recherche Open Source et respectueux de la vie privée.",
		technologies: ["Python", "Svelte", "TypeScript"],
		image: "/Myriade.png",
		icon: "mdi:earth",
		link: "https://github.com/raphplt/myriade",
	},
	{
		title: "Verifact",
		description:
			"Une plateforme de vérification de faits boostée à l'IA pour lutter contre la désinformation.",
		technologies: ["TypeScript", "OpenAI", "NextJS"],
		image: "/Verifact.png",
		icon: "lets-icons:check-fill",
		link: "https://github.com/raphplt/verifact",
	},
];

const Projects = () => {
	const [search, setSearch] = useState("");
	const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

	const allTechnologies = ProjectsList.map(
		(project) => project.technologies
	).flat();

	const uniqueTechnologies = [...new Set(allTechnologies)];

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleTechnologyClick = (tech: string) => {
		setSelectedTechnologies((prev) =>
			prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
		);
	};

	const filteredProjects = ProjectsList.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(search.toLowerCase()) ||
			project.description.toLowerCase().includes(search.toLowerCase());
		const matchesTechnologies =
			selectedTechnologies.length === 0 ||
			selectedTechnologies.every((tech) => project.technologies.includes(tech));
		return matchesSearch && matchesTechnologies;
	});

	return (
		<div className="mb-20" id="projects">
			<h2 className="text-2xl lg:text-4xl 2xl:text-4xl font-bold text-center mb-10 text-default-800">
				Mes projets
			</h2>

			<div className="flex flex-col gap-2 items-start justify-start py-2 mb-2 w-2/3 mx-auto">
				<Input
					placeholder="Rechercher un projet..."
					startContent={<Icon icon="mdi:search" className="text-default-500" />}
					value={search}
					onChange={handleSearchChange}
					isClearable
					onClear={() => setSearch("")}
				/>

				<div className="flex flex-row justify-start gap-2 mt-2 flex-wrap py-1">
					{uniqueTechnologies.map((tech) => (
						<Chip
							key={tech}
							size="sm"
							onClick={() => handleTechnologyClick(tech)}
							style={{
								cursor: "pointer",
								color: selectedTechnologies.includes(tech) ? "white" : "black",
							}}
							color={selectedTechnologies.includes(tech) ? "primary" : "default"}
						>
							{tech}
						</Chip>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-2/3 mx-auto mt-6">
				{filteredProjects.map((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
