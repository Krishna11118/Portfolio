"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { fetchVisitorCount } from "@/lib/services/visitor";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [prevCount, setPrevCount] = useState<number | null>(null);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [showAnimatedCount, setShowAnimatedCount] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPrevCount, setShowPrevCount] = useState(false);

  const springCount = useSpring(0, { stiffness: 50, damping: 30 });
  const displayCount = useTransform(springCount, (value) => Math.round(value));

  useEffect(() => {
    const getVisitorCount = async () => {
      try {
        const count = await fetchVisitorCount();
        setPrevCount(count - 1);
        setVisitorCount(count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    getVisitorCount();
  }, []);

  useEffect(() => {
    if (visitorCount === null || prevCount === null) return;

    setShowPrevCount(true);

    const timeoutPrevCount = setTimeout(() => {
      setShowPrevCount(false);
      setShowPlusOne(true);

      const plusOneTimeout = setTimeout(() => {
        setShowPlusOne(false);
        setShowAnimatedCount(true);
        springCount.set(visitorCount);
      }, 1000);

      return () => clearTimeout(plusOneTimeout);
    }, 3000);

    return () => clearTimeout(timeoutPrevCount);
  }, [visitorCount, prevCount, springCount]);

  if (loading || visitorCount === null || prevCount === null) {
    return null;
  }

  return (
    <div className="flex items-center text-xs text-black-400 gap-1 ml-2">
      <Eye  color="gray" className="h-3 w-3 bg-gray flex-shrink-0" />
      <AnimatePresence mode="wait">
        {showPrevCount ? (
          <motion.span
            key="prev-count"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-black-300 w-6 text-center"
          >
            {prevCount}
          </motion.span>
        ) : showPlusOne ? (
          <motion.span
            key="plus-one"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1.2, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="text-green-400 font-medium w-6 text-center"
          >
            +1
          </motion.span>
        ) : showAnimatedCount ? (
          <motion.span
            key="count"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-black-300 font-medium w-6 text-center"
          >
            <motion.span>{displayCount}</motion.span>
          </motion.span>
        ) : null}
      </AnimatePresence>
    </div>
  );
}