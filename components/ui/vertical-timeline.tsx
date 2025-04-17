"use client"
import React, { createContext, useContext, useId } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

type VerticalTimelineContextValue = {
  timelineId: string
}

const VerticalTimelineContext = createContext<VerticalTimelineContextValue | null>(null)

function useVerticalTimelineContext() {
  const context = useContext(VerticalTimelineContext)
  if (!context) {
    throw new Error("VerticalTimeline compound components must be used within a VerticalTimeline")
  }
  return context
}

export const VerticalTimeline = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const timelineId = useId()

  return (
    <VerticalTimelineContext.Provider value={{ timelineId }}>
      <div className={cn("relative", className)}>
        <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-white" />
        <div className="relative">{children}</div>
      </div>
    </VerticalTimelineContext.Provider>
  )
}

VerticalTimeline.Item = function TimelineItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn("relative mb-12 ml-8 md:ml-0", className)}
    >
      {children}
    </motion.div>
  )
}

VerticalTimeline.Point = function TimelinePoint({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute left-0 md:left-1/2 transform -translate-x-4 md:-translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-glow-blue z-10",
        className,
      )}
    />
  )
}

VerticalTimeline.Content = function TimelineContent({
  children,
  className,
  position = "right",
}: {
  children: React.ReactNode
  className?: string
  position?: "left" | "right"
}) {
  return (
    <div
      className={cn("relative md:w-1/2", position === "right" ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8", className)}
    >
      {children}
    </div>
  )
}
