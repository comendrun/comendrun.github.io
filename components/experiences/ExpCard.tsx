import Image from "next/image";
import { ExpCardTypes } from "./types";

const ExpCard = ({
  title,
  company,
  duration,
  description,
  logo,
  companyWebsite,
}: ExpCardTypes) => {
  return (
    <div className="exp-card flex flex-col gap-4 border-2 border-white w-full h-full p-8 hover:bg-white hover:text-black duration-200 transition-all hover:scale-110 hover:border-black shadow-[2px_2px_0px_0px_white] hover:shadow-[10px_10px_0px_0px_white]">
      <div className="flex flex-col w-full h-full gap-4 lg:flex-row lg:justify-between lg:items-center">
        {/* card header */}
        <div className="flex gap-4 items-center justify-start w-full">
          {/* card header - icon */}
          <a
            title={company}
            href={companyWebsite}
            className="flex text-5xl bg-black p-4"
          >
            <Image src={logo} alt={company} width={100} height={100} />
          </a>
          <div className="flex flex-col font-extrabold text-sm tracking-tighter">
            {/* card header - title */}
            <h2>{title}</h2>
            {/* card header - company */}
            <p>{company}</p>
          </div>
        </div>

        {/* card duration */}
        <div className="exp-card-duration my-2 min-w-max">
          <p className="text-md opacity-80">{duration}</p>
        </div>
      </div>

      {/* card description */}
      <ul className="list-inside list-disc flex flex-col gap-3">
        {description}
      </ul>
    </div>
  );
};

export default ExpCard;
