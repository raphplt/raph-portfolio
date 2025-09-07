import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Conditions d'utilisation - Raphaël Plassart",
	description: "Conditions d'utilisation du site portfolio de Raphaël Plassart",
};

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-background py-20">
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
					Conditions d'utilisation
				</h1>

				<div className="prose prose-lg max-w-none text-foreground">
					<p className="text-muted-foreground mb-6">
						Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
						<p className="mb-4">
							Les présentes conditions d'utilisation régissent l'utilisation du site
							portfolio de Raphaël Plassart, développeur fullstack.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							2. Acceptation des conditions
						</h2>
						<p className="mb-4">
							L'utilisation de ce site implique l'acceptation pleine et entière des
							présentes conditions d'utilisation.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">3. Utilisation du site</h2>
						<p className="mb-4">
							Ce site est destiné à présenter mes compétences et projets
							professionnels. Il est interdit de :
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li>Utiliser le site à des fins illégales</li>
							<li>Tenter de compromettre la sécurité du site</li>
							<li>Reproduire le contenu sans autorisation</li>
							<li>Envoyer du spam via le formulaire de contact</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							4. Propriété intellectuelle
						</h2>
						<p className="mb-4">
							Tous les éléments du site (textes, images, code) sont protégés par le
							droit d'auteur et appartiennent à Raphaël Plassart, sauf mention
							contraire.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
						<p className="mb-4">
							Je m'efforce de maintenir l'exactitude des informations, mais ne peux
							garantir qu'elles soient toujours à jour ou exemptes d'erreurs.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
						<p className="mb-4">
							Pour toute question concernant ces conditions d'utilisation :
						</p>
						<p className="mb-2">
							<strong>Email :</strong> raphael.plassart@gmail.com
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
