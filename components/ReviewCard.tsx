import Link from "next/link";
import type { Review } from "@/lib/content";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="grid gap-5 rounded-lg border border-white/10 bg-coal p-5 transition hover:border-white/25 sm:grid-cols-[5rem_1fr]">
      <div className="grid aspect-square place-items-center rounded-md bg-blood text-2xl font-black text-white shadow-glow">
        {review.score}
      </div>
      <div>
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember">
          <span>{review.format}</span>
          <span className="text-white/25">/</span>
          <time>{review.date}</time>
        </div>
        <h3 className="mt-2 text-xl font-black text-white">
          <Link href={`/recensioni/${review.slug}`} className="hover:text-ember">
            {review.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-ash">{review.excerpt}</p>
      </div>
    </article>
  );
}
