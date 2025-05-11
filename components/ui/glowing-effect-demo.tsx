"use client";

import { Code2, Lightbulb, Rocket, Users, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AboutMe() {
	return (
		<section
			className="relative min-h-screen w-full py-20 bg-background"
			id="about"
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
						Qui suis-je ?
					</span>
					<p className="mt-4 text-lg text-muted-foreground">
						Découvrez mon approche et mes compétences
					</p>
				</motion.div>

				<ul className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 xl:grid-cols-12 xl:gap-8 auto-rows-[minmax(14rem,auto)]">
					{GridItemList}
				</ul>
			</div>
		</section>
	);
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
	return (
		<li className={cn("list-none h-full", area)}>
			<div className="relative h-full rounded-[1.25rem] border border-zinc-200 dark:border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3 bg-white dark:bg-transparent">
				<GlowingEffect
					spread={40}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
					borderWidth={3}
				/>
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-zinc-100 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-6 backdrop-blur-[2px] md:p-6">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="w-fit rounded-lg border border-zinc-100 dark:border-white/[0.08] bg-zinc-50 dark:bg-white/[0.03] p-2">
							{icon}
						</div>
						<div className="space-y-3">
							<h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-zinc-800 dark:text-white">
								{title}
							</h3>
							<h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-zinc-500 dark:text-white/40">
								{description}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

const GridItemList = [
	{
		area: "md:col-span-6 xl:col-span-4 xl:row-span-1",
		icon: <Code2 className="h-4 w-4" />,
		title: "Développeur Passionné",
		description:
			"Développeur web et mobile passionné, je poursuis mes études à l'ETNA tout en travaillant en alternance et en menant des projets entrepreneuriaux avec ambition. Curieux, créatif et orienté solution, j'ai développé une solide expertise en React, Vue.js et Node.js.",
	},
	{
		area: "md:col-span-6 xl:col-span-4 xl:row-start-2",
		icon: <Lightbulb className="h-4 w-4" />,
		title: "Créateur de Solutions",
		description:
			"Mon parcours m'a permis de concevoir des applications de A à Z, de l'interface au backend, jusqu'à la mise en production. Plus que la technique, c'est la valeur concrète que peut apporter un produit numérique qui me motive.",
	},
	{
		area: "md:col-span-6 xl:col-span-3 xl:row-span-2",
		icon: <Rocket className="h-4 w-4" />,
		title: "Entrepreneur Créatif",
		description:
			"Je m'intéresse particulièrement à l'innovation, à la gamification, et à la croisée entre design, technologie et entrepreneuriat. C'est dans cette logique que j'ai cofondé un projet axé sur le développement personnel des jeunes adultes.",
	},
	{
		area: "md:col-span-6 xl:col-span-5 xl:row-start-1",
		icon: <Zap className="h-4 w-4" />,
		title: "Apprenant Continu",
		description:
			"Je suis convaincu que dans notre domaine, l'apprentissage ne s'arrête jamais. Chaque jour, je consacre du temps à explorer de nouvelles technologies, approfondir mes connaissances existantes et me tenir au courant des meilleures pratiques.",
	},
	{
		area: "md:col-span-12 xl:col-span-5 xl:row-start-2",
		icon: <Users className="h-4 w-4" />,
		title: "Collaborateur Engagé",
		description:
			"La réussite d'un projet repose sur la qualité de la collaboration. Je privilégie une communication claire, l'écoute active et le partage des connaissances. J'aime travailler dans des environnements où chacun peut exprimer ses idées.",
	},
].map((props, i) => <GridItem key={i} {...props} />);

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
}

