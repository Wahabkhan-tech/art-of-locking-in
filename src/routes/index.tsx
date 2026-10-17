import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import king from "@/assets/king.png";
import { Button } from "@/components/ui/button";
import { BookCover, PurchaseButton, Reveal } from "@/components/site";
import { Dust, TravellingKing } from "@/components/king";
import { ChapterList } from "@/components/chapter-list";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Art of Locking In — Andrew Rusch | Your Attention Is Your Freedom" },
      { name: "description", content: "A book on reclaiming your attention, building discipline, mastering execution and taking ownership of your future." },
      { property: "og:title", content: "The Art of Locking In — Andrew Rusch" },
      { property: "og:description", content: "Your attention is your freedom. Reclaim your focus, build your discipline, and take ownership of the life you are creating." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <TravellingKing />
      <div className="relative z-10">
        <Hero />
        <AttentionWar />
        <Comfort />
        <Identity />
        <Execution />
        <BuildValue />
        <ChaptersPreview />
        <AuthorTeaser />
        <JournalTeaser />
        <Mission />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="grain relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-10">
      <div className="chessboard absolute inset-x-0 bottom-0 h-1/2 [mask-image:linear-gradient(to_top,black,transparent)] [transform:perspective(600px)_rotateX(55deg)] origin-bottom" />
      <Dust />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[5fr_3fr_3fr]">
        <div>
          <Reveal><p className="eyebrow">A book by Andrew Rusch</p></Reveal>
          <Reveal delay={0.15}>
            <h1 className="display mt-6 text-[clamp(3.4rem,8vw,7.5rem)] text-ivory">
              Your attention<br />is your <span className="text-gold-gradient">freedom.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              In a world designed to distract you, learn to reclaim your focus, build your discipline, and take ownership of the life you are creating.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button variant="gold" size="xl" asChild><Link to="/book">Discover the Book</Link></Button>
              <Button variant="line" size="xl" asChild><Link to="/chapters">Explore the 12 Chapters</Link></Button>
            </div>
          </Reveal>
        </div>
        <div className="hidden lg:block" />
        <Reveal delay={0.5} className="mx-auto w-56 sm:w-64 lg:w-full">
          <BookCover />
          <p className="mt-8 text-center font-serif text-lg italic text-muted-foreground">The Art of Locking In</p>
        </Reveal>
      </div>
      <img src={king} alt="" aria-hidden width={768} height={1344} className="pointer-events-none absolute -bottom-10 right-0 h-[60vh] w-auto opacity-20 lg:hidden" />
    </section>
  );
}

function AttentionWar() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fade = useTransform(scrollYProgress, [0.2, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0.2, 0.7], ["blur(2px)", "blur(14px)"]);
  const pings = ["New message", "3 notifications", "You might also like", "Trending now", "Just five more minutes", "Autoplay in 5s", "Someone mentioned you", "Limited time"];
  return (
    <section ref={ref} className="relative min-h-[110vh] overflow-hidden border-t border-border px-6 py-32 md:px-10">
      <motion.div style={reduce ? {} : { opacity: fade, filter: blur }} aria-hidden className="absolute inset-0">
        {pings.map((t, i) => (
          <div key={t} className="animate-drift absolute border border-border bg-elevated/60 px-4 py-2 text-xs tracking-wide text-muted-foreground"
            style={{ top: `${10 + i * 10}%`, animationDelay: `${-i * 2.7}s`, animationDuration: `${18 + (i % 4) * 5}s` }}>
            {t}
          </div>
        ))}
      </motion.div>
      <div className="relative mx-auto max-w-7xl">
        <Reveal><p className="eyebrow">Chapter 01 · The Attention War</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-6 max-w-4xl text-6xl text-ivory md:text-8xl">The world wants your attention.</h2></Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Your attention is constantly being pulled in different directions. The first step toward change is deciding what deserves it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <blockquote className="mt-20 max-w-2xl border-l border-gold pl-8 font-serif text-3xl italic leading-snug text-champagne md:text-4xl">
            “You are not lazy. You are being trained.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function Comfort() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/60 px-6 py-32 md:px-10">
      <div className="chessboard absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div className="lg:col-start-2">
          <Reveal><p className="eyebrow">Chapter 03 · Comfort Is Killing Ambition</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-6 text-6xl text-ivory md:text-8xl">Comfort can become a <span className="text-gold-gradient">cage.</span></h2></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>Rest is not the enemy. Once in a while, choosing ease is simply human.</p>
              <p>But when comfort becomes your automatic response to every challenge, it stops being rest and starts becoming your identity — quietly training you to avoid the version of life that growth requires.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}><p className="mt-12 font-serif text-2xl italic text-champagne">“Comfort does not always look dangerous. That is what makes it dangerous.”</p></Reveal>
        </div>
      </div>
    </section>
  );
}

function Identity() {
  const lines = ["Ready is usually just another excuse disguised as preparation.", "Before discipline can last, you have to change who you believe you are.", "You can force discipline for a few days.", "But if your identity does not change, the old version of you will pull you back."];
  return (
    <section className="relative border-t border-border px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="eyebrow">Chapter 04 · Identity Before Discipline</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-6 text-6xl text-ivory md:text-[9rem]">Stop waiting<br />to feel ready.</h2></Reveal>
        <div className="mt-20 ml-auto max-w-2xl space-y-14">
          {lines.map((l, i) => (
            <Reveal key={l} delay={0.05}>
              <p className="flex gap-6 font-serif text-3xl leading-snug text-ivory md:text-4xl">
                <span className="mt-3 h-px w-10 shrink-0 bg-gold" />
                <span className={i === lines.length - 1 ? "text-champagne italic" : ""}>{l}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Execution() {
  const steps = [
    { k: "Intention", t: "Identity", d: "Decide who you are becoming." },
    { k: "Discipline", t: "Consistency", d: "Move without waiting for the feeling." },
    { k: "Action", t: "Execution", d: "Ideas do not change your life. Execution does." },
    { k: "Depth", t: "Focus", d: "Give one thing your full attention long enough to get good." },
    { k: "Structure", t: "Routine", d: "Where your identity becomes real." },
  ];
  return (
    <section className="relative border-t border-border bg-card/60 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="eyebrow">Chapters 05 – 08</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-6 max-w-5xl text-5xl text-ivory md:text-7xl">Your future is built by what you <span className="text-gold-gradient">repeatedly do.</span></h2></Reveal>
        <div className="relative mt-24">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 2.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-gold md:block" />
          <div className="grid gap-12 md:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={0.3 + i * 0.25}>
                <div className="relative">
                  <span className="block h-[15px] w-[15px] rotate-45 border border-gold bg-background" />
                  <p className="eyebrow mt-8 text-muted-foreground">{s.k}</p>
                  <p className="display mt-3 text-3xl text-ivory">{s.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildValue() {
  return (
    <section className="relative border-t border-border px-6 py-32 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal><p className="eyebrow">Chapter 11 · Build a System That Captures Money</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-6 text-5xl text-ivory md:text-7xl">Don't just consume. Build something that <span className="text-gold-gradient">lasts.</span></h2></Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:pt-16">
            <p className="font-serif text-3xl italic text-champagne">“Discipline gives you control. Money systems give you leverage.”</p>
            <p>The book argues that discipline needs a target. Once you can focus and execute, direct that energy toward something that produces value — a skill, a product, a service, a business, a brand or a repeatable offer.</p>
            <p className="text-sm">These are principles for building ownership and independence over time, not a promise of income.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChaptersPreview() {
  return (
    <section className="relative border-t border-border bg-background/90 px-6 py-32 backdrop-blur-sm md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal><p className="eyebrow">Inside the book</p></Reveal>
            <Reveal delay={0.1}><h2 className="display mt-6 text-6xl text-ivory md:text-8xl">Twelve moves.</h2></Reveal>
          </div>
          <Button variant="line" size="lg" asChild><Link to="/chapters">View all chapters</Link></Button>
        </div>
        <ChapterList />
      </div>
    </section>
  );
}

function AuthorTeaser() {
  return (
    <section className="relative border-t border-border px-6 py-32 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal><p className="eyebrow">The Author</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-6 text-6xl text-ivory md:text-8xl">Andrew Rusch</h2></Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            In The Art of Locking In, Andrew Rusch challenges readers to stop letting everything compete for their attention and to become intentional about the life they're building.
          </p>
        </Reveal>
        <Reveal delay={0.3}><Link to="/author" className="eyebrow link-underline mt-10 inline-block">About the author</Link></Reveal>
      </div>
    </section>
  );
}

function JournalTeaser() {
  return (
    <section className="relative border-t border-border bg-card/60 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><p className="eyebrow">Journal · Editorial sample</p></Reveal>
            <Reveal delay={0.1}><h2 className="display mt-6 text-5xl text-ivory md:text-7xl">Notes on focus.</h2></Reveal>
          </div>
          <Link to="/journal" className="eyebrow link-underline">All entries</Link>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.1} className="bg-card">
              <Link to="/journal/$slug" params={{ slug: a.slug }} className="group block h-full p-10">
                <p className="eyebrow">{a.topic}</p>
                <h3 className="display mt-6 text-3xl text-ivory transition-colors group-hover:text-champagne">{a.title}</h3>
                <p className="mt-6 font-serif text-lg italic text-muted-foreground">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="grain relative flex min-h-screen items-center border-t border-border px-6 py-32 md:px-10">
      <Dust count={18} />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal><p className="eyebrow">Chapter 12 · The Art of Locking In</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-6 text-6xl text-ivory md:text-9xl">Lock in.<br /><span className="text-gold-gradient">And keep returning.</span></h2></Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Transformation isn't a single moment. It's the decision to return to your standard, again and again.
          </p>
        </Reveal>
        <Reveal delay={0.3}><div className="mt-12 flex justify-center"><PurchaseButton /></div></Reveal>
        <div className="h-[40vh] lg:h-[50vh]" />
      </div>
    </section>
  );
}
