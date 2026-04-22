import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import resumeFile from "../assets/resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
          Vighnesh
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm text-zinc-300">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-white transition cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href={resumeFile}
          download="Vighnesh_Khondre_Resume.pdf"
          className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition text-sm font-medium"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
