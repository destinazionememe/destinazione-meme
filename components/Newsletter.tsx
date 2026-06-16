import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="ambient-orb -left-48 top-0 bg-violet" />
      <div className="ambient-orb ambient-orb-delayed -right-48 bottom-0 bg-cyan" />
      <div className="relative mx-auto grid max-w-[94rem] gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-cyan">
            Newsletter / senza rumore
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            Meme selezionati, <span className="shimmer-text">recensioni sincere.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
            Una mail quando c&apos;è qualcosa che vale davvero il tuo tempo:
            articoli, letture consigliate, eventi e contenuti dietro le quinte.
          </p>
        </div>
        <form className="glass-panel flex flex-col self-end rounded-[1.25rem] p-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="la.tua@email.it"
            className="min-h-14 flex-1 bg-transparent px-4 text-lg text-white outline-none placeholder:text-white/38"
          />
          <button
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-cyan"
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
