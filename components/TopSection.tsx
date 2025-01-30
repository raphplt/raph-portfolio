import React from "react";
import ListTechnos from "./ListTechnos";
import PreviewProject from "./PreviewProject";
import { Icon } from "@iconify/react/dist/iconify.js";

const TopSection = () => {
	return (
		<section className="flex flex-row items-center justify-between lg:h-screen">
			<div className="flex flex-col gap-y-6 px-20">
				<h2 className="text-6xl font-semibold">👋 Hello, I’m</h2>
				<h1 className="inline font-semibold from-secondary to-tertiary text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
					Raphael Plassart
				</h1>
				<h2 className="text-6xl font-semibold">Full Stack Developer</h2>
				<ListTechnos />
			</div>

			<div className="flex flex-row justify-end items-center mx-auto">
				<PreviewProject
					title="Melios"
					description="L'application de gestion de tâches ultime."
					technologies={["ReactNative", "Firebase", "Expo"]}
					image="https://placehold.co/600x400"
					className="z-30 transform translate-y-0"
				/>
				<PreviewProject
					title="Novacoach"
					description="La plateforme de gestion pour les coach sportifs."
					technologies={["NextJS", "ExpressJS", "Vercel"]}
					image="https://placehold.co/600x400"
					className="z-20 transform -translate-y-6 -translate-x-32"
				/>
				<PreviewProject
					title="Raphotos"
					description="Un site de partage de photos minimaliste."
					technologies={["NextJS", "TailwindCSS", "Vercel"]}
					image="https://placehold.co/600x400"
					className="z-10 transform -translate-y-12 -translate-x-64"
				/>
			</div>

			<button>
				<Icon
					icon="mdi:arrow-down"
					className=" absolute bottom-10 left-0 right-0 mx-auto animate-bounce"
					width={24}
				/>
			</button>
		</section>
	);
};

export default TopSection;
