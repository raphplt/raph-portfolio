import { TimelineItem } from "@/components/AboutMe";
import { Icon } from "@iconify/react/dist/iconify.js";
import { School } from "lucide-react";

export const flipCardsData = [
	{
		title: "Développeur Passionné",
		icon: "mdi:code-braces",
		frontText: "Cliquez pour en savoir plus sur mon parcours",
		backText:
			"Développeur web et mobile passionné, je poursuis mes études à l'ETNA tout en travaillant en alternance et en menant des projets entrepreneuriaux avec ambition. Curieux, créatif et orienté solution, j'ai développé une solide expertise en React, Vue.js et Node.js, que je mets au service de produits utiles et bien pensés, notamment dans des environnements startup où réactivité et impact priment.",
	},
	{
		title: "Créateur de Solutions",
		icon: "mdi:lightbulb-on",
		frontText: "Cliquez pour découvrir ma vision",
		backText:
			"Mon parcours m'a permis de concevoir des applications de A à Z, de l'interface au backend, jusqu'à la mise en production. Plus que la technique, c'est la valeur concrète que peut apporter un produit numérique qui me motive : résoudre de vrais problèmes, proposer une expérience engageante, et créer du sens pour les utilisateurs.",
	},
	{
		title: "Entrepreneur Créatif",
		icon: "mdi:rocket-launch",
		frontText: "Cliquez pour explorer mes projets",
		backText:
			"Je m'intéresse particulièrement à l'innovation, à la gamification, et à la croisée entre design, technologie et entrepreneuriat. C'est dans cette logique que j'ai cofondé un projet axé sur le développement personnel des jeunes adultes. Chaque projet est pour moi un terrain d'apprentissage, de création et d'impact.",
	},
	{
		title: "Apprenant Continu",
		icon: "mdi:book-open-page-variant",
		frontText: "Découvrez mon approche d'apprentissage",
		backText:
			"Je suis convaincu que dans notre domaine, l'apprentissage ne s'arrête jamais. Chaque jour, je consacre du temps à explorer de nouvelles technologies, approfondir mes connaissances existantes et me tenir au courant des meilleures pratiques. Cette curiosité permanente me permet de rester à la pointe et d'apporter des solutions innovantes à chaque projet.",
	},
	{
		title: "Collaborateur Engagé",
		icon: "mdi:account-group",
		frontText: "En savoir plus sur ma façon de travailler en équipe",
		backText:
			"La réussite d'un projet repose sur la qualité de la collaboration. Je privilégie une communication claire, l'écoute active et le partage des connaissances. J'aime travailler dans des environnements où chacun peut exprimer ses idées et où l'intelligence collective permet de surmonter les défis les plus complexes.",
	},
	{
		title: "Orienté Résultats",
		icon: "mdi:chart-line",
		frontText: "Découvrez mon approche axée sur la performance",
		backText:
			"Plus qu'une simple exécution technique, je m'engage à comprendre les objectifs business de chaque projet et à contribuer activement à leur réalisation. J'analyse les métriques pertinentes, optimise continuellement le code et les processus, et reste focalisé sur la création de valeur concrète pour les utilisateurs finaux et les parties prenantes.",
	},
];

export const timelineData: TimelineItem[] = [
	{
		id: 1,
		title: "ETNA - APAE",
		date: "2022-2023",
		icon: <School className="h-8 w-8 text-primary" />,
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
