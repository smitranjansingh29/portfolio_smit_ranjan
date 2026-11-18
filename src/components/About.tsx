import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Workflow } from "lucide-react";
import { profile, stats } from "../data";
import { CountUp, Reveal, SectionHead } from "./ui";
import Portrait from "./Portrait";

export default function About() {
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [34, -34]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2.5, 2.5]);

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          eyebrow="01 — About"
          title={
            <>
              Engineering with an{" "}
              <span className="grad-text">owner's mindset</span>.
            </>
          }
        />

        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <p className="about-lead">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="about-body">{profile.summaryTwo}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-body">
                Comfortable with the unglamorous parts too — migrations, incident
                calls, the slow query nobody wants to profile. That is usually
                where the leverage is.
              </p>
            </Reveal>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <Reveal className="stat" key={stat.label} delay={index * 0.07}>
                  <div className="stat-value">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-hint">{stat.hint}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about-visual" ref={visualRef}>
            <motion.div className="portrait-wrap" style={{ y, rotate }}>
              <Portrait />
            </motion.div>

            <div className="about-caption">
              <Workflow size={13} />
              Design → API → data → deploy → on-call
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
