"use client"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const AceternityTimeline = ({
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
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-2 bottom-2 w-[4px] bg-gradient-to-b from-blue-500 to-pink-500 origin-top md:left-1/2 md:ml-[-2px]"
      />

      <div className="relative">
        {items.map((item, idx) => (
          <div key={idx} className="mb-12 md:mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div className="flex items-center mb-4 md:mb-0 md:w-[calc(50%-40px)] md:text-right md:pr-10">
                <div className="hidden md:block w-full">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-blue-400 mt-1">{item.company}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.date}</p>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute left-9 md:left-1/2 md:ml-[-10px] w-5 h-5 bg-blue-600 rounded-full border-4 border-black z-10"
              />

              <div className="pl-16 md:pl-10 md:w-[calc(50%-40px)]">
                <div className="md:hidden mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-blue-400">{item.company}</p>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-xl"
                >
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
