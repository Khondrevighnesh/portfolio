import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
  FaCopy,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Sparkles, Send, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".contact-fade-in"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("khondrevighnesh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill in your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 contact-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Let’s create something{" "}
            <span className="text-gradient">
              extraordinary together
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            I’m available for full-time engineering roles, high-impact freelance projects,
            and software consultations. Reach out anytime!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Left Cards Column */}
          <div className="lg:col-span-5 space-y-4 contact-fade-in">
            {/* Phone / WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-emerald-500/40 transition duration-300">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Direct Phone / WhatsApp</h3>
                    <a
                      href="https://wa.me/918010633866"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 dark:text-zinc-400 text-sm hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                    >
                      +91 8010633866
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/918010633866"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 hover:bg-emerald-500 hover:text-white transition"
                >
                  <FaWhatsapp size={14} />
                  <span>Chat</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-violet-500/40 transition duration-300">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-cyan-400 text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Direct Email</h3>
                    <a
                      href="mailto:khondrevighnesh@gmail.com"
                      className="text-slate-600 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition"
                    >
                      khondrevighnesh@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                    copiedEmail
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600"
                      : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-cyan-400"
                  }`}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-violet-500/40 transition duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-lg">
                  <FaGithub />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">GitHub Profile</h3>
                  <a
                    href="https://github.com/Khondrevighnesh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition"
                  >
                    github.com/Khondrevighnesh
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm hover:border-cyan-500/40 transition duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-lg">
                  <FaLinkedin />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">LinkedIn Network</h3>
                  <a
                    href="https://www.linkedin.com/in/vighnesh-khondre-529657259/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition"
                  >
                    linkedin.com/in/vighnesh-khondre
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-600/10 via-cyan-500/10 to-transparent border border-violet-500/20 backdrop-blur-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <FaMapMarkerAlt className="text-violet-600 dark:text-cyan-400" />
                  <span>Pune / Kolhapur, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-zinc-400">
                  <FaClock />
                  <span>&lt;24h response</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Full Stack / Mobile Roles</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 contact-fade-in">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
                Have a project or job opening? Fill out the form and I'll get back to you shortly.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto">
                    Thank you for reaching out. I'll review your note and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-sm transition cursor-pointer shadow-md hover:bg-violet-500"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                      {formError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-1.5">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Full-Stack / Mobile Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project, role, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm transition shadow-[0_4px_14px_rgba(124,58,237,0.35)] cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Scroll To Top Trigger */}
        <div className="flex justify-center mb-12">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:border-violet-500 transition duration-300 shadow-md cursor-pointer"
          >
            <FaArrowUp className="text-slate-600 dark:text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition" />
          </button>
        </div>

        {/* Modern Footer */}
        <footer className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-slate-800 dark:text-white">Vighnesh Khondre</span>.
            All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-violet-600 dark:hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-violet-600 dark:hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-violet-600 dark:hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-violet-600 dark:hover:text-cyan-400 transition">
              Projects
            </a>
          </div>

          <div className="text-[11px] text-slate-400 dark:text-zinc-500">
            Engineered with React 19, Tailwind CSS & Framer Motion
          </div>
        </footer>
      </div>
    </section>
  );
}
