"use client";
import { ProjectType } from "@/type/project";
import React from "react";
import ProjectImage from "./ProjectImage";

const Project = ({
	project,
	inverted,
}: {
	project: ProjectType;
	inverted: boolean;
}) => {
	return (
		<div
			className="flex justify-between items-center w-11/12 mx-auto py-20"
			style={{
				flexDirection: inverted ? "row-reverse" : "row",
			}}
		>
			<div className="flex-1 flex items-center justify-center">
				<ProjectImage url={project.image ?? ""} />
			</div>

			<div className="flex-1 flex flex-col gap-10">
				<h2 className="text-3xl font-semibold text-center text-pretty">
					{project.title}
				</h2>
				<p className="text-center text-pretty text-gray-800 w-10/12 mx-auto">
					{project.description}
				</p>
				<button
					className="font-semibold text-lg px-5 py-2 bg-purple-600 w-fit text-white mx-auto rounded-2xl"
					onClick={() => window.open(project.url, "_blank")}
				>
					Découvrir
				</button>
			</div>
		</div>
	);
};

export default Project;
