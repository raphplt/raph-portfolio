import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
	{
		author: {
			name: "Thomas Martin",
			handle: "@thomasmartin",
			avatar:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Raphaël a été un excellent collaborateur sur notre projet. Sa maîtrise des technologies modernes et sa capacité à résoudre des problèmes complexes ont été déterminantes pour le succès du projet.",
		href: "https://linkedin.com/in/thomasmartin",
	},
	{
		author: {
			name: "Sophie Dubois",
			handle: "@sophiedubois",
			avatar:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Le travail de Raphaël sur notre application mobile a été exceptionnel. Il a su comprendre nos besoins et les traduire en une expérience utilisateur fluide et intuitive.",
		href: "https://linkedin.com/in/sophiedubois",
	},
	{
		author: {
			name: "Lucas Bernard",
			handle: "@lucasbernard",
			avatar:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Raphaël est un développeur talentueux qui apporte une vraie valeur ajoutée à chaque projet. Sa créativité et son expertise technique sont impressionnantes.",
	},
];

export function TestimonialsSectionDemo() {
	return (
		<TestimonialsSection
			title="Ce qu'ils disent de moi"
			description="Découvrez les retours de mes clients et collaborateurs"
			testimonials={testimonials}
		/>
	);
}
