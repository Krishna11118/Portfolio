import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import Aceternity from "./animation/Aceternity";
import Projects from "./projects/page"
import Experience from "./experience/page"
import Contact from "./contact/page"
import TechStack from "@/components/tech-stack/tech-stack"
import Services from "./service/page"
import Head from "next/head";


export default function Home() {
  return (
    <div className="flex flex-col">
   
      {/* Hero Section */}
      <section id="home">
        <Aceternity />
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}