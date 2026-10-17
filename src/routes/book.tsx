import { createFileRoute } from "@tanstack/react-router";
import wrap from "@/assets/cover-wraparound.jpg.asset.json";
import { BookCover, PurchaseButton, Reveal } from "@/components/site";
import { ChapterList } from "@/components/chapter-list";
import { BACK_COVER, SITE } from "@/lib/content";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "The Book — The Art of Locking In by Andrew Rusch" },
      { name: "description", content: "Take back control of your attention, habits, time, energy, discipline and future. Explore the book and its 12 chapters." },
      { property: "og:title", content: "The Art of Locking In — The Book" },
      { property: "og:description", content: "Practical principles on focus, discipline, identity, execution, routines, distraction and ownership." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const QUESTIONS = [
  "What is really competing for your attention — and who benefits?",
  "Why does comfort so often become the thing that keeps you stuck?",
  "How do you act when motivation disappears?",
  "What would it take to become unrecognizable?",
  "How do you turn discipline into something that creates value?",
];
const THEMES = ["Focus", "Discipline", "Identity", "Execution", "Routines", "Distraction", "Ownership"];

function BookPage() {
  return (
    <>
      <section className="grain relative overflow-hidden px-6 pb-24 pt-36 md:px-10">
        <div className="chessboard absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_70%_50%,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal><p className="eyebrow">The Book</p></Reveal>
            <Reveal delay={0.1}><h1 className="display mt-6 text-7xl text-ivory md:text-9xl">The Art of<br /><span className="text-gold-gradient">Locking In</span></h1></Reveal>
            <Reveal delay={0.2}><p className="mt-6 font-serif text-2xl tracking-[0.2em] text-muted-foreground uppercase">{SITE.author}</p></Reveal>
            <Reveal delay={0.3}><p className="mt-10 max-w-xl font-serif text-2xl italic leading-snug text-champagne">“{BACK_COVER[0]}”</p></Reveal>
          </div>
          <Reveal delay={0.3} className="mx-auto w-64 md:w-80"><BookCover /></Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_2fr]">
          <Reveal><p className="eyebrow">About the book</p></Reveal>
          <div className="space-y-7 text-lg leading-relaxed text-muted-foreground">
            {BACK_COVER.slice(1).map((p, i) => <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>)}
            <Reveal><p className="font-serif text-2xl italic text-ivory">Because locking in isn't about being intense for a few days. It's about returning to your standard—again and again—especially when nobody is watching.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/60 px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <Reveal><p className="eyebrow">Questions it explores</p></Reveal>
            <ul className="mt-10 space-y-8">
              {QUESTIONS.map((q, i) => (
                <Reveal key={q} delay={i * 0.06}><li className="flex gap-5 font-serif text-2xl text-ivory"><span className="text-gold">{String(i + 1).padStart(2, "0")}</span>{q}</li></Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal><p className="eyebrow">Key themes</p></Reveal>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {THEMES.map((t) => <span key={t} className="display text-5xl text-ivory/80 transition-colors hover:text-champagne">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="eyebrow">Table of contents</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mb-14 mt-6 text-6xl text-ivory md:text-8xl">The 12 chapters</h2></Reveal>
          <ChapterList />
        </div>
      </section>

      <section className="border-t border-border bg-card/60 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal><img src={wrap.url} alt="Full wraparound cover of The Art of Locking In" className="w-full shadow-book" loading="lazy" /></Reveal>
        </div>
      </section>

      <section id="purchase" className="grain relative scroll-mt-20 border-t border-border px-6 py-32 text-center md:px-10">
        <div className="gold-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal><p className="eyebrow">Get the book</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-6 text-6xl text-ivory md:text-8xl">You need to become <span className="text-gold-gradient">intentional.</span></h2></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              {SITE.purchaseUrl ? <PurchaseButton /> : <p className="border border-border px-8 py-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Purchase details coming soon</p>}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
