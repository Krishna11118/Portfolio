"use client"
import { motion } from "framer-motion"

type TechCategory = "frontend" | "backend" | "data-devops" | "ml/ai"

type Technology = {
  name: string
  category: TechCategory
  color: string
}

const technologies: Technology[] = [
  // Frontend
  { name: "React", category: "frontend", color: "bg-blue-500" },
  { name: "Next.js", category: "frontend", color: "bg-black" },
  { name: "TypeScript", category: "frontend", color: "bg-blue-600" },
  { name: "Tailwind CSS", category: "frontend", color: "bg-cyan-500" },

  // Backend
  { name: "Node.js", category: "backend", color: "bg-green-600" },
  { name: "Express", category: "backend", color: "bg-gray-600" },
  { name: "Django", category: "backend", color: "bg-green-800" },
  { name: "FastAPI", category: "backend", color: "bg-teal-500" },

  // Data & DevOps (Merged Database + Cloud)
  { name: "MongoDB", category: "data-devops", color: "bg-green-600" },
  { name: "MySQL", category: "data-devops", color: "bg-blue-600" },
  { name: "AWS", category: "data-devops", color: "bg-orange-500" },
  { name: "Docker", category: "data-devops", color: "bg-blue-500" },

  // ML/AI
  { name: "TensorFlow", category: "ml/ai", color: "bg-orange-500" },
  { name: "PyTorch", category: "ml/ai", color: "bg-red-500" },
  { name: "Scikit-learn", category: "ml/ai", color: "bg-blue-500" },
  { name: "Hugging Face", category: "ml/ai", color: "bg-yellow-500" },
]

const categoryConfig = {
  frontend: {
    title: "Frontend",
    description: "Building user interfaces and web applications",
    gradient: "from-blue-500 to-cyan-500",
  },
  backend: {
    title: "Backend",
    description: "Server-side technologies and frameworks",
    gradient: "from-green-500 to-teal-500",
  },
  "data-devops": {
    title: "Data & DevOps",
    description: "Databases and cloud deployment",
    gradient: "from-blue-600 to-emerald-500",
  },
  "ml/ai": {
    title: "ML & AI",
    description: "Intelligent systems and models",
    gradient: "from-orange-500 to-red-500",
  },
}

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Technologies</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-white mx-auto"></div>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm">
          Technologies I specialize in and enjoy working with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Row: Frontend (Left) & Backend (Right) */}
        <div className="space-y-6">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className={`h-8 w-2 rounded-full bg-gradient-to-b ${categoryConfig.frontend.gradient} mr-3`}></div>
              <div>
                <h3 className="text-xl font-bold text-white">{categoryConfig.frontend.title}</h3>
                <p className="text-gray-400 text-xs">{categoryConfig.frontend.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "frontend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 6px 12px rgba(0,0,0,0.15)" }}
                    className="group relative overflow-hidden rounded-md"
                  >
                    <div
                      className={`absolute inset-0 ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-3">
                      <h4 className="font-medium text-white text-sm">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Data & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className={`h-8 w-2 rounded-full bg-gradient-to-b ${categoryConfig["data-devops"].gradient} mr-3`}></div>
              <div>
                <h3 className="text-xl font-bold text-white">{categoryConfig["data-devops"].title}</h3>
                <p className="text-gray-400 text-xs">{categoryConfig["data-devops"].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "data-devops")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 6px 12px rgba(0,0,0,0.15)" }}
                    className="group relative overflow-hidden rounded-md"
                  >
                    <div
                      className={`absolute inset-0 ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-3">
                      <h4 className="font-medium text-white text-sm">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Top Row: Backend & ML/AI */}
        <div className="space-y-6">
          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className={`h-8 w-2 rounded-full bg-gradient-to-b ${categoryConfig.backend.gradient} mr-3`}></div>
              <div>
                <h3 className="text-xl font-bold text-white">{categoryConfig.backend.title}</h3>
                <p className="text-gray-400 text-xs">{categoryConfig.backend.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "backend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 6px 12px rgba(0,0,0,0.15)" }}
                    className="group relative overflow-hidden rounded-md"
                  >
                    <div
                      className={`absolute inset-0 ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-3">
                      <h4 className="font-medium text-white text-sm">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* ML/AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className={`h-8 w-2 rounded-full bg-gradient-to-b ${categoryConfig["ml/ai"].gradient} mr-3`}></div>
              <div>
                <h3 className="text-xl font-bold text-white">{categoryConfig["ml/ai"].title}</h3>
                <p className="text-gray-400 text-xs">{categoryConfig["ml/ai"].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "ml/ai")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 6px 12px rgba(0,0,0,0.15)" }}
                    className="group relative overflow-hidden rounded-md"
                  >
                    <div
                      className={`absolute inset-0 ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-3">
                      <h4 className="font-medium text-white text-sm">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}