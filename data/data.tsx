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
import tipCalculatorImg from "/assests/Tip-Calculator.png";

export const personalInfo = {
  firstName: "Kamran",
  lastName: "Rouhani",
  email: "kamran.rouhani@outlook.com",
  phone: "+49 163 344 7846",
  location: "Germany",
  address: "Ingolstadt, Germany",
  shortSummary:
    "I'm a Full-Stack Developer focusing on Java and JavaScript technologies including ReactJS, NextJS, NodeJS, Spring Boot, RestAPIs, SQL, Cypress E2E Testing and PostgreSQL databases. Passionate about continuous learning, I firmly believe in my abilities and strive to enhance my skill set.",
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
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: BiLogoTypescript,
      description: "",
      iconColor: "#3178c6",
    },
    {
      id: 2,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: IoLogoJavascript,
      iconColor: "#f4e131",
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
      iconColor: "#61DBFB",
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
      iconColor: "#6eb342",
      description: "",
    },
    {
      id: 7,
      name: "GIT",
      link: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F",
      icon: FaGitAlt,
      iconColor: "#F1502F",
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
      iconColor: "#366692",
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
      iconColor: "#264de4",
      description: "",
    },
  ],
  experiences: [
    {
      title: "Software Developer",
      company: "RMS Intelligents GmbH",
      duration: "Jan 2023 - Present",
      logo: "/assets/RMS-Intelligents.svg",
      companyWebsite: "https://www.rms-intelligents.com/",
      description: (
        <>
          <li className="">
            As a Fullstack Software developer working in a small team, I had the
            opportunity to be in direct contact with our stakeholders and users,
            to be able to deliver the best possible product that would solve
            their day to day issues.
          </li>
          <li>
            I feel like my contribution was intrumental in delivering better
            products and solving a lot of known and unknown issues that our
            users had. I can confidently say that the user experience got
            substantsially better after our new team was formed.
          </li>
          <li>
            I got the chance to learn and showcase my abilities working with
            several technologies, namely: NextJS, JavaScript, TypeScript, Java,
            Spring Boot, PostgreSQL, AWS, Docker, Cypress E2E testing,
            Git/GitHub, Github Actions and many more exciting new experiences.
          </li>
          <li>
            Being able to learn and utilise new technolgies and topics everyday
            is one of the best aspects of this profession which I love and am
            very lucky to enjoy every day.
          </li>
        </>
        // </ul>
      ),
    },
    {
      title: "Software Developer - Intern",
      company: "RMS Intelligents GmbH",
      duration: "Sep 2022 - Jan 2023",
      logo: "/assets/RMS-Intelligents.svg",
      companyWebsite: "https://www.rms-intelligents.com/",
      description: (
        <>
          <li>
            As self-taught Developer with no prior professional experience, and
            who has just recently moved to Germany with little to no German
            language knowledge, this was the best opportunity in the perfect
            time to get first hand industry knowledge
          </li>
          <li>
            Having the support of best senior developers to be able to develop
            my skills and believe myself.
          </li>
          <li>
            I already had extensive personal experience utilizing JavaScript,
            React, NextJS, NodeJS, Git, GitHub, .... and in addition I had the
            chance to learn new technologies like Docker, Java, Spring Boot, MVC
            Architecture, AWS Serices, Agile methodolgy, E2E testing
            (Cypress.io), and so many more exciting technologies.
          </li>
          <li>
            I was able to demonstrate my abilities on real world issues and
            tickets, by contributing directly to our projects.
          </li>
        </>
      ),
    },
  ],
  aboutMe: {
    firstP:
      "I'm a Full-Stack Developer focusing on Java and JavaScript technologies like ReactJS, NextJS, NodeJS, Spring Boot, RestAPIs, SQL, Cypress E2E Testing and PostgreSQL databases. Passionate about continuous learning, I firmly believe in my abilities and strive to enhance my skill set.",
    secondP: "",
    thirdP: "",
  },
  projects: [
    {
      id: 1,
      title: "Tip Calculator",
      link: "https://comendrun.com/Tip-calculator-app/",
      description:
        "A react app to calculate tip amount for provided bill amount with custom tip percentage and also each person's total share.",
      repoLink: "https://github.com/comendrun/Tip-calculator-app",
      image: "/assests/Tip-Calculator.png",
    },
    // {
    //   id: 2,
    //   title: "Tip Calculator",
    //   link: "",
    //   description:
    //     "A react app to calculate tip amount for provided bill amount with custom tip percentage and also each person's total share.",
    //   repoLink: "",
    //   image: projectPlaceholder,
    // },
    // {
    //   id: 3,
    //   title: "Tip Calculator",
    //   link: "",
    //   description:
    //     "A react app to calculate tip amount for provided bill amount with custom tip percentage and also each person's total share.",
    //   repoLink: "",
    //   image: projectPlaceholder,
    // },
  ],
  contact: {
    title: (
      <h2 className="information-title text-2xl font-extrabold lg:text-4xl">
        Lets <span>Talk</span> if <br className="hidden lg:flex" /> you have
        anything in mind
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
