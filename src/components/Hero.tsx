import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import ParticleField from "./ParticleField";
import HeroAvatar from "./HeroAvatar";
import { Magnetic, SplitText } from "./ui";
import { useResumeUrl } from "../lib/resume";
import { heroRoles, profile, terminalLines } from "../data";

export default function Hero({ ready }: { ready: boolean }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const resumeUrl = useResumeUrl();

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((index) => (index + 1) % heroRoles.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!ready || visibleLines >= terminalLines.length) return;
    const timer = setTimeout(
      () => setVisibleLines((value) => value + 1),
      visibleLines === 0 ? 460 : 370
    );
    return () => clearTimeout(timer);
  }, [ready, visibleLines]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <ParticleField className="hero-canvas" />
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-intro">
            <HeroAvatar ready={ready} />
            <motion.div
              className="status-pill"
              initial={{ opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="dot" /> Available for new work · {profile.city}
            </motion.div>
          </div>

          <h1 className="hero-name">
            <span className="line">
              <SplitText text="SMIT" play={ready} delay={0.18} stagger={0.05} />
            </span>
            <span className="line outline">
              <SplitText text="RANJAN" play={ready} delay={0.3} stagger={0.042} />
            </span>
            <span className="line grad">
              <SplitText text="SINGH" play={ready} delay={0.44} stagger={0.042} />
            </span>
          </h1>

          <div className="hero-role">
            <span className="slash">/</span>
            <span className="role-rotator">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={heroRoles[roleIndex]}
                  className="role-item"
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {heroRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            I build production systems end to end — multi-tenant SaaS, AI-powered
            automation, and the cloud pipelines that keep them live. Currently
            shipping with React, TypeScript, Node.js and Python.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Magnetic>
              <a className="btn btn-primary" href="#work">
                Explore my work <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                <Mail size={15} /> Let's talk
              </a>
            </Magnetic>
            {resumeUrl ? (
              <Magnetic>
                <a
                  className="btn btn-ghost"
                  href={resumeUrl}
                  download="Smit-Ranjan-Singh-Resume.pdf"
                >
                  <Download size={15} /> Résumé
                </a>
              </Magnetic>
            ) : null}
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.05 }}
          >
            <span>
              <MapPin size={13} /> {profile.location}
            </span>
            <span>
              <span className="meta-dot" /> 2+ years shipping
            </span>
            <span>IST · UTC+5:30</span>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.15 }}
          >
            <a
              className="social-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={15} /> GitHub <ArrowUpRight size={11} />
            </a>
            <a
              className="social-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={11} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40, rotateX: 9 }}
          animate={ready ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="float-card fc-1">
            <span className="fc-icon">
              <Users size={15} />
            </span>
            <div>
              <div className="fc-value">1,200+</div>
              <div className="fc-label">concurrent users</div>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot red" />
              <span className="terminal-dot amber" />
              <span className="terminal-dot green" />
              <span className="terminal-title">smit@portfolio — zsh</span>
            </div>
            <div className="terminal-body">
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  className={`term-line ${line.kind}`}
                  key={line.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.32 }}
                >
                  <span className="term-prompt">{line.prompt}</span>
                  <span className="term-text">{line.text}</span>
                </motion.div>
              ))}
              <div className="term-line">
                <span className="term-prompt">$</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>

          <div className="float-card fc-2">
            <span className="fc-icon violet">
              <Zap size={15} />
            </span>
            <div>
              <div className="fc-value">−35%</div>
              <div className="fc-label">API latency</div>
            </div>
          </div>

          <div className="float-card fc-3">
            <span className="fc-icon pink">
              <Sparkles size={15} />
            </span>
            <div>
              <div className="fc-value">RAG</div>
              <div className="fc-label">AI automation</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        className="scroll-cue"
        href="#about"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="bar" />
        Scroll to explore
        <ArrowDown size={12} />
      </motion.a>
    </section>
  );
}
