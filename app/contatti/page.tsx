import type { Metadata } from "next";
import { Mail, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Destinazione Meme per collaborazioni, eventi, recensioni, segnalazioni e proposte editoriali.",
};

export default function ContattiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-coal px-4 pb-24 pt-44 text-paper sm:px-8 lg:px-12">
      <div className="neural-grid absolute inset-0 opacity-30" />
      <div className="ambient-orb -left-40 top-24 bg-violet" />
      <div className="ambient-orb ambient-orb-delayed -right-48 bottom-24 bg-cyan" />
      <div className="relative mx-auto grid max-w-[94rem] gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contatti"
            title="Un manga da segnalare? Un meme da confessare?"
            text="Scrivi per collaborazioni, inviti stampa, proposte editoriali o per spiegare perché quel personaggio secondario meritava decisamente più spazio."
          />
          <div className="mt-10 border-t border-white/15 pt-8">
            <a
              href="mailto:ciao@destinazionememe.it"
              className="inline-flex items-center gap-3 text-lg text-white/70 transition hover:text-cyan"
            >
              <Mail className="size-5 text-cyan" />
              ciao@destinazionememe.it
            </a>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition hover:text-cyan"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form className="glass-panel rounded-[1.5rem] p-5 sm:p-7">
            <div className="grid gap-8">
              <div>
                <label
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  className="mt-3 min-h-14 w-full border-b border-white/25 bg-transparent text-lg text-white outline-none transition focus:border-cyan"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-3 min-h-14 w-full border-b border-white/25 bg-transparent text-lg text-white outline-none transition focus:border-cyan"
                  placeholder="la.tua@email.it"
                />
              </div>
              <div>
                <label
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan"
                  htmlFor="message"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-4 w-full resize-y rounded-[1rem] border border-white/25 bg-black/10 px-4 py-4 text-lg text-white outline-none transition focus:border-cyan"
                  placeholder="Raccontami tutto, anche la parte assurda."
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-cyan"
              >
                <Send className="size-4" />
                Invia messaggio
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
