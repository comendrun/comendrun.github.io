import React from "react";
import Section from "../container/Section";
import projectPlaceholder from "@/public/assests/project-placeholder.svg";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import exportIcon from "@/public/assests/export.svg";
import ExportIcon from "./ExportIcon";
import { ProjectCardType } from "./types";
import { personalInfo } from "@/data/data";

export default function Projects({ dark }: { dark: boolean }) {
  return (
    <Section id="projects" dark={dark} className="w-full flex-col">
      <h2 className="flex gap-2 my-6 w-full justify-center items-centetr text-3xl">
        My <span className="font-extrabold">Projects</span>
      </h2>

      {/* cards */}
      <div className="project-cards w-full flex flex-col gap-20 ">
        {/* project-card */}
        {personalInfo.projects.map((project, index) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </Section>
  );
}

const ProjectCard = ({
  id,
  title,
  link,
  description,
  repoLink,
  image,
}: ProjectCardType) => {
  return (
    <div className="project-card w-full h-full flex flex-col gap-8">
      {/* image */}
      <Image
        src={image}
        alt="project"
        height={100}
        width={100}
        className="w-full h-full rounded-lg"
      />
      {/* number */}
      <p className="project-card-number text-2xl font-extrabold">0{id}</p>
      {/* title */}
      <h2 className="project-card-title text-3xl font-bold">{title}</h2>
      {/* description */}
      <p>{description}</p>
      {/* links */}
      <div className="links flex gap-4 text-4xl">
        <a href={link} className="">
          <ExportIcon size={40} />
        </a>

        <a href={repoLink} className="hover:cursor-pointer">
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};
