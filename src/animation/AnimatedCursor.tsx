"use client";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Smooth follow effect for ring
  useEffect(() => {
    const animate = () => {
      setRing((prev) => ({
        x: prev.x + (cursor.x - prev.x) * 0.15,
        y: prev.y + (cursor.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [cursor]);

  return (
    <>
      {/* Outer glowing ring */}
      <div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-#ffffffff opacity-40 pointer-events-none z-50"
        style={{
          transform: `translate3d(${ring.x - 24}px, ${ring.y - 24}px, 0)`,
          transition: "transform 0.05s",
          boxShadow: "0 0 15px #ffffffff, 0 0 30px rgba(253, 253, 253, 0.3)",
        }}
      ></div>

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-50"
        style={{
          transform: `translate3d(${cursor.x - 6}px, ${cursor.y - 6}px, 0)`,
        }}
      ></div>
    </>
  );
}
