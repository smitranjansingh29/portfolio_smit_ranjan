import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-mid">
          Built with React, Framer Motion &amp; a canvas
        </span>
        <div className="footer-actions">
          <a
            className="footer-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Github size={13} /> GitHub
          </a>
          <a
            className="footer-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin size={13} /> LinkedIn
          </a>
          <button
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
