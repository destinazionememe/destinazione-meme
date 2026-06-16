import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/content";

export function ArticleCard({
  article,
  priority = false,
}: {
  article: Article;
  priority?: boolean;
}) {
  const image = article.coverImage ?? "/images/hero-destinazione-meme.webp";

  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-3 transition duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:border-violet/40 hover:shadow-glow">
      <Link
        href={`/blog/${article.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-graphite"
      >
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover transition duration-700 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-85 transition duration-500 group-hover:opacity-95" />
        <span className="glass-panel absolute left-5 top-5 rounded-full px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
          {article.accent}
        </span>
        <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full border border-white/20 bg-white/90 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
          Leggi
        </span>
      </Link>
      <div className="px-2 py-5 text-paper">
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
          <span>{article.category}</span>
          <span className="text-white/25">/</span>
          <time>{article.date}</time>
        </div>
        <h3 className="mt-3 font-display text-3xl leading-[0.98] tracking-[-0.03em] sm:text-4xl">
          <Link
            href={`/blog/${article.slug}`}
            className="transition hover:text-cyan"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
          {article.excerpt}
        </p>
        <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">
          {article.readTime} di lettura
        </p>
      </div>
    </article>
  );
}
