import type { Metadata } from "next";
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

  return (
    <main className="min-h-screen bg-charcoal text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal>
          <Link
            href="/recensioni"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sage"
          >
            <ArrowLeft className="size-4" />
            Tutte le recensioni
          </Link>
          <div className="mt-14 grid gap-10 border-y border-white/15 py-12 lg:grid-cols-[1fr_12rem]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sage">
                {review.format} — {review.date}
              </p>
              <h1 className="mt-6 font-display text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.84]">
                {review.title}
              </h1>
              <p className="mt-9 max-w-3xl text-xl leading-9 text-white/60">
                {review.excerpt}
              </p>
            </div>
            <div className="self-end border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-display text-8xl leading-none text-sage">
                {review.score}
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-dust">
                Voto Destinazione Meme
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
