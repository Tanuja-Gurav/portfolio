"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#03050C] text-white py-16 sm:py-20 px-4 sm:px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6B5BFF]">
            Me
          </span>
        </motion.h3>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full origin-center"
        />

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl"
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Hi! I&apos;m <span className="font-semibold text-white">Tanuja Gurav</span>, 
            a passionate <span className="text-[#915EFF]">Full Stack Web Developer </span> 
              specializing in the <span className="font-semibold">MERN stack</span>.  
            I&apos;m currently pursuing my <span className="font-semibold">B.Voc in Software Development</span> 
            with a strong academic record (CGPA 9.83).
            <br /><br />
            Alongside my studies, I&apos;m interning at <span className="font-semibold">YCIS OIT</span>, 
            where I work on real-world projects involving 
            <span className="text-[#915EFF]"> React.js, Node.js, and MongoDB</span>.  
            My journey has also included building professional websites 
            for colleges, NGOs, and universities using <span className="font-semibold">WordPress</span>, 
            and scaling into MERN-based applications like 
            <span className="text-[#915EFF]"> e-commerce </span>.
            <br /><br />
            Beyond coding, I value <span className="font-semibold">teamwork, communication, and time management</span>.  
            My goal is to craft modern, responsive, and impactful digital experiences 
            that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
