import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Lock } from "lucide-react";
import { projects, type Project } from "../data";
import { Reveal, SectionHead, SpotlightCard } from "./ui";

const bars = [38, 54, 44, 68, 56, 84, 62, 92, 74, 100, 78, 64];

function DashboardArt() {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-topbar">
        <i />
        <i />
        <i />
        <span className="art-url">platform / analytics</span>
      </div>
      <div className="art-body dash">
        <div className="art-side">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="art-main">
          <div className="art-stats">
            {[0, 1, 2].map((index) => (
              <div
                className="art-stat"
                key={index}
                style={{ "--d": `${index * 0.4}s` } as CSSProperties}
              />
            ))}
          </div>
          <div className="art-chart">
            {bars.map((height, index) => (
              <span
                key={index}
                style={
                  {
                    "--h": `${height}%`,
                    "--d": `${index * 0.13}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AiArt() {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-topbar">
        <i />
        <i />
        <i />
        <span className="art-url">triage / rag pipeline</span>
      </div>
      <div className="ai-flow">
        <span className="flow-node">Mail</span>
        <span className="flow-link" />
        <span className="flow-node hot">GPT-4</span>
        <span className="flow-link" />
        <span className="flow-node">SLA</span>
      </div>
      <div className="ai-output">
        <div className="ai-row">
          <span className="ai-dot" />
          <span>classified · billing</span>
          <span className="ai-score">0.96</span>
        </div>
        <div className="ai-row">
          <span className="ai-dot" />
          <span>priority · high</span>
          <span className="ai-score">0.91</span>
        </div>
        <div className="ai-row">
          <span className="ai-dot" />
          <span>routed → platform-eng</span>
          <span className="ai-score">0.88</span>
        </div>
      </div>
      <div className="ai-typing">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function VideoArt() {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-topbar">
        <i />
        <i />
        <i />
        <span className="art-url">youtube-clone</span>
      </div>
      <div className="art-search">
        <span />
      </div>
      <div className="art-video-grid">
        {[0, 1, 2, 3].map((index) => (
          <div
            className="vid"
            key={index}
            style={{ "--d": `${index * 0.35}s` } as CSSProperties}
          >
            <span className="vid-play" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal>
      <SpotlightCard className="project" tilt={false}>
        <div className="project-visual">
          {project.art === "dashboard" ? (
            <DashboardArt />
          ) : project.art === "ai" ? (
            <AiArt />
          ) : (
            <VideoArt />
          )}
        </div>

        <div className="project-body">
          <span className="project-index">{project.index} — case study</span>
          <h3 className="project-title">{project.title}</h3>
          <span className="project-kicker">{project.kicker}</span>
          <p className="project-desc">{project.description}</p>

          <div className="project-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <button
            className="project-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
          >
            {open ? "Hide the details" : "Read the details"}
            <ChevronDown
              size={14}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .35s ease",
              }}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="project-more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead
          eyebrow="03 — Selected work"
          title={
            <>
              Systems I <span className="grad-text">designed &amp; shipped</span>.
            </>
          }
          sub="Three builds that show the range: a multi-tenant platform under real traffic, an AI pipeline that removes manual work, and a frontend library that keeps design honest."
        />

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.index} />
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="work-note">
            <Lock size={12} /> Two of these live inside private company systems —
            happy to walk through the architecture on a call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
