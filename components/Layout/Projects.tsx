"use client";
import React, { useEffect, useState } from "react";
import Project from "../Common/Project";
import { ProjectType } from "@/type/project";
import { fetchProjects } from "@/db/fetch";
import { DocumentData } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetchProjects().then((data: DocumentData[]) => {
      const projectsData: ProjectType[] = data.map((doc) => ({
        id: doc.id,
        title: doc.title,
        description: doc.description,
        image: doc.image,
        technologies: doc.technologies,
        url: doc.url,
      }));
      setProjects(projectsData);
    });
  }, []);

  console.log(projects);

  return (
    <div className="flex flex-col gap-10" id="projects">
      {projects.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          inverted={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;
