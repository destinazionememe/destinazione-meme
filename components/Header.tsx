import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 text-white">
      <div className="glass-panel mx-auto flex max-w-[58rem] items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <Link href="/" className="group block" aria-label="Destinazione Meme">
          <Image
            src="/images/logo-destinazione-meme-bianco.png"
            alt="Destinazione Meme"
            width={154}
            height={42}
            priority
            className="h-auto w-28 object-contain sm:w-36"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/62 transition hover:text-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contatti"
          className="rounded-full bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-cyan lg:hidden"
        >
          Scrivi
        </Link>
      </div>
      <nav
        className="mx-auto mt-2 flex max-w-[92vw] gap-5 overflow-x-auto rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl lg:hidden"
        aria-label="Navigazione mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/70"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
