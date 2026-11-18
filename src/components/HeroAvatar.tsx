import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePhotoUrl } from "../lib/photo";

export default function HeroAvatar({ ready }: { ready: boolean }) {
  const { src, onError } = usePhotoUrl();
  const wrapRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-18, 18]),
    { stiffness: 180, damping: 18, mass: 0.4 }
  );
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [14, -14]),
    { stiffness: 180, damping: 18, mass: 0.4 }
  );

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={wrapRef}
      className="hero-avatar"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
      animate={ready ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="hero-avatar-tilt"
        style={{ rotateX, rotateY }}
      >
        <div className="hero-avatar-float">
          <span className="hero-avatar-glow" aria-hidden="true" />
          <span className="hero-avatar-halo" aria-hidden="true" />
          <span className="hero-avatar-orbit" aria-hidden="true" />
          <span className="hero-avatar-ring" aria-hidden="true" />
          <div className="hero-avatar-img">
            {src ? (
              <>
                <motion.div
                  className="hero-avatar-photo"
                  initial={{
                    clipPath: "circle(0% at 50% 45%)",
                    scale: 1.5,
                    filter: "saturate(0.15) blur(8px)",
                  }}
                  animate={
                    ready
                      ? {
                          clipPath: "circle(75% at 50% 45%)",
                          scale: 1,
                          filter: "saturate(1) blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.25,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <img
                    src={src}
                    alt="Smit Ranjan Singh"
                    onError={onError}
                    width={76}
                    height={76}
                  />
                </motion.div>
                <span className="hero-avatar-sheen" aria-hidden="true" />
                <motion.span
                  className="hero-avatar-wipe"
                  aria-hidden="true"
                  initial={{ x: "-130%" }}
                  animate={ready ? { x: "130%" } : {}}
                  transition={{ duration: 1.15, delay: 0.35, ease: "easeInOut" }}
                />
              </>
            ) : (
              <span className="hero-avatar-fallback">SR</span>
            )}
          </div>
          <span
            className="hero-avatar-status"
            role="img"
            aria-label="Available for work"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
