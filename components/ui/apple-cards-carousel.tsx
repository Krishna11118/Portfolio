"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface AppleCardsCarouselProps {
  images: string[]
  className?: string
}

export function AppleCardsCarousel({ images, className }: AppleCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const delta = clientX - dragStart
    setDragOffset(delta)
  }

  const handleDragEnd = () => {
    if (dragging) {
      if (dragOffset > 100 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      } else if (dragOffset < -100 && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
      setDragging(false)
      setDragOffset(0)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }

    container.addEventListener("wheel", handleWheel)
    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [currentIndex, images.length])

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return 

    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, images.length, isHovering])

  return (
    <div
      className={cn("relative overflow-hidden group", className)}
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 pointer-events-none" />

      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Navigation buttons */}
      <div className="flex justify-between absolute top-1/2 left-4 right-4 z-20 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className={cn(
            "p-3 rounded-full bg-black/50 text-white backdrop-blur-sm pointer-events-auto border border-white/10 shadow-lg",
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70",
          )}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className={cn(
            "p-3 rounded-full bg-black/50 text-white backdrop-blur-sm pointer-events-auto border border-white/10 shadow-lg",
            currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70",
          )}
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Pagination indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0.5,
              width: index === currentIndex ? "2rem" : "0.5rem",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentIndex(index)}
            className={cn("h-2 rounded-full transition-all bg-white shadow-glow-white")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 right-16 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs z-20 border border-white/10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Images */}
      <div className="relative h-[300px] md:h-[450px]">
        <AnimatePresence initial={false}>
          {images.map((image, index) => {
            const offset = (index - currentIndex) * 100 + (dragging ? dragOffset / 5 : 0)
            const isActive = index === currentIndex
            const zIndex = images.length - Math.abs(index - currentIndex)

            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center p-4"
                style={{
                  zIndex,
                }}
                initial={{
                  x: `${(index - currentIndex) * 100}%`,
                  scale: isActive ? 1 : 0.8,
                  opacity: isActive ? 1 : 0.3,
                  rotateY: (index - currentIndex) * 5,
                }}
                animate={{
                  x: `${offset}%`,
                  scale: isActive ? 1 : 0.8,
                  opacity: isActive ? 1 : 0.3,
                  rotateY: (index - currentIndex) * 5,
                }}
                exit={{
                  x: `${(index - currentIndex) * 100}%`,
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
              >
                <div
                  className={cn(
                    "relative w-full h-full overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500",
                    isActive ? "shadow-blue-500/20" : "",
                  )}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
