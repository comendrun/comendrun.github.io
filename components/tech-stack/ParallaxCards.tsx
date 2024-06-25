"use client";
import { personalInfo } from "@/data/data";
import { useScroll, useTransform, motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { IconType } from "react-icons";
import { LinkPreview } from "../ui/link-preview";
import { Card, Cards } from "./types";
import TechStackItem from "./TechStackItem";

export default function ParallaxCard() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  // console.log("content", cards);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-320%"]);

  const cards: Cards = personalInfo.technologies;

  const firstArray: Cards = [];
  const secondArray: Cards = [];
  cards.map((card: Card, index) => {
    index % 2 === 0 ? secondArray.push(card) : firstArray.push(card);
  });

  return (
    <section ref={targetRef} className="relative h-[500vh]">
      <div className="sticky top-0 justify-center flex h-screen overflow-hidden items-center ">
        <motion.div
          style={{ x }}
          className="text-white flex gap-2 justify-center items-center w-full h-full "
        >
          <div className="flex flex-col justify-center items-center w-full h-max gap-4">
            <div className="flex w-full h-full gap-4">
              {firstArray.map((card, index) => {
                const Icon = card.icon;
                return (
                  <TechStackItem
                    link={card.link}
                    key={index}
                    className="min-w-[10rem] h-[10rem] w-56"
                    index={index}
                  >
                    <Icon className="text-8xl" />

                    <div className="font-extrabold m-auto flex justify-center items-center">
                      {card.name}
                    </div>
                  </TechStackItem>
                );
              })}
            </div>
            <div className="flex w-full h-full gap-4">
              {secondArray.map((card, index) => {
                const Icon = card.icon;
                return (
                  <TechStackItem
                    link={card.link}
                    reverseColored={true}
                    key={index}
                    className="min-w-[10rem] h-[10rem] w-56"
                    index={index}
                  >
                    <Icon className="text-8xl" />

                    <div className="font-extrabold m-auto flex justify-center items-center">
                      {card.name}
                    </div>
                  </TechStackItem>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
