import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "../data";
import { Reveal, SectionHead, SpotlightCard } from "./ui";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  sparkles: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          eyebrow="02 — Stack"
          title={
            <>
              A stack chosen for <span className="grad-text">shipping</span>.
            </>
          }
          sub="Frontend to infrastructure — the tools I reach for when a feature has to survive real traffic, real deadlines and the next engineer who reads it."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Sparkles;
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <SpotlightCard className="skill-card">
                  <div className="skill-head">
                    <span className="skill-icon">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="skill-title">{group.title}</h3>
                      <p className="skill-note">{group.note}</p>
                    </div>
                  </div>
                  <motion.div
                    className="chips"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.045 } },
                    }}
                  >
                    {group.items.map((item) => (
                      <motion.span
                        className="chip"
                        key={item}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
