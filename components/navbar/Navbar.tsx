import Link from "next/link";
import React from "react";
import Section from "../container/Section";

export default function Navbar() {
  return (
    <Section id="navbar" className="py-0">
      <nav>
        {/* mobile nav */}
        <div className="flex justify-between items-center sticky w-full">
          {/* logo */}
          <div className="logo py-4 hover:cursor-pointer">
            <Link href="/">
              <p className="font-bold md:text-xl text-sm tracking-widest">COMENDRUN</p>
            </Link>
          </div>

          {/* mobile - nav open button */}
          {/* <div className="flex flex-col md:hidden gap-1 hover:cursor-pointer transition-all hover:-rotate-45 py-4 duration-700">
            <canvas className="w-10 h-1 border-2 border-black bg-black" />
            <canvas className="w-10 h-1 border-2 border-black bg-black" />
            <canvas className="w-10 h-1 border-2 border-black bg-black" />
          </div> */}

          <div className="flex gap-1 justify-center items-center">
            <a
              href="https://blog.comendrun.com/"
              title="Visit my Blog"
              className="px-2 lg:px-4 py-2 rounded-md border border-black bg-black text-white hover:bg-white text-xs md:text-base hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
            >
              Blog
            </a>
            <a
              href="./Kamran-Rouhani-CV-English.pdf"
              download="Kamran-Rouhani-Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              title="Download My Resume"
              className="px-2 lg:px-4 py-2 rounded-md hover:border-2 hover:border-black border-2 border-transparent  bg-white text-black text-xs md:text-base hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
            >
              My Resume
            </a>
          </div>

          {/* mobile - nav options */}
        </div>

        {/* desktop - nav options */}

        {/* desktop - resume + blog */}
      </nav>
    </Section>
  );
}
