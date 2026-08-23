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
  FaCopy,
  FaCheck,
  FaPalette,
  FaQuestionCircle,
  FaFileAlt,
} from "react-icons/fa";
import { projects, projectCategories } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [modalTab, setModalTab] = useState("overview"); // 'overview', 'modules', 'stack', 'engineering', 'resume'
  const [copiedBulletIndex, setCopiedBulletIndex] = useState(null);
  const [copiedAllBullets, setCopiedAllBullets] = useState(false);
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
        duration: 0.8,
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
      setModalTab("overview");
      setCopiedBulletIndex(null);
      setCopiedAllBullets(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject]);

  const handleCopyBullet = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedBulletIndex(index);
    setTimeout(() => setCopiedBulletIndex(null), 2200);
  };

  const handleCopyAllBullets = (bullets) => {
    if (!bullets || bullets.length === 0) return;
    const fullText = bullets.map((b) => `• ${b}`).join("\n\n");
    navigator.clipboard.writeText(fullText);
    setCopiedAllBullets(true);
    setTimeout(() => setCopiedAllBullets(false), 2500);
  };

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
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaRocket className="text-xs" />
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Selected projects that showcase{" "}
            <span className="text-gradient">
              full-stack mastery
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Real-world web platforms and systems built with type-safe APIs,
            responsive design, and modern architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-violet-600 text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)]"
                  : "bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && selectedCategory === "All";
            return (
              <div
                key={project.id || project.title}
                className={`project-card-anim group relative rounded-3xl overflow-hidden bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl hover:border-violet-500/40 dark:hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Project Image Banner */}
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? "h-64 sm:h-80" : "h-52"
                    } bg-slate-900 cursor-pointer`}
                    onClick={() => setActiveModalProject(project)}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-violet-900/60 to-slate-950 flex items-center justify-center">
                        <span className="text-sm font-semibold text-slate-300">
                          {project.title} Preview
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-violet-600 dark:text-cyan-400 backdrop-blur-md shadow-sm border border-white/20">
                        {project.badge || project.category}
                      </span>
                      {project.modules && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white backdrop-blur-md shadow-sm">
                          Case Study Ready
                        </span>
                      )}
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
                        {project.tagline || project.tech.slice(0, 4).join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.slice(0, isFeatured ? 8 : 5).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > (isFeatured ? 8 : 5) && (
                        <span className="px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-500">
                          +{project.tech.length - (isFeatured ? 8 : 5)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3 border-t border-slate-200/60 dark:border-white/5 mt-4">
                  <div className="flex items-center gap-2">
                    {project.live && project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-sm"
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>Live Demo</span>
                      </a>
                    ) : null}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 transition"
                    >
                      <FaGithub size={13} />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Open Modal Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <FaInfoCircle size={13} />
                    <span>{project.modules ? "Case Study" : "Details"}</span>
                  </button>
                </div>
              </div>
            );
          })}
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
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            ></motion.div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full my-8 bg-white dark:bg-[#0e111a] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner */}
              <div className="relative h-48 sm:h-64 bg-slate-900 shrink-0">
                {activeModalProject.image ? (
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-900 to-slate-950"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-black/40 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <FaTimes size={16} />
                </button>

                {/* Modal Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-600 text-white">
                      {activeModalProject.badge || activeModalProject.category}
                    </span>
                    {activeModalProject.category && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
                        {activeModalProject.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="px-6 pt-3 pb-1 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] overflow-x-auto flex gap-2 shrink-0">
                <button
                  onClick={() => setModalTab("overview")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                    modalTab === "overview"
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Overview & Features
                </button>

                {activeModalProject.modules && (
                  <button
                    onClick={() => setModalTab("modules")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                      modalTab === "modules"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Functional Modules
                  </button>
                )}

                {activeModalProject.techStackBreakdown && (
                  <button
                    onClick={() => setModalTab("stack")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                      modalTab === "stack"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Tech Stack & System
                  </button>
                )}

                {activeModalProject.engineeringHighlights && (
                  <button
                    onClick={() => setModalTab("engineering")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                      modalTab === "engineering"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Engineering & Interview Q&A
                  </button>
                )}

                {activeModalProject.resumeBullets && (
                  <button
                    onClick={() => setModalTab("resume")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      modalTab === "resume"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <FaFileAlt size={12} />
                    <span>Resume Bullets</span>
                  </button>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-zinc-300">
                {/* TAB 1: OVERVIEW & FEATURES */}
                {modalTab === "overview" && (
                  <div className="space-y-6">
                    {activeModalProject.tagline && (
                      <p className="text-base sm:text-lg font-semibold text-violet-600 dark:text-cyan-400">
                        {activeModalProject.tagline}
                      </p>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                        Project Overview
                      </h4>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-300">
                        {activeModalProject.description}
                      </p>
                    </div>

                    {activeModalProject.architecture && (
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                          <FaLayerGroup className="text-violet-600 dark:text-cyan-400" />
                          <span>Architecture & Design</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                          {activeModalProject.architecture}
                        </p>
                        {activeModalProject.metrics && (
                          <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border-t border-slate-200 dark:border-white/5">
                            <FaChartLine />
                            <span>Performance: {activeModalProject.metrics}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {activeModalProject.features && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3">
                          Key Features & Highlights
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {activeModalProject.features.map((feature, i) => (
                            <div
                              key={i}
                              className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex items-start gap-2.5 text-xs sm:text-sm"
                            >
                              <FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-zinc-300 leading-snug">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3">
                        Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeModalProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-xl text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-cyan-400 border border-violet-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: FUNCTIONAL MODULES */}
                {modalTab === "modules" && activeModalProject.modules && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Key Features & Functional Modules
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                        In-depth breakdown of user flows, portals, and modules built for PuneStay.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeModalProject.modules.map((module, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                              {module.title}
                            </h5>
                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-cyan-400">
                              {module.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                            {module.description}
                          </p>
                          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-200">
                            <strong className="text-slate-900 dark:text-white">Highlight:</strong> {module.highlight}
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeModalProject.designSystem && (
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                          <FaPalette className="text-amber-500" />
                          <span>Design System: {activeModalProject.designSystem.name}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-zinc-300">
                          <strong>Typography:</strong> {activeModalProject.designSystem.typography}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 mr-1">Palette:</span>
                          {activeModalProject.designSystem.colors.map((c, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-white dark:bg-black/30 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-zinc-200"
                            >
                              <span
                                className="w-3 h-3 rounded-full border border-black/20"
                                style={{ backgroundColor: c.hex }}
                              ></span>
                              <span>{c.name} ({c.hex})</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: TECH STACK BREAKDOWN */}
                {modalTab === "stack" && activeModalProject.techStackBreakdown && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Full Technical Stack Breakdown
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                        Layer-by-layer architectural implementation and technology selection.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                      <div className="divide-y divide-slate-200 dark:divide-white/5">
                        {activeModalProject.techStackBreakdown.map((row, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-slate-50/50 dark:bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                          >
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white sm:w-44 shrink-0">
                              {row.layer}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 flex-1">
                              {row.stack}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: INTERVIEW HIGHLIGHTS */}
                {modalTab === "engineering" && activeModalProject.engineeringHighlights && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Key Engineering Highlights (For Technical Interviews)
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                        Technical decisions, trade-offs, and scaling challenges solved during development.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {activeModalProject.engineeringHighlights.map((qna, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2"
                        >
                          <div className="flex items-start gap-2.5 text-slate-900 dark:text-white font-bold text-sm sm:text-base">
                            <FaQuestionCircle className="text-violet-600 dark:text-cyan-400 shrink-0 mt-1" />
                            <span>{qna.question}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 pl-6 leading-relaxed">
                            {qna.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 5: RESUME BULLETS */}
                {modalTab === "resume" && activeModalProject.resumeBullets && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <FaFileAlt className="text-emerald-500" />
                          <span>Resume Section (Ready to Copy-Paste)</span>
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                          High-impact STAR format bullet points ready for CVs and job applications.
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyAllBullets(activeModalProject.resumeBullets)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer ${
                          copiedAllBullets
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white"
                        }`}
                      >
                        {copiedAllBullets ? (
                          <>
                            <FaCheck />
                            <span>All Copied!</span>
                          </>
                        ) : (
                          <>
                            <FaCopy />
                            <span>Copy All Bullets</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-800 dark:text-zinc-200">
                      <p className="font-bold text-slate-900 dark:text-white mb-1">
                        {activeModalProject.title}
                      </p>
                      <p className="text-slate-500 dark:text-zinc-400 text-[11px] mb-3">
                        {activeModalProject.tech.slice(0, 8).join(", ")}
                      </p>

                      <div className="space-y-3 font-sans">
                        {activeModalProject.resumeBullets.map((bullet, idx) => (
                          <div
                            key={idx}
                            className="group p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-start justify-between gap-3 hover:border-violet-500/30 transition"
                          >
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>{bullet}</span>
                            </div>

                            <button
                              onClick={() => handleCopyBullet(bullet, idx)}
                              className={`shrink-0 p-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                                copiedBulletIndex === idx
                                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                  : "text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                              }`}
                              title="Copy bullet"
                            >
                              {copiedBulletIndex === idx ? <FaCheck size={13} /> : <FaCopy size={13} />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-4">
                  {activeModalProject.live && activeModalProject.live !== "#" && (
                    <a
                      href={activeModalProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-md text-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>Visit Live Application</span>
                    </a>
                  )}

                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-white/10 transition text-sm"
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
