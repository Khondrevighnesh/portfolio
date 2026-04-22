import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    color: "from-violet-400 to-purple-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Tools",
    color: "from-pink-400 to-rose-500",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Redux", level: 78 },
      { name: "Firebase", level: 70 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    title: "Programming",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Python", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "C", level: 65 },
      { name: "SQL", level: 72 },
    ],
  },
];

export default function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-lg font-medium">My Skills</p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Technologies I use to build{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              scalable applications
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A modern stack of frontend, backend, and development tools used to
            craft performant, scalable, and premium digital products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(124,58,237,0.18)] transition duration-300"
            >
              <h3
                className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
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
