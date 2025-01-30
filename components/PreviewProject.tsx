import { Card, CardBody, Chip } from "@heroui/react";
import React from "react";

type Props = {
	title: string;
	description: string;
	technologies: string[];
	image: string;
	className?: string;
};

const PreviewProject = ({
	title,
	description,
	technologies,
	image,
	className,
}: Props) => {
	return (
		<Card isHoverable className={className}>
			<CardBody className="flex flex-col gap-y-1 w-96">
				<h4 className="text-black font-semibold">{title}</h4>
				<p className="text-default-500 text-sm">{description}</p>
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
						className="w-full h-44 object-cover rounded-lg border"
					/>
				) : (
					<div className="w-32 h-32 bg-gray-200"></div>
				)}
			</CardBody>
		</Card>
	);
};

export default PreviewProject;
