import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Reveal } from "@/components/site";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Notes on Focus & Discipline | The Art of Locking In" },
      { name: "description", content: "Editorial notes on attention, deep focus, consistency, routines and building value." },
      { property: "og:title", content: "The Art of Locking In — Journal" },
      { property: "og:description", content: "Notes on attention, focus, discipline and execution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Journal" title={<>Notes on <span className="text-gold-gradient">focus.</span></>}>
        <span className="eyebrow text-muted-foreground">Editorial sample content — pending author approval</span>
      </PageIntro>
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.08} className="bg-background">
              <Link to="/journal/$slug" params={{ slug: a.slug }} className="group block h-full p-10 transition-colors hover:bg-elevated">
                <div className="flex justify-between"><p className="eyebrow">{a.topic}</p><p className="font-serif italic text-muted-foreground">Ch. {a.chapter}</p></div>
                <h2 className="display mt-8 text-3xl text-ivory group-hover:text-champagne">{a.title}</h2>
                <p className="mt-6 font-serif text-lg italic text-muted-foreground">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  ),
});
