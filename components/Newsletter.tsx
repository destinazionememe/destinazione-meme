import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-sage text-ink">
      <div className="mx-auto grid max-w-[94rem] gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blood">
            Newsletter / senza rumore
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
            Meme selezionati, recensioni sincere.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65">
            Una mail quando c&apos;e qualcosa che vale davvero il tuo tempo:
            articoli, letture consigliate, eventi e contenuti dietro le quinte.
          </p>
        </div>
        <form className="flex flex-col self-end border-b border-ink sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="la.tua@email.it"
            className="min-h-14 flex-1 bg-transparent px-0 text-lg text-ink outline-none placeholder:text-ink/45"
          />
          <button
            className="inline-flex min-h-14 items-center justify-center gap-2 px-5 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-white"
            type="submit"
          >
            <Send className="size-4" />
            Iscriviti
          </button>
        </form>
      </div>
    </section>
  );
}
