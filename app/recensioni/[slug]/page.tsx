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
      <div className="relative overflow-hidden px-4 pb-20 pt-44 sm:px-8 lg:px-12 lg:pb-28">
        <div className="neural-grid absolute inset-0 opacity-30" />
        <div className="ambient-orb -right-48 top-10 bg-violet" />
        <Reveal className="relative mx-auto max-w-6xl">
          <Link
            href="/recensioni"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
          >
            <ArrowLeft className="size-4" />
            Tutte le recensioni
          </Link>
          <div className="mt-14 grid gap-10 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl lg:grid-cols-[1fr_13rem] lg:p-10">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan">
                {review.format} — {review.date}
              </p>
              <h1 className="mt-6 font-display text-[clamp(4rem,9vw,8rem)] leading-[0.84] tracking-[-0.055em]">
                {review.title}
              </h1>
              <p className="mt-9 max-w-3xl text-xl leading-9 text-white/60">
                {review.excerpt}
              </p>
            </div>
            <div className="self-end border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-display text-8xl leading-none text-cyan">
                {review.score}
              </p>
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">
                Voto Destinazione Meme
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
