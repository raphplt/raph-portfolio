import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MainFooter } from "./footer-section";

function MainHeroGeometric() {
	return (
		<HeroGeometric
			badge="Bonjour, je m'appelle"
			title1="Raphaël Plassart"
			title2="Je crée des expériences web remarquables"
			description="Développeur fullstack passionné par la création d'applications web et mobiles modernes, avec un focus sur la performance et l'expérience utilisateur."
		/>
	);
}

function Footer() {
	return (
		<div className="block">
			<MainFooter />
		</div>
	);
}

export { MainHeroGeometric, Footer };
