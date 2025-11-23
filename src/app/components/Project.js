"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdVisibility } from "react-icons/md";

const projects = [
  {
    title: "Karmaveer Bhaurao Patil University",
    description:
      "A responsive and content-rich university website built on WordPress, showcasing institutional details, academic programs, and updates. Designed for easy navigation and accessibility.",
    img: "/projects/unikbp.png",
    techtags: ["#WordPress"],
    visit: "https://unikbp.ac.in/",
  },
  {
    title: "Chhatrapati Shivaji College",
    description:
      "A professional college website developed with WordPress, providing students and faculty access to notices, courses, and resources with a modern, mobile-friendly design.",
    img: "/projects/csc.png",
    techtags: ["#WordPress"],
    visit: "http://csc.ac.in/",
  },
  {
    title: "Rayt Store (E-Commerce)",
    description:
      "A full-stack e-commerce platform with a clean UI, built using Next.js and Node.js. Features product listings, cart functionality, and backend integration for smooth user experience.",
    img: "/projects/R-Store.png",
    techtags: ["#Next.js", "#TailwindCSS", "#Node.js"],
    visit: "https://github.com/NikitaGhadge005/E-shop",
  },
 
  {
    title: "UI Designing (Figma)",
    description:
      "A modern and interactive UI/UX prototype designed in Figma, showcasing sleek layouts, color schemes, and smooth user flows for better product experiences.",
    img: "/projects/figma.png",
    techtags: ["#Figma"],
    visit: "https://www.figma.com/proto/jsNHMwBBUOa6WDoHGg1KX5/Untitled?page-id=0%3A1&node-id=1-5&p=f&t=JXSj0GniyrDimOBs-0&scaling=min-zoom&content-scaling=fixed",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-30 bg-[#03050C] text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Projects{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6B5BFF]">
          .
        </span>
      </motion.h2>
      <div className="w-32 h-1 bg-gradient-to-l from-transparent via-[#915EFF] to-transparent rounded-full" />

      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mt-4">
        Here’s a collection of my featured projects demonstrating expertise in
        front-end and back-end development, UI design, and full-stack solutions.
        Each project reflects my ability to create functional, user-friendly, and
        visually appealing products.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-15 md:px-10 sm:px-0">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#1a1a2e] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-40 object-cover rounded-3xl p-3"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{proj.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techtags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#915EFF] bg-[#2a2a40] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visit Project */}
              <a
                href={proj.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#915EFF] transition-colors"
              >
                <MdVisibility size={20} /> View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
