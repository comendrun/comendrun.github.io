import React from "react";
import Section from "../container/Section";
import ParallaxCard from "./ParallaxCards";
import { personalInfo } from "@/data/data";
import { Card } from "./types";
import TechStackItem from "./TechStackItem";

export default function TechStack() {
  return (
    <Section id="skills" dark={false}>
      <div className="w-full h-full lg:hidden">
        <ParallaxCard />
      </div>

      <Section id="skills" className="hidden lg:grid grid-cols-7 gap-8 w-full my-28">
        {personalInfo.technologies.map((card: Card, index: number) => {
          const Icon = card.icon;
          return (
            <TechStackItem
              link={card.link} 
              key={index}
              className="border-2 !border-black"
              index={index}
            >
              <Icon className={`text-8xl ${card.iconColor} `} />

              <div className="font-extrabold m-auto flex justify-center items-center">
                {card.name}
              </div>
            </TechStackItem>
          );
        })}
      </Section>
    </Section>
  );
}
