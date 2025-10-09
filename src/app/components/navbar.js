"use client";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiBehance } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 text-white px-8 py-4 flex justify-between items-center">
      {/* Left Menu */}
      <ul className="flex gap-8">
        <li><a href="#home" className="hover:text-green-400">Home</a></li>
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-green-400">Get In Touch</a></li>
      </ul>

      {/* Right Social Icons */}
      <div className="flex gap-6 text-gray-400">
        <a href="#"><FaLinkedin size={18} /></a>
        <a href="#"><SiBehance size={18} /></a>
        <a href="#"><FaTwitter size={18} /></a>
      </div>
    </nav>
  );
}