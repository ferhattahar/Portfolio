"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MyImage from "../MyImage";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeInOut",
    },
  }),
};
export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      id="about-me"
      className="font-poppins max-container padding-container pt-16   relative  "
    >
      <div className="absolute -top-5 inset-x-0 h-10 bg-[#001028]/50   blur-[9px]  "></div>

      <div className=" relative flex lg:flex-row  flex-col items-center justify-between  gap-10">
        <div className="flex  flex-col gap-9 self-start ">
          <h1 className=" py-3 sm:text-start text-center   text-2xl lg:text-5xl  md:text-4xl font-medium  text-transparent bg-gradient-to-r from-primary-200 via-primary-300 to-primary-500 bg-clip-text  ">
            About Me
          </h1>
          <p className="text-center sm:text-start lg:max-w-xl xl:max-w-3xl pb-6 text-sm sm:text-base md:text-lg font-light text-primary-100/95">
            Hi, I&apos;m Ferhat Mohamed Tahar, a self-taught full-stack
            developer since 2023. I’m passionate about learning, building
            projects, and staying at the forefront of web technologies.
            <br />
            <br />
            🏋️ Beyond coding, I’ve dedicated over two years to fitness,
            embracing a strong, active lifestyle. I’m also fascinated by
            computers and cybersecurity, constantly exploring and expanding my
            knowledge.
            <br />
            <br />
            🎯 My goal is to grow into a staff-level developer, contribute to
            meaningful projects, mentor others, and drive innovation in the tech
            world.
          </p>
        </div>
        <MyImage />
      </div>
    </motion.section>
  );
}
