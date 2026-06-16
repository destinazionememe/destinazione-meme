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
  image: string;
  content: string | string[];
};

export type Review = {
  title: string;
  slug: string;
  format: "Anime" | "Manga" | "Film" | "Serie TV";
  score: string;
  excerpt: string;
  date: string;
  readTime: string;
  accent: string;
  coverImage: string;
  content: string | string[];
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
  { href: "/blog", label: "Blog" },
  { href: "/recensioni", label: "Recensioni" },
  { href: "/eventi", label: "Eventi" },
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/contatti", label: "Contatti" },
];

export const articles: Article[] = [
  {
    title:
      "Come i meme influenzano la società: psicologia, cultura e comunicazione digitale",
    slug: "come-i-meme-influenzano-la-societa",
    category: "Meme Culture",
    excerpt:
      "I meme non sono solo battute: sono un linguaggio culturale che modifica percezioni, comportamenti, identità e conversazioni collettive.",
    date: "18 Giugno 2026",
    readTime: "7 min",
    accent: "Memegazine",
    image: "/images/meme-07.webp",
    content: [
      "I meme non sono solo battute. Sono il nuovo linguaggio del potere.",
      "Per molti sono ancora contenuti divertenti da mandare agli amici su WhatsApp: immagini, video, gif, format di testo che durano un giorno e poi spariscono.",
      "Ma se li guardi con più attenzione, i meme sono qualcosa di più radicale: uno dei sistemi di comunicazione più efficaci che la cultura umana abbia mai prodotto.",
      "Influenzano opinioni. Cambiano comportamenti. Ridefiniscono i confini di ciò che è dicibile, pensabile, condivisibile. Funzionano nella politica, nel marketing, nei movimenti sociali. E lo fanno senza sembrare propaganda, pubblicità o discorso istituzionale.",
      "La domanda interessante non è \"cosa sono i meme\". La domanda è: perché funzionano così bene?",
      "Il termine \"meme\" non nasce su internet.",
      "Lo conia nel 1976 il biologo evolutivo Richard Dawkins, nel suo libro Il gene egoista. Dawkins cercava una parola per descrivere come le idee si replicano e si diffondono tra le persone, esattamente come i geni trasmettono informazioni biologiche di generazione in generazione.",
      "Un meme, nella sua definizione originale, è qualsiasi idea, comportamento o concetto che si propaga per imitazione: un ritornello che non riesci a toglierti dalla testa, un modo di salutare, un'espressione. La cultura stessa, secondo Dawkins, funziona per replicazione memetica.",
      "Internet non ha inventato i meme. Li ha semplicemente accelerati in modo esponenziale.",
      "Oggi un formato visivo, una battuta, una catchphrase possono girare il mondo in poche ore. E questo cambia tutto, perché la velocità di diffusione è direttamente proporzionale alla capacità di influenzare.",
      "Non è un caso che i meme funzionino. C'è una logica cognitiva precisa.",
      "Il cervello umano elabora più facilmente contenuti che siano visivi, brevi, emotivamente rilevanti e socialmente condivisibili. I meme soddisfano tutti e quattro questi criteri contemporaneamente.",
      "Ma c'è un meccanismo ancora più sottile che entra in gioco: l'abbassamento delle difese cognitive.",
      "Quando ridiamo, abbassiamo la guardia. L'umorismo è un cavallo di Troia: il messaggio arriva mentre siamo distratti dal sorriso. È lo stesso principio che rende efficace la satira politica da secoli. Prima fai ridere, poi fai pensare. O meglio, fai pensare mentre fai ridere.",
      "I meme fanno esattamente questo. Semplificano concetti complessi, li rendono emotivamente accessibili, e li distribuiscono attraverso la rete sociale più potente che esista: le persone che si fidano l'una dell'altra.",
      "Uno degli effetti più interessanti, e meno discussi, dei meme è la loro capacità di spostare la finestra di Overton: l'insieme di idee che una società considera accettabili e discutibili in un dato momento.",
      "Pensa a come temi come il burnout lavorativo, la salute mentale, le relazioni tossiche o l'ansia da prestazione siano entrati nel linguaggio comune negli ultimi dieci anni. In molti casi, la porta d'ingresso non è stata un articolo accademico o un talk show. È stata un meme.",
      "L'ironia permette di avvicinarsi ad argomenti pesanti senza sentirsi sopraffatti. Crea un'identificazione immediata che abbassa la vergogna, aumenta l'empatia e apre spazio alla conversazione. Cose che le campagne di sensibilizzazione tradizionali inseguono per anni, spesso senza riuscirci.",
      "I meme non si limitano a influenzare ciò che pensiamo. Cambiano anche ciò che facciamo.",
      "Quando un formato diventa virale, le persone non si limitano a condividerlo passivamente: lo reinterpretano, lo adattano al proprio contesto, partecipano al trend. Questo meccanismo di rielaborazione collettiva è potentissimo perché genera senso di appartenenza attivo. Non sei spettatore, sei parte del fenomeno.",
      "È per questo che brand come Netflix, Durex o Ryanair hanno costruito interi stili di comunicazione attorno ai meme. Non vengono percepiti come pubblicità. Sembrano conversazioni native di internet. E in un'epoca in cui la fiducia verso la pubblicità tradizionale è ai minimi storici, questa differenza vale tutto.",
      "C'è una dimensione dei meme che viene ancora troppo spesso sottovalutata: la loro capacità di diventare strumenti di cambiamento reale.",
      "Il caso più emblematico è la campagna #GlobalWarning su TikTok, dove giovani creator hanno usato format memetici per parlare di cambiamento climatico a un pubblico che i canali tradizionali non riuscivano a intercettare. Niente grafici, niente esperti in studio, niente report scientifici. Solo contenuti riconoscibili, ironici e visivamente immediati capaci di mostrare un futuro scomodo e renderlo impossibile da ignorare.",
      "Il risultato? Milioni di visualizzazioni, partecipazione organica e un tema complesso trasformato in conversazione quotidiana.",
      "Non è un caso isolato. Movimenti legati ai diritti civili, alla giustizia sociale, alla parità di genere usano da anni la comunicazione memetica per raggiungere pubblici nuovi e normalizzare idee che il discorso istituzionale fatica ancora a veicolare. Un meme ben costruito può fare in 24 ore quello che una campagna tradizionale non riesce a fare in sei mesi.",
      "Questa è comunicazione strategica. Non intrattenimento.",
      "I meme sono un linguaggio condiviso. E i linguaggi condivisi costruiscono comunità.",
      "Quando condividi un meme con qualcuno stai dicendo più di quanto sembri: capisco questo riferimento, mi identifico in questa situazione, appartengo a questo gruppo. È un segnale di riconoscimento quasi tribale, lo stesso che faceva riconoscere i cristiani nel II secolo con il simbolo del pesce, solo con Bart Simpson al posto del pesce.",
      "Ed è esattamente per questo che le nicchie più appassionate di internet, dai gamer agli appassionati di anime, dalle community finanziarie ai fan di serie TV, comunicano quasi esclusivamente per meme. Non perché siano pigri. Perché i meme sono il modo più rapido ed efficace per dire sei dei nostri.",
      "I meme non sono intrattenimento di serie B.",
      "Sono strumenti culturali che modellano percezioni, comportamenti, conversazioni e identità collettive. Capire come funzionano significa capire una parte sostanziale di come funziona la comunicazione oggi.",
      "E chi li sa usare davvero ha in mano qualcosa di molto più potente di qualsiasi campagna pubblicitaria tradizionale.",
    ],
  },
  {
    title: "I 3 errori più comuni nel meme marketing",
    slug: "i-3-errori-piu-comuni-nel-meme-marketing",
    category: "Meme Marketing",
    excerpt:
      "Il meme marketing funziona, ma non se viene usato fuori contesto, forzato nel messaggio o scollegato dall'identità del brand.",
    date: "17 Giugno 2026",
    readTime: "5 min",
    accent: "Strategia",
    image: "/images/meme-08.webp",
    content: [
      "Il meme marketing funziona. Ma non così.",
      "Veloce, diretto, capace di veicolare messaggi complessi in pochi secondi: il meme marketing è uno degli strumenti più efficaci nella comunicazione digitale contemporanea.",
      "Eppure la maggior parte delle aziende lo usa nel modo sbagliato.",
      "Il risultato? Contenuti che non fanno ridere, non generano engagement e, nel peggiore dei casi, danneggiano attivamente la reputazione del brand.",
      "In questo articolo analizziamo i 3 errori più comuni nel meme marketing e, soprattutto, come evitarli.",
      "Il primo e più diffuso errore è pubblicare meme che il proprio pubblico semplicemente non capisce.",
      "Un meme funziona solo quando rispetta tre condizioni precise: è riconoscibile per il target di riferimento, appartiene alla cultura digitale del pubblico e viene interpretato immediatamente, senza sforzo.",
      "Se anche solo una di queste condizioni viene meno, il contenuto produce un unico risultato: confusione. Zero risate, zero condivisioni, zero conversioni.",
      "Esempio tipico: usare un meme di nicchia, apprezzato solo da una sottocultura online specifica, per un pubblico generalista che non ne conosce il formato né il significato originale.",
      "Come evitarlo: studia e conosci in profondità il tuo target, usa meme attuali e non riferimenti già superati, privilegia format semplici, riconoscibili e a larga diffusione.",
      "Il secondo errore è il più tipicamente aziendale, e anche il più riconoscibile.",
      "Nasce da un briefing del tipo: \"dobbiamo usare un meme\". E termina con un contenuto costruito a tavolino, privo di spontaneità, che segnala al pubblico esattamente quello che non dovrebbe: stavamo cercando di essere divertenti, ma non ci siamo riusciti.",
      "I meme forzati non passano inosservati. Il pubblico li percepisce istintivamente e li penalizza con indifferenza o, peggio, con ironia.",
      "La regola fondamentale è una sola: il meme deve nascere dal messaggio, non il contrario.",
      "Come evitarlo: parti sempre dal concept creativo e dal messaggio da comunicare. Chiediti onestamente se c'è qualcosa di autenticamente memabile. Se la risposta è no, non forzare: semplicemente non usare un meme.",
      "Il terzo errore è tradire l'identità del brand.",
      "Non tutti i brand possono, o devono, usare qualsiasi tipo di meme.",
      "Un brand con un posizionamento professionale, istituzionale o premium che adotta meme eccessivamente irriverenti o trash non risulta simpatico: risulta incoerente. E l'incoerenza è tra le cause più rapide di perdita di fiducia da parte del pubblico.",
      "Come evitarlo: definisci con precisione il tuo tone of voice prima di qualsiasi attività di meme marketing, seleziona solo i format e i registri umoristici compatibili con la tua identità di brand, mantieni uno stile riconoscibile e coerente nel tempo.",
      "Un meme può far sorridere, ma deve sempre restare all'interno dei confini del brand.",
      "Negli ultimi dodici mesi sempre più aziende hanno trovato una propria formula nel meme marketing, in particolare attraverso video divertenti, capaci di generare numeri impressionanti in termini di visualizzazioni e condivisioni.",
      "Ma c'è una domanda che poche si pongono davvero: queste interazioni si traducono in clienti?",
      "Fare il video più esilarante del momento può portare milioni di impression. Rendersi ridicoli in modo consapevole e controllato può funzionare, ma solo se il pubblico che ride è anche il pubblico che compra.",
      "Il rischio concreto è attrarre un'audience vastissima che non ha nessun interesse reale nel prodotto o servizio offerto. Tante visualizzazioni, tanti commenti, tanti saluti, e zero conversioni.",
      "Ecco perché conoscere il proprio pubblico non è solo una buona pratica: è il presupposto di qualsiasi strategia di meme marketing che abbia senso dal punto di vista del business. Il video più divertente di internet non è necessariamente il migliore per il tuo brand.",
      "Le aziende che ottengono risultati reali con i meme non li pubblicano a caso. Li scelgono con metodo, li adattano al proprio pubblico e li integrano in una strategia di comunicazione coerente.",
      "I brand che funzionano davvero nel meme marketing condividono tre caratteristiche: conoscono profondamente il loro pubblico, rispettano e presidiano il proprio tono di voce, usano l'umorismo in modo naturale e non performativo.",
      "Chi non segue queste regole non comunica: fa soltanto rumore.",
    ],
  },
];

export const reviews: Review[] = [
  {
    title: "Rooster Fighter: pollo fritto o Super Saiyan?",
    slug: "rooster-fighter-pollo-fritto-o-super-saiyan",
    format: "Anime",
    score: "8",
    excerpt:
      "Un gallo che combatte mostri giganti, vibes alla One Punch Man e una premessa assurda che funziona molto meglio di quanto dovrebbe.",
    date: "12 Giugno 2026",
    readTime: "3 min",
    accent: "Recensione onesta",
    coverImage: "/images/review-rooster-fighter.webp",
    content: [
      "Un momento: adoro il pollo fritto, ma oggi volevo spendere due parole su Rooster Fighter. Un anime che mi ha totalmente sorpreso, partendo da una premessa talmente assurda da sembrare uscita da una conversazione alle tre del mattino: un gallo che combatte mostri giganti.",
      "Sembra una cazzata. E in parte lo è. Però è una cazzata fatta bene.",
      "Il rischio, con una storia del genere, era evidente: trasformarsi subito in una parodia urlata, buona solo per due meme e mezzo episodio. Invece Rooster Fighter riesce a fare una cosa più interessante: è parodistico, sì, ma anche eroico. Fa ridere, ma non si limita a prendere in giro il genere. Gioca con l'assurdo, però lo prende abbastanza sul serio da farti entrare davvero nella storia.",
      "E questa è una differenza enorme. Perché puoi anche raccontarmi di un gallo che affronta creature gigantesche, ma se riesci a farlo con ritmo, personalità e scene d'azione che gasano, allora il problema non è più quanto è assurda la premessa. Il problema diventa: perché mi sto affezionando a un gallo?",
      "Dopo i primi episodi, Rooster Fighter ha iniziato a darmi delle vibes alla One Punch Man. Non perché siano la stessa cosa, ovviamente. Anche se, da persona che condivide con Saitama lo stesso taglio di capelli, mi sento emotivamente autorizzato a fare paragoni.",
      "Il punto è che anche qui c'è quel contrasto tra una premessa ridicola e una costruzione narrativa sorprendentemente efficace. L'opera sa essere comica, ma quando deve gasare, gasa davvero. E questa cosa non è scontata.",
      "Molte serie provano a essere assurde, meta, parodistiche, sopra le righe. Poi però restano solo la roba strana che fa ridere cinque minuti. Rooster Fighter invece riesce a costruire un'identità più forte.",
      "È scemo, ma non stupido. Che è una frase che potremmo usare anche per parecchie cose che mi piacciono.",
      "Rooster Fighter ha un po' tutto: azione, comicità, momenti epici e anche una certa dose di romanticismo. Romanticismo discutibile, certo. Diciamo che quando il protagonista è un gallo, alcune scene prendono inevitabilmente una direzione molto naturalistica.",
      "Però anche questo fa parte del pacchetto. L'anime non si vergogna della propria assurdità, anzi ci sguazza dentro con una sicurezza quasi ammirevole.",
      "E poi, diciamolo: quanto gasa la opening? Perché va bene tutto, possiamo parlare di scrittura, tono, ritmo, parodia e sottotesti vari, ma se una opening ti fa venire voglia di partire in battaglia contro il disagio quotidiano, allora qualcosa l'ha fatto bene.",
      "Rooster Fighter è una di quelle serie che sembrano nate per essere liquidate con un \"ma che cazzata è?\", e invece ti fregano. Ti divertono, ti gasano e a un certo punto ti accorgi che vuoi davvero sapere come va avanti.",
      "Voto finale? 8 pieno. Questa prima stagione mi ha divertito tantissimo.",
    ],
  },
  {
    title: "Nippon Sangoku: strategia più che mazzate",
    slug: "nippon-sangoku-recensione-strategia-non-mazzate",
    format: "Anime",
    score: "8",
    excerpt:
      "Un Giappone diviso in tre nazioni, un protagonista stratega e un'opera che preferisce usare la testa invece di spaccare montagne.",
    date: "16 Giugno 2026",
    readTime: "4 min",
    accent: "Fantapolitica",
    coverImage: "/images/review-nippon-sangoku.webp",
    content: [
      "I cartoni giapponesi sono tutti mazzate, urla e tette giganti?",
      "Beh, molti anime in effetti lo sono. Diciamoci la verità, non facciamo finta di essere qui per guardare solo metafore esistenziali e regie raffinate.",
      "Però Nippon Sangoku - I tre regni del Giappone non è quel tipo di opera.",
      "E sì, ti ho triggerato dicendo cartoni giapponesi. Respira, va tutto bene.",
      "La storia di Nippon Sangoku è ambientata in un futuro prossimo, dopo una guerra nucleare che ha portato il Giappone a dividersi in tre nazioni.",
      "Una premessa già interessante di suo, perché riesce a dare all'opera un'atmosfera quasi storica, pur essendo ambientata nel futuro.",
      "Ed è proprio questa una delle cose che mi ha colpito di più: Nippon Sangoku ha il sapore di un anime storico, ma lavora su uno scenario fantapolitico. Una specie di period drama del futuro, se vogliamo dirla in modo elegante. O almeno più elegante di Ken, sei tu?.",
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
      "Nippon Sangoku - I tre regni del Giappone ha una premessa forte, un'estetica particolare e un protagonista diverso dal solito. Non punta tutto sull'azione pura, ma sulla strategia, sulla politica e su un mondo narrativo che incuriosisce.",
      "Voto finale? 8 pieno.",
      "Non è il solito anime da botte forti e urla più forti. E proprio per questo merita attenzione.",
    ],
  },
  {
    title: "Ichi the Witch: hype meritato o magia già vista?",
    slug: "ichi-the-witch-recensione-primo-volume",
    format: "Manga",
    score: "6.5",
    excerpt:
      "Il primo volume del nuovo fantasy Star Comics parte da una premessa già vista, ma funziona più di quanto fosse lecito aspettarsi.",
    date: "15 Giugno 2026",
    readTime: "3 min",
    accent: "Primo volume",
    coverImage: "/images/review-ichi-the-witch.webp",
    content: [
      "Se avete intenzione di spendere soldi con l'ultimo manga di Star Comics solo perché c'è hype, fermatevi un secondo.",
      "Ho letto il primo volume di Ichi the Witch e la prima cosa da dire è questa: la premessa non urla esattamente originalità mai vista prima.",
      "Siamo in un mondo in cui la magia esiste, ma può essere usata solo dalle donne, chiamate streghe. Poi arriva il protagonista maschio che, ovviamente, riesce a usare la magia anche lui.",
      "Originalità? Ecco, magari cambiamo argomento.",
      "Detto questo, c'è un però. E non è neanche un però piccolo.",
      "Perché, sorprendentemente, Ichi the Witch non fa cagare come temevo.",
      "Le parti comiche funzionano abbastanza bene, l'azione scorre e il ritmo generale del primo volume è più piacevole del previsto. Non ho avuto quella sensazione di pesantezza da ok, ho capito dove vuoi andare a parare, adesso però fammi scendere.",
      "Anzi, il manga riesce a essere abbastanza fluido e leggero, senza sembrare troppo forzato. Che per un primo numero costruito su una premessa così classica è già una mezza vittoria.",
      "Il punto debole, almeno per ora, resta proprio la base narrativa.",
      "Il mondo fantasy, la magia, il protagonista speciale, la regola che viene infranta: sono tutti elementi che abbiamo già visto un numero imbarazzante di volte.",
      "Non significa che Ichi the Witch sia brutto, ma significa che dovrà lavorare parecchio per distinguersi davvero. Il primo volume intrattiene, sì, però non dà ancora quella sensazione da devo assolutamente leggere il seguito o la mia vita perde significato.",
      "E forse va bene così. Non tutti i manga devono arrivare al primo capitolo con la pretesa di riscrivere la storia dello shonen fantasy.",
      "Per ora direi: ni, ma con più sì del previsto.",
      "Non è un primo volume memorabile, non è il nuovo messia del manga fantasy e non mi ha fatto gridare al miracolo. Però si legge bene, ha momenti comici dignitosi, qualche scena d'azione riuscita e abbastanza ritmo da non farmi rimpiangere l'acquisto.",
      "Voto finale? 6,5 politico.",
      "Non abbastanza alto da correre in fumetteria urlando, ma abbastanza da farmi valutare seriamente se dare una chance anche al secondo volume.",
      "E questa, per un manga che partiva con una premessa così già vista, è già una piccola forma di magia.",
    ],
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
  { label: "Blog", value: "Meme culture" },
  { label: "Recensioni", value: "Anime / Manga" },
  { label: "Mood", value: "Ironico" },
];

export const editorialTracks = [
  { label: "Blog", icon: Newspaper },
  { label: "Recensioni", icon: Clapperboard },
  { label: "Hot take", icon: Flame },
];
