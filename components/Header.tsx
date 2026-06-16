"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Send, X } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="group/header fixed inset-x-0 top-4 z-50 px-3 text-white">
      <div className="nav-shell mx-auto grid max-w-[76rem] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full px-3 py-2.5 sm:px-4">
        <Link
          href="/"
          className="group/logo flex items-center gap-3 rounded-full py-1 pr-2"
          aria-label="Destinazione Meme"
        >
          <span className="hidden size-2.5 rounded-full bg-gradient-to-br from-blood via-violet to-cyan shadow-cyan sm:block" />
          <Image
            src="/images/logo-destinazione-meme-bianco.png"
            alt="Destinazione Meme"
            width={154}
            height={42}
            priority
            className="h-auto w-28 object-contain transition duration-500 group-hover/logo:opacity-80 sm:w-36"
          />
        </Link>

        <nav
          className="hidden items-center justify-center gap-1 lg:flex"
          aria-label="Principale"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link href="/contatti" className="shiny-action hidden sm:inline-flex">
            <span>
              <Send className="size-3.5" />
              Scrivi
            </span>
          </Link>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-cyan transition duration-300 hover:border-cyan/40 hover:bg-cyan/10 lg:hidden"
            aria-label={isOpen ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <Menu
              className={`col-start-1 row-start-1 size-5 transition duration-300 ${
                isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`col-start-1 row-start-1 size-5 transition duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 max-w-[92vw] origin-top rounded-[1.35rem] border border-white/10 bg-black/80 p-2 shadow-glow backdrop-blur-2xl transition duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] lg:hidden ${
          isOpen
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="grid gap-1" aria-label="Navigazione mobile">
          {navItems.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`mobile-nav-link ${
                  active ? "mobile-nav-link-active" : ""
                } ${isOpen ? "mobile-nav-link-visible" : ""}`}
                style={{ transitionDelay: `${index * 35}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                <span className="font-display text-2xl leading-none text-white/18">
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
