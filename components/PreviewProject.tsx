import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import React from "react";

type Props = {
	title: string;
	description: string;
	technologies: string[];
	image: string;
};

const PreviewProject = ({ title, description, technologies, image }: Props) => {
	return (
		<Card isHoverable>
			<CardBody className="flex flex-col gap-y-1">
				<h4 className="text-black font-semibold">{title}</h4>
				<p className="text-default-700 text-sm">{description}</p>
				<ul>
					{technologies.map((tech) => (
						<Chip key={tech}>{tech}</Chip>
					))}
				</ul>
				{image ? (
					<img
						src={image}
						alt={title}
						className="w-full h-48 object-cover rounded-lg"
					/>
				) : (
					<div className="w-32 h-32 bg-gray-200"></div>
				)}
			</CardBody>
		</Card>
	);
};

export default PreviewProject;
