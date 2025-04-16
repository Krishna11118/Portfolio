"use client"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export const Spotlight = ({
  className,
  fill = "white",
}: {
  className?: string
  fill?: string
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMounted])

  return (
    <div ref={divRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute -inset-px opacity-0"
        style={{
          opacity: 0.5,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${fill}, transparent 40%)`,
        }}
      />
    </div>
  )
}
