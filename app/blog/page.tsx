import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Archivio articoli di Destinazione Meme su anime, manga, meme e cultura internet.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Approfondimenti per chi ama internet, ma ogni tanto vuole capirlo."
        text="Un archivio pronto per guide, riflessioni, liste ragionate e pezzi evergreen su anime, manga, meme e cultura pop."
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {["Tutti", "Anime", "Manga", "Internet Culture", "Meme Lab"].map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-ash"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
