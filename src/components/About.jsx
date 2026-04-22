import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layers3, Rocket, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.children;

    if (!elements) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  const stats = [
    {
      icon: <Rocket size={22} />,
      value: "5+",
      label: "Projects Built",
      color: "text-violet-400",
      glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
    },
    {
      icon: <Code2 size={22} />,
      value: "8+",
      label: "Technologies",
      color: "text-cyan-400",
      glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
    },
    {
      icon: <Layers3 size={22} />,
      value: "1+",
      label: "Years Learning",
      color: "text-violet-400",
      glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
    },
    {
      icon: <Sparkles size={22} />,
      value: "100%",
      label: "Passion Driven",
      color: "text-cyan-400",
      glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div
        ref={sectionRef}
        className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <div>
          <p className="text-cyan-400 mb-4 text-lg font-medium tracking-wide">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Building{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              scalable digital products
            </span>{" "}
            with creativity and precision
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            I’m a passionate{" "}
            <span className="text-white font-medium">MERN Stack Developer</span>{" "}
            focused on crafting responsive, scalable, and visually polished web
            applications using modern technologies like React, Node.js, MongoDB,
            and Tailwind CSS.
          </p>

          <p className="mt-5 text-zinc-500 text-lg leading-relaxed">
            My goal is to combine{" "}
            <span className="text-violet-400">clean architecture</span>,{" "}
            <span className="text-cyan-400">smooth user experiences</span>, and{" "}
            scalable backend systems to create digital solutions that not only
            look premium but also perform exceptionally.
          </p>

          {/* Skills pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm hover:border-cyan-400/40 transition"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((item, i) => (
            <div
              key={i}
              className={`rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition duration-300 ${item.glow} hover:-translate-y-1`}
            >
              <div className={`${item.color} mb-4`}>{item.icon}</div>
              <h3 className={`text-3xl font-bold ${item.color}`}>
                {item.value}
              </h3>
              <p className="mt-2 text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
