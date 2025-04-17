"use client"
import { motion } from "framer-motion"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function BioSection() {
  return (
    <section id="bio" className="py-20 px-4 md:px-12 px-0 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-white mx-auto"></div>
      </motion.div>

      <BackgroundGradient className="p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/self.png?height=200&width=200"
              alt="Krishna, Full Stack Developer"
              className="rounded-[50%] w-full max-w-[150px] sm:max-w-xs mx-auto grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/90"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hello, I'm <span className="text-blue-400">Krishna</span>
            </h3>
            <p className="mb-4">
              I'm Krishna, a dedicated full-stack developer and machine learning professional. I excel in building responsive interfaces with React, reliable APIs with Node.js, dynamic scripts with JavaScript, and data solutions with SQL. My passion for problem-solving drives me to create innovative applications and predictive models using tools like TypeScript and MongoDB.
            </p>
            <p>
              Inspired by real-world challenges, I’m always advancing my skills in AI and contributing to open-source projects. Over coffee, I plan my next impactful solution. Let’s connect and build something remarkable!
            </p>
          </motion.div>
        </div>
      </BackgroundGradient>
    </section>
  )
}