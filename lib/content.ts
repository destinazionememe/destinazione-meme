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
  coverImage: string;
  content: string[] | string;
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
    title: "Nippon Sangoku, recensione onesta: strategia più che mazzate",
    slug: "nippon-sangoku-recensione-strategia-non-mazzate",
    category: "Anime",
    excerpt:
      "Un Giappone diviso in tre nazioni, un protagonista stratega e un'opera che preferisce usare la testa invece di spaccare montagne.",
    date: "16 Giugno 2026",
    readTime: "4 min",
    accent: "Recensione onesta",
    coverImage: "/images/meme-04.webp",
    content: [
      "I cartoni giapponesi sono tutti mazzate, urla e tette giganti?",
      "Beh, molti anime in effetti lo sono. Diciamoci la verità, non facciamo finta di essere qui per guardare solo metafore esistenziali e regie raffinate.",
      "Però Nippon Sangoku - I tre regni del Giappone non è quel tipo di opera.",
      "E sì, ti ho triggerato dicendo “cartoni giapponesi”. Respira, va tutto bene.",
      "La storia di Nippon Sangoku è ambientata in un futuro prossimo, dopo una guerra nucleare che ha portato il Giappone a dividersi in tre nazioni.",
      "Una premessa già interessante di suo, perché riesce a dare all'opera un'atmosfera quasi storica, pur essendo ambientata nel futuro.",
      "Ed è proprio questa una delle cose che mi ha colpito di più: Nippon Sangoku ha il sapore di un anime storico, ma lavora su uno scenario fantapolitico. Una specie di “period drama del futuro”, se vogliamo dirla in modo elegante. O almeno più elegante di “Ken, sei tu?”.",
      "La prima cosa che salta all'occhio sono i disegni.",
      "Nippon Sangoku ha uno stile visivo particolare, riconoscibile, lontano da quella sensazione di anime fatto con lo stampino che ogni tanto ti fa chiedere se tu abbia già visto la stessa faccia in altre dodici serie diverse.",
      "Qui c'è una direzione estetica più marcata, che aiuta molto a creare identità.",
      "Non è solo una questione di trama, ma anche di atmosfera: il mondo sembra avere un peso, una storia e un contesto politico dietro. E questa cosa, quando funziona, fa sempre piacere.",
      "L'altro punto davvero interessante è il protagonista.",
      "Non è il classico guerriero fortissimo con la tecnica segreta, il colpo finale, l'aura colorata e il trauma d'infanzia da sbloccare al momento giusto.",
      "È uno stratega.",
      "La sua forza è l'intelligenza, la capacità di leggere le situazioni, prevedere le mosse degli altri e usare la testa prima delle mani.",
      "E questa è una cosa che, negli ultimi anni, viene fin troppo sottovalutata. Anche perché ormai sembra che, se un personaggio non spacca una montagna con un pugno entro il terzo episodio, allora non sia abbastanza interessante.",
      "Invece no. A volte basta un cervello che funziona. Cosa rara, anche nella vita reale.",
      "Per me sì.",
      "Nippon Sangoku - I tre regni del Giappone ha una premessa forte, un'estetica particolare e un protagonista diverso dal solito. Non punta tutto sull'azione pura, ma sulla strategia, sulla politica e su un mondo narrativo che incuriosisce.",
      "Voto finale? 8 pieno.",
      "Non è il solito anime da “botte forti e urla più forti”. E proprio per questo merita attenzione.",
    ],
  },
  {
    title: "Ichi the Witch: hype meritato o magia già vista?",
    slug: "ichi-the-witch-recensione-primo-volume",
    category: "Manga",
    excerpt:
      "Il primo volume del nuovo fantasy Star Comics parte da una premessa già vista, ma funziona più di quanto fosse lecito aspettarsi.",
    date: "15 Giugno 2026",
    readTime: "3 min",
    accent: "Primo volume",
    coverImage: "/images/meme-03.webp",
    content: [
      "Se avete intenzione di spendere soldi con l'ultimo manga di Star Comics solo perché c'è hype, fermatevi un secondo.",
      "Ho letto il primo volume di Ichi the Witch e la prima cosa da dire è questa: la premessa non urla esattamente “originalità mai vista prima”.",
      "Siamo in un mondo in cui la magia esiste, ma può essere usata solo dalle donne, chiamate streghe. Poi arriva il protagonista maschio che, ovviamente, riesce a usare la magia anche lui.",
      "Originalità? Ecco, magari cambiamo argomento.",
      "Detto questo, c'è un però. E non è neanche un però piccolo.",
      "Perché, sorprendentemente, Ichi the Witch non fa cagare come temevo.",
      "Le parti comiche funzionano abbastanza bene, l'azione scorre e il ritmo generale del primo volume è più piacevole del previsto. Non ho avuto quella sensazione di pesantezza da “ok, ho capito dove vuoi andare a parare, adesso però fammi scendere”.",
      "Anzi, il manga riesce a essere abbastanza fluido e leggero, senza sembrare troppo forzato. Che per un primo numero costruito su una premessa così classica è già una mezza vittoria.",
      "Il punto debole, almeno per ora, resta proprio la base narrativa.",
      "Il mondo fantasy, la magia, il protagonista speciale, la regola che viene infranta: sono tutti elementi che abbiamo già visto un numero imbarazzante di volte.",
      "Non significa che Ichi the Witch sia brutto, ma significa che dovrà lavorare parecchio per distinguersi davvero. Il primo volume intrattiene, sì, però non dà ancora quella sensazione da “devo assolutamente leggere il seguito o la mia vita perde significato”.",
      "E forse va bene così. Non tutti i manga devono arrivare al primo capitolo con la pretesa di riscrivere la storia dello shonen fantasy.",
      "Per ora direi: ni, ma con più sì del previsto.",
      "Non è un primo volume memorabile, non è il nuovo messia del manga fantasy e non mi ha fatto gridare al miracolo. Però si legge bene, ha momenti comici dignitosi, qualche scena d'azione riuscita e abbastanza ritmo da non farmi rimpiangere l'acquisto.",
      "Voto finale? 6,5 politico.",
      "Non abbastanza alto da correre in fumetteria urlando, ma abbastanza da farmi valutare seriamente se dare una chance anche al secondo volume.",
      "E questa, per un manga che partiva con una premessa così “già vista”, è già una piccola forma di magia.",
    ],
  },
  {
    title: "Rooster Fighter: pollo fritto o Super Saiyan?",
    slug: "rooster-fighter-pollo-fritto-o-super-saiyan",
    category: "Manga",
    excerpt:
      "Un gallo che combatte mostri giganti, vibes alla One Punch Man e una premessa assurda che funziona molto meglio di quanto dovrebbe.",
    date: "12 Giugno 2026",
    readTime: "3 min",
    accent: "Meme Lab",
    coverImage: "/images/meme-06.webp",
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
    coverImage: "/images/meme-02.webp",
    content: [
      "I personaggi secondari hanno un vantaggio sleale: possono arrivare, dire la cosa giusta nel momento giusto e sparire prima che la trama trovi il modo di rovinarli.",
      "Forse è proprio questo il loro superpotere: entrare in scena senza il peso di dover salvare il mondo e uscirne con le battute, le fragilità e i momenti che ricordiamo più a lungo.",
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
    coverImage: "/images/meme-05.webp",
    content: [
      "Ci sono giornate in cui vuoi leggere qualcosa di leggero, ma non necessariamente vuoto. Una storia capace di intrattenere senza chiederti di compilare l'albero genealogico di dodici casate rivali.",
      "Il manga giusto non spegne il cervello: gli cambia frequenza. Per qualche capitolo il rumore resta fuori, mentre dentro continuano a muoversi immagini, idee e quella voglia molto concreta di leggere ancora una pagina.",
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
