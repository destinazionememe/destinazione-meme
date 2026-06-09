import Link from "next/link";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-blood text-lg font-black text-white shadow-glow">
            DM
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-white">
              Destinazione
            </span>
            <span className="block text-sm font-black uppercase tracking-[0.28em] text-ash group-hover:text-white">
              Meme
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-ash transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contatti"
          className="rounded-md border border-white/15 px-3 py-2 text-sm font-bold text-white lg:hidden"
        >
          Scrivi
        </Link>
      </div>
      <nav
        className="flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-3 lg:hidden"
        aria-label="Navigazione mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md bg-white/5 px-3 py-2 text-sm font-semibold text-ash"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
