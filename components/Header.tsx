import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 text-white">
      <div className="glass-panel mx-auto flex max-w-[74rem] items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-5">
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
              className="group relative font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/62 transition hover:text-cyan"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cyan transition duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-cyan"
        >
          <Send className="size-3.5" />
          Scrivi
        </Link>
      </div>
      <nav
        className="mx-auto mt-2 grid max-w-[92vw] grid-flow-col gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/65 px-2 py-2 backdrop-blur-xl lg:hidden"
        aria-label="Navigazione mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/72 transition hover:bg-white/10 hover:text-cyan"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
