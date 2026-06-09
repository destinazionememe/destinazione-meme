import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventi",
  description:
    "Fiere del fumetto, eventi nerd, reportage e appuntamenti seguiti da Destinazione Meme.",
};

export default function EventiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Eventi"
        title="Fiere, panel, code infinite e momenti che meritano un reportage."
        text="Una sezione pensata per raccontare eventi nerd, fiere del fumetto, manifestazioni pop e incontri dal vivo con lo stesso tono del progetto: curioso, umano e un po' sarcastico quando serve."
      />
      <div className="mt-10 grid gap-5">
        {events.map((event) => (
          <article
            key={event.title}
            className="grid gap-5 rounded-lg border border-white/10 bg-coal p-5 transition hover:border-white/25 md:grid-cols-[1fr_9rem]"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ember">
                <span>{event.status}</span>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3" />
                  {event.place}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-black text-white">{event.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ash">{event.excerpt}</p>
            </div>
            <div className="grid place-items-center rounded-md bg-black/35 px-4 py-5 text-center text-lg font-black text-white">
              {event.date}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
