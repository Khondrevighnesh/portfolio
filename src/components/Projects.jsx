import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
  FaRocket,
  FaChartLine,
  FaInfoCircle,
} from "react-icons/fa";
import { projects, projectCategories } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".project-card-anim"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, [selectedCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaRocket className="text-xs" />
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Crafting scalable{" "}
            <span className="text-gradient">
              full-stack applications
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Real-world web platforms built with modern architectures, secure APIs,
            and pixel-perfect user interfaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)]"
                  : "bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || project.title}
              className={`project-card-anim group relative rounded-3xl overflow-hidden bg-white/80 dark:bg-[#0e111a]/90 border border-slate-200/90 dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-violet-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 flex flex-col ${
                index === 0 && selectedCategory === "All" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Project Image Banner */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 && selectedCategory === "All" ? "h-64 sm:h-80" : "h-56"
                } bg-slate-100 dark:bg-slate-900/50 cursor-pointer`}
                onClick={() => setActiveModalProject(project)}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-600/30 to-cyan-500/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-slate-600 dark:text-zinc-300">
                      {project.title} Preview
                    </span>
                  </div>
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-600/90 text-white shadow-md backdrop-blur-md">
                    {project.badge || project.category}
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    {project.tagline || project.tech.slice(0, 4).join(" • ")}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.live && project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition shadow-sm"
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>Live Demo</span>
                      </a>
                    ) : null}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 transition"
                    >
                      <FaGithub size={13} />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Details Trigger Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <FaInfoCircle size={13} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            ></motion.div>

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full my-8 bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header / Banner */}
              <div className="relative h-64 sm:h-72 bg-slate-900 shrink-0">
                {activeModalProject.image ? (
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-violet-600 to-cyan-500"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f121d] via-black/40 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <FaTimes size={16} />
                </button>

                {/* Header Titles */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-600 text-white inline-block mb-2">
                    {activeModalProject.badge || activeModalProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-zinc-300">
                {/* Tagline */}
                {activeModalProject.tagline && (
                  <p className="text-base sm:text-lg font-semibold text-violet-600 dark:text-cyan-400">
                    {activeModalProject.tagline}
                  </p>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-300">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Architecture & Metrics */}
                {activeModalProject.architecture && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                      <FaLayerGroup className="text-violet-600 dark:text-cyan-400" />
                      <span>Architecture & Design</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {activeModalProject.architecture}
                    </p>
                    {activeModalProject.metrics && (
                      <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border-t border-slate-200 dark:border-white/10">
                        <FaChartLine />
                        <span>Performance Metric: {activeModalProject.metrics}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Key Features */}
                {activeModalProject.features && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3">
                      Key Highlights & Implemented Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {activeModalProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <FaCheckCircle className="text-cyan-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3">
                    Technologies & Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-4">
                  {activeModalProject.live && activeModalProject.live !== "#" && (
                    <a
                      href={activeModalProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-95 transition shadow-lg text-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>Visit Live Application</span>
                    </a>
                  )}

                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/10 transition text-sm"
                  >
                    <FaGithub />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
