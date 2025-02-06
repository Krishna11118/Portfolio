"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TechCardProps {
  name: string
  icon: string
  color: string
  index: number
}

export function TechCard({ name, icon, color, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: index * 0.02,
        },
      }}
      whileHover={{ scale: 1.1 }}
      className={cn(
        "relative flex flex-col items-center justify-center p-4",
        "w-24 h-24 rounded-full bg-card",
        "border border-border transition-all duration-300",
        "group cursor-pointer hover:border-primary hover:shadow-lg"
      )}
    >
      <motion.div className="relative w-8 h-8 mb-1">
        <img src={icon} alt={name} className="w-full h-full" />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}50, transparent 70%)`,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.span className="text-xs font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </motion.span>
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}20, transparent)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}