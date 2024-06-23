import {
  BiLogoTypescript,
  BiLogoSpringBoot,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinkedinIn,
  FaXing,
  FaHome,
} from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlineMapsHomeWork } from "react-icons/md";
import { PiOpenAiLogoDuotone } from "react-icons/pi";
import {
  RiNextjsFill,
  RiReactjsLine,
  RiJavaLine,
  RiMessage3Fill,
} from "react-icons/ri";
import {
  SiJest,
  SiCypress,
  SiRobotframework,
  SiWheniwork,
} from "react-icons/si";

import projectPlaceholder from "@/public/assests/project-placeholder.svg";

export const personalInfo = {
  firstName: "Kamran",
  lastName: "Rouhani",
  email: "kamran.rouhani@outlook.com",
  phone: "+49 163 344 7846",
  location: "Germany",
  address: "Ingolstadt, Germany",
  shortSummary:
    "I'm a Full-Stack Developer focusing on Java and JavaScript technologies like ReactJS, NextJS, NodeJS, Spring Boot, RestAPIs, SQL, Cypress E2E Testing and PostgreSQL databases. Passionate about continuous learning, I firmly believe in my abilities and strive to enhance my skill set.",
  socialLinks: [
    {
      name: "Github",
      link: "https://github.com/comendrun",
      icon: FaGithub,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/comendrun/",
      icon: FaLinkedinIn,
    },
    {
      name: "XING",
      link: "https://www.xing.com/profile/kamran_rouhani",
      icon: FaXing,
    },
    {
      name: "Email",
      link: "mailto:kamran.rouhani@comendrun.com",
      icon: MdOutlineAlternateEmail,
    },
  ],
  technologies: [
    {
      id: 1,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: IoLogoJavascript,
      description: "",
    },
    {
      id: 2,
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: BiLogoTypescript,
      description: "",
    },
    {
      id: 3,
      name: "NextJS",
      link: "https://nextjs.org/",
      icon: RiNextjsFill,
      description: "",
    },
    {
      id: 4,
      name: "ReactJS",
      link: "https://react.dev/",
      icon: RiReactjsLine,
      description: "",
    },
    {
      id: 5,
      name: "Java",
      link: "https://aws.amazon.com/what-is/java/",
      icon: RiJavaLine,
      description: "",
    },
    {
      id: 6,
      name: "Spring Boot",
      link: "https://spring.io/projects/spring-boot",
      icon: BiLogoSpringBoot,
      description: "",
    },
    {
      id: 7,
      name: "GIT",
      link: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F",
      icon: FaGitAlt,
      description: "",
    },
    {
      id: 8,
      name: "GitHub",
      link: "https://github.com/",
      icon: FaGithub,
      description: "",
    },
    {
      id: 9,
      name: "OpenAI",
      link: "https://openai.com/",
      icon: PiOpenAiLogoDuotone,
      description: "",
    },
    {
      id: 10,
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
      icon: BiLogoPostgresql,
      description: "",
    },
    {
      id: 11,
      name: "AWS CCP",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      icon: FaAws,
      description:
        "I am a Certified Cloud Practitioner. I recently had the chance of passing the exam and I have to say it was very exciting to get to know a lot of different technologies available from AWS Cloud Services, which I didn't even know of.",
    },
    {
      id: 12,
      name: "Jest",
      link: "https://www.postgresql.org/",
      icon: SiJest,
      description: "Jest + React Testing Library",
    },
    {
      id: 13,
      name: "Cypress.io",
      link: "https://www.cypress.io/",
      icon: SiCypress,
      description: "",
    },
    {
      id: 14,
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS",
      icon: IoLogoCss3,
      description: "",
    },
  ],
  experiences: [
    {
      title: "Software Develooper",
      company: "RMS Intelligents GmbH",
      duration: "Jan 2023 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat ac leo in gravida. Praesent condimentum mauris rhoncus elit porta aliquet. Fusce quis purus vitae quam pellentesque efficitur viverra et mi. Curabitur egestas pulvinar turpis, non gravida risus pharetra at. Curabitur pulvinar quis nunc vel commodo. Nam nec eleifend enim, vel tristique mauris. Vestibulum auctor sodales magna, a consequat nibh blandit a. Ut fringilla ac nisi at maximus. Etiam iaculis augue nunc, vel venenatis nunc tincidunt non. Morbi porttitor feugiat ornare.",
      logo: "/assets/RMS-Intelligents.svg",
    },
    {
      title: "Software Develooper - Intern",
      company: "RMS Intelligents GmbH",
      duration: "Sep 2022 - Jan 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat ac leo in gravida. Praesent condimentum mauris rhoncus elit porta aliquet. Fusce quis purus vitae quam pellentesque efficitur viverra et mi. Curabitur egestas pulvinar turpis, non gravida risus pharetra at. Curabitur pulvinar quis nunc vel commodo. Nam nec eleifend enim, vel tristique mauris. Vestibulum auctor sodales magna, a consequat nibh blandit a. Ut fringilla ac nisi at maximus. Etiam iaculis augue nunc, vel venenatis nunc tincidunt non. Morbi porttitor feugiat ornare.",
      logo: "/assets/RMS-Intelligents.svg",
    },
  ],
  aboutMe: {
    firstP:
      "I'm a Full-Stack Developer focusing on Java and JavaScript technologies like ReactJS, NextJS, NodeJS, Spring Boot, RestAPIs, SQL, Cypress E2E Testing and PostgreSQL databases. Passionate about continuous learning, I firmly believe in my abilities and strive to enhance my skill set.",
    secondP:
      "I'm a Full-Stack Developer focusing on Java and JavaScript technologies like ReactJS, NextJS, NodeJS, Spring Boot, RestAPIs, SQL, Cypress E2E Testing and PostgreSQL databases. Passionate about continuous learning, I firmly believe in my abilities and strive to enhance my skill set.",
    thirdP:
      "I'm a Full-Stack Developer focusing on Java and JavaScript technologies like ReactJS, NextJS, NodeJS, Spring Boot, RestAPIs, SQL, Cypress E2E Testing and PostgreSQL databases. Passionate about continuous learning, I firmly believe in my abilities and strive to enhance my skill set.",
  },
  projects: [
    {
      id: 1,
      title: "Tip Calculator",
      link: "",
      description:
        "A react app to calculate tip amount for provided bill amount with custom tip percentage and also each person's total share.",
      repoLink: "",
      image: projectPlaceholder,
    },
    {
      id: 2,
      title: "Tip Calculator",
      link: "",
      description:
        "A react app to calculate tip amount for provided bill amount with custom tip percentage and also each person's total share.",
      repoLink: "",
      image: projectPlaceholder,
    },
    {
      id: 3,
      title: "Tip Calculator",
      link: "",
      description:
        "A react app to calculate tip amount for provided bill amount with custom tip percentage and also each person's total share.",
      repoLink: "",
      image: projectPlaceholder,
    },
  ],
  contact: {
    title: (
      <h2 className="information-title text-2xl font-extrabold">
        Lets <span>Talk</span> if you have anything in mind
      </h2>
    ),
    description:
      "I'm always open to any new friend or conversation that comes my way. Let's get in touch.",
  },
};

// export const icons = {
//   FaGithub,
//   FaLinkedinIn,
//   FaXing,
//   IoLogoJavascript,
//   BiLogoTypescript,
//   RiNextjsFill,
//   RiReactjsLine,
//   RiJavaLine,
//   BiLogoSpringBoot,
//   BiLogoPostgresql,
//   FaGitAlt,
//   FaAws,
//   PiOpenAiLogoDuotone,
//   SiJest,
//   SiCypress,
//   IoLogoCss3,
// };

export const navItems = [
  { name: "Home", link: "#home", icon: FaHome },
  { name: "Skills", link: "#skills", icon: GiStack },
  { name: "Experience", link: "#experience", icon: MdOutlineMapsHomeWork },
  { name: "About Me", link: "#about-me", icon: SiWheniwork },
  { name: "Projects", link: "#projects", icon: SiRobotframework },
  { name: "Contact", link: "#contact", icon: RiMessage3Fill },
];
