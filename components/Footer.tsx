import Link from "next/link";
import { navItems, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-coal">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-black uppercase tracking-[0.18em] text-white">
            Destinazione Meme
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ash">
            Un luogo dove meme, anime e cultura pop si incontrano. Creato da
            Simone Pedozzi per chi vive la passione nerd con ironia, memoria e
            zero aria da club esclusivo.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Esplora
          </p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ash transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Social
          </p>
          <div className="mt-4 grid gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-ash transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-ash">
        © 2026 Destinazione Meme. Placeholder legale pronto per privacy e cookie policy.
      </div>
    </footer>
  );
}
