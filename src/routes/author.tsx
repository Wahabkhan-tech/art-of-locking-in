import { createFileRoute, Link } from "@tanstack/react-router";
import king from "@/assets/king.png";
import { Button } from "@/components/ui/button";
import { PageIntro, Reveal } from "@/components/site";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "About Andrew Rusch — Author of The Art of Locking In" },
      { name: "description", content: "Meet Andrew Rusch, author of The Art of Locking In, a book on attention, discipline and ownership." },
      { property: "og:title", content: "Andrew Rusch — Author" },
      { property: "og:description", content: "The ideas behind The Art of Locking In." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <>
      <PageIntro eyebrow="The Author" title="Andrew Rusch" />
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            {/* Replace with an approved author photograph */}
            <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden border border-border bg-elevated">
              <div className="gold-glow absolute inset-0 opacity-50" />
              <img src={king} alt="" aria-hidden className="relative h-[85%] w-auto opacity-60" loading="lazy" />
              <p className="absolute left-5 top-5 eyebrow text-muted-foreground">Portrait coming soon</p>
            </div>
          </Reveal>
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <Reveal><p className="font-serif text-3xl italic leading-snug text-champagne">“You don't need to become perfect. You need to become intentional.”</p></Reveal>
            <Reveal delay={0.1}><p>Andrew Rusch is the author of <em className="text-ivory">The Art of Locking In</em>. In a world designed to keep people distracted, comfortable and constantly consuming, he challenges readers to stop letting everything compete for their attention.</p></Reveal>
            <Reveal delay={0.15}><p>The book brings together practical principles on focus, discipline, identity, execution, routines, distraction and ownership — and explores what it really takes to become intentional about the life you're building.</p></Reveal>
            <Reveal delay={0.2}><p className="text-sm">A fuller biography will appear here once approved by the author.</p></Reveal>
            <Reveal delay={0.25}><Button variant="gold" size="xl" asChild><Link to="/book">Discover the Book</Link></Button></Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
