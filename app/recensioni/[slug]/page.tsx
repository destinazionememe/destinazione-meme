import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find((item) => item.slug === slug);

  if (!review) {
    return {};
  }

  return {
    title: `Recensione ${review.title}`,
    description: review.excerpt,
  };
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = reviews.find((item) => item.slug === slug);

  if (!review) {
    notFound();
  }

  const paragraphs = Array.isArray(review.content)
    ? review.content
    : review.content
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

  return (
    <main className="min-h-screen bg-charcoal text-paper">
      <div className="relative overflow-hidden px-4 pb-14 pt-44 sm:px-8 lg:px-12 lg:pb-20">
        <div className="neural-grid absolute inset-0 opacity-30" />
        <div className="ambient-orb -right-48 top-10 bg-violet" />
        <Reveal className="relative mx-auto max-w-[94rem]">
          <Link
            href="/recensioni"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
          >
            <ArrowLeft className="size-4" />
            Tutte le recensioni
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-white/10 bg-graphite shadow-glow lg:order-2">
              <Image
                src={review.coverImage}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/70 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan backdrop-blur">
                Voto {review.score}/10
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan">
                {review.format} / {review.date} / {review.readTime}
              </p>
              <h1 className="mt-6 font-display text-[clamp(4rem,9vw,8rem)] leading-[0.84] tracking-[-0.055em]">
                {review.title}
              </h1>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-white/58">
                {review.excerpt}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[12rem_1fr] lg:px-12 lg:py-24">
        <aside className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <p>Destinazione Meme</p>
          <p className="mt-2 text-cyan">{review.accent}</p>
          <p className="mt-8 font-display text-7xl leading-none text-cyan">
            {review.score}
          </p>
          <p className="mt-2">Voto / 10</p>
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
