import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const paragraphs = Array.isArray(article.content)
    ? article.content
    : article.content
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

  return (
    <main className="bg-ink text-paper">
      <header className="relative overflow-hidden px-4 pb-14 pt-44 sm:px-8 lg:px-12 lg:pb-20">
        <div className="neural-grid absolute inset-0 opacity-30" />
        <div className="ambient-orb -right-40 top-4 bg-cyan" />
        <Reveal className="relative mx-auto max-w-[94rem]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
          >
            <ArrowLeft className="size-4" />
            Torna al blog
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan">
                {article.category} — {article.date} — {article.readTime}
              </p>
              <h1 className="mt-6 font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.84] tracking-[-0.055em]">
                {article.title}
              </h1>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-white/58">
                {article.excerpt}
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-graphite shadow-glow">
              <Image
                src={article.coverImage}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[12rem_1fr] lg:px-12 lg:py-24">
        <aside className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <p>Destinazione Meme</p>
          <p className="mt-2 text-cyan">{article.accent}</p>
        </aside>
        <article className="max-w-3xl space-y-7">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph.slice(0, 24)}`}
              className={`leading-8 text-white/72 ${
                index === 0
                  ? "text-xl first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-cyan"
                  : "text-lg"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </main>
  );
}
