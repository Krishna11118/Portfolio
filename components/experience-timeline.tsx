"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TracingBeam } from "../app/animation/Tracing-beam";

const experiences = [
  {
    company: "Amlgo Labs",
    position: "SDE-1",
    period: "2024 - Present",
    description:"Developed and deployed a MERN stack and React Native application, managing both frontend and backend. Designed and built web pages for an MNC client. Used AWS services like EC2, S3, and Athena, working with Node.js, Express.js, SQL, and MongoDB. Collaborated with the client and development teams to fix issues and performed system and regression testing to ensure a smooth UI after resolving reported bugs."
  },
  {
    company: "Cyber Solvings",
    position: "Full Stack Developer",
    period: "2024 - May 2024",
    description:
      "Developed a scalable backend using Node.js, Express.js, MongoDB, and React.js with secure APIs and real-time handling, integrated REST APIs with robust error handling for seamless communication, and collaborated on creating dynamic, responsive UIs using Tailwind CSS, JavaScript, React.js, and Material-UI."},
  {
    company: "Unico Global",
    position: "Full Stack Developer",
    period: "2023 - Dec 2023",
    description:
      "Worked on a MERN stack internship project using JavaScript, Node.js, React.js, and Windows technologies to enhance functionality, contributed to front-end development to improve visual appeal and usability, and actively collaborated on integrating front-end components with back-end systems for seamless and efficient performance." },
];

export default function ExperienceTimeline() {
  return (
    <TracingBeam className="px-2">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary before:to-transparent md:before:ml-9">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            viewport={{
              once: false,
              margin: "-100px",
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="relative flex items-start gap-6 md:gap-10"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              viewport={{
                once: false,
                margin: "-100px",
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: "backOut",
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-card md:h-20 md:w-20"
            >
              <span className="text-sm font-bold md:text-xl">
                {exp.period.split("-")[0]}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{
                once: false,
                margin: "-100px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.2,
                ease: "easeOut",
              }}
              className="flex-1"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.position}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </TracingBeam>
  );
}
