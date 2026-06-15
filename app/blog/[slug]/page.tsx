import type { Metadata } from "next";
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
    <main className="bg-paper text-ink">
      <header className="border-b border-ink/15 px-4 pb-14 pt-40 sm:px-8 lg:px-12 lg:pb-20">
        <Reveal className="mx-auto max-w-6xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blood"
          >
            <ArrowLeft className="size-4" />
            Torna al blog
          </Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-blood">
            {article.category} — {article.date} — {article.readTime}
          </p>
          <h1 className="mt-6 font-display text-[clamp(4rem,9vw,8.5rem)] uppercase leading-[0.84]">
            {article.title}
          </h1>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-ink/60">
            {article.excerpt}
          </p>
        </Reveal>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[12rem_1fr] lg:px-12 lg:py-24">
        <aside className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
          <p>Destinazione Meme</p>
          <p className="mt-2">{article.accent}</p>
        </aside>
        <article className="max-w-3xl space-y-7">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph.slice(0, 24)}`}
              className={`leading-8 text-ink/75 ${
                index === 0
                  ? "text-xl first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8]"
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
