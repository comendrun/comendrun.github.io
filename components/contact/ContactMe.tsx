"use client";
import React, { useEffect, useState } from "react";
import Section from "../container/Section";
import SocialLinks from "../navbar/SocialLinks";
import ContactForm from "./ContactForm";
import { personalInfo } from "@/data/data";

export default function ContactMe() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailHandler = () => {
    navigator.clipboard.writeText("kamran.rouhani@comendrun.com");
    setIsCopied(true);
  };

  useEffect(() => {
    console.log("useEffect called");

    setTimeout(() => {
      if (isCopied) setIsCopied(false);
    }, 3000);
  }, [isCopied]);

  return (
    <Section id="contact" dark={false} className="lg:flex lg:flex-row gap-24 justify-center lg:mx-auto">
      <div className="flex w-full h-full flex-col flex-1 lg:max-w-[30%]">
        {/* Inputs */}
        <ContactForm />

        {/* social links again */}
        <SocialLinks className="xl:hidden" />
      </div>

      {/* information section */}
      <div className="contact-information flex flex-col gap-5 my-14 lg:my-0 flex-1 lg:max-w-[40%]">
        {personalInfo.contact.title}

        <p className="information-description">
          {personalInfo.contact.description}
        </p>

        <button
          onClick={copyEmailHandler}
          className={`px-4 py-2 border-2  text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 lg:max-w-max lg:ml-auto font-bold ${
            isCopied
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          }`}
        >
          {isCopied ? "Email Copied to Clipboard!" : "Copy my Email address"}
        </button>
      </div>
    </Section>
  );
}
