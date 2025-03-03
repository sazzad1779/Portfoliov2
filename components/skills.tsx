"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react"; // Import Iconify for icon rendering
import Image from "next/image"; // Import Image component for local images

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const growOnHover = {
  scale: 1.2,
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center px-4 py-3 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={growOnHover}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* Check if the icon is an image or Iconify icon */}
            {skill.icon.startsWith("/") ? (
              // If it's a path to an image (local image)
              <Image
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={80}
              />
            ) : (
              // If it's an Iconify icon
              <Icon
                icon={skill.icon}
                className="text-5xl md:text-7xl"
              />
            )}
            <span className="mt-2">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
