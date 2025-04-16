"use client"
import { motion } from "framer-motion"
import { title } from "process"

type TechCategory = "frontend" | "backend" | "database" | "cloud" | "ml/ai"

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

  //Database
  {name: "MongoDB", category: "database", color: "bg-green-600" },
  {name: "MySQL", category: "database", color: "bg-blue-600" },

  // Cloud
  { name: "AWS", category: "cloud", color: "bg-orange-500" },
  { name: "Docker", category: "cloud", color: "bg-blue-500" },

  // ML/AI
  { name: "TensorFlow", category: "ml/ai", color: "bg-orange-500" },
  { name: "PyTorch", category: "ml/ai", color: "bg-red-500" },
  { name: "Scikit-learn", category: "ml/ai", color: "bg-blue-500" },
  { name: "Hugging Face", category: "ml/ai", color: "bg-yellow-500" },
  { name: "OpenAI API", category: "ml/ai", color: "bg-green-500" },
]

const categoryConfig = {
  frontend: {
    title: "Frontend",
    description: "Technologies for building user interfaces and web applications",
    gradient: "from-blue-500 to-pink-500",
  },
  backend: {
    title: "Backend",
    description: "Server-side technologies and frameworks",
    gradient: "from-blue-500 to-cyan-500",
  },
  database:{
    title: "Database",
    description: "Database",
    gradient: "from-green-500 to-emerald-500",
  },
  cloud: {
    title: "Cloud & DevOps",
    description: "Cloud platforms and deployment technologies",
    gradient: "from-green-500 to-emerald-500",
  },
  "ml/ai": {
    title: "Machine Learning & AI",
    description: "Technologies for building intelligent systems",
    gradient: "from-orange-500 to-amber-500",
  },
}

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Here are some of the technologies I've worked with and enjoy using.
        </p>
      </motion.div>

      <div className="space-y-16">
        {(Object.keys(categoryConfig) as TechCategory[]).map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="flex items-center mb-6">
              <div className={`h-10 w-2 rounded-full bg-gradient-to-b ${categoryConfig[category].gradient} mr-4`}></div>
              <div>
                <h3 className="text-2xl font-bold text-white">{categoryConfig[category].title}</h3>
                <p className="text-gray-400 text-sm">{categoryConfig[category].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    className="group relative overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <div className="relative h-24 flex items-center justify-center rounded-lg border border-gray-800 bg-gray-900/80 backdrop-blur-sm p-4">
                      <div className="text-center">
                        <h4 className="font-medium text-white text-base">{tech.name}</h4>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
