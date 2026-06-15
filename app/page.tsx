import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, reviews } from "@/lib/content";

const featuredMemes = [
  {
    src: "/images/meme-01.webp",
    alt: "Meme originale Destinazione Meme in bianco e nero",
    label: "Trauma da fiaba",
  },
  {
    src: "/images/meme-02.webp",
    alt: "Meme anime sulla richiesta di offrire un Estathe",
    label: "Galateo contemporaneo",
  },
  {
    src: "/images/meme-03.webp",
    alt: "Meme anime sulle magliette con i cartoni animati",
    label: "Dress code adulto",
  },
  {
    src: "/images/meme-04.webp",
    alt: "Meme sulla gestione discutibile dei problemi personali",
    label: "Priorita emotive",
  },
  {
    src: "/images/meme-05.webp",
    alt: "Meme anime sui problemi ancora irrisolti",
    label: "Empatia in manutenzione",
  },
  {
    src: "/images/meme-06.webp",
    alt: "Personaggio rosso davanti a un'eclissi",
    label: "Dramma cosmico",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
        <div className="ambient-orb -left-40 top-20 bg-sage" />
        <div className="ambient-orb ambient-orb-delayed -right-36 bottom-0 bg-mist" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[94rem] flex-col justify-end px-4 pb-12 pt-36 sm:px-8 lg:px-12 lg:pb-16">
          <div className="mb-auto flex items-center justify-between border-b border-white/15 pb-5 pt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-sage">
            <span>Magazine indipendente / Milano</span>
            <span className="hidden sm:inline">Anime — Manga — Internet Culture</span>
          </div>

          <Reveal>
            <h1 className="font-display text-[clamp(4.5rem,14vw,13rem)] uppercase leading-[0.76]">
              Destinazione
              <br />
              <span className="text-outline">Meme</span>
            </h1>
          </Reveal>

          <div className="mt-10 grid items-end gap-8 border-t border-white/15 pt-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="max-w-xl text-xl leading-8 text-paper/80 sm:text-2xl">
                Meme, anime e cultura pop senza filtri.
              </p>
              <div className="mt-7 flex flex-col gap-3 text-white sm:flex-row">
                <ButtonLink href="/blog">Leggi gli articoli</ButtonLink>
                <ButtonLink href="/recensioni" variant="ghost">
                  Vai alle recensioni
                </ButtonLink>
              </div>
            </div>
            <a
              href="#ultimi-articoli"
              className="grid size-14 place-items-center rounded-full border border-sage text-sage transition hover:bg-sage hover:text-ink"
              aria-label="Vai agli ultimi articoli"
            >
              <ArrowDown className="size-5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      <section id="ultimi-articoli" className="bg-paper text-ink">
        <div className="mx-auto max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <SectionHeading
                eyebrow="Ultimi articoli"
                title="Idee, ossessioni e cose viste online."
              />
              <p className="max-w-md text-sm leading-7 text-ink/55 lg:justify-self-end">
                Approfondimenti, opinioni e deviazioni controllate tra anime,
                manga, meme e cultura internet.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {articles.map((article, index) => (
              <Reveal
                key={article.slug}
                className={index % 2 === 1 ? "md:mt-20" : ""}
              >
                <ArticleCard article={article} priority={index === 0} />
              </Reveal>
            ))}
          </div>
          <div className="mt-14 border-t border-ink/20 pt-6">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Esplora tutto il blog
              <ArrowRight className="size-4 transition group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal text-paper">
        <div className="absolute -right-10 top-0 font-display text-[28rem] leading-none text-ink/25">
          10
        </div>
        <div className="relative mx-auto max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionHeading
                eyebrow="Ultime recensioni"
                title="Il voto conta. Il perche di piu."
              />
              <div>
                {reviews.map((review) => (
                  <ReviewCard key={review.slug} review={review} />
                ))}
              </div>
            </div>
          </Reveal>
          <Link
            href="/recensioni"
            className="group mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sage"
          >
            Tutte le recensioni
            <ArrowRight className="size-4 transition group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <section className="bg-white text-ink">
        <div className="mx-auto max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <SectionHeading
                eyebrow="Meme in evidenza"
                title="Prima si ride. Poi, forse, si analizza."
              />
              <p className="max-w-sm text-sm leading-7 text-ink/55 lg:justify-self-end">
                Selezione dall&apos;archivio Destinazione Meme: cultura pop,
                disagio quotidiano e frame usati responsabilmente.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMemes.map((meme, index) => (
              <Reveal
                key={meme.src}
                className={index % 3 === 1 ? "lg:mt-16" : ""}
              >
                <figure className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <Image
                      src={meme.src}
                      alt={meme.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                      className="object-cover transition duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-ink/60 opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-white font-display text-sm uppercase tracking-[0.16em] text-ink opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                      Guarda
                    </span>
                  </div>
                  <figcaption className="flex items-center justify-between border-b border-ink/20 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>{meme.label}</span>
                    <span className="text-blood">DM / 0{index + 1}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink text-paper">
        <div className="mx-auto grid max-w-[94rem] gap-14 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-32">
          <Reveal className="relative">
            <div className="absolute -left-8 -top-8 h-2/3 w-2/3 bg-mist/20" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/hero-destinazione-meme.webp"
                alt="Il mondo editoriale di Destinazione Meme"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>
          <Reveal className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sage">
              Chi sono / Simone Pedozzi
            </p>
            <h2 className="mt-6 font-display text-6xl uppercase leading-[0.88] sm:text-8xl">
              Una persona reale dietro ogni hot take.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-paper/60">
              Marketing digitale, copywriting e una passione poco moderata per
              anime, manga, meme, storytelling e cultura internet. Destinazione
              Meme nasce per unire competenza e ironia senza trasformare la
              passione nerd in un esame di ammissione.
            </p>
            <Link
              href="/chi-sono"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sage"
            >
              Conosci Simone
              <ArrowRight className="size-4 transition group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
