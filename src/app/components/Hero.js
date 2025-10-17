"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../utils/style";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[80px] sm:top-[100px] lg:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-10 z-10 pt-20`}
      >
        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-self-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-full border-4 border-[#915EFF] shadow-[0_0_20px_#915EFF]"
            />
          </motion.div>
        </motion.div>

        {/* Line + Circle */}
        <motion.div
          className="hidden md:flex flex-col justify-center items-center mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#915EFF] to-[#6B5BFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] via-[#6B5BFF] to-[#915EFF] animate-pulse" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={`${styles.heroHeadText} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6B5BFF]">
              Tanuja
            </span>
          </h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100 text-base sm:text-lg md:text-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            I develop 3D visuals, user{" "}
            <br className="hidden sm:block" />
            interfaces and Fullstack web applications
          </motion.p>

          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="mt-5 inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#915EFF] to-[#6B5BFF] text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-[0_0_5px_5px_rgba(59,130,246,0.6)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaCloudDownloadAlt className="text-xl sm:text-2xl text-white" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
