import { IconType } from "react-icons";

export type Card = {
  id: number;
  name: string;
  link: string;
  icon: IconType;
  description: string;
};

export type Cards = Card[];
