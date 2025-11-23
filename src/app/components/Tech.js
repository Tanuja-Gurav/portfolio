"use client";
import React from "react";
import PortfolioModel from "./PortfolioModel.js";
import { motion } from "framer-motion";
import Skills from "./Skills";

const Tech = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#03050C] text-white py-12 sm:py-16 px-4 sm:px-6 flex flex-col"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6B5BFF]">
              Skills
            </span>
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-l from-transparent via-[#915EFF] to-transparent rounded-full mx-auto md:mx-0" />
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mt-4">
            I have a strong foundation in full-stack web development, with expertise in building 
            responsive frontends using <span className="text-[#915EFF]">HTML, CSS, JavaScript, and React</span>, 
            and developing scalable backends with <span className="text-[#915EFF]">Node.js, Express.js, and MongoDB</span>. 
            I’m also experienced in <span className="text-[#915EFF]">WordPress</span> for CMS-driven sites, 
            and well-versed in version control with <span className="text-[#915EFF]">Git/GitHub</span>. 
            My technical skills are complemented by soft skills like teamwork, communication, 
            and time management, enabling me to deliver impactful digital solutions.
          </p>
        </motion.div>

        {/* Right Column: Model */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[500px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <PortfolioModel />
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Component */}
      <div className="mt-12">
        <Skills />
      </div>
    </section>
  );
};

export default Tech;
