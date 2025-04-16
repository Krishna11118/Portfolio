"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars"
import { Modal } from "@/components/ui/modal"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel"
import { ExternalLink, Code, Layers, ArrowRight, Github } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  images: string[]
  tags: string[]
  features: string[]
  githubLink: string
  deployedLink: string
}

const projects: Project[] = [
  {
    title: "Job Portal",
    description:
      "Job Portal is a web-based application that allows job seekers to search for jobs and apply for them. It also allows employers to post job openings and search for candidates.",
    image:
      "https://api.vestaff.com/allFiles/20ed1d843ee8a7b2e08dd8d9.jpg",
    images: [
      "https://api.vestaff.com/allFiles/20ed1d843ee8a7b2e08dd8d9.jpg",
      // "/placeholder.svg?height=400&width=600",
      // "/placeholder.svg?height=400&width=600",
    ],
    tags: ["Nest.js", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Admin, Client and Candidate Portals",
      "Advanced job search with filters",
      "Candidate profile and resume upload",
      "Application tracking system",
      "Secure user authentication",
    ],
    githubLink: "",
    deployedLink: "https://www.vestaff.com/",
  },
  {
    title: "Trekki",
    description:
      "Travel booking website, where we make it easy for you to plan your dream vacation with AI Assistant.",
    image:
      "https://camo.githubusercontent.com/7481701fbaea9cbf5e4a305ab5fb86b578364ed2a9984db0d9da9d214a28c72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64766a6e787578786a2f696d6167652f75706c6f61642f76313638373032323930372f526561646d655f5472656b6b692f526561646d65322f53637265656e73686f745f3230385f6631637764382e706e67",
    images: [
      "https://camo.githubusercontent.com/7481701fbaea9cbf5e4a305ab5fb86b578364ed2a9984db0d9da9d214a28c72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64766a6e787578786a2f696d6167652f75706c6f61642f76313638373032323930372f526561646d655f5472656b6b692f526561646d65322f53637265656e73686f745f3230385f6631637764382e706e67",
      // "/placeholder.svg?height=400&width=600",
      // "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    features: [
      "AI-powered travel itinerary planner",
      "User-friendly search and filter system",
      "Secure payment integration",
      "Mobile-responsive design",
      "Secure user authentication",
    ],
    githubLink: "https://github.com/Krishna11118/Trekki",
    deployedLink: "https://trekki.krishnastonetech.live",
  },
  {
    title: "CRM-Panel",
    description:
      "A CRM panel for different roles admin, sub-admin, user. Admin can manage all the users and sub-admins, sub-admin can manage users and user can manage their profile.",
    image:
      "https://raw.githubusercontent.com/Krishna11118/CRM-Panel/refs/heads/main/example/subAdmins.png",
    images: [
      "https://raw.githubusercontent.com/Krishna11118/CRM-Panel/refs/heads/main/example/subAdmins.png",
      // "/placeholder.svg?height=400&width=600",
      // "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Material UI"],
    features: [
      "Role-based access control for admin, sub-admin, and users",
      "User profile management dashboard",
      "Real-time data updates and notifications",
      "Customizable user permissions",
      "Responsive UI with Material UI components",
    ],
    githubLink: "https://github.com/Krishna11118/CRM-Panel",
    deployedLink: "https://crm-panel.krishnastonetech.live/admin/login",
  },
  {
    title: "QKart",
    description:
      "QKart, your go-to online marketplace, provides a seamless shopping experience with a user-friendly interface and a diverse range of products.",
    image:
      "https://raw.githubusercontent.com/Krishna11118/Q-Kart/master/example/HomePage.png",
    images: [
      "https://raw.githubusercontent.com/Krishna11118/Q-Kart/master/example/HomePage.png",
      // "/placeholder.svg?height=400&width=600",
      // "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS"],
    features: [
      "Product catalog with search and filters",
      "Secure checkout with payment gateway",
      "User authentication and order tracking",
      "Real-time inventory updates",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/Krishna11118/Q-Kart",
    deployedLink: "https://q-kart.krishnastonetech.live/",
  },
  {
    title: "QTrip",
    description:
      "Travel booking website, where we make it easy for you to plan your dream vacation.",
    image:
      "https://raw.githubusercontent.com/Krishna11118/QTrip/refs/heads/main/examples/Qtrip_Dynamic_1.png",
    images: [
      "https://raw.githubusercontent.com/Krishna11118/QTrip/refs/heads/main/examples/Qtrip_Dynamic_1.png",
      // "/placeholder.svg?height=400&width=600",
      // "/placeholder.svg?height=400&width=600",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Interactive destination search",
      "Dynamic pricing display",
      "Booking confirmation system",
      "Responsive layout with Bootstrap",
    ],
    githubLink: "https://github.com/Krishna11118/QTrip",
    deployedLink: "https://qtrip-dynamic-krishna.netlify.app",
  },

  {
    title: "Bio AI Assistant",
    description:
      "Bio-AI-Assistant is an intelligent AI agent that answers queries based on your stored biodata. It provides accurate, personalized responses using the information you've added",
    image:
      "https://raw.githubusercontent.com/Krishna11118/Bio-AI-Assistant/refs/heads/main/example/ss.png",
    images: [
      "https://raw.githubusercontent.com/Krishna11118/Bio-AI-Assistant/refs/heads/main/example/ss.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React.js + Vite", "Node.js", "Tailwind CSS"],
    features: [
      "AI-driven query response system",
      "Customizable user interface",
      "Real-time response generation",
      "Mobile-friendly design with Tailwind CSS",
    ],
    githubLink: "https://github.com/Krishna11118/Bio-AI-Assistant",
    deployedLink: "https://bio-ai.krishnastonetech.live",
  },

]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "tech">("overview")
  const [visibleProjects, setVisibleProjects] = useState(4)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setActiveTab("overview")
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 4)
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => openProjectModal(project)}
            className="cursor-pointer transform transition-all duration-300"
          >
            <GlowingStarsBackgroundCard>
              <div className="relative h-full flex flex-col">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1 text-sm md:text-base">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.div
                      onClick={() => openProjectModal(project)}
                      className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm md:text-base group"
                      whileHover={{ x: 5 }}
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                    <motion.a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-xs border border-gray-700 rounded-md px-2 py-1 group"
                      whileHover={{ x: 5 }}
                    >
                      View Live
                      {/* {project.githubLink ? (
                        <Github className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                      ) : (
                        <ExternalLink className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                      )} */}

                      {/* {project.githubLink ? ( */}

                      <ExternalLink className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </GlowingStarsBackgroundCard>
          </motion.div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleViewMore}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 text-sm font-medium"
          >
            View More
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      )}

      {/* Project Details Modal */}
      <Modal isOpen={!!selectedProject} onClose={closeProjectModal}>
        {selectedProject && (
          <div className="flex flex-col">
            <AppleCardsCarousel images={selectedProject.images} className="mb-6" />

            <div className="px-6 pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-gray-400 mt-1">{selectedProject.description}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
                  >
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.a>
                  {selectedProject.githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
                    >
                      View GitHub <Github className="ml-2 h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-800 mb-6">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === "overview" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
                >
                  Overview
                  {activeTab === "overview" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("features")}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === "features" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
                >
                  <div className="flex items-center">
                    <Layers className="h-4 w-4 mr-1" />
                    Features
                  </div>
                  {activeTab === "features" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("tech")}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === "tech" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
                >
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-1" />
                    Tech
                  </div>
                  {activeTab === "tech" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"
                    />
                  )}
                </button>
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </motion.div>
                )}

                {activeTab === "features" && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="flex items-start"
                        >
                          <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "tech" && (
                  <motion.div
                    key="tech"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {selectedProject.tags.map((tag, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          whileHover={{ y: -3 }}
                          className="bg-gradient-to-br from-gray-800 to-gray-900 px-3 py-2 rounded-lg text-center border border-gray-700 shadow-lg"
                        >
                          <span className="text-gray-300 text-sm">{tag}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}