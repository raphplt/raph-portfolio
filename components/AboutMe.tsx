import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal, ModalBody, ModalHeader, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

interface TimelineItem {
	id: number;
	title: string;
	date: string;
	icon: JSX.Element;
	details: string;
}

const timelineData: TimelineItem[] = [
	{
		id: 1,
		title: "ETNA - APAE",
		date: "2022-2023",
		icon: <Icon icon="mdi:academic-cap" className="h-8 w-8 text-primary" />,
		details:
			"Année de préparation accélérée à l'ETNA, spécialisation en développement web.",
	},
	{
		id: 2,
		title: "ETNA - Bachelor",
		date: "2023 - 2024",
		icon: <Icon icon="mdi:code-braces" className="h-8 w-8 text-primary" />,
		details:
			"Approfondissement en React, NextJS, ExpressJS, SQL ainsi que la gestion de projets complexes.",
	},
	{
		id: 3,
		title: "ETNA - Master",
		date: "2023 - 2024",
		icon: <Icon icon="mdi:code-braces" className="h-8 w-8 text-primary" />,
		details:
			"Forger une expertise en architecture logicielle, DevOps, sécurité informatique et management de projets. (en cours)",
	},
	{
		id: 4,
		title: "Mes Allocs",
		date: "2023 - 2024",
		icon: <Icon icon="mdi:briefcase" className="h-8 w-8 text-secondary" />,
		details:
			"Année en alternance au sein de la Startup Mes Allocs, développement de plusieurs site web en VueJS et ExpressJS",
	},
	{
		id: 5,
		title: "Tkorp",
		date: "2024-2025",
		icon: <Icon icon="mdi:briefcase" className="h-8 w-8 text-secondary" />,
		details:
			"Année en alternance au sein de la Startup Tkorp, maintenance de la plateforme Evasion et conception du projet Pulse",
	},
	{
		id: 6,
		title: "Melios",
		date: "2024-2025",
		icon: <Icon icon="mdi:lightbulb-on" className="h-8 w-8 text-tertiary" />,
		details:
			"Projet entrepreneurial de développement d'une application mobile de gestion de tâches et de récompenses.",
	},
];

const AboutMe = () => {
	const [selectedEvent, setSelectedEvent] = useState<TimelineItem | null>(null);
	const timelineRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	const handleOpen = (eventData: TimelineItem) => {
		setSelectedEvent(eventData);
	};

	const handleClose = () => {
		setSelectedEvent(null);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		const handleScroll = () => {
			if (timelineRef.current && !isMobile) {
				const scrollTop = window.scrollY;
				timelineRef.current.scrollLeft = scrollTop;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [isMobile]);

	return (
		<section
			className="w-full px-4 flex flex-col items-center justify-center py-10 xl:pb-40 2xl:pb-96 min-h-screen bg-gradient-secondary-flow"
			id="about"
		>
			<h1 className="text-2xl lg:text-4xl 2xl:text-4xl font-bold text-center mb-12 text-default-50">
				À propos de moi
			</h1>

			{/* Mobile Timeline (Vertical) */}
			{isMobile && (
				<div className="w-full max-w-md mb-12">
					<div className="relative border-l-2 border-slate-200 pl-6 py-4 ml-6">
						{timelineData.map((item) => (
							<motion.div
								key={item.id}
								className="mb-10 relative"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true, amount: 0.2 }}
								onClick={() => handleOpen(item)}
							>
								<div className="absolute -left-12 flex items-center justify-center bg-white rounded-full p-3 shadow-lg">
									{item.icon}
								</div>
								<div className="ml-10">
									<h3 className="text-lg font-semibold text-accent-400">{item.title}</h3>
									<p className="text-sm text-default-200 opacity-80 mb-1">{item.date}</p>
									<p className="text-default-100 text-sm">{item.details}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			)}

			{/* Desktop Timeline (Horizontal) */}
			{!isMobile && (
				<div
					ref={timelineRef}
					className="relative w-full overflow-x-auto overflow-y-hidden py-20 scrollbar-hide"
				>
					<div className="absolute top-1/2 left-0 h-1 w-[200%] bg-slate-200 -translate-y-1/2" />

					<div className="relative flex items-center space-x-8 w-max pl-80">
						{timelineData.map((item) => (
							<Tooltip
								content={
									<div className="p-2">
										<p className="text-lg font-semibold text-primary">{item.title}</p>
										<p className="text-sm text-default-100 opacity-80">{item.date}</p>
										<p className="text-default-500">{item.details}</p>
									</div>
								}
								key={item.id}
							>
								<motion.div
									key={item.id}
									className="relative min-w-[300px] 2xl:min-w-[500px] snap-center flex flex-col items-center cursor-pointer"
									initial={{ opacity: 0, x: 100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true, amount: 0.6 }}
									onClick={() => handleOpen(item)}
								>
									<div className="flex flex-col items-center">
										<div className="relative z-10 mb-4 flex items-center justify-center bg-white rounded-full p-3 shadow-lg">
											{item.icon}
										</div>
										<div className="text-center">
											<h3 className="text-lg font-semibold text-accent-400">
												{item.title}
											</h3>
											<p className="text-sm text-default-100 opacity-80">{item.date}</p>
										</div>
									</div>
								</motion.div>
							</Tooltip>
						))}
					</div>
				</div>
			)}

			<div className="mt-20 container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
				<div className="space-y-4 flex-1">
					<h2 className="text-2xl font-bold text-accent-400">Raphael Plassart</h2>
					<p className="text-default-200 leading-relaxed w-full md:w-2/3">
						Développeur web et mobile passionné, je poursuis mes études à l&apos;ETNA
						tout en travaillant en alternance et en menant des projets
						entrepreneuriaux avec ambition. Curieux, créatif et orienté solution,
						j&apos;ai développé une solide expertise en React, Vue.js et Node.js, que
						je mets au service de produits utiles et bien pensés, notamment dans des
						environnements startup où réactivité et impact priment.
						<br />
						<br />
						Mon parcours m&apos;a permis de concevoir des applications de A à Z, de
						l&apos;interface au backend, jusqu&apos;à la mise en production. Plus que
						la technique, c&apos;est la valeur concrète que peut apporter un produit
						numérique qui me motive : résoudre de vrais problèmes, proposer une
						expérience engageante, et créer du sens pour les utilisateurs.
						<br />
						<br />
						Je m&apos;intéresse particulièrement à l&apos;innovation, à la
						gamification, et à la croisée entre design, technologie et
						entrepreneuriat. C&apos;est dans cette logique que j&apos;ai cofondé un
						projet axé sur le développement personnel des jeunes adultes. Chaque
						projet est pour moi un terrain d&apos;apprentissage, de création et
						d&apos;impact.
					</p>
				</div>
				<div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] flex-shrink-0 mt-6 md:mt-0">
					<Image
						src="/Raphael-Plassart.png"
						alt="Raphael Plassart"
						fill
						className="object-cover rounded-lg shadow-lg"
					/>
				</div>
			</div>

			<Modal isOpen={!!selectedEvent} onClose={handleClose} className="p-4">
				<ModalHeader className="flex justify-between items-center">
					<p className="text-xl font-bold">{selectedEvent?.title}</p>
					<Button variant="ghost" onPress={handleClose}>
						Fermer
					</Button>
				</ModalHeader>
				<ModalBody>
					<p className="text-foreground">{selectedEvent?.details}</p>
				</ModalBody>
			</Modal>
		</section>
	);
};

export default AboutMe;