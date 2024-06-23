import React from "react";
import Section from "../container/Section";
import { FaGithub } from "react-icons/fa";
import { ExpCardTypes } from "./types";
import { personalInfo } from "@/data/data";
import Image from "next/image";
import rms from "../../public/assests/RMS-Intelligents.svg";

export default function Experiences() {
  return (
    <Section
      id="experience"
      className="w-full flex flex-col justify-center items-center py-12"
      dark
    >
      <h2 className="flex gap-2 my-6 justify-center items-centetr text-3xl">
        My <span className="font-extrabold">Experience</span>
      </h2>

      <div className="exp-cards flex w-full justify-center items-center flex-col gap-12">
        {personalInfo.experiences.map(
          ({ title, company, duration, description, logo }, index) => {
            return (
              <ExpCard
                key={index}
                title={title}
                company={company}
                description={description}
                duration={duration}
                logo={rms}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

const ExpCard = ({
  title,
  company,
  duration,
  description,
  logo,
}: ExpCardTypes) => {
  return (
    <div className="exp-card flex flex-col gap-4 border-2 border-white w-full h-full p-8 hover:bg-white hover:text-black duration-200 transition-all hover:scale-110 hover:border-black shadow-[2px_2px_0px_0px_white] hover:shadow-[10px_10px_0px_0px_white]">
      {/* <div className="exp-card flex flex-col gap-4 border-2 w-[90%] h-full p-8 bg-white text-black duration-200 transition-all scale-110 border-black shadow-[10px_10px_0px_0px_white] "> */}
      {/* card header */}
      <div className="flex gap-4 items-center justify-start w-full">
        {/* card header - icon */}
        <div className="flex text-5xl bg-black p-4">
          <Image src={logo} alt={company} width={100} height={100} />
        </div>
        <div className="flex flex-col font-extrabold text-sm tracking-tighter">
          {/* card header - title */}
          <h2>{title}</h2>
          {/* card header - company */}
          <p>{company}</p>
        </div>
      </div>

      {/* card duration */}
      <div className="exp-card-duration my-2">
        <p className="text-md opacity-80">{duration}</p>
      </div>

      {/* card description */}
      <p>{description}</p>
    </div>
  );
};
