import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventi",
  description:
    "Fiere del fumetto, eventi nerd, reportage e appuntamenti seguiti da Destinazione Meme.",
};

export default function EventiPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <section className="relative overflow-hidden px-4 pb-16 pt-44 sm:px-8 lg:px-12 lg:pb-24">
        <div className="neural-grid absolute inset-0 opacity-30" />
        <div className="ambient-orb -right-36 top-12 bg-cyan" />
        <Reveal className="relative mx-auto max-w-[94rem]">
          <SectionHeading
            eyebrow="Eventi"
            title="Fiere, panel e momenti che meritano un reportage."
            text="Fiere del fumetto, manifestazioni pop e incontri dal vivo raccontati con curiosità, attenzione alle persone e la giusta dose di sarcasmo quando la coda supera le due ore."
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[94rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="border-t border-white/10">
          {events.map((event, index) => (
            <Reveal key={event.title}>
              <article className="group grid gap-6 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.03] md:grid-cols-[4rem_1fr_11rem] md:items-center md:px-4">
                <span className="font-mono text-[10px] font-bold text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
                    <span>{event.status}</span>
                    <span className="text-white/25">/</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" />
                      {event.place}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                    {event.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58">
                    {event.excerpt}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 font-display text-2xl md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  {event.date}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
