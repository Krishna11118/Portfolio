"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { createNoise3D } from "simplex-noise"
import { cn } from "@/lib/utils"

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [glowOpacity, setGlowOpacity] = useState(0.5)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
        const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2))
        const opacity = 0.5 + 0.5 * (1 - distance / maxDistance)
        setGlowOpacity(opacity)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full bg-gray-900 rounded-xl border border-gray-800 overflow-hidden", className)}
    >
      <div className="absolute inset-0 z-0">
        <StarField />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent"
          style={{ opacity: glowOpacity }}
        />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const noise3D = createNoise3D()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height
        initStars(width, height)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.001
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        const noiseFactor = noise3D(star.x * 0.01, star.y * 0.01, time) * 0.5 + 0.5
        const size = star.baseSize * (0.5 + noiseFactor * 0.5)
        const opacity = 0.1 + noiseFactor * 0.5

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions, noise3D])

  const initStars = (width: number, height: number) => {
    const stars: Star[] = []
    const starCount = Math.floor((width * height) / 1000)

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize: Math.random() * 1.5 + 0.5,
      })
    }

    starsRef.current = stars
  }

  return <canvas ref={canvasRef} className="absolute inset-0" style={{ width: "100%", height: "100%" }} />
}

interface Star {
  x: number
  y: number
  baseSize: number
}
