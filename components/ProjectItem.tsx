import { Card, CardBody, CardHeader, Chip, Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ExternalLink, Github } from "lucide-react";
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
	githubLink?: string;
};

const ProjectItem = ({
	title,
	description,
	technologies,
	image,
	icon,
	link,
	githubLink,
}: Props) => {
	return (
		<Card
			isHoverable
			className="backdrop-blur-md bg-white/50 border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden"
		>
			<CardHeader className="flex justify-between items-center">
				<div className="flex items-center">
					<div className="p-2 rounded-full bg-primary/10 mr-3">
						<Icon icon={icon} className="text-primary" width={24} />
					</div>
					<h4 className="text-gray-900 font-semibold text-lg">{title}</h4>
				</div>
			</CardHeader>
			<CardBody>
				{image && (
					<Image
						src={image}
						alt={title}
						width={500}
						height={500}
						className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
					/>
				)}
				<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2 h-10 overflow-hidden">
					{description}
				</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{technologies.map((tech) => (
						<Chip
							key={tech}
							size="sm"
							className="bg-primary/10 text-primary border-primary/30"
						>
							{tech}
						</Chip>
					))}
				</div>
				<div className="flex gap-3 mt-2">
					<Button
						as={Link}
						href={link}
						target="_blank"
						color="primary"
						variant="bordered"
						className="flex-1 backdrop-blur-sm bg-primary/10 border-primary/30 hover:bg-primary/20"
						endContent={<ExternalLink size={16} />}
					>
						Voir le projet
					</Button>
					{githubLink && (
						<Button
							as={Link}
							href={githubLink}
							target="_blank"
							variant="bordered"
							className="backdrop-blur-sm bg-gray-500/10 border-gray-500/30 hover:bg-gray-500/20"
							isIconOnly
						>
							<Github size={20} />
						</Button>
					)}
				</div>
			</CardBody>
		</Card>
	);
};

export default ProjectItem;
