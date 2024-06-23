import React, { ReactNode } from "react";

export default function Section({
  children,
  className,
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id: string;
}) {
  return (
    <section
      className={`my-12 p-10 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }  ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}
