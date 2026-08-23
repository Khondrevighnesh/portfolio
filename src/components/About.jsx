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
  GraduationCap,
  Award,
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
  }, [activeTab]);

  const stats = [
    {
      icon: <Briefcase size={24} />,
      value: "6 Mo+",
      label: "Industry Experience",
      detail: "Software Dev @ Sustainfy Energy",
      accent: "text-violet-600 dark:text-violet-400",
      border: "hover:border-violet-500/40",
      bgGlow: "group-hover:bg-violet-500/10",
    },
    {
      icon: <Rocket size={24} />,
      value: "6+",
      label: "Full Stack & Mobile Projects",
      detail: "Next.js 15, React Native & MERN",
      accent: "text-cyan-600 dark:text-cyan-400",
      border: "hover:border-cyan-500/40",
      bgGlow: "group-hover:bg-cyan-500/10",
    },
    {
      icon: <Code2 size={24} />,
      value: "15+",
      label: "Modern Technologies",
      detail: "React, Next.js, Node, AWS, TS",
      accent: "text-indigo-600 dark:text-indigo-400",
      border: "hover:border-indigo-500/40",
      bgGlow: "group-hover:bg-indigo-500/10",
    },
    {
      icon: <Sparkles size={24} />,
      value: "100%",
      label: "Clean Code & Reliability",
      detail: "Cross-platform excellence",
      accent: "text-emerald-600 dark:text-emerald-400",
      border: "hover:border-emerald-500/40",
      bgGlow: "group-hover:bg-emerald-500/10",
    },
  ];

  const journeyMilestones = [
    {
      year: "March 2026 - Present",
      title: "Software Developer Intern",
      organization: "Sustainfy Energy (Pune, Maharashtra)",
      badge: "Current Role",
      description:
        "Developing and maintaining features for a production React Native/Expo application supporting solar plant maintenance and technician operations. Built mobile workflows for safety checks, site visits, approvals, and photo document uploads. Architected AWS S3 presigned URL media upload pipelines, worked with Amazon DynamoDB for real-time synchronization, and integrated REST APIs with role-based access control.",
      tags: ["React Native", "Expo", "AWS S3 (Presigned URLs)", "DynamoDB", "REST APIs", "TypeScript", "Node.js", "RBAC"],
    },
    {
      year: "June 2025 - February 2026",
      title: "Full-Stack Web Development Specialization",
      organization: "Kiran Academy",
      badge: "Professional Specialization",
      description:
        "Mastered advanced Full-Stack JavaScript and Next.js ecosystem. Built enterprise-grade full-stack web platforms including PuneStay (Next.js 15, PostgreSQL, Prisma, AWS S3, NextAuth v5), Expense Tracker, Spotify Clone, and Book Store with secure JWT/OAuth, MongoDB aggregations, and sub-second page loads.",
      tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      year: "2022 - May 2025",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Vivekananda College, Kolhapur (Shivaji University)",
      badge: "Degree Foundation",
      description:
        "Solid grounding in Computer Science, Data Structures & Algorithms, Relational Database Management Systems (SQL & NoSQL), Object-Oriented Programming, and Software Engineering principles.",
      tags: ["BCA", "DSA", "DBMS & SQL", "Computer Science", "Software Engineering", "OOP"],
    },
  ];

  const certifications = [
    { title: "Model Context Protocol (MCP)", issuer: "Anthropic / Agent Skills Ecosystem" },
    { title: "Claude Agent Skill (Claude 101)", issuer: "Certificate of Completion" },
    { title: "Introduction to Agent Skills & MCP", issuer: "Certificate of Completion" },
    { title: "Google AI Essentials", issuer: "Google" },
    { title: "Python Programming", issuer: "Certified Foundation" },
  ];

  const coreStrengths = [
    "Full-stack web applications with Next.js 15 & React 19",
    "Cross-platform mobile apps with React Native & Expo",
    "AWS S3 presigned URL media upload architectures",
    "Relational (PostgreSQL/Prisma) & NoSQL (MongoDB/DynamoDB) databases",
    "Secure authentication, NextAuth v5 & Role-Based Access Control (RBAC)",
    "Clean REST API design, Server Actions & Zod validation",
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
            Software Developer building production web and mobile applications with JavaScript,
            TypeScript, Next.js 15, React Native, Node.js, and AWS cloud services.
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
                  Crafting Scalable Web & Mobile Products
                </h3>

                <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-base">
                  I’m a passionate <strong className="text-slate-900 dark:text-white font-semibold">Software Developer</strong> based
                  in Pune, India, dedicated to designing, building, and deploying fast, accessible,
                  and scalable web and mobile products.
                </p>

                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base">
                  Currently working as a <strong className="text-slate-900 dark:text-white font-semibold">Software Development Intern at Sustainfy Energy</strong>,
                  where I contribute to a live React Native/Expo application across mobile frontend workflows, backend APIs,
                  AWS S3 presigned URL pipelines, and Amazon DynamoDB.
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
                      "Next.js 15",
                      "React Native",
                      "Expo",
                      "TypeScript",
                      "Node.js",
                      "AWS S3",
                      "Amazon DynamoDB",
                      "PostgreSQL",
                      "Prisma ORM",
                      "MongoDB",
                      "Model Context Protocol (MCP)",
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
                className="relative p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-violet-500/40 transition duration-300 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-cyan-400 border border-violet-500/20">
                        {milestone.year}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {milestone.badge}
                      </span>
                    </div>
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

            {/* Certifications Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-violet-600/10 via-cyan-500/10 to-transparent border border-violet-500/20 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white">
                <Award className="text-amber-500" />
                <span>Certifications & AI Credentials</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
