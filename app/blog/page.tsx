import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Archivio articoli di Destinazione Meme su anime, manga, meme e cultura internet.",
};

export default function BlogPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-ink/15 px-4 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[94rem]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blood">
              Archivio / Blog
            </p>
            <h1 className="mt-6 max-w-7xl font-display text-[clamp(4.5rem,11vw,10rem)] uppercase leading-[0.8]">
              Pensieri lunghi
              <br />
              <span className="text-blood">per internet veloce.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-ink/60">
              Approfondimenti per chi ama internet, ma ogni tanto vuole capirlo.
              Anime, manga, meme e cultura pop senza inseguire ogni notifica.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[94rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-wrap gap-x-7 gap-y-3 border-b border-ink/20 pb-6">
          {["Tutti", "Anime", "Manga", "Internet Culture", "Meme Lab"].map(
            (tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/55"
              >
                {tag}
              </span>
            ),
          )}
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal
              key={article.slug}
              className={index % 2 === 1 ? "md:mt-20" : ""}
            >
              <ArticleCard article={article} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
