import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal, ModalBody, ModalHeader } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

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
		title: "Formation Web",
		date: "2018 - 2019",
		icon: <Icon icon="mdi:academic-cap" className="h-8 w-8 text-primary" />,
		details:
			"Diplôme en développement web avec une spécialisation Front-end (HTML, CSS, JavaScript, React).",
	},
	{
		id: 2,
		title: "Formation FullStack",
		date: "2019 - 2020",
		icon: <Icon icon="mdi:code-braces" className="h-8 w-8 text-primary" />,
		details:
			"Approfondissement en Node.js, Express, MongoDB, ainsi que la gestion de projets complexes.",
	},
	{
		id: 3,
		title: "Expérience Pro #1",
		date: "2020 - 2021",
		icon: <Icon icon="mdi:briefcase" className="h-8 w-8 text-secondary" />,
		details:
			"Développeur Front-End dans une startup spécialisée en e-commerce. Mise en place d’interfaces réactives et optimisées.",
	},
	{
		id: 4,
		title: "Expérience Pro #2",
		date: "2021 - 2022",
		icon: <Icon icon="mdi:briefcase" className="h-8 w-8 text-secondary" />,
		details:
			"Développeur Full-Stack dans une entreprise FinTech. Déploiement d’API, microservices et dashboards.",
	},
	{
		id: 5,
		title: "Projet #1",
		date: "2022",
		icon: <Icon icon="mdi:lightbulb-on" className="h-8 w-8 text-tertiary" />,
		details:
			"Création d’une application mobile en React Native pour la gestion de tâches (to-do list) avec synchronisation cloud.",
	},
	{
		id: 6,
		title: "Projet #2",
		date: "2023",
		icon: <Icon icon="mdi:lightbulb-on" className="h-8 w-8 text-tertiary" />,
		details:
			"Refonte d’un site e-commerce avec Next.js et Tailwind, focus sur l’accessibilité et le SEO.",
	},
];

const AboutMe = () => {
	const [selectedEvent, setSelectedEvent] = useState<TimelineItem | null>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	// Gère l'ouverture du modal
	const handleOpen = (eventData: TimelineItem) => {
		setSelectedEvent(eventData);
	};

	const handleClose = () => {
		setSelectedEvent(null);
	};
	// Gère la fermeture du modal

	useEffect(() => {
		const handleScroll = () => {
			if (timelineRef.current) {
				const scrollTop = window.scrollY;
				timelineRef.current.scrollLeft = scrollTop;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="w-full px-4 flex flex-col items-center justify-center py-10">
			<h1 className="text-4xl font-bold text-center mb-10 text-default-800">
				À propos de moi
			</h1>

			{/* Container principal de la timeline (scroll horizontal) */}
			<div
				ref={timelineRef}
				className="relative w-full overflow-x-auto overflow-y-hidden py-24 scrollbar-hide"
			>
				{/* Ligne de la frise : position absolue ou relative */}
				<div className="absolute top-1/2 left-0 h-1 w-[200%] bg-slate-200 -translate-y-1/2" />

				{/* Contenu horizontal (les étapes) */}
				<div className="relative flex items-center space-x-8 w-max pl-24">
					{timelineData.map((item) => (
						<motion.div
							key={item.id}
							className="relative min-w-[300px] snap-center flex flex-col items-center cursor-pointer"
							// Animations Framer Motion
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true, amount: 0.6 }}
							onClick={() => handleOpen(item)}
						>
							{/* Le "point" sur la ligne */}
							<div className="flex flex-col items-center">
								<div className="relative z-10 mb-4 flex items-center justify-center bg-white rounded-full p-3 shadow-lg">
									{item.icon}
								</div>
								<div className="text-center">
									<h3 className="text-lg font-semibold text-primary">{item.title}</h3>
									<p className="text-sm text-foreground opacity-80">{item.date}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Modal pour afficher les détails de chaque événement */}
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
