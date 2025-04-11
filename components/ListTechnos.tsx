import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ListTechnos = () => {
	const technos = [
		{ name: "NextJS", icon: "ri:nextjs-fill" },
		{ name: "ReactNative", icon: "logos:react" },
		{ name: "NestJS", icon: "logos:nestjs" },
		{ name: "Svelte", icon: "logos:svelte-icon" },
		{ name: "TypeScript", icon: "logos:typescript" },
		{ name: "Symfony", icon: "logos:symfony" },
		{ name: "MySQL", icon: "logos:mysql" },
		{ name: "PostgreSQL", icon: "logos:postgresql" },
		{ name: "PHP", icon: "logos:php" },
		{ name: "Python", icon: "logos:python" },
		{ name: "MongoDB", icon: "logos:mongodb" },
		{ name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
		{ name: "GraphQL", icon: "logos:graphql" },
	];

	return (
		<div className="flex flex-row gap-2 flex-wrap max-w-xl">
			{technos.map((techno, index) => (
				<Chip
					key={index}
					color="default"
					className="font-semibold"
					startContent={<Icon icon={techno.icon} width={16} />}
				>
					{techno.name}
				</Chip>
			))}
		</div>
	);
};

export default ListTechnos;