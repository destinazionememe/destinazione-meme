import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <div className="mx-auto flex max-w-[94rem] items-center justify-between px-4 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="group block" aria-label="Destinazione Meme">
          <Image
            src="/images/logo-destinazione-meme-bianco.png"
            alt="Destinazione Meme"
            width={154}
            height={42}
            priority
            className="h-auto w-32 object-contain sm:w-40"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-55"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contatti"
          className="border border-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black lg:hidden"
        >
          Scrivi
        </Link>
      </div>
      <nav
        className="flex gap-6 overflow-x-auto border-t border-white/20 px-4 py-3 sm:px-8 lg:hidden"
        aria-label="Navigazione mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
