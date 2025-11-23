"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/tech/html.svg" },
  { name: "CSS", icon: "/tech/css.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "WordPress", icon: "/tech/wordpress.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "NodeJS", icon: "/tech/nodejs.svg" },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "Figma", icon: "/tech/figma.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
];

// Parent animation (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Child animation
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const SkillsBubbles = () => {
  return (
    <section className="py-20 bg-[#03050C]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Row 1 (6 skills) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-12"
        >
          {skills.slice(0, 6).map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#06b6d4] via-[#3b82f6] to-[#9333ea] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                <Image src={skill.icon} width={40} height={40} alt={skill.name} />
                <p className="text-sm text-gray-800 mt-1 font-medium">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 (5 skills) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-12"
        >
          {skills.slice(6).map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-24 h-24  rounded-full p-[2px] bg-gradient-to-tr from-[#06b6d4] via-[#3b82f6] to-[#9333ea] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <div className="w-full h-full rounded-full bg-emerald-50 flex flex-col items-center justify-center">
                <Image src={skill.icon} width={40} height={40} alt={skill.name} />
                <p className="text-sm text-gray-800 mt-1 font-medium">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsBubbles;
