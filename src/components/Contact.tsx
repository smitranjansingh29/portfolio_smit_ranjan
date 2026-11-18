import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { profile } from "../data";
import { Magnetic, Reveal } from "./ui";
import { useResumeUrl } from "../lib/resume";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("--:--:--");
  const resumeUrl = useResumeUrl();

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="contact-inner">
            <div className="contact-orb" aria-hidden="true" />
            <span className="eyebrow">
              <span className="eyebrow-dot" /> 06 — Contact
            </span>
            <h2 className="contact-title">
              Got something
              <br />
              <span className="grad-text">worth shipping?</span>
            </h2>
            <p className="contact-sub">
              I'm open to full-time engineering roles and focused freelance
              builds. If you're working on SaaS, AI automation, or a product that
              needs a real front-to-back owner, my inbox is open.
            </p>

            <div className="contact-actions">
              <Magnetic>
                <a
                  className="btn btn-primary"
                  href={`mailto:${profile.email}?subject=Let's%20build%20something`}
                >
                  Start a conversation <ArrowUpRight size={16} />
                </a>
              </Magnetic>
              <button className="btn btn-ghost" onClick={copyEmail}>
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Email copied" : "Copy email"}
              </button>
              {resumeUrl ? (
                <Magnetic>
                  <a
                    className="btn btn-ghost"
                    href={resumeUrl}
                    download="Smit-Ranjan-Singh-Resume.pdf"
                  >
                    <Download size={15} /> Download résumé
                  </a>
                </Magnetic>
              ) : null}
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <span className="contact-label">
                  <Mail size={12} /> Email
                </span>
                <span className="contact-value">{profile.email}</span>
                <button className="copy-btn" onClick={copyEmail}>
                  {copied ? "Copied to clipboard" : "Click to copy"}
                </button>
              </div>

              <a className="contact-card" href={`tel:${profile.phoneRaw}`}>
                <span className="contact-label">
                  <Phone size={12} /> Phone
                </span>
                <span className="contact-value">{profile.phone}</span>
                <span className="copy-btn">Tap to call</span>
              </a>

              <div className="contact-card">
                <span className="contact-label">
                  <MapPin size={12} /> Based in
                </span>
                <span className="contact-value">{profile.location}</span>
                <span className="clock">
                  <Clock size={11} /> {time} IST
                </span>
              </div>

              <a
                className="contact-card"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact-label">
                  <Github size={12} /> GitHub
                </span>
                <span className="contact-value">{profile.githubLabel}</span>
                <span className="copy-btn">
                  Browse repositories <ArrowUpRight size={11} />
                </span>
              </a>

              <a
                className="contact-card"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact-label">
                  <Linkedin size={12} /> LinkedIn
                </span>
                <span className="contact-value">{profile.linkedinLabel}</span>
                <span className="copy-btn">
                  Connect with me <ArrowUpRight size={11} />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
