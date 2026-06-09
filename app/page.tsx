import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AtSign, Play, Rss } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Newsletter } from "@/components/Newsletter";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  articles,
  editorialTracks,
  pillars,
  reviews,
  socialLinks,
  stats,
} from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-destinazione-meme.webp"
            alt="Studio editoriale dark dedicato ad anime, manga e cultura internet"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#070707_0%,rgba(7,7,7,0.82)_42%,rgba(7,7,7,0.36)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl content-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-md border border-white/15 bg-black/30 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-ember">
              Anime / Manga / Meme Culture
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Destinazione Meme
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/85">
              Un luogo dove meme, anime e cultura pop si incontrano. Con
              ironia, passione autentica e la consapevolezza che a volte un
              frame fuori contesto spiega meglio di un editoriale di dodici
              pagine.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Leggi gli articoli</ButtonLink>
              <ButtonLink href="/recensioni" variant="ghost">
                Vai alle recensioni
              </ButtonLink>
            </div>
          </div>

          <aside className="self-end rounded-lg border border-white/10 bg-black/45 p-5 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-ash">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl font-black text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {editorialTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <div
                    key={track.label}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-coal/75 p-3"
                  >
                    <Icon className="size-5 text-ember" />
                    <span className="text-sm font-bold text-white">
                      {track.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Il progetto"
          title="Non una pagina meme qualsiasi. Non un'enciclopedia anime con il broncio."
          text="Destinazione Meme nasce come progetto editoriale indipendente di Simone Pedozzi: contenuti originali, recensioni, riflessioni e reportage per una community che ama la cultura nerd senza trasformarla in un esame di ammissione."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-lg border border-white/10 bg-coal p-5"
              >
                <Icon className="size-7 text-ember" />
                <h3 className="mt-5 text-lg font-black text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ash">{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Ultimi articoli"
              title="Internet culture, ma con un minimo di lucidita."
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-ember hover:text-white"
            >
              Archivio blog <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ultime recensioni"
            title="Anime e manga guardati con cuore caldo e pagella fredda."
          />
          <Link
            href="/recensioni"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-ember hover:text-white"
          >
            Tutte le recensioni <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>

      <Newsletter />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Social"
            title="Dove continua la conversazione."
            text="Il sito e l'archivio ordinato. I social sono il posto dove nascono reaction, meme, appunti veloci e discussioni da salvare prima che diventino leggenda personale."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((social, index) => {
              const Icon = index % 2 === 0 ? AtSign : index === 1 ? Play : Rss;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-coal p-5 transition hover:border-white/30"
                >
                  <span className="font-black text-white">{social.label}</span>
                  <Icon className="size-5 text-ember" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
