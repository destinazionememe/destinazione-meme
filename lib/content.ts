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
  content: string[];
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
    title: "Rooster Fighter: pollo fritto o Super Saiyan?",
    slug: "rooster-fighter-pollo-fritto-o-super-saiyan",
    category: "Manga",
    excerpt:
      "Un gallo che combatte mostri giganti, vibes alla One Punch Man e una premessa assurda che funziona molto meglio di quanto dovrebbe.",
    date: "12 Giugno 2026",
    readTime: "3 min",
    accent: "Meme Lab",
    content: [
      "Un momento: adoro il pollo fritto, ma oggi volevo spendere due parole su Rooster Fighter. Un anime che mi ha totalmente sorpreso, partendo da una premessa talmente assurda da sembrare uscita da una conversazione alle tre del mattino: un gallo che combatte mostri giganti.",
      "Sembra una cazzata. E in parte lo è. Però è una cazzata fatta bene.",
      "Il rischio, con una storia del genere, era evidente: trasformarsi subito in una parodia urlata, buona solo per due meme e mezzo episodio. Invece Rooster Fighter riesce a fare una cosa più interessante: è parodistico, sì, ma anche eroico. Fa ridere, ma non si limita a prendere in giro il genere. Gioca con l'assurdo, però lo prende abbastanza sul serio da farti entrare davvero nella storia.",
      "E questa è una differenza enorme. Perché puoi anche raccontarmi di un gallo che affronta creature gigantesche, ma se riesci a farlo con ritmo, personalità e scene d'azione che gasano, allora il problema non è più \"quanto è assurda la premessa\". Il problema diventa: \"Perché mi sto affezionando a un gallo?\". Domanda legittima. Anche preoccupante, se vogliamo.",
      "Dopo i primi episodi, Rooster Fighter ha iniziato a darmi delle vibes alla One Punch Man. Non perché siano la stessa cosa, ovviamente. Anche se, da persona che condivide con Saitama lo stesso taglio di capelli, mi sento emotivamente autorizzato a fare paragoni.",
      "Il punto è che anche qui c'è quel contrasto tra una premessa ridicola e una costruzione narrativa sorprendentemente efficace. L'opera sa essere comica, ma quando deve gasare, gasa davvero. E questa cosa non è scontata.",
      "Molte serie provano a essere assurde, meta, parodistiche, sopra le righe. Poi però restano solo \"la roba strana che fa ridere cinque minuti\". Rooster Fighter invece riesce a costruire un'identità più forte.",
      "È scemo, ma non stupido. Che è una frase che potremmo usare anche per parecchie cose che mi piacciono.",
      "Rooster Fighter ha un po' tutto: azione, comicità, momenti epici e anche una certa dose di romanticismo. Romanticismo discutibile, certo. Diciamo che quando il protagonista è un gallo, alcune scene prendono inevitabilmente una direzione molto... naturalistica.",
      "Però anche questo fa parte del pacchetto. L'anime non si vergogna della propria assurdità, anzi ci sguazza dentro con una sicurezza quasi ammirevole.",
      "E poi, diciamolo: quanto cazzo gasa la opening? Perché va bene tutto, possiamo parlare di scrittura, tono, ritmo, parodia e sottotesti vari, ma se una opening ti fa venire voglia di partire in battaglia contro il disagio quotidiano, allora qualcosa l'ha fatto bene.",
      "Quindi, Rooster Fighter merita? Per me sì.",
      "Rooster Fighter è una di quelle serie che sembrano nate per essere liquidate con un \"ma che cazzata è?\", e invece ti fregano. Ti divertono, ti gasano e a un certo punto ti accorgi che vuoi davvero sapere come va avanti.",
      "Non avrei mai pensato che una storia su un gallo che combatte mostri giganti potesse appassionarmi così tanto. Poi, insomma, mi sono appassionato a molte cose assurde nella vita, quindi forse il problema sono io.",
      "Voto finale? 8 pieno. Questa prima stagione mi ha divertito tantissimo. E se anche voi l'avete guardata pensando \"lo provo solo per ridere\", probabilmente sapete già com'è andata a finire.",
    ],
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
    content: [
      "I personaggi secondari hanno un vantaggio sleale: possono arrivare, dire la cosa giusta nel momento giusto e sparire prima che la trama trovi il modo di rovinarli.",
      "Questo contenuto e provvisorio e potra essere sostituito con l'articolo definitivo dedicato ai comprimari che finiscono per conquistare il pubblico.",
    ],
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
    content: [
      "Ci sono giornate in cui vuoi leggere qualcosa di leggero, ma non necessariamente vuoto. Una storia capace di intrattenere senza chiederti di compilare l'albero genealogico di dodici casate rivali.",
      "Questo contenuto e provvisorio e potra essere sostituito con la selezione definitiva di manga e i relativi consigli di lettura.",
    ],
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
