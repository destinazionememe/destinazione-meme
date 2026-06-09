import type { Metadata } from "next";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recensioni",
  description:
    "Recensioni anime e manga di Destinazione Meme con tono ironico, competente e personale.",
};

export default function RecensioniPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Recensioni"
        title="Voti, impressioni e domande scomode tipo: mi ha divertito davvero?"
        text="Anime e manga raccontati con passione autentica, attenzione al ritmo narrativo e allergia moderata alle mode del momento."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review.slug} review={review} />
        ))}
      </div>
    </main>
  );
}
