"use client";
import { techStack } from "@/helpers/tech";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TechCard from "../TechCard";

export default function CurrentTechnologies() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Section-level animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      id="tech"
      className="font-poppins max-container padding-container pt-16 flex relative flex-col gap-12"
    >
      <div className="flex flex-col gap-4">
        <h1 className="sm:text-start text-center  text-2xl lg:text-5xl md:text-4xl font-medium   text-transparent bg-gradient-to-r from-primary-200 via-primary-300 to-primary-500 bg-clip-text">
          Skills & Tools
        </h1>
        <p className="pt-3 pb-6 text-sm sm:text-base md:text-lg font-light   sm:text-start text-center">
          I leverage these technologies to create intuitive, visually
          captivating, and highly functional applications that deliver seamless
          user experiences. My approach focuses on crafting solutions that
          strike the perfect balance between aesthetics and performance.
        </p>
      </div>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // Delays each child animation
            },
          },
        }}
      >
        {techStack.map(function cards(tech, index) {
          return (
            <TechCard
              index={index}
              key={tech.name}
              name={tech.name}
              color={tech.color}
              image={tech.image}
              description={tech.description}
            />
          );
        })}
      </motion.ul>
    </motion.section>
  );
}
