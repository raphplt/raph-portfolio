import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {
	title: string;
	description: string;
	technologies: string[];
	image: string;
	icon: string;
	link: string;
};

const ProjectItem = ({
	title,
	description,
	technologies,
	image,
	icon,
	link,
}: Props) => {
	return (
		<Card isHoverable>
			<CardHeader>
				<Icon icon={icon} className="text-black" width={20} />
				<h4 className="text-black font-semibold">{title}</h4>
			</CardHeader>
			<CardBody>
				<p className="text-default-700 text-sm">{description}</p>
				<ul className="flex flex-wrap gap-x-2 py-1">
					{technologies.map((tech) => (
						<Chip key={tech} size="sm">
							{tech}
						</Chip>
					))}
				</ul>
				{image ? (
					<img
						src={image}
						alt={title}
						className="w-full h-48 object-cover rounded-lg mt-1"
					/>
				) : (
					<div className="w-32 h-32 bg-gray-200"></div>
				)}
			</CardBody>
		</Card>
	);
};

export default ProjectItem;
