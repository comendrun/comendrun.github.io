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
              <p className="font-bold text-md tracking-widest">COMENDRUN</p>
            </Link>
          </div>

          {/* mobile - nav open button */}
          <div className="flex flex-col md:hidden gap-1 hover:cursor-pointer transition-all hover:-rotate-45 py-4 duration-700">
            <canvas className="w-10 h-1 border-2 border-black bg-black" />
            <canvas className="w-10 h-1 border-2 border-black bg-black" />
            <canvas className="w-10 h-1 border-2 border-black bg-black" />
          </div>

          {/* mobile - nav options */}
        </div>

        {/* desktop - nav options */}

        {/* desktop - resume + blog */}
      </nav>
    </Section>
  );
}
