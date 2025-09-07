"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { categories } from "@/lib/data/projects";

export default function ProjectsGrid() {
	const [filter, setFilter] = useState("All");

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.category === filter);

	return (
		<section
			className="relative min-h-screen w-full py-20 bg-background"
			id="projects"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl" />
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
						Mes Projets
					</span>
					<p className="mt-4 text-lg text-white/40">
						Découvrez mes réalisations en développement web et mobile
					</p>
				</motion.div>

				<div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-2 px-4 sm:px-0">
					<div className="flex space-x-4 min-w-max">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setFilter(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors whitespace-nowrap ${
									filter === category
										? "bg-white/[0.03] border border-white/[0.08] text-white/60"
										: "bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-white/60"
								}`}
							>
								{category}
							</button>
						))}
					</div>
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
								className={`bg-white/[0.03] rounded-3xl overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-foreground/[0.08] backdrop-blur-[2px] 
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
										className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent flex items-end justify-start p-6 opacity-0 transition-opacity duration-300"
										whileHover={{ opacity: 1 }}
									>
										<p className="text-foreground text-sm">{project.description}</p>
									</motion.div>
								</div>
								<div className="p-6">
									<div className="flex items-center justify-between mb-2">
										<div className="text-sm font-medium text-foreground/60">
											{project.category}
										</div>
										<a
											href={project.url}
											target={"_blank"}
											rel="noopener noreferrer"
											className="text-foreground/60 hover:text-foreground inline-flex items-center text-sm"
										>
											Voir le projet
											<ArrowRight className="ml-1 w-4 h-4" />
										</a>
									</div>
									<h3 className="text-xl font-semibold text-foreground mb-3">
										{project.title}
									</h3>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 text-xs font-medium text-foreground/60 bg-foreground/[0.03] rounded-full"
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
		</section>
	);
}
