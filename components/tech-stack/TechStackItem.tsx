import { ReactNode } from "react";
import { LinkPreview } from "../ui/link-preview";

const TechStackItem = ({
  children,
  className,
  index,
  reverseColored = false,
  link,
}: {
  children: ReactNode;
  className: string;
  index: number;
  reverseColored?: boolean;
  link: string;
}) => {
  const idx = reverseColored ? index + 1 : index;
  return (
    <div
      className={`  flex flex-col gap-4 justify-center items-center border-2 border-transparent text-black p-5 cursor-pointer transition-all duration-300 ${
        idx % 2 === 0
          ? "bg-white text-black hover:bg-black hover:text-white hover:scale-125 hover:border-white"
          : "bg-black text-white hover:bg-white hover:text-black hover:scale-125 hover:border-black"
      } ${className}`}
    >
      <LinkPreview url={link} className="font-extrabold">
        {children}
      </LinkPreview>
    </div>
  );
};

export default TechStackItem;
