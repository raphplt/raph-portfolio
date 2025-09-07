"use client";

import { Download, FileText, Calendar, MapPin, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export function CVSection() {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5 + i * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
	};

	const handleDownloadCV = () => {
		const link = document.createElement("a");
		link.href = "/cv-raphael-plassart.pdf";
		link.download = "CV-Raphaël-Plassart.pdf";
		link.click();
	};

	const handlePreviewCV = () => {
		setIsPreviewOpen(true);
	};

	return (
		<section className="relative min-h-screen w-full py-20 bg-background" id="cv">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl z-[-1]" />

			<div className="relative z-10 container mx-auto px-4">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
						Mon CV
					</span>
					<p className="mt-4 text-lg text-muted-foreground">
						Téléchargez mon CV pour en savoir plus sur mon parcours
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<motion.div
						custom={0}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8"
					>
						<div className="flex flex-col md:flex-row items-center gap-8">
							<div className="flex-1">
								<div className="flex items-center gap-3 mb-4">
									<FileText className="h-8 w-8 text-primary" />
									<h3 className="text-2xl font-bold">CV Raphaël Plassart</h3>
								</div>

								<div className="space-y-3 mb-6">
									<div className="flex items-center gap-2 text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<span>Dernière mise à jour : Septembre 2025</span>
									</div>
									<div className="flex items-center gap-2 text-muted-foreground">
										<MapPin className="h-4 w-4" />
										<span>Paris, France</span>
									</div>
								</div>

								<p className="text-muted-foreground mb-6">
									CV complet avec mon parcours académique à l&apos;ETNA, mes expériences
									professionnelles en développement fullstack, mes compétences techniques
									et mes projets entrepreneuriaux.
								</p>

								<div className="flex flex-col sm:flex-row gap-3">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={handlePreviewCV}
										className={cn(
											"inline-flex items-center gap-2 px-6 py-3 rounded-lg cursor-pointer",
											"bg-background border border-border text-foreground font-medium",
											"transition-all duration-300 hover:bg-muted/50"
										)}
									>
										<Eye className="h-5 w-5" />
										Prévisualiser
									</motion.button>

									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={handleDownloadCV}
										className={cn(
											"inline-flex items-center gap-2 px-6 py-3 rounded-lg cursor-pointer",
											"bg-gradient-to-r from-primary via-foreground/90 to-secondary",
											"text-background font-medium transition-all duration-300",
											"hover:shadow-lg hover:shadow-primary/25"
										)}
									>
										<Download className="h-5 w-5" />
										Télécharger le CV (PDF)
									</motion.button>
								</div>
							</div>
							<div className="flex-shrink-0">
								<div
									className="relative group cursor-pointer"
									onClick={handlePreviewCV}
								>
									<Image
										src="/images/cv.png"
										alt="CV Raphaël Plassart"
										width={300}
										height={400}
										className="rounded-lg shadow-lg transition-transform group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
										<Eye className="h-8 w-8 text-white" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						<div className="bg-background/30 backdrop-blur-sm border border-border rounded-xl p-6">
							<h4 className="font-semibold mb-3 text-primary">Formation</h4>
							<ul className="text-sm text-muted-foreground space-y-2">
								<li className="flex justify-between">
									<span>ETNA - Master</span>
									<span className="text-xs">2025-2026</span>
								</li>
								<li className="flex justify-between">
									<span>ETNA - Bachelor</span>
									<span className="text-xs">2023-2024</span>
								</li>
								<li className="flex justify-between">
									<span>ETNA - APAE</span>
									<span className="text-xs">2022-2023</span>
								</li>
							</ul>
						</div>

						<div className="bg-background/30 backdrop-blur-sm border border-border rounded-xl p-6">
							<h4 className="font-semibold mb-3 text-primary">Expérience</h4>
							<ul className="text-sm text-muted-foreground space-y-2">
								<li className="flex justify-between">
									<span>Melios - Co-fondateur</span>
									<span className="text-xs">2024-2025</span>
								</li>
								<li className="flex justify-between">
									<span>Tkorp - Développeur</span>
									<span className="text-xs">2024-2025</span>
								</li>
								<li className="flex justify-between">
									<span>Mes Allocs - Développeur</span>
									<span className="text-xs">2023-2024</span>
								</li>
							</ul>
						</div>

						<div className="bg-background/30 backdrop-blur-sm border border-border rounded-xl p-6">
							<h4 className="font-semibold mb-3 text-primary">Compétences</h4>
							<ul className="text-sm text-muted-foreground space-y-2">
								<li>• React, Next.js, TypeScript</li>
								<li>• Node.js, NestJS, PostgreSQL</li>
								<li>• React Native, Expo</li>
								<li>• Firebase, Redis, GraphQL</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Modal de prévisualisation */}
			<AnimatePresence>
				{isPreviewOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2"
						onClick={() => setIsPreviewOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative bg-background rounded-lg w-full h-full max-w-none max-h-none overflow-hidden"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Header avec boutons */}
							<div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur-sm">
								<h3 className="text-lg font-semibold">CV Raphaël Plassart</h3>
								<div className="flex items-center gap-2">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={handleDownloadCV}
										className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
									>
										<Download className="h-4 w-4" />
									</motion.button>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => setIsPreviewOpen(false)}
										className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
									>
										<X className="h-4 w-4" />
									</motion.button>
								</div>
							</div>

							{/* PDF Viewer */}
							<div className="h-[calc(100vh-80px)] w-full">
								<iframe
									src="/cv-raphael-plassart.pdf#toolbar=1&navpanes=1&scrollbar=1&zoom=FitH"
									width="100%"
									height="100%"
									className="border-0"
									title="CV Raphaël Plassart"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
