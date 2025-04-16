"use client"
import { motion } from "framer-motion"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function BioSection() {
  return (
    <section id="bio" className="py-20 px-4 md:px-12 px-0  max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
      </motion.div>

      <BackgroundGradient className="p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/self.png?height=400&width=400"
              alt="Profile"
              className="rounded-[50%] w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/90"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I'm <span className="text-blue-400">Krishna </span>
            </h3>
            <p className="mb-4">
              Full Stack Developer with 1.5 years of experience specializing in MERN stack and AWS services (EC2, S3).
              Proficient in JavaScript, TypeScript, and SQL, with extensive expertise in building scalable, secure applications for MNC
              clients.
            </p>
            {/* <p className="mb-4">
              I specialize in creating responsive, user-friendly applications with modern technologies. When I'm not
              coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes.
            </p>
            */}
            <p>
              Experienced in designing Technical Solution Architecture, and integrating Machine Learning models in current role.
              Hackathon winner, seeking opportunities to enhance full-stack skills and career growth.
            </p>
          </motion.div>
        </div>
      </BackgroundGradient>
    </section>
  )
}
