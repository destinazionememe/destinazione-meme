import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/content";

const articleImages: Record<string, string> = {
  "rooster-fighter-pollo-fritto-o-super-saiyan": "/images/meme-06.webp",
  "personaggi-secondari": "/images/meme-02.webp",
  "manga-staccare-cervello-acceso": "/images/meme-05.webp",
};

export function ArticleCard({
  article,
  priority = false,
}: {
  article: Article;
  priority?: boolean;
}) {
  const image =
    articleImages[article.slug] ?? "/images/hero-destinazione-meme.webp";

  return (
    <article className="group">
      <Link
        href={`/blog/${article.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-graphite"
      >
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover transition duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-ink/65 opacity-0 transition duration-500 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 bg-paper px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
          {article.accent}
        </span>
        <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-white font-display text-sm uppercase tracking-[0.16em] text-ink opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
          Leggi
        </span>
      </Link>
      <div className="border-b border-ink/20 py-5 text-ink">
        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blood">
          <span>{article.category}</span>
          <span className="text-ink/25">/</span>
          <time>{article.date}</time>
        </div>
        <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95]">
          <Link
            href={`/blog/${article.slug}`}
            className="transition hover:text-blood"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">
          {article.excerpt}
        </p>
        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
          {article.readTime} di lettura
        </p>
      </div>
    </article>
  );
}
