import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { MetricTicker } from "@/components/MetricTicker";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Archivio articoli di Destinazione Meme su anime, manga, meme e cultura internet.",
};

const filters = [
  "Tutti",
  "Meme Culture",
  "Meme Marketing",
  "Internet Culture",
  "Creator Economy",
];

export default function BlogPage() {
  return (
    <main className="bg-ink text-paper">
      <section className="relative overflow-hidden px-4 pb-16 pt-44 sm:px-8 lg:px-12 lg:pb-24">
        <div className="neural-grid absolute inset-0 opacity-35" />
        <div className="ambient-orb -right-40 top-0 bg-violet" />
        <div className="relative mx-auto max-w-[94rem]">
          <Reveal>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-cyan">
              Archivio / Blog
            </p>
            <h1 className="mt-6 max-w-7xl font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.82] tracking-[-0.055em]">
              Pensieri lunghi
              <br />
              <span className="shimmer-text">per internet veloce.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/58">
              Approfondimenti per chi ama internet, ma ogni tanto vuole capirlo.
              Anime, manga, meme e cultura pop senza inseguire ogni notifica.
            </p>
          </Reveal>
        </div>
      </section>

      <MetricTicker
        items={articles.map((article) => ({
          label: article.category,
          value: article.title,
        }))}
      />

      <section className="mx-auto max-w-[94rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="glass-panel flex flex-wrap gap-x-7 gap-y-3 rounded-full px-5 py-4">
          {filters.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal
              key={article.slug}
              className={index % 3 === 1 ? "xl:mt-20" : ""}
            >
              <ArticleCard article={article} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
