import {
  CalendarDays,
  Clapperboard,
  Flame,
  Gamepad2,
  MessageCircle,
  Newspaper,
  Star,
} from "lucide-react";

export type Article = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  accent: string;
};

export type Review = {
  title: string;
  slug: string;
  format: "Anime" | "Manga";
  score: string;
  excerpt: string;
  date: string;
};

export type Event = {
  title: string;
  place: string;
  date: string;
  excerpt: string;
  status: "Reportage" | "In arrivo" | "Wishlist";
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/blog", label: "Blog" },
  { href: "/recensioni", label: "Recensioni" },
  { href: "/eventi", label: "Eventi" },
  { href: "/contatti", label: "Contatti" },
];

export const articles: Article[] = [
  {
    title: "Perche ridiamo quando un anime prende una curva assurda",
    slug: "anime-curva-assurda",
    category: "Internet Culture",
    excerpt:
      "Un viaggio tra reaction, screenshot fuori contesto e quella strana gioia collettiva che nasce quando una scena diventa meme.",
    date: "12 Giugno 2026",
    readTime: "5 min",
    accent: "Meme Lab",
  },
  {
    title: "Il fascino dei personaggi secondari che rubano la scena",
    slug: "personaggi-secondari",
    category: "Anime",
    excerpt:
      "Da spalla comica a cuore emotivo della storia: piccola ode ai comprimari che finiscono nella chat di tutti.",
    date: "8 Giugno 2026",
    readTime: "7 min",
    accent: "Otaku Sobrio",
  },
  {
    title: "Manga da leggere quando vuoi staccare ma non spegnere il cervello",
    slug: "manga-staccare-cervello-acceso",
    category: "Manga",
    excerpt:
      "Consigli per chi cerca tavole belle, ritmo umano e idee che restano addosso anche dopo l'ultimo capitolo.",
    date: "2 Giugno 2026",
    readTime: "6 min",
    accent: "Reading List",
  },
];

export const reviews: Review[] = [
  {
    title: "Frieren - Oltre la Fine del Viaggio",
    slug: "frieren-oltre-fine-viaggio",
    format: "Anime",
    score: "9.2",
    excerpt:
      "Una serie che parla di tempo, memoria e legami senza urlare. E proprio per questo resta fortissima.",
    date: "10 Giugno 2026",
  },
  {
    title: "Dandadan",
    slug: "dandadan",
    format: "Manga",
    score: "8.7",
    excerpt:
      "Caos paranormale, romanticismo storto e panel con energia da scroll compulsivo: intrattenimento con personalita.",
    date: "6 Giugno 2026",
  },
  {
    title: "Dungeon Meshi",
    slug: "dungeon-meshi",
    format: "Anime",
    score: "8.9",
    excerpt:
      "Fantasy, fame e worldbuilding intelligente: la dimostrazione che anche un dungeon puo avere sapore.",
    date: "28 Maggio 2026",
  },
];

export const events: Event[] = [
  {
    title: "Lucca Comics & Games",
    place: "Lucca",
    date: "Ottobre 2026",
    excerpt:
      "Appunti, incontri, cosplay intelligenti e la solita domanda: come sopravvivere alla folla senza perdere il ramen?",
    status: "In arrivo",
  },
  {
    title: "Cartoomics Milano",
    place: "Milano",
    date: "Primavera 2026",
    excerpt:
      "Reportage leggero tra stand, uscite manga, panel e momenti perfetti per diventare contenuto social.",
    status: "Reportage",
  },
  {
    title: "Japan Days",
    place: "Roma",
    date: "Estate 2026",
    excerpt:
      "Un evento da tenere d'occhio per cultura pop giapponese, street food e piccole scoperte editoriali.",
    status: "Wishlist",
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/destinazionememe" },
  { label: "TikTok", href: "https://tiktok.com/@destinazionememe" },
  { label: "YouTube", href: "https://youtube.com/@destinazionememe" },
  { label: "Threads", href: "https://threads.net/@destinazionememe" },
];

export const pillars = [
  {
    title: "Meme originali",
    text: "Ironia situazionale, screenshot mentali e quel gusto per il fuori contesto che capisce chi vive internet.",
    icon: MessageCircle,
  },
  {
    title: "Anime e manga",
    text: "Recensioni e riflessioni senza posa da enciclopedia: competenza, passione e zero gatekeeping.",
    icon: Star,
  },
  {
    title: "Cultura pop",
    text: "Serie, videogiochi, trend e fenomeni digitali letti con occhio curioso e un sopracciglio alzato.",
    icon: Gamepad2,
  },
  {
    title: "Eventi",
    text: "Fiere del fumetto, reportage e appunti dal vivo per trasformare la community in qualcosa di reale.",
    icon: CalendarDays,
  },
];

export const stats = [
  { label: "Target", value: "18-40" },
  { label: "Formato", value: "Editoriale" },
  { label: "Mood", value: "Ironico" },
];

export const editorialTracks = [
  { label: "Blog", icon: Newspaper },
  { label: "Recensioni", icon: Clapperboard },
  { label: "Hot take", icon: Flame },
];
