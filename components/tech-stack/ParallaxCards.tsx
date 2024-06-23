"use client";
import { personalInfo } from "@/data/data";
import { useScroll, useTransform, motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { IconType } from "react-icons";
import { LinkPreview } from "../ui/link-preview";

const Card = ({
  children,
  className,
  index,
  reverseColored = false,
  link,
}: {
  children: ReactNode;
  className: string;
  index: number;
  reverseColored?: boolean;
  link: string;
}) => {
  const idx = reverseColored ? index + 1 : index;
  return (
    <div
      className={`w-56 min-w-[10rem] h-[10rem] flex flex-col gap-4 justify-center items-center border-2 border-transparent text-black p-5 cursor-pointer transition-all duration-300 ${
        idx % 2 === 0
          ? "bg-white text-black hover:bg-black hover:text-white hover:scale-125 hover:border-white"
          : "bg-black text-white hover:bg-white hover:text-black hover:scale-125 hover:border-black"
      } ${className}`}
    >
      <LinkPreview url={link} className="font-extrabold">
        {children}
      </LinkPreview>
    </div>
  );
};
//   <a target="_blank" href={link} className="all">
//   </a>

type Card = {
  id: number;
  name: string;
  link: string;
  icon: IconType;
  description: string;
};

type Cards = Card[];

export default function ParallaxCard() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  // console.log("content", cards);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-220%"]);

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
                  <Card link={card.link} key={index} className="" index={index}>
                    <Icon className="text-8xl" />

                    <div className="font-extrabold m-auto flex justify-center items-center">
                      {card.name}
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="flex w-full h-full gap-4">
              {secondArray.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card
                    link={card.link}
                    reverseColored={true}
                    key={index}
                    className=""
                    index={index}
                  >
                    <Icon className="text-8xl" />

                    <div className="font-extrabold m-auto flex justify-center items-center">
                      {card.name}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
