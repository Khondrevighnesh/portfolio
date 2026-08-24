import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "sustainfy",
    type: "work",
    role: "Software Developer Intern",
    company: "Sustainfy Energy",
    location: "Pune, Maharashtra, India",
    period: "March 2026 — Present",
    statusBadge: "Current Active Role",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    summary:
      "Developing and maintaining core features for a production React Native & Expo mobile application supporting solar plant maintenance, safety inspections, and field technician operations.",
    highlights: [
      "Architected and deployed direct media upload pipelines to AWS S3 via Presigned URLs, eliminating server bottlenecks for site inspection photos and documents.",
      "Integrated Amazon DynamoDB for real-time offline-first synchronization of field technician operational logs and asset status.",
      "Built cross-platform mobile workflows for safety checklists, site visit logging, and multi-tier managerial approval processes.",
      "Implemented RESTful APIs and secure edge middleware with JWT authentication and Role-Based Access Control (RBAC) across technician and supervisor tiers.",
    ],
    techStack: [
      "React Native",
      "Expo CLI",
      "AWS S3 (Presigned URLs)",
      "Amazon DynamoDB",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "RBAC Security",
    ],
  },
  {
    id: "kiran-academy",
    type: "training",
    role: "Full-Stack Web Development Specialization",
    company: "Kiran Academy",
    location: "Pune, Maharashtra, India",
    period: "June 2025 — February 2026",
    statusBadge: "Professional Specialization",
    badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30",
    summary:
      "Intensive full-stack software engineering program focused on the Next.js 15 ecosystem, React 19, TypeScript, relational & NoSQL database architectures, and cloud scalability.",
    highlights: [
      "Engineered PuneStay, a full-scale rental and flatmate discovery platform using Next.js 15 App Router, Server Actions, PostgreSQL, Prisma ORM, and NextAuth v5.",
      "Implemented secure edge middleware, sliding-window rate limiting with Upstash Redis, and zero-cost map routing with OpenStreetMap.",
      "Designed modular backend microservices and REST APIs with Node.js, Express, and MongoDB aggregations for sub-second responses.",
      "Built a suite of production-ready full-stack applications including Expense Tracker, Spotify Clone, and Book Store following clean code principles.",
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Upstash Redis",
    ],
  },
  {
    id: "bca-degree",
    type: "education",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Vivekananda College, Kolhapur (Shivaji University)",
    location: "Kolhapur, Maharashtra, India",
    period: "2022 — May 2025",
    statusBadge: "Academic Degree",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    summary:
      "Rigorous academic foundation in computer science, data structures & algorithms, relational database management systems (SQL), and object-oriented software engineering.",
    highlights: [
      "Completed comprehensive coursework in Data Structures & Algorithms (DSA), Relational DBMS (SQL & normalization), and Object-Oriented Programming (OOP).",
      "Developed multiple academic software systems applying client-server architectures and user-centric interface design.",
    ],
    techStack: [
      "Computer Science",
      "Data Structures & Algorithms (DSA)",
      "DBMS & SQL",
      "OOP",
      "Software Engineering",
      "Web Technologies",
    ],
  },
];

const certifications = [
  {
    title: "Model Context Protocol (MCP)",
    issuer: "Anthropic / Agent Skills Ecosystem",
    type: "AI Protocols & Tools",
    date: "2026",
    badge: "Certified",
  },
  {
    title: "Claude Agent Skill (Claude 101)",
    issuer: "Certificate of Completion",
    type: "Agentic AI Workflows",
    date: "2026",
    badge: "Certified",
  },
  {
    title: "Introduction to Agent Skills & MCP",
    issuer: "Certificate of Completion",
    type: "Agent Orchestration",
    date: "2026",
    badge: "Certified",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google Professional",
    type: "Machine Learning & AI",
    date: "2025",
    badge: "Verified",
  },
  {
    title: "Python Programming Foundation",
    issuer: "Certified Technical Track",
    type: "Programming & Scripts",
    date: "2024",
    badge: "Verified",
  },
];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".exp-card-anim"),
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, [activeFilter]);

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : activeFilter === "certifications"
      ? []
      : experiences.filter((exp) => exp.type === activeFilter);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Briefcase size={14} className="text-violet-500" />
            <span>Career & Professional Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Career Trajectory &{" "}
            <span className="text-gradient">
              Industry Experience
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            A proven track record of engineering production software at Sustainfy Energy,
            mastering full-stack web architectures, academic computer science foundations, and AI credentials.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {[
            { id: "all", label: "All Milestones", icon: <Layers size={14} /> },
            { id: "work", label: "Industry Experience", icon: <Briefcase size={14} /> },
            { id: "training", label: "Specialization & Training", icon: <Cpu size={14} /> },
            { id: "education", label: "Academic Degree", icon: <GraduationCap size={14} /> },
            { id: "certifications", label: "AI & Certifications", icon: <Award size={14} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-violet-600 text-white shadow-[0_4px_16px_rgba(124,58,237,0.35)]"
                  : "bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-violet-500/30"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline Experiences Container */}
        {activeFilter !== "certifications" && (
          <div className="relative border-l-2 border-violet-500/30 dark:border-violet-500/20 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="exp-card-anim relative group"
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-violet-600 border-4 border-white dark:border-[#090a0f] shadow-[0_0_12px_rgba(124,58,237,0.8)] group-hover:scale-125 transition-transform duration-300"></div>

                {/* Experience Card */}
                <div className="rounded-3xl p-7 sm:p-9 bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] shadow-sm space-y-5">
                  {/* Top Metadata Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/70 dark:border-white/10 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${exp.badgeColor}`}>
                          {exp.statusBadge}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-zinc-200 text-sm">
                        <Building2 size={16} className="text-violet-600 dark:text-cyan-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Key Highlights Bullet Points */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                      Key Responsibilities & Impact:
                    </h4>
                    <div className="grid gap-2">
                      {exp.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300"
                        >
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-white/10">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2.5">
                      Applied Technologies:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Section with flawless light/dark mode support */}
        {(activeFilter === "all" || activeFilter === "certifications") && (
          <div className="mt-16 exp-card-anim">
            <div className="rounded-3xl p-8 sm:p-10 bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/70 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Industry Certifications & AI Credentials
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                      Verified qualifications in Agentic AI, Model Context Protocol (MCP), and Software Engineering.
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-500/20 dark:border-violet-500/30 w-fit">
                  {certifications.length} Verified Credentials
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 hover:border-violet-500/40 transition duration-300 space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {cert.badge}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      {cert.issuer}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-[11px] font-medium text-violet-600 dark:text-cyan-400">
                      <ShieldCheck size={13} />
                      <span>{cert.type}</span>
                    </div>
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
