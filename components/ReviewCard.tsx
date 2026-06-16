import Link from "next/link";
import type { Review } from "@/lib/content";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group grid gap-6 border-t border-white/10 py-7 transition duration-500 hover:border-cyan/40 sm:grid-cols-[7rem_1fr]">
      <div className="flex items-start justify-between sm:block">
        <div className="font-display text-6xl leading-none text-cyan transition group-hover:text-white">
          {review.score}
        </div>
        <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
          Voto / 10
        </p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
          <span>{review.format}</span>
          <span className="text-white/25">—</span>
          <time>{review.date}</time>
        </div>
        <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl">
          <Link
            href={`/recensioni/${review.slug}`}
            className="transition hover:text-cyan"
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
