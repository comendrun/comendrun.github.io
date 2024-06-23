import React from "react";

export default function ContactForm() {
  return (
    <form className="mb-20 flex flex-col gap-4">
      <input
        className="w-full h-5 border-2 border-black p-5 rounded-sm "
        type="text"
        placeholder="Your Name"
      />
      <input
        className="w-full h-5 border-2 border-black p-5 rounded-sm "
        type="text"
        placeholder="Email"
      />
      <input
        className="w-full h-5 border-2 border-black p-5 rounded-sm "
        type="text"
        placeholder="Company (If applicable)"
      />
      <textarea
        rows={4}
        className="w-full border-2 border-black p-5 rounded-sm "
        placeholder="How can we help?"
      ></textarea>

      <button className="px-8 py-2 border-2 border-black text-black  relative group  hover:text-white hover:bg-black hover:border-white duration-300 transition-all hover:shadow-[10px_10px_0px_0px_black] w-max font-bold hover:font-extrabold ">
        <span className="relative">Get in Touch</span>
      </button>
    </form>
  );
}
