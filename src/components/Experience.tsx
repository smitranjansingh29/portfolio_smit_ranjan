import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Activity,
  Building2,
  Cloud,
  Database,
  Layers,
  Layout,
  MapPin,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { experience } from "../data";
import { Reveal, SectionHead } from "./ui";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  layout: Layout,
  sparkles: Sparkles,
  database: Database,
  cloud: Cloud,
  shield: ShieldCheck,
  activity: Activity,
};

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 78%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          eyebrow="04 — Experience"
          title={
            <>
              Production work, <span className="grad-text">not theory</span>.
            </>
          }
        />

        <div className="xp">
          <Reveal className="xp-side">
            <span className="xp-period">{experience.period}</span>
            <h3 className="xp-company">{experience.role}</h3>
            <span className="xp-loc">
              <Building2 size={13} /> {experience.company}
            </span>
            <span className="xp-loc">
              <MapPin size={13} /> {experience.location}
            </span>
            <p>{experience.summary}</p>
            <div className="xp-tags">
              {experience.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="xp-rail" ref={railRef}>
            <div className="xp-line" aria-hidden="true">
              <motion.div className="xp-line-fill" style={{ scaleY }} />
            </div>

            {experience.points.map((point, index) => {
              const Icon = icons[point.icon] ?? Sparkles;
              return (
                <motion.div
                  className="xp-item"
                  key={point.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="xp-dot">
                    <Icon size={10} />
                  </span>
                  <div className="xp-card">
                    <h4 className="xp-title">
                      <span>{point.title}</span>
                      <span className="xp-metric">{point.metric}</span>
                    </h4>
                    <p className="xp-body">{point.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
