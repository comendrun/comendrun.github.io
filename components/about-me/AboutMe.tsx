import React from "react";
import Section from "../container/Section";
import aboutMe from "@/public/assests/about-me-main-2.svg";
import Image from "next/image";
import { personalInfo } from "@/data/data";

export default function AboutMe() {
  return (
    <Section
      id="about-me"
      className="!px-0 w-[90%] mx-auto flex flex-col justify-center items-center lg:flex-row lg:my-44"
    >
      {/* vector */}
      <div className="flex w-full h-96 justify-center items-center -my-12 ">
        <Image
          src={aboutMe}
          alt="about-me"
          height={1000}
          width={1000}
          className=" mx-auto w-full h-auto max-w-[20rem] max-h-[20rem] lg:max-w-[40rem] lg:w-[40rem] lg:max-h-[40rem] lg:h-[40rem]"
        />
      </div>
      <div className="flex flex-col w-full h-full">
        {/* title */}
        <h2 className="flex gap-2 my-6 justify-start items-start text-3xl mr-auto">
          About <span className="font-extrabold">Me</span>
        </h2>

        {/* description */}
        <div className="flex flex-col gap-7 ">
          <p>{personalInfo.aboutMe.firstP}</p>
          <p>{personalInfo.aboutMe?.secondP}</p>
          <p>{personalInfo.aboutMe?.thirdP}</p>
        </div>
      </div>
    </Section>
  );
}
