import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Rocket,
  Sparkles,
  Briefcase,
  CheckCircle2,
  Compass,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".about-fade-in"),
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

  const coreStrengths = [
    "Full-stack web applications with Next.js 15 & React 19",
    "Cross-platform mobile apps with React Native & Expo",
    "AWS S3 presigned URL media upload architectures",
    "Relational (PostgreSQL/Prisma) & NoSQL (MongoDB/DynamoDB) databases",
    "Secure authentication, NextAuth v5 & Role-Based Access Control (RBAC)",
    "Clean REST API design, Server Actions & Zod validation",
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-violet-600/10 dark:bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 about-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>About Me • Background</span>
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

        {/* Content Grid */}
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

              {/* Quick Navigation Action Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection("skills")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-300 hover:bg-violet-500/20 border border-violet-500/20 transition cursor-pointer"
                >
                  <span>Explore Skills Matrix</span>
                  <ArrowRight size={13} />
                </button>

                <button
                  onClick={() => scrollToSection("experience")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 transition cursor-pointer"
                >
                  <span>View Career & Experience</span>
                  <ArrowRight size={13} />
                </button>
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
      </div>
    </section>
  );
}
