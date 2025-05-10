"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
	{
		id: 1,
		title: "Penfolio",
		description: "Le générateur de portfolio pour les développeurs.",
		imageUrl: "/placeholder.svg?height=600&width=800",
		category: "Web",
		technologies: ["NextJS", "TailwindCSS", "Vercel"],
	},
	{
		id: 2,
		title: "Novacoach",
		description: "La plateforme de gestion pour les coachs.",
		imageUrl: "/placeholder.svg?height=800&width=600",
		category: "Web",
		technologies: ["NextJS", "ExpressJS", "Vercel"],
	},
	{
		id: 3,
		title: "Raphotos",
		description: "La galerie de mes plus belles photos",
		imageUrl: "/placeholder.svg?height=600&width=800",
		category: "Web",
		technologies: ["NextJS", "TailwindCSS", "Vercel"],
	},
	{
		id: 4,
		title: "Melios",
		description: "L'application de gestion de tâches ultime.",
		imageUrl: "/placeholder.svg?height=800&width=600",
		category: "Mobile",
		technologies: ["ReactNative", "Firebase", "Expo"],
	},
];

const categories = ["All", "Web", "Mobile"];

export default function ProjectsGrid() {
	const [filter, setFilter] = useState("All");

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.category === filter);

	return (
		<section className="relative min-h-screen w-full py-20 bg-[#030303]">
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
						Mes Projets
					</h2>
					<p className="mt-4 text-lg text-white/40">
						Découvrez mes réalisations en développement web et mobile
					</p>
				</motion.div>

				<div className="flex justify-center space-x-4 mb-8">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setFilter(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								filter === category
									? "bg-white/[0.03] border border-white/[0.08] text-white/60"
									: "bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-white/60"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<motion.div
					layout
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					<AnimatePresence>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className={`bg-white/[0.03] rounded-3xl overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-white/[0.08] backdrop-blur-[2px] 
									${index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
									${index === 1 ? "sm:col-span-1 lg:col-span-1 lg:row-span-1" : ""}
								`}
								style={{ minHeight: index === 0 ? 400 : 250 }}
							>
								<div className="relative w-full aspect-[4/3]">
									<Image
										src={project.imageUrl || "/placeholder.svg"}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
									/>
									<motion.div
										className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-start p-6 opacity-0 transition-opacity duration-300"
										whileHover={{ opacity: 1 }}
									>
										<p className="text-white text-sm">{project.description}</p>
									</motion.div>
								</div>
								<div className="p-6">
									<div className="flex items-center justify-between mb-2">
										<div className="text-sm font-medium text-white/60">
											{project.category}
										</div>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className="text-white/60 hover:text-white inline-flex items-center text-sm"
										>
											Voir le projet
											<svg
												className="w-4 h-4 ml-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</a>
									</div>
									<h3 className="text-xl font-semibold text-white mb-3">
										{project.title}
									</h3>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 text-xs font-medium text-white/60 bg-white/[0.03] rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
			<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
		</section>
	);
}
