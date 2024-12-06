"use client";
import Image from "next/image";
import { useState } from "react";

export default function MyImage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      onClick={() => setHovered(!hovered)}
      className="block order-first lg:order-last relative rounded-full   border-2 shadow-sm shadow-primary-700 border-primary-700 hover:border-primary-500 transition-all duration-200 overflow-hidden group sm:mr-2 md:mr-4 lg:mr-6"
    >
      {/* Wrapper for animation */}
      <div className="relative h-56 w-56 sm:w-60 sm:h-60 md:h-72 md:w-72 lg:h-72 lg:w-72 xl:w-[280px] xl:h-[280px] 2xl:w-96 2xl:h-96">
        <Image
          src="/profile.png"
          alt="ferhat's profile picture"
          loading="lazy"
          width={400}
          height={400}
          className={`absolute inset-0 rounded-full h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/avatar.png"
          alt="ferhat's profile picture hovered"
          loading="lazy"
          width={400}
          height={400}
          className={`absolute inset-0 rounded-full h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="absolute rounded-full inset-0 bg-primary-900/25 transition-colors duration-300 flex justify-center items-center"></div>
    </div>
  );
}

{
  /* <span className="opacity-0   group-hover:opacity-100 text-primary-400 font-semibold text-lg md:text-xl transition-all duration-300">
          Ferhat Mohamed Tahar
        </span> */
}
