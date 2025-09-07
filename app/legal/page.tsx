import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mentions légales - Raphaël Plassart",
	description: "Mentions légales du site portfolio de Raphaël Plassart",
};

export default function LegalPage() {
	return (
		<div className="min-h-screen bg-background py-20">
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
					Mentions légales
				</h1>
				
				<div className="prose prose-lg max-w-none text-foreground">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
						<div className="bg-muted/50 p-6 rounded-lg">
							<p className="mb-2"><strong>Nom :</strong> Raphaël Plassart</p>
							<p className="mb-2"><strong>Email :</strong> raphael.plassart@gmail.com</p>
							<p className="mb-2"><strong>Profession :</strong> Développeur Fullstack</p>
							<p className="mb-2"><strong>Formation :</strong> ETNA - École des Technologies Numériques Avancées</p>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
						<div className="bg-muted/50 p-6 rounded-lg">
							<p className="mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
							<p className="mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
							<p className="mb-2"><strong>Site web :</strong> https://vercel.com</p>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
						<div className="bg-muted/50 p-6 rounded-lg">
							<p className="mb-2"><strong>Framework :</strong> Next.js 15</p>
							<p className="mb-2"><strong>Langage :</strong> TypeScript</p>
							<p className="mb-2"><strong>Styling :</strong> Tailwind CSS</p>
							<p className="mb-2"><strong>Animations :</strong> Framer Motion</p>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
						<p className="mb-4">
							L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
							et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
							les documents téléchargeables et les représentations iconographiques et photographiques.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
						<p className="mb-4">
							Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
							à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Contact</h2>
						<p className="mb-4">
							Pour toute question concernant ces mentions légales :
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
