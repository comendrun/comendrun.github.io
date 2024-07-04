"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { navItems } from "@/data/data";

type NavItem = {
  name: string;
  link: string;
  icon: any;
};

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto  border-transparent rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 border-slate-400 border-2",
          className
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <NavItem key={`link=${idx}`} {...navItem} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const NavItem = ({ link, icon, name }: any) => {
  const Icon = icon;
  return (
    <Link
      href={link}
      className={cn(
        "relative  items-center flex space-x-1 text-white hover:text-neutral-500"
      )}
    >
      <span title={name} className="block sm:hidden text-white text-xl hover:text-neutral-500">
        <Icon />
      </span>
      <span className="hidden sm:block text-sm">{name}</span>
    </Link>
  );
};
