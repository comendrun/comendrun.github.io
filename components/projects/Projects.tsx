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
import ProjectCard from "./ProjectCard";

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
