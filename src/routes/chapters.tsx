import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PurchaseButton } from "@/components/site";
import { ChapterList } from "@/components/chapter-list";

export const Route = createFileRoute("/chapters")({
  head: () => ({
    meta: [
      { title: "The 12 Chapters — The Art of Locking In" },
      { name: "description", content: "From The Attention War to The Art of Locking In — explore every chapter of Andrew Rusch's book." },
      { property: "og:title", content: "The 12 Chapters of The Art of Locking In" },
      { property: "og:description", content: "Attention, dopamine, comfort, identity, discipline, execution, focus, routine, transformation, distraction, money systems and mastery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Table of contents" title={<>Twelve <span className="text-gold-gradient">deliberate</span> moves.</>}>
        Each chapter builds on the last — from understanding the war for your attention to returning to your standard, again and again.
      </PageIntro>
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl"><ChapterList /></div>
        <div className="mt-20 flex justify-center"><PurchaseButton /></div>
      </section>
    </>
  ),
});
