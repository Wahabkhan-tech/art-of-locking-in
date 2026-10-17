import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo } from "react";
import king from "@/assets/king.png";

/** Fixed-position black king that travels between deliberate positions as the page scrolls. */
export function TravellingKing() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 50, damping: 22 });
  // Deliberate stops: hero (right), attention (center, faint), comfort (left), execution (right), mission (center).
  const stops = [0, 0.18, 0.4, 0.62, 0.85, 1];
  const x = useTransform(p, stops, ["3vw", "0vw", "-30vw", "30vw", "0vw", "0vw"]);
  const opacity = useTransform(p, stops, [1, 0.35, 0.5, 0.45, 1, 1]);
  const scale = useTransform(p, stops, [1, 0.85, 0.8, 0.8, 1.05, 1.05]);
  const mx = useMotionValue(0);
  const rot = useSpring(useTransform(mx, [-1, 1], [-5, 5]), { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const on = (e: PointerEvent) => mx.set((e.clientX / window.innerWidth) * 2 - 1);
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, [mx, reduce]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden items-end justify-center overflow-hidden lg:flex">
      <motion.div style={reduce ? { x: "3vw" } : { x, opacity, scale }} className="relative mb-[4vh] h-[78vh]">
        <div className="gold-glow absolute left-1/2 top-[20%] h-[60vh] w-[60vh] -translate-x-1/2" />
        <motion.img
          src={king}
          alt=""
          width={768}
          height={1344}
          initial={reduce ? false : { opacity: 0, filter: "brightness(0)", y: 40 }}
          animate={{ opacity: 1, filter: "brightness(1)", y: 0 }}
          transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1], delay: 0.3 }}
          style={{ rotateY: rot }}
          className="relative h-full w-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.9)]"
        />
        <div className="absolute -bottom-3 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-[50%] bg-gold/20 blur-xl" />
      </motion.div>
    </div>
  );
}

export function Dust({ count = 26 }: { count?: number }) {
  const reduce = useReducedMotion();
  const specks = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      left: (i * 37) % 100, top: 30 + ((i * 53) % 70), size: 1 + (i % 3), delay: (i * 0.7) % 9,
    })),
    [count],
  );
  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {specks.map((s, i) => (
        <span key={i} className="animate-dust absolute rounded-full bg-champagne"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />
      ))}
    </div>
  );
}
