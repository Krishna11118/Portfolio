"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  gradient,
}: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-8 h-[350px]",
        "bg-card/50 backdrop-blur-sm border border-border/50",
        "transition-all duration-300 ease-out"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full flex flex-col">
        <motion.div
          className="mb-6 p-3 w-fit rounded-xl"
          style={{ background: gradient + "10" }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Icon className="w-8 h-8" style={{ color: gradient }} />
        </motion.div>

        <motion.h3
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-auto flex items-center gap-2 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          
        </motion.div>
      </div>
    </motion.div>
  );
}
