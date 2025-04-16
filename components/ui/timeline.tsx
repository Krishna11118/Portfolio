"use client"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const Timeline = ({
  items,
  className,
}: {
  items: {
    title: string
    company: string
    description: string
    date: string
    skills: string[]
  }[]
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  return (
    <div ref={ref} className={cn("relative mx-auto", className)}>
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-pink-500" />
      <div className="block md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-pink-500" />
      <motion.div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white origin-top"
        style={{ scaleY: scrollYProgress }}
      />
      <motion.div
        className="block md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-white origin-top"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="space-y-12 md:space-y-24">
        {items.map((item, idx) => (
          <TimelineItem key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({
  item,
  idx,
}: {
  item: {
    title: string
    company: string
    description: string
    date: string
    skills: string[]
  }
  idx: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={cn("flex flex-col md:flex-row items-start", idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
      >
        <div className="flex-1 md:max-w-[calc(50%-2rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <span className="text-blue-400 text-sm md:text-base">{item.date}</span>
            </div>
            <p className="text-gray-400 mb-4">{item.company}</p>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 shadow-glow-blue -ml-2 md:-ml-2 z-10" />
      </motion.div>
    </div>
  )
}
