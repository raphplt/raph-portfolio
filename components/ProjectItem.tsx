import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
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
		<Card isHoverable href={link} as={Link} target="_blank">
			<CardHeader>
				<Icon icon={icon} className="text-black mr-2" width={20} />
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
					<Image
						src={image}
						alt={title}
						width={300}
						height={300}
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
