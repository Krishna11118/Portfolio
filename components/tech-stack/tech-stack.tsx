"use client"

import { motion } from "framer-motion"
import { TechCard } from "./tech-card"

const technologies = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    color: "#000000",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    name: "TailwindCSS",
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    color: "#38B2AC",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    color: "#336791",
  },
  {
    name: "React Native",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    color: "#336791",
  },
  {
    name: "Socket.io",
    icon: "https://socket.io/images/logo-dark.svg",
    color: "#010101",
  },
  {
    name: "Kubernetes",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    color: "#326CE5",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#2496ED",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    color: "#2496ED",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    color: "#336791",
  },
  {
    name: "Redis",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    color: "#DC382D",
  }
];

export default function TechStack() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-4xl font-bold text-center"
      >
        Tech Stack
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center max-w-4xl mx-auto"
      >
        {technologies.map((tech, index) => (
          <TechCard
            key={tech.name}
            {...tech}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  )
}