import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaCheck, FaCopy } from "react-icons/fa";
import { Sparkles, ArrowRight, FileDown, Terminal, Cpu, ShieldCheck, Zap } from "lucide-react";
import resumeFile from "../assets/vighneshresume2026.pdf";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("khondrevighnesh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 w-fit backdrop-blur-md shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
              Software Dev Intern @ Sustainfy Energy • Open to Roles
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-gradient">
              Vighnesh
            </span>
          </h1>

          <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-zinc-200">
            Full Stack <span className="text-violet-600 dark:text-cyan-400">& Mobile Developer</span> & UI Craftsman
          </p>

          <p className="mt-6 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            I specialize in engineering high-performance full-stack web and mobile applications
            with modern architectures. From scalable Node.js/PostgreSQL APIs and AWS S3 pipelines to sleek,
            fluid React, Next.js 15, and React Native interfaces with Tailwind CSS and Framer Motion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(124,58,237,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={resumeFile}
              download="Vighnesh_Khondre_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-white hover:border-violet-500/40 hover:bg-slate-50 dark:hover:bg-white/10 transition font-semibold shadow-sm cursor-pointer"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl border text-sm font-medium transition duration-200 cursor-pointer ${
                copied
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                  : "border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-500" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Connect:
            </span>
            <div className="flex items-center gap-3 text-slate-700 dark:text-zinc-300">
              <a
                href="https://github.com/Khondrevighnesh"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:text-violet-600 dark:hover:text-cyan-400 hover:border-violet-500/30 transition shadow-sm hover:scale-105"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/vighnesh-khondre-529657259"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:text-violet-600 dark:hover:text-cyan-400 hover:border-violet-500/30 transition shadow-sm hover:scale-105"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-cyan-400">6+</h3>
              <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-0.5">Production Projects</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Full Stack</h3>
              <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-0.5">Next.js & MERN</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</h3>
              <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-0.5">Clean & Responsive</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content: Modern Interactive Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Outer Glass Card */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-violet-500/20 via-cyan-500/20 to-transparent shadow-2xl">
            <div className="rounded-[22px] bg-white/90 dark:bg-[#0d101a]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 p-6 sm:p-7 space-y-6">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-zinc-400">
                  <Terminal size={14} className="text-violet-500 dark:text-cyan-400" />
                  <span>vighnesh.config.ts</span>
                </div>
                <div className="w-8"></div>
              </div>

              {/* Terminal Content / Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2 leading-relaxed text-slate-700 dark:text-zinc-300">
                <div>
                  <span className="text-violet-600 dark:text-purple-400 font-semibold">const</span>{" "}
                  <span className="text-blue-600 dark:text-cyan-300 font-semibold">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">"Vighnesh Khondre"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-zinc-400">current:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">"Software Dev Intern @ Sustainfy Energy"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-zinc-400">skills:</span> [
                  <span className="text-amber-600 dark:text-amber-300">"React"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-300">"Next.js"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-300">"React Native"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-300">"Node.js"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-300">"AWS"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-zinc-400">focus:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">"Scalable Web & Mobile Architectures"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-zinc-400">status:</span>{" "}
                  <span className="text-cyan-600 dark:text-cyan-300 font-medium">"Open for Full Stack / Frontend / Backend Roles"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-zinc-400">build:</span> () =&gt;{" "}
                  <span className="text-violet-600 dark:text-violet-300">"Turn ideas into scalable, high-impact products"</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Feature Highlights inside Card */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex items-center gap-2.5">
                  <Zap size={16} className="text-amber-500" />
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400">Performance</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Fast & Optimized</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400">Security</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200">JWT & Best Practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill Badges */}
          <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121624] border border-slate-200 dark:border-white/15 shadow-lg text-xs font-semibold text-violet-600 dark:text-cyan-400 backdrop-blur-md">
            <Cpu size={14} />
            <span>Next.js & MERN</span>
          </div>

          <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121624] border border-slate-200 dark:border-white/15 shadow-lg text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
            <Sparkles size={14} />
            <span>Pixel-Perfect UI</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-slate-400 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-cyan-400 transition"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="animate-bounce">
          <FaArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}
