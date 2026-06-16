import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroInteractiveGlow } from "@/components/HeroInteractiveGlow";
import { MetricTicker } from "@/components/MetricTicker";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, reviews, stats } from "@/lib/content";

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
    label: "Priorità emotive",
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
  {
    src: "/images/meme-09.webp",
    alt: "Meme anime sul bloccare un contatto dopo un incontro",
    label: "Follow-up evitato",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
        <HeroInteractiveGlow />
        <div className="neural-grid absolute inset-0 opacity-45" />
        <div className="ambient-orb -left-40 top-16 bg-violet" />
        <div className="ambient-orb ambient-orb-delayed -right-36 bottom-0 bg-cyan" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[94rem] flex-col justify-center px-4 pb-12 pt-40 text-center sm:px-8 lg:px-12">
          <div className="hero-stagger hero-delay-0 mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan backdrop-blur-xl">
            <span className="size-2 rounded-full bg-cyan shadow-cyan" />
            Magazine indipendente / Anime, Manga, Meme
          </div>

          <h1 className="hero-stagger hero-delay-1 mx-auto max-w-6xl font-display text-[clamp(4.25rem,13vw,11rem)] uppercase leading-[0.82] tracking-[-0.055em]">
            DESTINAZIONE
            <br />
            <span className="shimmer-text">MEME</span>
          </h1>

          <p className="hero-stagger hero-delay-2 mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/62 sm:text-2xl">
            Meme, anime e cultura pop senza filtri.
          </p>

          <div className="hero-stagger hero-delay-3 mt-8 flex flex-col justify-center gap-3 text-white sm:flex-row">
            <ButtonLink href="/blog" special>
              Leggi gli articoli
            </ButtonLink>
            <ButtonLink href="/recensioni" variant="ghost">
              Vai alle recensioni
            </ButtonLink>
          </div>

          <div className="hero-stagger hero-delay-4 mt-14 hidden items-center justify-between border-t border-white/10 pt-5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 md:flex">
            <span>Magazine indipendente / Milano</span>
            <span>Anime — Manga — Internet Culture</span>
          </div>
          <a
            href="#ultimi-articoli"
            className="hero-stagger-center hero-delay-5 absolute bottom-6 left-1/2 grid size-12 place-items-center rounded-full border border-white/15 text-cyan transition hover:bg-cyan hover:text-ink"
            aria-label="Vai agli ultimi articoli"
          >
            <ArrowDown className="size-5 animate-bounce" />
          </a>
        </div>
      </section>

      <MetricTicker
        items={[
          ...stats,
          { label: "Nuovi articoli", value: String(articles.length) },
          { label: "Ultima lettura", value: articles[0].category },
          { label: "Mood", value: "Senza filtri" },
        ]}
      />

      <section id="ultimi-articoli" className="bg-ink text-paper">
        <div className="mx-auto max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <SectionHeading
                eyebrow="Ultimi articoli"
                title="Idee, ossessioni e cose viste online."
              />
              <p className="max-w-md text-sm leading-7 text-white/55 lg:justify-self-end">
                Approfondimenti, opinioni e deviazioni controllate tra anime,
                manga, meme e cultura internet.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal
                key={article.slug}
                className={index % 3 === 1 ? "xl:mt-20" : ""}
              >
                <ArticleCard article={article} priority={index === 0} />
              </Reveal>
            ))}
          </div>
          <div className="mt-14 border-t border-white/10 pt-6">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
            >
              Esplora tutto il blog
              <ArrowRight className="size-4 transition group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal text-paper">
        <div className="absolute -right-10 top-0 font-display text-[26rem] leading-none text-white/[0.03]">
          10
        </div>
        <div className="ambient-orb -left-44 top-24 bg-violet" />
        <div className="relative mx-auto max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionHeading
                eyebrow="Ultime recensioni"
                title="Il voto conta. Il perché di più."
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
            className="group mt-12 inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
          >
            Tutte le recensioni
            <ArrowRight className="size-4 transition group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <section className="bg-paper text-ink">
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
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-ink">
                    <Image
                      src={meme.src}
                      alt={meme.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                      className="object-cover transition duration-700 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-ink/70 opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-white font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                      Guarda
                    </span>
                  </div>
                  <figcaption className="flex items-center justify-between border-b border-ink/20 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
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
            <div className="absolute -left-8 -top-8 h-2/3 w-2/3 rounded-[2rem] bg-cyan/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
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
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-cyan">
              Chi sono / Simone Pedozzi
            </p>
            <h2 className="mt-6 font-display text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">
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
              className="group mt-9 inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
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
