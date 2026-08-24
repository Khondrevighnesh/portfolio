import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-x-hidden selection:bg-violet-600 selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
