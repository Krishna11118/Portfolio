"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !animate) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setPosition({ x, y })
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isMounted, animate])

  return (
    <div ref={containerRef} className={cn("relative w-full h-full bg-background rounded-lg", containerClassName)}>
      <div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(120, 58, 180, ${opacity * 0.3}) 0%, rgba(29, 29, 31, 0) 50%)`,
          transition: "opacity 0.3s",
        }}
      />
      <div className={cn("relative bg-background rounded-lg border border-gray-800 shadow-xl", className)}>
        {children}
      </div>
    </div>
  )
}
