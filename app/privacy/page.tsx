import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Politique de confidentialité - Raphaël Plassart",
	description:
		"Politique de confidentialité et protection des données personnelles",
};

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-background py-20">
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
					Politique de confidentialité
				</h1>

				<div className="prose prose-lg max-w-none text-foreground">
					<p className="text-muted-foreground mb-6">
						Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
						<p className="mb-4">
							Ce site collecte les données personnelles suivantes :
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li>Nom et adresse email via le formulaire de contact</li>
							<li>Données de navigation anonymisées (cookies techniques)</li>
							<li>Adresse IP pour des raisons de sécurité</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							2. Utilisation des données
						</h2>
						<p className="mb-4">Vos données sont utilisées exclusivement pour :</p>
						<ul className="list-disc pl-6 mb-4">
							<li>Répondre à vos demandes de contact</li>
							<li>Améliorer le fonctionnement du site</li>
							<li>Respecter les obligations légales</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">3. Partage des données</h2>
						<p className="mb-4">
							Vos données ne sont jamais partagées avec des tiers, sauf :
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li>Avec votre consentement explicite</li>
							<li>Pour respecter une obligation légale</li>
							<li>Pour protéger nos droits légaux</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">4. Vos droits</h2>
						<p className="mb-4">
							Conformément au RGPD, vous disposez des droits suivants :
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li>Droit d'accès à vos données</li>
							<li>Droit de rectification</li>
							<li>Droit à l'effacement</li>
							<li>Droit à la portabilité</li>
							<li>Droit d'opposition</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
						<p className="mb-4">
							Pour toute question concernant cette politique de confidentialité :
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
