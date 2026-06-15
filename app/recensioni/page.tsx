import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recensioni",
  description:
    "Recensioni anime e manga di Destinazione Meme con tono ironico, competente e personale.",
};

export default function RecensioniPage() {
  return (
    <main className="min-h-screen bg-charcoal text-paper">
      <section className="relative overflow-hidden border-b border-white/15 px-4 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24">
        <div className="ambient-orb -right-40 top-0 bg-sage" />
        <Reveal className="relative mx-auto max-w-[94rem]">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sage">
            Archivio / Recensioni
          </p>
          <h1 className="mt-6 max-w-7xl font-display text-[clamp(4.5rem,11vw,10rem)] uppercase leading-[0.8]">
            Cuore caldo.
            <br />
            <span className="text-outline">Pagella fredda.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">
            Anime e manga raccontati con passione autentica, attenzione al
            ritmo narrativo e allergia moderata alle mode del momento.
          </p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-[94rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-dust">
            Voti, impressioni e domande scomode
          </p>
          <Reveal>
            {reviews.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
