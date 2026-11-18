import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Signals from "./components/Signals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Marquee } from "./components/ui";

const tech = [
  "React.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "FastAPI",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "LangChain",
  "GPT-4",
  "RAG",
  "Agentic AI",
  "Framer Motion",
  "MS Graph API",
  "Vite",
];

const traits = [
  "Multi-tenant architecture",
  "AI automation",
  "REST APIs",
  "CI/CD",
  "RBAC & OAuth 2.0",
  "Peak-load performance",
  "Incident response",
];

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", !loaded);
  }, [loaded]);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <AnimatePresence>
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <Nav />

      <main>
        <Hero ready={loaded} />
        <Marquee items={tech} speed={42} />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Marquee items={traits} speed={38} reverse />
        <Signals />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
