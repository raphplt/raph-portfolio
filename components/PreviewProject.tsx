import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

type Props = {
	title: string;
	description: string;
	technologies: string[];
	image: string;
	className?: string;
	icon: string;
};

const PreviewProject = ({
	title,
	description,
	technologies,
	image,
	className,
	icon,
}: Props) => {
	return (
		<Card
			isHoverable
			className={`backdrop-blur-md bg-white/50 border-white/20 shadow-lg transition-all duration-300 hover:bg-white/60 ${className}`}
		>
			<CardHeader className="">
				<Icon icon={icon} className="text-black mr-2" width={20} />
				<h4 className="text-black font-semibold">{title}</h4>
			</CardHeader>
			<CardBody className="flex flex-col gap-y-1 w-80 xl:w-96 2xl:min-w-[500px]">
				<p className="text-default-700 text-sm">{description}</p>
				<ul className="flex flex-wrap gap-x-2 gap-y-2 py-2">
					{technologies.map((tech) => (
						<Chip
							key={tech}
							size="sm"
							className="backdrop-blur-sm bg-primary/10 text-primary border-primary/30"
						>
							{tech}
						</Chip>
					))}
				</ul>
				{image ? (
					<Image
						src={image}
						alt={title}
						width={500}
						height={500}
						className="w-full h-40 xl:h-48 2xl:h-52 object-cover rounded-lg"
					/>
				) : (
					<div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
				)}
			</CardBody>
		</Card>
	);
};

export default PreviewProject;