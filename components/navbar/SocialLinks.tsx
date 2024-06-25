import { personalInfo } from "@/data/data";
import React from "react";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`social flex gap-4 ${className}`}>
      {personalInfo.socialLinks.map(({ icon: Icon, name, link }, index) => {
        return (
          <a
            className="p-1 border-4 border-black rounded-lg bg-black hover:bg-white transition-all hover:scale-110 text-white hover:text-black"
            key={index}
            href={link}
            title={name}
            target="_blank"
          >
            {/* <SocialIcon icon={Icon} /> */}
            <Icon className="w-7 h-7 " />
          </a>
        );
      })}
    </div>
  );
}
