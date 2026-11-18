import {
  Award,
  Clock,
  GraduationCap,
  Headphones,
  Languages,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { achievements, certifications, education, facts } from "../data";
import { Reveal, SectionHead } from "./ui";

const factIcons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  clock: Clock,
  globe: Languages,
  headset: Headphones,
};

export default function Signals() {
  return (
    <section id="signals" className="section">
      <div className="container">
        <SectionHead
          eyebrow="05 — Signals"
          title={
            <>
              Receipts, <span className="grad-text">not adjectives</span>.
            </>
          }
          sub="Numbers I can defend, credentials I earned, and the fundamentals underneath them."
        />

        <div className="signals-grid">
          <Reveal className="panel">
            <h3 className="panel-title">
              <Trophy size={17} /> Impact
            </h3>
            {achievements.map((achievement) => (
              <div className="ach-item" key={achievement.title}>
                <span className="ach-icon">
                  <Trophy size={15} />
                </span>
                <div>
                  <div className="ach-title">{achievement.title}</div>
                  <div className="ach-body">{achievement.body}</div>
                </div>
              </div>
            ))}

            <div className="edu-card">
              <span className="edu-icon">
                <GraduationCap size={18} />
              </span>
              <div>
                <div className="edu-degree">{education.degree}</div>
                <div className="edu-school">{education.school}</div>
                <div className="edu-period">{education.period}</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="panel" delay={0.08}>
            <h3 className="panel-title">
              <Award size={17} /> Certifications &amp; programs
            </h3>
            <div className="cert-list">
              {certifications.map((certification) => (
                <div className="cert" key={certification.title}>
                  <div>
                    <div className="cert-title">{certification.title}</div>
                    <div className="cert-issuer">{certification.issuer}</div>
                  </div>
                  <span className="cert-tag">{certification.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="panel facts-panel" delay={0.12}>
            <h3 className="panel-title">
              <ShieldCheck size={17} /> Working details
            </h3>
            <div className="facts-grid">
              {facts.map((fact) => {
                const Icon = factIcons[fact.icon] ?? ShieldCheck;
                return (
                  <div className="fact" key={fact.label}>
                    <span className="fact-icon">
                      <Icon size={15} />
                    </span>
                    <div>
                      <div className="fact-label">{fact.label}</div>
                      <div className="fact-value">{fact.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
