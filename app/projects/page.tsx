"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Trekki",
    description:
      "Travel booking website, where we make it easy for you to plan your dream vacation with AI Assistant.",
    image:
      "https://camo.githubusercontent.com/7481701fbaea9cbf5e4a305ab5fb86b578364ed2a9984db0d9da9d214a28c72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64766a6e787578786a2f696d6167652f75706c6f61642f76313638373032323930372f526561646d655f5472656b6b692f526561646d65322f53637265656e73686f745f3230385f6631637764382e706e67",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    link: "https://github.com/Krishna11118/Trekki",
  },
  {
    title: "CRM-Panel",
    description:
      "A CRM panel for diffrent roles admin, sub-admin, user. Admin can manage all the users and sub-admins, sub-admin can manage users and user can manage their profile.",
    image:
      "https://raw.githubusercontent.com/Krishna11118/CRM-Panel/refs/heads/main/example/subAdmins.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Material UI"],
    link: "https://github.com/Krishna11118/CRM-Panel",
  },
  {
    title: "QTrip",
    description:
      "Travel booking website, where we make it easy for you to plan your dream vacation.",
    image:
      "https://raw.githubusercontent.com/Krishna11118/QTrip/refs/heads/main/examples/Qtrip_Dynamic_1.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/Krishna11118/QTrip",
  },
  {
    title: "QKart",
    description:
      "QKart, your go-to online marketplace, provides a seamless shopping experience with a user-friendly interface and a diverse range of products.",
    image:
      "https://raw.githubusercontent.com/Krishna11118/Q-Kart/master/example/HomePage.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS"],
    link: "https://github.com/Krishna11118/Q-Kart",
  },
  {
    title: "Bio AI Assistant",
    description:
      "Bio-AI-Assistant is an intelligent AI agent that answers queries based on your stored biodata. It provides accurate, personalized responses using the information you've added",
    image:
      "https://raw.githubusercontent.com/Krishna11118/Bio-AI-Assistant/refs/heads/main/example/ss.png",
    tags: ["React.js + Vite", "Node.js", "Tailwind CSS"],
    link: "https://github.com/Krishna11118/Bio-AI-Assistant",
  },
  {
    title: "Job Portal",
    description:
      "Job Portal is a web-based application that allows job seekers to search for jobs and apply for them. It also allows employers to post job openings and search for candidates.",
    image:
      "https://api.vestaff.com/allFiles/20ed1d843ee8a7b2e08dd8d9.jpg",
    tags: ["Nest.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://www.vestaff.com/",
  },
];

// Duplicate projects for infinite scroll
const infiniteProjects = [...projects, ...projects];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.h1
        className="mb-8 text-4xl flex justify-center items-center font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div className="relative overflow-hidden">
        <motion.div
          ref={scrollRef}
          className="flex gap-6 py-4"
          initial={{ x: 0 }}
          animate={{
            x: [0, -1920],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            },
          }}
          onHoverStart={(e) => {
            const element = e.target as HTMLElement;
            element.style.animationPlayState = "paused";
          }}
          onHoverEnd={(e) => {
            const element = e.target as HTMLElement;
            element.style.animationPlayState = "running";
          }}
        >
          {infiniteProjects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[400px] flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={project.link} target="_blank">
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
