import React from "react";
import Section from "../container/Section";
import { FaGithub } from "react-icons/fa";
import { ExpCardTypes } from "./types";
import { personalInfo } from "@/data/data";
import Image from "next/image";
import rms from "../../public/assests/RMS-Intelligents.svg";
import ExpCard from "./ExpCard";

export default function Experiences() {
  return (
    <Section
      id="experience"
      className="w-full flex flex-col justify-center items-center py-16"
      dark
    >
      <h2 className="flex gap-2 my-6 justify-center items-centetr text-3xl">
        My <span className="font-extrabold">Experience</span>
      </h2>

      <div className="exp-cards flex w-full justify-center items-center flex-col gap-12">
        {personalInfo.experiences.map(
          (
            { title, company, duration, description, logo, companyWebsite },
            index
          ) => {
            return (
              <ExpCard
                key={index}
                title={title}
                company={company}
                description={description}
                duration={duration}
                logo={rms}
                companyWebsite={companyWebsite}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}
