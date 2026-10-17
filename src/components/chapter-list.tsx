import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CHAPTERS } from "@/lib/content";

export function ChapterList() {
  const [open, setOpen] = useState<string | null>("01");
  return (
    <ol className="border-t border-border">
      {CHAPTERS.map((c, i) => {
        const isOpen = open === c.n;
        return (
          <motion.li
            key={c.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (i % 6) * 0.05 }}
            className="group border-b border-border"
          >
            <button
              onClick={() => setOpen(isOpen ? null : c.n)}
              aria-expanded={isOpen}
              className="grid w-full grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 py-7 text-left md:grid-cols-[6rem_1fr_auto]"
            >
              <span className="font-serif text-2xl italic text-gold md:text-3xl">{c.n}</span>
              <span className={`display text-2xl transition-colors duration-500 md:text-5xl ${isOpen ? "text-champagne" : "text-ivory group-hover:text-champagne"}`}>{c.title}</span>
              <span className={`text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-10 pl-[4.5rem] md:grid-cols-2 md:pl-[7rem]">
                    <p className="font-serif text-2xl italic leading-snug text-champagne">“{c.opening}”</p>
                    <p className="leading-relaxed text-muted-foreground">{c.summary}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ol>
  );
}
