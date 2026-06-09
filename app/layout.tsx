import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://destinazionememe.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Destinazione Meme | Anime, manga, meme e cultura pop",
    template: "%s | Destinazione Meme",
  },
  description:
    "Il sito ufficiale di Destinazione Meme: articoli, recensioni anime e manga, eventi nerd e cultura internet con ironia e passione autentica.",
  keywords: [
    "Destinazione Meme",
    "Simone Pedozzi",
    "anime",
    "manga",
    "meme",
    "cultura pop",
    "recensioni anime",
    "fiere del fumetto",
  ],
  authors: [{ name: "Simone Pedozzi" }],
  creator: "Simone Pedozzi",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Destinazione Meme",
    title: "Destinazione Meme",
    description:
      "Un luogo dove meme, anime e cultura pop si incontrano.",
    images: [
      {
        url: "/images/hero-destinazione-meme.webp",
        width: 1717,
        height: 916,
        alt: "Destinazione Meme visual editoriale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinazione Meme",
    description:
      "Anime, manga, meme e cultura pop con ironia, competenza e personalita.",
    images: ["/images/hero-destinazione-meme.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
