import type { Metadata } from "next";
import { Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Destinazione Meme per collaborazioni, eventi, recensioni, segnalazioni e proposte editoriali.",
};

export default function ContattiPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <SectionHeading
          eyebrow="Contatti"
          title="Hai un manga da segnalare, un evento da raccontare o un meme da confessare?"
          text="Scrivi per collaborazioni, inviti stampa, proposte editoriali o per dire che un personaggio secondario meritava decisamente piu spazio."
        />
        <div className="mt-8 grid gap-3">
          <a
            href="mailto:ciao@destinazionememe.it"
            className="inline-flex items-center gap-3 text-ash hover:text-white"
          >
            <Mail className="size-5 text-ember" />
            ciao@destinazionememe.it
          </a>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-ash hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <form className="rounded-lg border border-white/10 bg-coal p-5 sm:p-6">
        <div className="grid gap-5">
          <div>
            <label className="text-sm font-bold text-white" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              name="name"
              className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-ember"
              placeholder="Il tuo nome"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-white" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-ember"
              placeholder="la.tua@email.it"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-white" htmlFor="message">
              Messaggio
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-ember"
              placeholder="Raccontami tutto, anche la parte assurda."
            />
          </div>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blood px-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-ember"
          >
            <Send className="size-4" />
            Invia messaggio
          </button>
        </div>
      </form>
    </main>
  );
}
