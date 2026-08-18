import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, FileDown, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import resumeFile from "../assets/resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { toggleTheme, isDark } = useTheme();

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (sectionId) => {
    setMobileMenuOpen(false);
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const navOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => handleScrollTo("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              <div className="w-full h-full bg-white dark:bg-[#0c0e17] rounded-[10px] flex items-center justify-center font-bold text-lg text-violet-600 dark:text-cyan-400">
                V
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gradient">
                Vighnesh
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-500 dark:text-zinc-400 -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Full Stack
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md shadow-sm">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-violet-600 dark:text-cyan-400 font-semibold"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:border-violet-500/30 transition shadow-sm cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} className="text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} className="text-violet-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume Button */}
            <a
              href={resumeFile}
              download="Vighnesh_Khondre_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_4px_14px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              <FileDown size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300"
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-violet-600" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-zinc-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-40 p-5 md:hidden"
          >
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0e111a]/95 backdrop-blur-2xl p-6 shadow-2xl space-y-5">
              {/* Navigation Links */}
              <div className="space-y-1">
                {links.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition flex items-center justify-between ${
                        isActive
                          ? "bg-violet-500/10 dark:bg-cyan-400/10 text-violet-600 dark:text-cyan-400 font-semibold"
                          : "text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles size={16} className="text-violet-500 dark:text-cyan-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Status Badge */}
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  Available for full-time & freelance projects
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-3">
                <a
                  href={resumeFile}
                  download="Vighnesh_Khondre_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
                >
                  <FileDown size={18} />
                  Download Resume
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-2 text-slate-600 dark:text-zinc-400">
                  <a
                    href="https://github.com/Khondrevighnesh"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-violet-600 dark:hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vighnesh-khondre-529657259"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-violet-600 dark:hover:text-white transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
