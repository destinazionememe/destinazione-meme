"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-[94rem] items-center justify-between gap-6 px-4 py-3 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Destinazione Meme"
          onClick={() => setIsOpen(false)}
        >
          <span className="hidden h-8 w-px bg-gradient-to-b from-cyan via-white/30 to-blood sm:block" />
          <Image
            src="/images/logo-destinazione-meme-bianco.png"
            alt="Destinazione Meme"
            width={154}
            height={42}
            priority
            className="h-auto w-28 object-contain transition duration-300 group-hover:opacity-75 sm:w-32"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Principale"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`editorial-nav-link ${
                  active ? "editorial-nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contatti"
            className="header-cta-link hidden sm:inline-flex"
          >
            Scrivi
          </Link>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-white/80 transition duration-300 hover:border-cyan/45 hover:text-cyan lg:hidden"
            aria-label={isOpen ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <Menu
              className={`col-start-1 row-start-1 size-5 transition duration-300 ${
                isOpen ? "rotate-45 scale-75 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`col-start-1 row-start-1 size-5 transition duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-45 scale-75 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mx-auto max-w-[94rem] overflow-hidden px-4 transition-[max-height,opacity,transform] duration-[450ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] sm:px-8 lg:hidden ${
          isOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav
          className="grid gap-1 border-t border-white/10 py-3"
          aria-label="Navigazione mobile"
        >
          {navItems.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`mobile-editorial-link ${
                  active ? "mobile-editorial-link-active" : ""
                } ${isOpen ? "mobile-editorial-link-visible" : ""}`}
                style={{ transitionDelay: `${index * 28}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                <span className="font-display text-xl leading-none text-white/20">
                  0{index + 1}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
