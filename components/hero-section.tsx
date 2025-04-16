"use client"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { Cover } from "./ui/cover"

export default function HeroSection() {
  return (
    <LampContainer >
      {/* <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Building digital <br /> experiences that <br /> matter
      </motion.h1> */}

      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br  from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        I engineer AI-driven automation, delivering innovative web solutions for <Cover>business growth</Cover>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-white/80 mt-4 text-base md:text-xl"
      >
        Full-Stack Developer | AI/ML  | UI/UX Enthusiast
      </motion.div>


    </LampContainer>
  )
}
