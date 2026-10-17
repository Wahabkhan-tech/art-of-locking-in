import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PurchaseButton, Reveal } from "@/components/site";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Journal | The Art of Locking In` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <article className="px-6 pb-28 pt-40 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link to="/journal" className="eyebrow link-underline">← Journal</Link>
        <Reveal><p className="eyebrow mt-12">{article.topic} · Chapter {article.chapter}</p></Reveal>
        <Reveal delay={0.1}><h1 className="display mt-6 text-6xl text-ivory md:text-7xl">{article.title}</h1></Reveal>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Editorial sample — pending approval</p>
        <Reveal delay={0.2}><p className="mt-12 border-l border-gold pl-6 font-serif text-3xl italic text-champagne">{article.excerpt}</p></Reveal>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          {article.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-16"><PurchaseButton size="lg" /></div>
      </div>
    </article>
  );
}
