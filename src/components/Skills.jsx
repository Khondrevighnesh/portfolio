import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Server,
  Wrench,
  Binary,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Code size={20} />,
    color: "from-cyan-500 to-blue-600",
    glow: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    description: "Creating responsive, animated, and stateful client applications.",
    skills: [
      { name: "Next.js 15 / React 19", level: 92, note: "App Router, Server Actions, SSR" },
      { name: "JavaScript (ES6+) & TypeScript", level: 90, note: "Strict Types, Async/Await, DOM" },
      { name: "Tailwind CSS", level: 95, note: "v4, Responsive, Design Tokens" },
      { name: "HTML5 / Semantic UI", level: 95, note: "SEO & Accessibility" },
      { name: "Redux Toolkit & Zustand", level: 86, note: "Global Store & Slices" },
      { name: "Framer Motion & GSAP", level: 85, note: "Smooth UI Animations" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <Server size={20} />,
    color: "from-violet-500 to-purple-600",
    glow: "hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    description: "Developing scalable RESTful services and robust business logic.",
    skills: [
      { name: "Node.js & Express.js", level: 88, note: "Event Loop, Streams, Routing" },
      { name: "PostgreSQL & Prisma ORM", level: 86, note: "Relations, Connection Pooling, Migrations" },
      { name: "MongoDB & Mongoose", level: 85, note: "Aggregations, Schemas, Indexing" },
      { name: "Auth.js (NextAuth v5) & JWT", level: 88, note: "Edge Middleware, RBAC, Security" },
      { name: "RESTful APIs & Server Actions", level: 90, note: "Zod Validation, Type Safety" },
    ],
  },
  {
    id: "tools",
    title: "Tools, Cloud & DevOps",
    icon: <Wrench size={20} />,
    color: "from-pink-500 to-rose-600",
    glow: "hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    description: "Version control, testing, workflow automation, and cloud deployment.",
    skills: [
      { name: "Git & GitHub Actions", level: 88, note: "CI/CD, Workflows, PRs" },
      { name: "AWS S3 & Cloud Storage", level: 84, note: "Direct Upload Pipelines, SDK" },
      { name: "Upstash Redis", level: 82, note: "Sliding-Window Rate Limiting" },
      { name: "Postman & API Testing", level: 86, note: "Collections, Environments" },
      { name: "Vercel & Cloud Deploy", level: 88, note: "Edge Hosting, DNS, Secrets" },
    ],
  },
  {
    id: "languages",
    title: "Languages & Computer Science",
    icon: <Binary size={20} />,
    color: "from-emerald-500 to-teal-600",
    glow: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    description: "Strong foundation in data structures, algorithms, and database systems.",
    skills: [
      { name: "TypeScript", level: 85, note: "Types, Interfaces, Generics" },
      { name: "SQL (PostgreSQL / MySQL)", level: 82, note: "Queries, Joins, Indexing, Pooling" },
      { name: "JavaScript (Modern)", level: 92, note: "ESNext, Event Loop, Closures" },
      { name: "Data Structures & Algorithms", level: 80, note: "Arrays, Trees, Graphs, Sorting" },
      { name: "Python & C", level: 75, note: "Fundamentals, Memory, Logic" },
    ],
  },
];

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".skill-card-anim"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Technologies I use to build{" "}
            <span className="text-gradient">
              high-performance web apps
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            A comprehensive, industry-aligned tech stack spanning frontend, backend,
            databases, and development pipelines.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Skills" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "tools", label: "Tools & DevOps" },
            { id: "languages", label: "Languages & CS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.id
                  ? "bg-violet-600 text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)]"
                  : "bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`skill-card-anim rounded-3xl p-7 sm:p-8 bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl transition duration-300 ${category.glow} shadow-sm`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400">
                  {category.skills.length} skills
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mb-6">
                {category.description}
              </p>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[11px] text-slate-400 dark:text-zinc-500 hidden sm:inline">
                            • {skill.note}
                          </span>
                        )}
                      </div>
                      <span className="font-mono font-semibold text-violet-600 dark:text-cyan-400 text-xs">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
