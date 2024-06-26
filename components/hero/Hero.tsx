import Image from "next/image";
import React from "react";
import heroVector from "../../public/assests/vector-coding.svg";
import { FlipWords } from "../ui/flip-words";
import { personalInfo } from "@/data/data";
import Section from "../container/Section";
import SocialIcon from "../SocialIcon";
import { FaGithub } from "react-icons/fa";
import SocialLinks from "../navbar/SocialLinks";

const words = [
  "Software-Developer",
  "Tech-Enthusiast",
  "Frontend-Developer",
  "Fullstack-Developer",
];

export default function Hero() {
  return (
    <Section id="hero" dark={false} containerClassName="xl:!py-0" className="flex flex-col lg:flex-row-reverse gap-8 justify-center items-center lg:items-end ">
      {/* <HeroVector /> */}
      <div className="flex flex-col gap-0 lg:flex-1">
        {/* image */}
        <Image src={heroVector} alt="Hero" width={1000} height={1000} />
        <canvas className="w-full bg-black h-1 -mt-3 lg:w-[130%] lg:-ml-52 lg:-mt-5" />
      </div>

      {/* Hero content */}
      <div className="flex flex-col gap-8 lg:flex-1">
        {/* Hero main content */}
        <h2 className="main-content text-xl lg:text-3xl flex flex-col gap-2">
          <div className="flex gap-2 justify-start items-end">
            <p>Hi,</p>
            <p className="flex gap-2 justify-start items-end  ">
              I&apos;m{" "}
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl">{personalInfo.firstName}</span>
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl">{personalInfo.lastName}</span>
            </p>
          </div>
          {/* <p className="flex gap-2 text-black"> */}
          {/* a <span className="font-extrabold">Software</span>
            <span className=" outline-title">Developer</span> */}
          <FlipWords
            className="xl:text-5xl lg:text-3xl text-2xl sm:text-6xl md:text-6xl text-black font-extrabold"
            words={words}
          />
          {/* </p> */}
          <p>
            based in <span className="font-bold">{personalInfo.location}.</span>
          </p>
        </h2>

        {/* short introduction */}
        <div className="summary">
          <p>{personalInfo.shortSummary}</p>
        </div>

        <SocialLinks />
      </div>
    </Section>
  );
}
