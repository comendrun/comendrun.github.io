import Link from "next/link";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  //   const year = date.getFullYear()

  return (
    <footer className="p-10 w-full bg-black text-white flex justify-between items-center">
      <div className="logo py-4 hover:cursor-pointer">
        <Link href="/">
          <p className="font-bold text-md tracking-widest">COMENDRUN</p>
        </Link>
      </div>

      <p className="text-sm">@{year} Comendrun</p>
    </footer>
  );
}
