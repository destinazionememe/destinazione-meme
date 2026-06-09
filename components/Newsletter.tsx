import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-blood">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
            Newsletter
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Meme selezionati, recensioni sincere, zero spam epico.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
            Una mail quando c&apos;e qualcosa che vale davvero il tuo tempo: articoli,
            letture consigliate, eventi e contenuti dietro le quinte.
          </p>
        </div>
        <form className="flex flex-col gap-3 self-center sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="la.tua@email.it"
            className="min-h-12 flex-1 rounded-md border border-white/20 bg-black/30 px-4 text-white outline-none placeholder:text-white/50 focus:border-white"
          />
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-black uppercase tracking-wide text-blood transition hover:bg-paper"
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
