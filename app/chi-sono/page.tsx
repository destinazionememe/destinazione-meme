import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Chi Sono",
  description:
    "Biografia di Simone Pedozzi, fondatore di Destinazione Meme: marketing digitale, copywriting, anime, manga e cultura internet.",
};

export default function ChiSonoPage() {
  return (
    <main>
      <section className="border-b border-white/10 bg-coal">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-ember">
              Fondatore
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-white">
              Simone Pedozzi
            </h1>
            <p className="mt-5 text-lg leading-8 text-ash">
              Professionista del marketing digitale, copywriter e content
              creator. Destinazione Meme nasce dalla sua passione per anime,
              manga, storytelling, Giappone e cultura internet.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contatti">Contattami</ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/35 p-6">
            <p className="text-2xl font-black leading-tight text-white">
              &quot;Meglio un contenuto personale e sincero che un contenuto
              perfetto ma impersonale.&quot;
            </p>
            <p className="mt-5 text-sm leading-7 text-ash">
              La filosofia del progetto e semplice: parlare di cultura nerd con
              competenza, ma senza alzare barriere. La passione deve essere un
              invito, non un test.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Approccio"
          title="Marketing, meme e manga possono stare nella stessa stanza."
          text="Il punto di vista di Simone unisce strategia di comunicazione, scrittura e cultura pop. Questo permette a Destinazione Meme di essere leggero senza essere vuoto, ironico senza diventare rumore, appassionato senza sembrare una scheda tecnica."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Copywriting", "Testi chiari, ritmo editoriale e attenzione al tono."],
            ["Storytelling", "Ogni recensione cerca il perche emotivo, non solo il voto."],
            ["Community", "Contenuti pensati per aprire conversazioni, non per chiuderle."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-coal p-5">
              <h2 className="text-xl font-black text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-ash">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
