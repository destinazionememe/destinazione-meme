import Link from "next/link";
import { navItems, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[94rem] px-4 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="glass-panel grid gap-12 rounded-[1.5rem] p-6 lg:grid-cols-[1.3fr_0.7fr] lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sage">
              Fine dello scroll, non della conversazione
            </p>
            <p className="mt-6 max-w-5xl font-display text-[clamp(4rem,11vw,10rem)] leading-[0.78] tracking-[-0.055em]">
              Restiamo
              <br />
              <span className="shimmer-text">in contatto</span>
            </p>
            <a
              href="mailto:ciao@destinazionememe.it"
              className="mt-10 inline-block border-b border-sage pb-2 text-xl text-sage transition hover:text-white sm:text-3xl"
            >
              ciao@destinazionememe.it
            </a>
          </div>
          <div className="grid content-end gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dust">
                Esplora
              </p>
              <div className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-display text-2xl uppercase transition hover:translate-x-2 hover:text-sage"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dust">
                Social
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs font-bold uppercase tracking-[0.16em] text-sage transition hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Destinazione Meme</p>
          <p className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald" />
            Meme, anime e cultura pop senza filtri.
          </p>
        </div>
      </div>
    </footer>
  );
}
