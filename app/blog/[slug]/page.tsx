import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-ember">
        {article.category} / {article.readTime}
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
        {article.title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-ash">{article.excerpt}</p>
      <div className="mt-10 rounded-lg border border-white/10 bg-coal p-6">
        <p className="text-base leading-8 text-ash">
          Questo e un contenuto placeholder realistico. Nella versione editoriale
          definitiva potra ospitare testo lungo, immagini, citazioni, embed social
          e collegamenti interni a recensioni o reportage.
        </p>
      </div>
    </main>
  );
}
