import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Chi Sono",
  description:
    "Biografia di Simone Pedozzi, fondatore di Destinazione Meme: marketing digitale, copywriting, anime, manga e cultura internet.",
};

export default function ChiSonoPage() {
  return (
    <main className="bg-ink text-paper">
      <section className="relative overflow-hidden px-4 pb-16 pt-44 sm:px-8 lg:px-12 lg:pb-24">
        <div className="neural-grid absolute inset-0 opacity-30" />
        <div className="ambient-orb -left-44 top-28 bg-violet" />
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal className="relative z-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-cyan">
              Dietro il progetto
            </p>
            <h1 className="mt-6 font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.8] tracking-[-0.055em]">
              Simone
              <br />
              <span className="shimmer-text">Pedozzi.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-white/60">
              Professionista del marketing digitale, copywriter e content
              creator. Destinazione Meme nasce dall&apos;incontro tra anime,
              manga, storytelling, Giappone e cultura internet.
            </p>
            <div className="mt-9">
              <ButtonLink href="/contatti">Parliamone</ButtonLink>
            </div>
          </Reveal>
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/15 lg:max-h-[42rem]">
            <Image
              src="/images/hero-destinazione-meme.webp"
              alt="Simone Pedozzi e l'immaginario di Destinazione Meme"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover object-center grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Il punto di vista"
            title="Marketing, meme e manga possono stare nella stessa stanza."
            text="Il punto di vista di Simone unisce strategia di comunicazione, scrittura e cultura pop. Destinazione Meme può così essere leggero senza essere vuoto, ironico senza diventare rumore, appassionato senza sembrare una scheda tecnica."
          />
        </Reveal>
        <div className="mt-16 border-y border-white/10">
          {[
            ["01", "Copywriting", "Testi chiari, ritmo editoriale e attenzione al tono."],
            ["02", "Storytelling", "Ogni recensione cerca il perché emotivo, non soltanto il voto."],
            ["03", "Community", "Contenuti pensati per aprire conversazioni, non per chiuderle."],
          ].map(([number, title, text]) => (
            <Reveal key={title}>
              <article className="grid gap-4 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[5rem_0.7fr_1fr] md:items-baseline">
                <span className="font-mono text-[10px] font-bold text-cyan">
                  {number}
                </span>
                <h2 className="font-display text-4xl">{title}</h2>
                <p className="max-w-xl text-base leading-8 text-white/60">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper px-4 py-20 text-ink sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[94rem]">
          <p className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[-0.045em]">
            &quot;Meglio un contenuto personale e sincero che un contenuto
            perfetto ma impersonale.&quot;
          </p>
        </Reveal>
      </section>
    </main>
  );
}
