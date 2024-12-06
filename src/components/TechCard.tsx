"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type TechCardProps = {
  index: number;
  name: string;
  image: string;
  color: string;
  description: string;
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TechCard({
  name,
  image,
  color,
  description,
}: TechCardProps) {
  return (
    <motion.li
      variants={cardVariants} // Controlled by the parent
      className="font-poppins flex items-center flex-1 gap-5 p-2.5 rounded-xl border border-primary-700 bg-primary-900 hover:bg-primary-800 hover:border-primary-500 transition-colors duration-200"
    >
      <div
        className={`p-3 rounded-xl w-fit`}
        style={{ backgroundColor: `${color}33` }}
      >
        <Image
          src={image}
          alt={`${name}-logo`}
          loading="lazy"
          width={40}
          height={40}
          decoding="async"
          className="size-8"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium cursor-default">{name}</h4>
        <p className="text-slate-100/80 text-sm cursor-default">
          {description}
        </p>
      </div>
    </motion.li>
  );
}
