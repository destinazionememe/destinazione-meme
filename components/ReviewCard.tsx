import Image from "next/image";
import Link from "next/link";
import type { Review } from "@/lib/content";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group grid gap-6 border-t border-white/10 py-7 transition duration-500 hover:border-cyan/40 sm:grid-cols-[11rem_1fr]">
      <Link
        href={`/recensioni/${review.slug}`}
        className="relative block aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-graphite"
      >
        <Image
          src={review.coverImage}
          alt=""
          fill
          sizes="(min-width: 768px) 11rem, 42vw"
          className="object-cover transition duration-700 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cyan backdrop-blur">
          {review.score}/10
        </div>
      </Link>

      <div className="self-center">
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
          <span>{review.format}</span>
          <span className="text-white/25">/</span>
          <time>{review.date}</time>
          <span className="text-white/25">/</span>
          <span>{review.readTime}</span>
        </div>
        <h3 className="mt-3 max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl">
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
        <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
          {review.accent}
        </p>
      </div>
    </article>
  );
}
