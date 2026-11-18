import { motion } from "framer-motion";
import { BadgeCheck, Layers } from "lucide-react";
import { SpotlightCard } from "./ui";
import { usePhotoUrl } from "../lib/photo";

export default function Portrait() {
  const { src, onError } = usePhotoUrl();

  return (
    <SpotlightCard className="portrait-card" strength={9}>
      <div className="portrait-ring" aria-hidden="true" />

      <div className="portrait-arch">
        <div className="portrait-media">
          {src ? (
            <motion.img
              key={src}
              src={src}
              alt="Smit Ranjan Singh"
              onError={onError}
              initial={{ scale: 1.14, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          ) : (
            <div className="portrait-fallback">SR</div>
          )}
        </div>

        <div className="portrait-tint" aria-hidden="true" />
        <div className="portrait-shade" aria-hidden="true" />
        <span className="portrait-scan" aria-hidden="true" />

        <span className="portrait-avail">
          <span className="dot" /> Open to work
        </span>

        <div className="portrait-meta">
          <span className="portrait-name">Smit Ranjan Singh</span>
          <span className="portrait-role">Full Stack · AI · Cloud</span>
        </div>
      </div>

      <div className="float-badge fb-1">
        <Layers size={11} /> SaaS · 1.2k users
      </div>
      <div className="float-badge fb-2">
        <BadgeCheck size={11} /> Production owner
      </div>
    </SpotlightCard>
  );
}
