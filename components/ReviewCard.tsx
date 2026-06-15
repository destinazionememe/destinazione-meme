import Link from "next/link";
import type { Review } from "@/lib/content";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group grid gap-6 border-t border-white/20 py-7 transition sm:grid-cols-[7rem_1fr]">
      <div className="flex items-start justify-between sm:block">
        <div className="font-display text-6xl leading-none text-sage transition group-hover:text-white">
          {review.score}
        </div>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-dust">
          Voto / 10
        </p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sage">
          <span>{review.format}</span>
          <span className="text-white/25">—</span>
          <time>{review.date}</time>
        </div>
        <h3 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl">
          <Link
            href={`/recensioni/${review.slug}`}
            className="transition hover:text-sage"
          >
            {review.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
          {review.excerpt}
        </p>
      </div>
    </article>
  );
}
