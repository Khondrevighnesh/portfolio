import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  Server,
  Bot,
  Binary,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Search,
  Code2,
  Cloud,
  Database,
  Terminal,
  Workflow,
  Compass,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiRedis,
  SiOpenstreetmap,
  SiPython,
  SiGit,
  SiGithubactions,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaAws, FaMobileAlt, FaDatabase, FaShieldAlt, FaRobot } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & Mobile Engineering",
    badgeTitle: "UI/UX & Native Workflows",
    icon: <Smartphone size={22} className="text-violet-500" />,
    color: "from-violet-500 to-indigo-600",
    glowBorder: "hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    description: "Building responsive, highly animated web and cross-platform mobile apps with strict type safety and modern React architectures.",
    ecosystem: ["App Router", "Server Actions", "Strict TypeScript", "Zustand Slices", "Responsive Design", "Micro-Interactions"],
    skills: [
      {
        name: "Next.js 15",
        icon: <SiNextdotjs className="text-slate-900 dark:text-white" size={20} />,
        tier: "Core Stack",
        tierColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
        features: ["App Router", "Server Components", "Server Actions", "SSR / SSG"],
      },
      {
        name: "React 19",
        icon: <SiReact className="text-cyan-500" size={20} />,
        tier: "Expert",
        tierColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
        features: ["Hooks", "Custom Hooks", "Context API", "Concurrent Mode"],
      },
      {
        name: "React Native & Expo",
        icon: <FaMobileAlt className="text-indigo-500" size={20} />,
        tier: "Production",
        tierColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        features: ["Expo Router", "Mobile Workflows", "Camera & S3 Upload", "Offline Cache"],
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" size={20} />,
        tier: "Strict Mode",
        tierColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        features: ["Generics", "Type Inference", "Zod Validation", "Interface Contracts"],
      },
      {
        name: "Tailwind CSS v4",
        icon: <SiTailwindcss className="text-teal-400" size={20} />,
        tier: "Expert",
        tierColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
        features: ["Design Tokens", "Dark Mode", "Fluid Grids", "Custom Variants"],
      },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript className="text-amber-400" size={20} />,
        tier: "Advanced",
        tierColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        features: ["Async / Await", "Promises", "Closures", "DOM APIs"],
      },
      {
        name: "Redux & Zustand",
        icon: <SiRedux className="text-purple-500" size={20} />,
        tier: "Advanced",
        tierColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
        features: ["Global Store", "Slice Reducers", "Immer", "State Selectors"],
      },
      {
        name: "Framer Motion & GSAP",
        icon: <SiFramer className="text-pink-500" size={20} />,
        tier: "Advanced",
        tierColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
        features: ["ScrollTrigger", "Layout Animations", "Gesture Physics", "SVG Paths"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend, Cloud & Databases",
    badgeTitle: "Distributed & Scalable",
    icon: <Server size={22} className="text-cyan-500" />,
    color: "from-indigo-500 to-cyan-600",
    glowBorder: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    description: "Architecting high-throughput REST APIs, serverless cloud storage pipelines, edge authentication, and relational/NoSQL schemas.",
    ecosystem: ["AWS S3 Pipelines", "RESTful Architecture", "Connection Pooling", "JWT / NextAuth v5", "Edge Middleware"],
    skills: [
      {
        name: "Node.js & Express.js",
        icon: <SiNodedotjs className="text-emerald-500" size={20} />,
        tier: "Advanced",
        tierColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        features: ["Event Loop", "Streams", "Middleware Chains", "Modular Routing"],
      },
      {
        name: "AWS S3 (Presigned URLs)",
        icon: <FaAws className="text-amber-500" size={20} />,
        tier: "Production",
        tierColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        features: ["Direct Media Uploads", "Presigned GET/PUT", "IAM Policies", "Zero Server Load"],
      },
      {
        name: "Amazon DynamoDB",
        icon: <FaDatabase className="text-indigo-500" size={20} />,
        tier: "Production",
        tierColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        features: ["NoSQL Tables", "Primary & Sort Keys", "Real-Time Field Sync", "Document Client"],
      },
      {
        name: "PostgreSQL & Prisma",
        icon: <SiPostgresql className="text-blue-500" size={20} />,
        tier: "Core DB",
        tierColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        features: ["Relations & Joins", "Migrations", "Connection Pooling", "Neon Serverless"],
      },
      {
        name: "MongoDB & Mongoose",
        icon: <SiMongodb className="text-emerald-600" size={20} />,
        tier: "Advanced",
        tierColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        features: ["Aggregation Pipeline", "Indexing", "Document Schema Validation", "Atlas"],
      },
      {
        name: "Auth.js (NextAuth v5) & JWT",
        icon: <SiJsonwebtokens className="text-pink-500" size={20} />,
        tier: "Security",
        tierColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
        features: ["Role-Based Access (RBAC)", "Edge Session Middleware", "OAuth Providers", "Bcrypt"],
      },
    ],
  },
  {
    id: "ai",
    title: "AI Protocols & Emerging Tech",
    badgeTitle: "Agentic Systems & Tools",
    icon: <Bot size={22} className="text-purple-500" />,
    color: "from-purple-500 to-pink-600",
    glowBorder: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
    description: "Pioneering agent protocols, context passing, autonomous agent tool orchestration, and high-performance caching.",
    ecosystem: ["Anthropic MCP", "Claude Agent Skills", "Rate Limiting", "OpenStreetMap Coordinates", "Tool Calling"],
    skills: [
      {
        name: "Model Context Protocol (MCP)",
        icon: <FaRobot className="text-violet-500" size={20} />,
        tier: "Certified",
        tierColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
        features: ["Client / Server Architecture", "Tool Schemas", "Context Injection", "Protocol Standards"],
      },
      {
        name: "Claude Agent Skills (Claude 101)",
        icon: <Bot className="text-amber-500" size={20} />,
        tier: "Certified",
        tierColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        features: ["Autonomous Workflows", "Prompt Optimization", "Tool Execution", "Verification Loops"],
      },
      {
        name: "Google AI Essentials",
        icon: <Sparkles className="text-blue-500" size={20} />,
        tier: "Certified",
        tierColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        features: ["AI Foundations", "Enterprise AI Best Practices", "Responsible AI", "Practical LLMs"],
      },
      {
        name: "Upstash Redis",
        icon: <SiRedis className="text-rose-500" size={20} />,
        tier: "Production",
        tierColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
        features: ["Sliding-Window Rate Limiting", "Edge Caching", "Key-Value Stores", "Sub-10ms Latency"],
      },
      {
        name: "OpenStreetMap (OSM) & Leaflet",
        icon: <SiOpenstreetmap className="text-emerald-500" size={20} />,
        tier: "Specialized",
        tierColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        features: ["Zero-Cost Map Embeds", "Geolocation Coordinates", "Routing Navigation", "Interactive Markers"],
      },
    ],
  },
  {
    id: "tools",
    title: "DevOps, Tools & System Architecture",
    badgeTitle: "Quality & Deployment",
    icon: <Binary size={22} className="text-emerald-500" />,
    color: "from-emerald-500 to-teal-600",
    glowBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    description: "Ensuring zero-downtime edge deployments, automated testing workflows, type-safe contract validation, and strong computer science fundamentals.",
    ecosystem: ["GitHub Actions", "Vercel Edge Network", "Postman Collections", "Data Structures", "Strict Linting"],
    skills: [
      {
        name: "Git & GitHub Actions",
        icon: <SiGithubactions className="text-slate-800 dark:text-white" size={20} />,
        tier: "CI / CD",
        tierColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
        features: ["Automated Workflows", "PR Linting", "Build Verification", "Branch Protection"],
      },
      {
        name: "Postman & API Testing",
        icon: <SiPostman className="text-orange-500" size={20} />,
        tier: "QA & Testing",
        tierColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
        features: ["Endpoint Testing", "Environment Variables", "Collection Runners", "Automated Assertions"],
      },
      {
        name: "Vercel Edge Deployment",
        icon: <SiVercel className="text-slate-900 dark:text-white" size={20} />,
        tier: "Hosting",
        tierColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
        features: ["Edge Functions", "Zero-Downtime Rollouts", "DNS Management", "Environment Secrets"],
      },
      {
        name: "Data Structures & Algorithms",
        icon: <Cpu className="text-indigo-500" size={20} />,
        tier: "CS Foundation",
        tierColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        features: ["Arrays & Hash Maps", "Trees & Graphs", "Sorting Algorithms", "Time & Space Complexity"],
      },
      {
        name: "Python & Relational SQL",
        icon: <SiPython className="text-yellow-500" size={20} />,
        tier: "Proficient",
        tierColor: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
        features: ["Automation Scripting", "Complex SQL Queries", "Data Aggregations", "Schema Normalization"],
      },
    ],
  },
];

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".skill-tile-anim"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, [selectedFilter, searchQuery]);

  const filteredCategories = skillCategories
    .map((cat) => {
      if (selectedFilter !== "all" && cat.id !== selectedFilter) {
        return null;
      }
      if (!searchQuery.trim()) {
        return cat;
      }
      const filteredSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
          cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredSkills.length === 0) return null;
      return { ...cat, skills: filteredSkills };
    })
    .filter(Boolean);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping"></span>
            <Layers size={14} className="text-violet-500" />
            <span>Skills Catalog & Technology Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Engineering Capabilities &{" "}
            <span className="text-gradient">
              Technology Stack
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            A comprehensive, industry-aligned tech stack spanning frontend, cross-platform mobile,
            scalable cloud storage, distributed databases, and modern AI agent protocols.
          </p>
        </div>

        {/* Capability Overview Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-violet-500/40 transition">
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-1">
              <Cpu size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Frontend & Mobile</span>
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Next.js 15 & RN</p>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">React 19, Expo CLI, Tailwind CSS</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <Cloud size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Cloud & Storage</span>
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">AWS S3 & DynamoDB</p>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Presigned URLs, PostgreSQL, Prisma</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-purple-500/40 transition">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
              <Bot size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">AI Protocols</span>
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">MCP & Claude 101</p>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Anthropic MCP, Agent Workflows</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-emerald-500/40 transition">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
              <ShieldCheck size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Quality & Auth</span>
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">NextAuth v5 & RBAC</p>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Strict Types, CI/CD Pipelines</p>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Skills", icon: <Sparkles size={14} /> },
              { id: "frontend", label: "Frontend & Mobile", icon: <Smartphone size={14} /> },
              { id: "backend", label: "Backend & Cloud", icon: <Server size={14} /> },
              { id: "ai", label: "AI & Agents", icon: <Bot size={14} /> },
              { id: "tools", label: "DevOps & Tools", icon: <Binary size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedFilter(tab.id);
                  setSearchQuery("");
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.id
                    ? "bg-violet-600 text-white shadow-[0_4px_16px_rgba(124,58,237,0.35)]"
                    : "bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-violet-500/30"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack / skills..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none focus:border-violet-500 transition"
            />
          </div>
        </div>

        {/* Categories Grid without progress bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`skill-tile-anim rounded-3xl p-7 sm:p-8 bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl transition duration-300 ${category.glowBorder} shadow-sm flex flex-col justify-between`}
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-violet-600 dark:text-cyan-400">
                        {category.badgeTitle}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                    {category.skills.length} Technologies
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Interactive Icon Grid (NO Progress Bars!) */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 hover:border-violet-500/40 dark:hover:border-cyan-400/40 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 shadow-sm hover:shadow-md space-y-2.5"
                    >
                      {/* Skill Brand Icon & Name */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-center group-hover/skill:scale-110 transition-transform">
                            {skill.icon}
                          </div>
                          <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${skill.tierColor}`}>
                          {skill.tier}
                        </span>
                      </div>

                      {/* Feature Tags Checklist */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {skill.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-white/5 text-slate-600 dark:text-zinc-400 group-hover/skill:text-slate-900 dark:group-hover/skill:text-zinc-200 transition-colors"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Concepts & Architecture Ecosystem */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                  Applied Concepts & Patterns:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.ecosystem.map((eco) => (
                    <span
                      key={eco}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-zinc-300"
                    >
                      {eco}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
