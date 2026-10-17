import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import cover from "@/assets/cover-front.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";

const NAV = [
  { to: "/book", label: "The Book" },
  { to: "/chapters", label: "Chapters" },
  { to: "/author", label: "Author" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gold" />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="display text-lg tracking-[0.12em] text-ivory">
          The Art of <span className="text-gold">Locking In</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="link-underline text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-ivory data-[status=active]:text-champagne">
              {n.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Open menu" className="md:hidden text-ivory" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-border bg-background px-6 py-8 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="display text-3xl text-ivory data-[status=active]:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr] md:px-10">
        <div>
          <p className="display text-4xl text-ivory">The Art of <span className="text-gold-gradient">Locking In</span></p>
          <p className="mt-4 font-serif text-xl italic text-muted-foreground">You don't need to become perfect. You need to become intentional.</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="eyebrow mb-2">Explore</p>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground hover:text-champagne">{n.label}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="eyebrow mb-2">Follow</p>
          {SITE.social.length ? SITE.social.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-champagne">{s.label}</a>
          )) : <p className="text-sm text-muted-foreground">Official channels coming soon.</p>}
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} {SITE.author}
      </div>
    </footer>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function BookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="gold-glow absolute -inset-16 -z-10 opacity-70" />
      <div className="relative aspect-[1366/2082] [perspective:1400px]">
        <div className="relative h-full w-full shadow-book transition-transform duration-700 [transform:rotateY(-14deg)] hover:[transform:rotateY(-4deg)]">
          <img src={cover.url} alt="The Art of Locking In by Andrew Rusch — book cover" className="h-full w-full object-cover" width={1366} height={2082} />
          <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-background/70 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function PurchaseButton({ size = "xl" as const }: { size?: "xl" | "lg" }) {
  if (!SITE.purchaseUrl) {
    return (
      <Button variant="gold" size={size} asChild>
        <Link to="/book" hash="purchase">Discover the Book</Link>
      </Button>
    );
  }
  return (
    <Button variant="gold" size={size} asChild>
      <a href={SITE.purchaseUrl} target="_blank" rel="noreferrer">Get the Book</a>
    </Button>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="grain relative overflow-hidden border-b border-border px-6 pb-20 pt-40 md:px-10">
      <div className="chessboard absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <Reveal delay={0.1}><h1 className="display mt-6 max-w-5xl text-6xl text-ivory md:text-8xl">{title}</h1></Reveal>
        {children && <Reveal delay={0.2}><div className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</div></Reveal>}
      </div>
    </section>
  );
}
