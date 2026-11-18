import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- SplitText ------------------------------- */

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.035,
  play = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  play?: boolean;
}) {
  const words = text.split(" ");
  let index = -1;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span className="split-word" key={`${word}-${wi}`} aria-hidden="true">
          {Array.from(word).map((char) => {
            index += 1;
            return (
              <motion.span
                className="split-char"
                key={`${char}-${index}`}
                initial={{ y: "115%", opacity: 0, rotate: 7 }}
                animate={play ? { y: "0%", opacity: 1, rotate: 0 } : undefined}
                transition={{
                  duration: 0.95,
                  delay: delay + index * stagger,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 ? <span className="split-space" /> : null}
        </span>
      ))}
    </span>
  );
}

/* --------------------------------- Magnetic -------------------------------- */

export function Magnetic({
  children,
  className = "",
  strength = 0.22,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(event: ReactMouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- SpotlightCard ----------------------------- */

export function SpotlightCard({
  children,
  className = "",
  tilt = true,
  strength = 6,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 170, damping: 20 });
  const sry = useSpring(ry, { stiffness: 170, damping: 20 });

  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (tilt) {
      ry.set((px - 0.5) * strength * 2);
      rx.set((0.5 - py) * strength * 2);
    }
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- CountUp --------------------------------- */

export function CountUp({
  value,
  suffix = "",
  duration = 1.7,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ------------------------------- SectionHead ------------------------------- */

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
  icon: Icon,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  icon?: LucideIcon;
}) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
          {Icon ? <Icon size={12} strokeWidth={2} /> : null}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.12}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* --------------------------------- Marquee --------------------------------- */

export function Marquee({
  items,
  reverse = false,
  speed = 38,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((rep) => (
          <div className="marquee-group" key={rep}>
            {items.map((item) => (
              <span className="marquee-item" key={`${rep}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
