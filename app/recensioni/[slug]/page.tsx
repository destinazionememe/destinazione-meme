import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-ember">
        {review.format} / Voto {review.score}
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
        {review.title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-ash">{review.excerpt}</p>
      <div className="mt-10 grid gap-4 rounded-lg border border-white/10 bg-coal p-6">
        <p className="text-base leading-8 text-ash">
          Scheda recensione predisposta per trama senza spoiler, analisi del
          ritmo, direzione artistica, personaggi, target consigliato e voto
          finale.
        </p>
      </div>
    </main>
  );
}
