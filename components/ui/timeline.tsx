"use client";

import { useState, useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useInView,
	MotionValue,
} from "framer-motion";

const timelineEvents = [
	{
		id: "etna-apae",
		year: "2022-2023",
		title: "ETNA - APAE",
		description: "Formation en développement web et mobile",
		details:
			"Formation intensive en développement web et mobile à l'ETNA, avec un focus sur les technologies modernes et les bonnes pratiques.",
	},
	{
		id: "etna-bachelor",
		year: "2023-2024",
		title: "ETNA - Bachelor",
		description: "Formation en développement fullstack",
		details:
			"Formation approfondie en développement fullstack, couvrant le frontend, le backend et les bases de données.",
	},
	{
		id: "etna-master",
		year: "2025-2026",
		title: "ETNA - Master",
		description: "Formation en architecture logicielle",
		details:
			"Formation avancée en architecture logicielle, design patterns et bonnes pratiques de développement.",
	},
	{
		id: "mes-allocs",
		year: "2023-2024",
		title: "Mes Allocs",
		description: "Développeur fullstack",
		details:
			"Développement d'applications web et mobiles pour des startups et des entreprises.",
	},
	{
		id: "tkorp",
		year: "2024-2025",
		title: "Tkorp",
		description: "Développeur fullstack",
		details:
			"Développement d'applications web et mobiles pour des clients variés.",
	},
	{
		id: "melios",
		year: "2024-2025",
		title: "Melios",
		description: "Développeur fullstack",
		details:
			"Développement d'applications web et mobiles pour des clients variés.",
	},
];

const FlowerIcon = ({ progress }: { progress: MotionValue<number> }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="w-6 h-6"
		style={{ transform: `scale(${progress})` }}
	>
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke="currentColor"
			strokeWidth="2"
		/>
		<path
			d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</svg>
);

export default function Timeline() {
	const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<section
			className="relative min-h-screen w-full py-20 bg-background"
			id="timeline"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl z-[-1]" />
			<div className="relative z-10 container mx-auto">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
						Mon parcours
					</span>
					<p className="mt-4 text-lg text-muted-foreground">
						Découvrez mon expérience professionnelle
					</p>
				</motion.div>

				<div className="relative">
					{/* Vertical line */}
					<motion.div
						className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-muted/10"
						style={{ scaleY: scaleX }}
					/>

					{/* Flower icon */}
					<motion.div
						className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-muted-foreground/60"
						style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
					>
						<FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1])} />
					</motion.div>

					{timelineEvents.map((event, index) => (
						<TimelineEvent
							key={event.id}
							event={event}
							index={index}
							isExpanded={expandedEvent === index}
							onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function TimelineEvent({
	event,
	index,
	isExpanded,
	onToggle,
}: {
	event: (typeof timelineEvents)[0];
	index: number;
	isExpanded: boolean;
	onToggle: () => void;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<motion.div
			ref={ref}
			className={`mb-8 flex justify-between items-center w-full ${
				index % 2 === 0 ? "flex-row-reverse" : ""
			}`}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.8, delay: index * 0.1 }}
		>
			<div className="w-5/12" />
			<div className="z-20">
				<div className="flex items-center justify-center w-8 h-8 bg-white/[0.03] rounded-full border border-white/[0.08] backdrop-blur-[2px]">
					<div className="w-3 h-3 bg-white/60 rounded-full" />
				</div>
			</div>
			<motion.div
				className="w-5/12 cursor-pointer"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={onToggle}
			>
				<div className="p-4 bg-background/5 rounded-lg backdrop-blur-[2px] border border-border">
					<span className="font-bold text-muted-foreground">{event.year}</span>
					<h3 className="text-lg font-semibold mb-1 text-foreground">
						{event.title}
					</h3>
					<p className="text-muted-foreground">{event.description}</p>
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden"
					>
						<p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}
