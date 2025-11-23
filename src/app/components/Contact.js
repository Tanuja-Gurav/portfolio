"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa"; // ✅ Correct import
import SplineModel from "./SplineModel";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#03050C]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6B5BFF]">
            Me
          </span>
        </motion.h2>
        <div className="w-32 h-1 bg-gradient-to-l from-transparent via-[#915EFF] to-transparent rounded-full mb-10" />

        {/* Grid Layout */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - 3D Model & Social Links */}
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-center mb-6">
              <SplineModel />
            </div>

            {/* Social Icons - Always Visible */}
            <div className="flex gap-6 mt-4">
              {[
                {
                  icon: <FiGithub />,
                  link: "https://github.com/Tanuja-Gurav",
                },
                {
                  icon: <FiLinkedin />,
                  link: "https://www.linkedin.com/in/tanuja-gurav-78784b283",
                },
               

                {
                  icon: <FaWhatsapp />, // WhatsApp
                  link: "https://wa.me/919373220042", // Replace with your WhatsApp number
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl p-3 rounded-full text-gray-300 shadow-lg border hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)] transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full border border-white/20"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <FiUser className="absolute top-3 left-3 text-gray-400 text-lg" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 border border-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 outline-none transition"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FiMail className="absolute top-3 left-3 text-gray-400 text-lg" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 border border-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 outline-none transition"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FiMessageSquare className="absolute top-3 left-3 text-gray-400 text-lg" />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 border border-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 outline-none resize-none transition"
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundPosition: "200% center" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#915EFF] to-[#6B5BFF] text-white font-semibold rounded-lg shadow-lg transition-all"
              >
                {loading ? "Sending..." : "🚀 Send Message"}
              </motion.button>
            </form>

            {/* Status Messages */}
            {status === "success" && (
              <p className="mt-4 text-green-400 text-center font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-400 text-center font-medium">
                ❌ Oops! Something went wrong. Try again.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
