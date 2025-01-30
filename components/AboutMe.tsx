import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal, ModalBody, ModalHeader, Tooltip } from "@heroui/react";
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

	const handleOpen = (eventData: TimelineItem) => {
		setSelectedEvent(eventData);
	};

	const handleClose = () => {
		setSelectedEvent(null);
	};

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
		<section
			className="w-full px-4 flex flex-col items-center justify-center py-10 lg:pb-96 mt-10"
			id="about"
		>
			<h1 className="text-2xl lg:text-4xl 2xl:text-4xl font-bold text-center mb-12 text-default-800">
				À propos de moi
			</h1>

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
									<p className="text-sm text-default-900 opacity-80">{item.date}</p>
									<p className="text-default-500">{item.details}</p>
								</div>
							}
							key={item.id}
						>
							<motion.div
								key={item.id}
								className="relative min-w-[300px] lg:min-w-[500px] snap-center flex flex-col items-center cursor-pointer"
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
										<h3 className="text-lg font-semibold text-primary">{item.title}</h3>
										<p className="text-sm text-foreground opacity-80">{item.date}</p>
									</div>
								</div>
							</motion.div>
						</Tooltip>
					))}
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
