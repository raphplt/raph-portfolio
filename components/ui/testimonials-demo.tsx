import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
	{
		author: {
			name: "Marie Dubois",
			handle: "@mariedubois",
			avatar:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Raphaël a développé notre application mobile avec une expertise remarquable. Son approche méthodique et sa capacité à comprendre nos besoins métier ont été déterminantes pour le succès du projet.",
		href: "https://linkedin.com/in/mariedubois",
	},
	{
		author: {
			name: "Thomas Martin",
			handle: "@thomasmartin",
			avatar:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Collaboration excellente avec Raphaël sur notre plateforme e-commerce. Sa maîtrise de React et Node.js, combinée à son sens du détail, a donné un résultat dépassant nos attentes.",
		href: "https://linkedin.com/in/thomasmartin",
	},
	{
		author: {
			name: "Sophie Leroy",
			handle: "@sophieleroy",
			avatar:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Raphaël a su transformer nos idées complexes en une interface utilisateur intuitive. Son professionnalisme et sa réactivité font de lui un développeur de confiance.",
		href: "https://linkedin.com/in/sophieleroy",
	},
	{
		author: {
			name: "Lucas Bernard",
			handle: "@lucasbernard",
			avatar:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Un développeur fullstack exceptionnel ! Raphaël a livré notre projet dans les temps avec un code propre et bien documenté. Je recommande vivement ses services.",
		href: "https://linkedin.com/in/lucasbernard",
	},
	{
		author: {
			name: "Camille Rousseau",
			handle: "@camillerousseau",
			avatar:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Raphaël a créé notre site vitrine avec une attention particulière à l'expérience utilisateur. Le résultat est à la fois esthétique et fonctionnel, exactement ce que nous recherchions.",
		href: "https://linkedin.com/in/camillerousseau",
	},
	{
		author: {
			name: "Alexandre Moreau",
			handle: "@alexandremoreau",
			avatar:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Travail remarquable sur notre application de gestion. Raphaël a su optimiser les performances et créer une architecture scalable. Un vrai professionnel !",
		href: "https://linkedin.com/in/alexandremoreau",
	},
	{
		author: {
			name: "Julie Petit",
			handle: "@juliepetit",
			avatar:
				"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Raphaël a développé notre plateforme de formation en ligne avec une approche pédagogique. Son expertise technique et sa créativité ont donné vie à notre vision.",
		href: "https://linkedin.com/in/juliepetit",
	},
	{
		author: {
			name: "Nicolas Durand",
			handle: "@nicolasdurand",
			avatar:
				"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
		},
		text:
			"Excellent développeur avec une vision produit. Raphaël a su anticiper nos besoins et proposer des solutions innovantes pour notre startup.",
		href: "https://linkedin.com/in/nicolasdurand",
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
