import React, { ReactNode } from "react";

export default function Section({
  children,
  containerClassName,
  className,
  dark = false,
  id,
}: {
  children: ReactNode;
  containerClassName?: string
  className?: string;
  dark?: boolean;
  id: string;
}) {
  return (
    <section
      className={`w-full h-full  ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }  ${containerClassName} xl:py-36 `}
    >
      <section
        className={`my-12 p-10 max-w-[1500px] mx-auto  ${className}`}
        id={id}
      >
        {children}
      </section>
    </section>
  );
}
