"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import VisitorLocationDisplay from "./visitor-location-display"
import VisitorCount from "./visitor-count"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    // { name: "Home", href: "/" },
    { name: "About", href: "#bio" },
    { name: "Experience", href: "#experience" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "/privacy" },
  ]

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  }

  const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
  }

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${scrolled ? 'bg-black/90 py-2' : 'bg-black/80 py-4'}`}>
      {/* Mobile Visitor Info Bar - Only visible on mobile */}
      <div className="sm:hidden w-full bg-black/90 border-b border-gray-800">
        <div className="flex justify-center items-center py-2">
          <Link href="#map" className="flex items-center">
            <VisitorLocationDisplay isMobile={true} />
          </Link>
          <VisitorCount />
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold text-white">
              Portfolio
            </Link>
            
            {/* Desktop Visitor Info - Right next to Portfolio */}
            <div className="hidden bg-white text-black p-2 rounded-lg sm:flex items-center ml-4">
              <Link href="#map" className="flex items-center">
                <VisitorLocationDisplay isMobile={false} />
              </Link>
              <VisitorCount />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 text-sm md:text-base hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://github.com/Krishna11118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-[96px] w-full h-screen bg-black/95 origin-top sm:hidden"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              className="flex flex-col h-[80vh] justify-center items-center gap-6 md:gap-8"
            >
              {menuItems.map((item) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <Link
                      href={item.href}
                      className="text-base font-medium text-white hover:text-blue-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
              <div className="overflow-hidden">
                <motion.div variants={mobileLinkVars}>
                  <a
                    href="https://github.com/Krishna11118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-white hover:text-blue-400 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    GitHub
                    <Github className="h-5 w-5 ml-2" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}