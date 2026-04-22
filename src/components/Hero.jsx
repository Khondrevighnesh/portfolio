import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import resumeFile from "../assets/resume.pdf";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[#0A0A0A] px-6 md:px-10 pt-28"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg font-medium">
            Full Stack Developer
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Vighnesh
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            I build premium, scalable, and user-friendly full-stack web
            applications using modern technologies like React, Node.js, MongoDB,
            Tailwind CSS, GSAP, and Framer Motion.
            <br />
            <br />
            Passionate about crafting responsive interfaces, building robust
            backend systems, and delivering smooth user experiences that solve
            real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-medium shadow-lg"
            >
              View Projects
            </button>

            <a
              href={resumeFile}
              download="Vighnesh_Khondre_Resume.pdf"
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-8 text-xl text-zinc-400">
            <a
              href="https://github.com/Khondrevighnesh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/vighnesh-khondre-529657259"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-zinc-400 text-sm mt-1">Projects Built</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">MERN</h3>
              <p className="text-zinc-400 text-sm mt-1">Stack Expertise</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-zinc-400 text-sm mt-1">Responsive Design</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(124,58,237,0.12)]">
            <h3 className="text-2xl font-semibold text-white mb-6">
              What I Do
            </h3>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>• Build scalable MERN stack applications</p>
              <p>• Create premium animated frontend interfaces</p>
              <p>• Develop admin dashboards & analytics panels</p>
              <p>• Design responsive and accessible UI systems</p>
              <p>• Integrate APIs and backend business logic</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce">
        <FaArrowDown />
      </div>
    </section>
  );
}
