import React from "react";
import Section from "../container/Section";
import SocialLinks from "../navbar/SocialLinks";
import ContactForm from "./ContactForm";
import { personalInfo } from "@/data/data";

export default function ContactMe() {
  return (
    <Section id="contact" dark={false}>
      {/* Inputs */}
      <ContactForm />

      {/* social links again */}
      <SocialLinks />

      {/* information section */}
      <div className="contact-information flex flex-col gap-5 my-5">
        {personalInfo.contact.title}

        <p className="information-description">
          {personalInfo.contact.description}
        </p>

        <button className="px-4 py-2 border-2 border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 ">
          Copy my Email address
        </button>
      </div>
    </Section>
  );
}
