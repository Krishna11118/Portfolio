"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "../../components/service-card";
import { Globe, Smartphone, Cloud } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, scalable web applications using modern technologies like React, Next.js, and Node.js. Focus on performance, SEO, and exceptional user experience.",
    icon: Globe,
    gradient: "rgb(59, 130, 246)",
  },
  {
    title: "App Development",
    description:
      "Creating native and cross-platform mobile applications with React Native. Delivering seamless experiences across iOS and Android platforms.",
    icon: Smartphone,
    gradient: "rgb(139, 92, 246)",
  },
  {
    title: "Cloud Solutions",
    description:
      "Implementing scalable cloud infrastructure using AWS services. Expertise in serverless architecture, containerization, and CI/CD pipelines.",
    icon: Cloud,
    gradient: "rgb(245, 158, 11)",
  },
];

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-2xl p-8 h-[350px] bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="relative h-full flex flex-col">
                <div className="mb-6 p-3 w-fit rounded-xl">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>
    </section>
  );
}
