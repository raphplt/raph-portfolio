import {
	Code2Icon,
	ImageIcon,
	LightbulbIcon,
	SearchIcon,
	ShieldIcon,
	SmartphoneIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const projects = [
	{
		Icon: SmartphoneIcon,
		name: "Melios",
		description:
			"App de développement personnel gamifiée - React Native · Firebase · Expo",
		href: "/projects/melios",
		cta: "Voir le projet",
		background: (
			<img
				src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000"
				className="absolute -right-20 -top-20 opacity-60"
			/>
		),
		className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		Icon: Code2Icon,
		name: "Penfolio",
		description:
			"Générateur de portfolios pour devs/designers - Next.js · TailwindCSS · Vercel",
		href: "/projects/penfolio",
		cta: "Voir le projet",
		background: (
			<img
				src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
				className="absolute -right-20 -top-20 opacity-60"
			/>
		),
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		Icon: LightbulbIcon,
		name: "Novacoach",
		description:
			"Plateforme pour coachs sportifs - Next.js · Express.js · Vercel",
		href: "/projects/novacoach",
		cta: "Voir le projet",
		background: (
			<img
				src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000"
				className="absolute -right-20 -top-20 opacity-60"
			/>
		),
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
	{
		Icon: SearchIcon,
		name: "Myriade",
		description:
			"Moteur de recherche open-source et éthique - Python · Svelte · TypeScript",
		href: "/projects/myriade",
		cta: "Voir le projet",
		background: (
			<img
				src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
				className="absolute -right-20 -top-20 opacity-60"
			/>
		),
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		Icon: ShieldIcon,
		name: "Verifact",
		description: "Vérification de faits via l'IA - OpenAI · Next.js · TypeScript",
		href: "/projects/verifact",
		cta: "Voir le projet",
		background: (
			<img
				src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
				className="absolute -right-20 -top-20 opacity-60"
			/>
		),
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
	{
		Icon: ImageIcon,
		name: "Raphotos",
		description: "Galerie de photos personnelle - Next.js · TailwindCSS · Vercel",
		href: "/projects/raphotos",
		cta: "Voir le projet",
		background: (
			<img
				src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000"
				className="absolute -right-20 -top-20 opacity-60"
			/>
		),
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
];

function BentoDemo() {
	return (
		<div className="mx-auto bg-[#030303] py-20">
			<div className="container mx-auto">
				<BentoGrid className="lg:grid-rows-3">
					{projects.map((project) => (
						<BentoCard key={project.name} {...project} />
					))}
				</BentoGrid>
			</div>
		</div>
	);
}

export { BentoDemo };
