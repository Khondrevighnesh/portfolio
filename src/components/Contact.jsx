import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-lg font-medium">Get In Touch</p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Let’s create something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              exceptional together
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I’m open to freelance opportunities, full-time roles, and exciting
            collaborations. Let’s connect and build impactful digital
            experiences.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-400 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-zinc-400 text-sm">
                    khondrevighnesh@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 text-xl">
                  <FaGithub />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <a
                    href="https://github.com/Khondrevighnesh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 text-sm hover:text-white transition"
                  >
                    github.com/Khondrevighnesh
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-400 text-xl">
                  <FaLinkedin />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/vighnesh-khondre-529657259/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 text-sm hover:text-white transition"
                  >
                    vighnesh khondre
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl p-8 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white">
                Ready to build your next project?
              </h3>
              <p className="text-zinc-300 mt-3 leading-relaxed">
                Let’s collaborate to create scalable, high-quality applications
                with modern technologies and premium user experiences.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(124,58,237,0.12)] transition">
            <form className="space-y-5">
              <div>
                <label className="text-sm text-zinc-300">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:scale-[1.02] transition font-medium shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        {/* Scroll To Top */}
        <div className="mt-20 flex justify-center">
          <a
            href="#hero"
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-violet-500/20 hover:border-violet-400/30 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)] transition duration-300 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-zinc-300 group-hover:text-white transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>

        {/* Footer */}

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-zinc-500 text-sm">
          © 2026 Vighnesh Khondre. Crafted with React, Tailwind CSS, GSAP &
          Framer Motion.
        </div>
      </div>
    </section>
  );
}
