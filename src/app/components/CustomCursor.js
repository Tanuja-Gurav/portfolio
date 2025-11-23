"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RingDotCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // Detect hover on interactive elements
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-[#915EFF]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: "8px",
          height: "8px",
          boxShadow: "0 0 10px #915EFF",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{
          width: "40px",
          height: "40px",
          border: "2px solid #FFFFFF",
          boxShadow: "0 0 15px rgba(145, 94, 255, 0.6)",
        }}
      />
    </>
  );
}
