import Link from "next/link";
import type { Article } from "@/lib/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-graphite/60 transition hover:-translate-y-1 hover:border-white/25">
      <div className="h-40 bg-[linear-gradient(135deg,#111_0%,#242424_48%,#8f1118_100%)] p-4">
        <span className="inline-flex rounded-md bg-black/50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
          {article.accent}
        </span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember">
          <span>{article.category}</span>
          <span className="text-white/25">/</span>
          <time>{article.date}</time>
        </div>
        <h3 className="mt-3 text-xl font-black leading-tight text-white">
          <Link href={`/blog/${article.slug}`} className="hover:text-ember">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-ash">{article.excerpt}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
          {article.readTime} di lettura
        </p>
      </div>
    </article>
  );
}
