import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let frame = 0;
    let finish: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        finish = setTimeout(onDone, 240);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      if (finish) clearTimeout(finish);
    };
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="preloader-inner">
        <div className="preloader-brand">
          <span>Smit Ranjan Singh</span>
          <span>Portfolio · 2026</span>
        </div>

        <div className="preloader-count">
          <span>{String(count).padStart(3, "0")}</span>
          <small>%</small>
        </div>

        <div className="preloader-track">
          <motion.div
            className="preloader-bar"
            style={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <div className="preloader-meta">
          <span>Booting interface</span>
          <span>React · Node · Python</span>
        </div>
      </div>
    </motion.div>
  );
}
