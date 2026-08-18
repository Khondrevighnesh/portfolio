import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  Briefcase,
  CheckCircle2,
  Cpu,
  Compass,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".about-fade-in"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  const stats = [
    {
      icon: <Rocket size={24} />,
      value: "5+",
      label: "Full Stack Projects",
      detail: "End-to-end MERN builds",
      accent: "text-violet-600 dark:text-violet-400",
      border: "hover:border-violet-500/40",
      bgGlow: "group-hover:bg-violet-500/10",
    },
    {
      icon: <Code2 size={24} />,
      value: "10+",
      label: "Modern Technologies",
      detail: "React, Node, Mongo, TS",
      accent: "text-cyan-600 dark:text-cyan-400",
      border: "hover:border-cyan-500/40",
      bgGlow: "group-hover:bg-cyan-500/10",
    },
    {
      icon: <Layers3 size={24} />,
      value: "100%",
      label: "Responsive & Accessible",
      detail: "Cross-device perfection",
      accent: "text-indigo-600 dark:text-indigo-400",
      border: "hover:border-indigo-500/40",
      bgGlow: "group-hover:bg-indigo-500/10",
    },
    {
      icon: <Sparkles size={24} />,
      value: "100%",
      label: "Passion & Detail",
      detail: "Continuous innovation",
      accent: "text-emerald-600 dark:text-emerald-400",
      border: "hover:border-emerald-500/40",
      bgGlow: "group-hover:bg-emerald-500/10",
    },
  ];

  const journeyMilestones = [
    {
      year: "2024 - Present",
      title: "Full Stack MERN Developer",
      organization: "Independent & Open Source Projects",
      description:
        "Architecting full-stack web platforms including Expense Tracker, Spotify Clone, and Book Store with secure JWT/Firebase authentication, RESTful APIs, and responsive UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    },
    {
      year: "2023 - 2024",
      title: "Frontend & UI Engineering",
      organization: "Specialized Web Development",
      description:
        "Mastered advanced React ecosystem, GSAP animations, Framer Motion, and Tailwind CSS. Built responsive web interfaces with sub-second page loads.",
      tags: ["JavaScript", "Tailwind CSS", "GSAP", "REST APIs"],
    },
    {
      year: "Academic Foundation",
      title: "Computer Science & Engineering",
      organization: "Degree Studies",
      description:
        "Solid grounding in Data Structures, Algorithms, Database Management Systems (SQL & NoSQL), Object-Oriented Programming, and Software Engineering principles.",
      tags: ["DSA", "DBMS", "Software Engineering", "OOP"],
    },
  ];

  const coreStrengths = [
    "Clean & modular component architecture",
    "Robust RESTful API design & integration",
    "Secure JWT & OAuth user authentication",
    "Predictable state management with Redux",
    "Database design with MongoDB & Mongoose",
    "Smooth animations with Framer Motion & GSAP",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-violet-600/10 dark:bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 about-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>Discover My Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Engineering digital solutions with{" "}
            <span className="text-gradient">
              creativity & precision
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            A developer who bridges the gap between clean backend architecture and
            delightful frontend experiences.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 about-fade-in">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "overview"
                  ? "bg-white dark:bg-[#151928] text-violet-600 dark:text-cyan-400 shadow-md"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Cpu size={16} />
              <span>Overview & Skills</span>
            </button>

            <button
              onClick={() => setActiveTab("journey")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "journey"
                  ? "bg-white dark:bg-[#151928] text-violet-600 dark:text-cyan-400 shadow-md"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Briefcase size={16} />
              <span>Journey & Experience</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" ? (
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Bio Column */}
            <div className="lg:col-span-7 space-y-6 about-fade-in">
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-gradient-to-b from-violet-600 to-cyan-500 rounded-full"></span>
                  Crafting Scalable Full-Stack Web Apps
                </h3>

                <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-base">
                  I’m a passionate <strong className="text-slate-900 dark:text-white font-semibold">MERN Stack Developer</strong> based
                  in India, dedicated to designing, building, and deploying fast, accessible,
                  and scalable web products.
                </p>

                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base">
                  Whether building secure authentication flows, structuring relational
                  and document data models, or crafting micro-animated UI components,
                  I take pride in writing readable, maintainable, and efficient code.
                </p>

                {/* Core Strengths Checklist */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
                    Core Technical Competencies
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {coreStrengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 size={18} className="text-violet-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React 19",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Tailwind CSS",
                      "TypeScript",
                      "Redux Toolkit",
                      "Framer Motion",
                      "REST APIs",
                      "Git/GitHub",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-violet-500/40 dark:hover:border-cyan-400/40 transition duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-2 gap-4 about-fade-in">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`group p-6 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg ${stat.border}`}
                >
                  <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-white/5 w-fit ${stat.accent} ${stat.bgGlow} transition`}>
                    {stat.icon}
                  </div>
                  <h4 className={`text-3xl sm:text-4xl font-extrabold mt-4 ${stat.accent}`}>
                    {stat.value}
                  </h4>
                  <p className="text-slate-800 dark:text-white font-semibold text-sm mt-1">
                    {stat.label}
                  </p>
                  <p className="text-slate-500 dark:text-zinc-400 text-xs mt-1">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Journey / Milestones Tab */
          <div className="max-w-4xl mx-auto space-y-6 about-fade-in">
            {journeyMilestones.map((milestone, index) => (
              <div
                key={index}
                className="relative p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-violet-500/40 transition duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-cyan-400 border border-violet-500/20">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                      {milestone.title}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                    {milestone.organization}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
