import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import ExportIcon from "./ExportIcon";
import { ProjectCardType } from "./types";

const ProjectCard = ({
  id,
  title,
  link,
  description,
  repoLink,
  image,
}: ProjectCardType) => {
  return (
    <div className="project-card w-full h-full flex flex-col gap-8 border-2 border-slate-600 p-5 rounded-lg lg:flex-row justify-center items-center">
      <a
        href={link}
        title={title}
        rel="noopener noreferrer"
        target="_blank"
        className=""
      >
        {/* image */}
        <Image
          src={image}
          alt="project"
          height={1000}
          width={1000}
          className="w-full h-full rounded-lg"
        />
      </a>

      <div className="flex gap-8 flex-col justify-start h-full">
        {/* number */}
        <p className="project-card-number text-2xl font-extrabold lg:text-4xl">
          0{id}
        </p>
        {/* title */}
        <h2 className="project-card-title text-3xl font-bold lg:text-4xl">{title}</h2>
        {/* description */}
        <p className="text-gray-300">{description}</p>
        {/* links */}
        <div className="links flex gap-4 text-4xl">
          <a
            href={link}
            className="hover:cursor-pointer hover:scale-125 hover:rotate-6 duration-300 transition-all"
            title="Visit Live Website"
          >
            <ExportIcon size={40} className="" />
          </a>

          <a
            href={repoLink}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:cursor-pointer hover:scale-125 hover:rotate-6 duration-300 transition-all"
            title="Check out GitHub Repo"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
