import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { Card, CardBody, Chip, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

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
		title: "Penfolio",
		description:
			"Une plateforme de création de portfolios pour les étudiants et les professionnels.",
		technologies: ["NextJS", "TailwindCSS", "Vercel"],
		image: "/Penfolio.png",
		icon: "mdi:folder-account",
		link: "https://portfolio-maker-five.vercel.app/",
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
		title: "Melios web",
		description:
			"Le site vitrine de Melios, qui contient un blog et des informations sur l'application.",
		technologies: ["NextJS", "TailwindCSS", "Vercel"],
		image: "/Melios-web.png",
		icon: "game-icons:greek-temple",
		link: "https://melios.me",
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
	{
		title: "Clear Mind",
		description:
			"Une extension Chrome pour vous aider à rester concentré en bloquant les sites distrayants.",
		technologies: ["JavaScript", "Chrome Extension"],
		image: "/Clear-Mind.png",
		icon: "material-symbols:timer",
		link: "/",
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
		<motion.div
			className="pb-20 min-h-screen relative bg-gradient-accent-soft pt-20"
			id="projects"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-radial opacity-20 blur-3xl" />
				<div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-diagonal opacity-10 blur-3xl" />
			</div>

			<motion.h2
				className="text-2xl lg:text-4xl 2xl:text-4xl font-bold text-center mb-10 text-default-800"
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				[ Mes projets ]
				<div className="w-20 h-1 bg-gradient-accent mx-auto mt-2 rounded-full" />
			</motion.h2>

			<Card className="lg:w-2/3 w-11/12 mx-auto backdrop-blur-md bg-white/50 border border-white/20 shadow-lg">
				<CardBody className="p-6">
					<Input
						placeholder="Rechercher un projet..."
						startContent={<Icon icon="mdi:search" className="text-primary" />}
						value={search}
						onChange={handleSearchChange}
						isClearable
						onClear={() => setSearch("")}
						className="mb-4"
					/>

					<motion.div
						className="flex flex-row justify-start gap-2 mt-2 flex-wrap py-1"
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						{uniqueTechnologies.map((tech, index) => (
							<motion.div
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 * index, duration: 0.3 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Chip
									size="sm"
									onClick={() => handleTechnologyClick(tech)}
									className={`cursor-pointer transition-all duration-300 ${
										selectedTechnologies.includes(tech)
											? "bg-primary text-white"
											: "bg-primary/10 text-primary hover:bg-primary/20"
									}`}
								>
									{tech}
								</Chip>
							</motion.div>
						))}
					</motion.div>
				</CardBody>
			</Card>

			<motion.div
				className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:w-2/3 w-11/12 mx-auto mt-8"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
				viewport={{ once: true }}
			>
				{filteredProjects.length > 0 ? (
					filteredProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 * index }}
							viewport={{ once: true }}
							whileHover={{ y: -5 }}
						>
							<ProjectItem {...project} />
						</motion.div>
					))
				) : (
					<motion.div
						className="col-span-full text-center py-12"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<Icon
							icon="mdi:folder-search-outline"
							className="text-6xl text-primary/50 mx-auto mb-4"
						/>
						<p className="text-gray-500">
							Aucun projet ne correspond à votre recherche
						</p>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default Projects;