"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle() {
  return (
    <p className="font-bold text-xl md:text-4xl text-white">
      World-Wide{" "}
      <span className="text-neutral-400">
        {"Visitors".split("").map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </p>
  );
}