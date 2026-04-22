import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-lg font-medium">Featured Projects</p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Crafting{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              premium full-stack applications
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of scalable, user-centric applications built with
            modern technologies, premium interfaces, and real-world business
            logic.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(124,58,237,0.18)] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${index === 0 ? "h-80" : "h-64"} relative overflow-hidden`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20"></div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 mt-2">
                    {project.tech.slice(0, 3).join(" • ")}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-zinc-400 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Highlights
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/10"
                      >
                        {feature}
                      </span>
                    ))}

                    {project.features.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-400 border border-white/10">
                        +{project.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 hover:scale-105 transition font-medium shadow-lg"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
