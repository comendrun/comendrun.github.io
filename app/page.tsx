import AboutMe from "@/components/about-me/AboutMe";
import ContactMe from "@/components/contact/ContactMe";
import Experiences from "@/components/experiences/Experiences";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/tech-stack/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav />
      </div>

      <Navbar />
      <Hero />
      <TechStack />
      <Projects dark />
      <AboutMe />
      <Experiences />
      <ContactMe />
      <Footer />
    </main>
  );
}
