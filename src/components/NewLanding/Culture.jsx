import React from 'react';
import { Link } from 'react-router-dom';
import NewHeader from './NewHeader';
import Footer from './Footer';

const sections = [
  {
    number: '1',
    icon: 'account_balance',
    title: 'Storia e Identità',
    subtitle: "L'unione di due culture",
    accent: 'blue',
    accentClass: 'bg-blue-600',
    accentLight: 'bg-blue-50 dark:bg-blue-950/40',
    borderClass: 'border-blue-200 dark:border-blue-900',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    paragraphs: [
      'Il Lago di Lugano ha una forma bizzarra, quasi tentacolare, che sfida ogni logica geografica. Questa sua conformazione lo ha reso, nei secoli, un punto di incontro, ma anche di scontro. Un punto importante a livello strategico per le potenze che si contendevano il controllo delle Alpi.',
      "Il Medioevo e la contesa tra i ducati: Bisogna immaginare il lago come a una disputa continua tra i vari duchi di Milano, ambiziosi signori del nord, e i vescovi di Como, custodi di antiche tradizioni. Per secoli, il Ceresio è stato il luogo conteso delle grandi potenze italiane. Questo luogo è stato un terreno fertile per commerci e intrighi, ma anche un luogo composto da identità diverse, plasmate da diverse fonti e influenze.",
      "L'identità Svizzera e il miracolo culturale: Nel 1512, un evento importante cambiò il corso della storia del Ticino. Questo evento fu un momento chiave che vide passare i distretti di Lugano e Mendrisio al controllo dei Cantoni Svizzeri. Qui nasce il miracolo culturale del Ticino: un territorio profondamente legato all'Italia per lingua, cultura e tradizioni, ma che politicamente fa parte della Svizzera.",
      "Il Risorgimento sul lago: Nel corso dell'Ottocento, il lago è diventato un posto sicuro per molti patrioti italiani che erano costretti a scappare dalle persecuzioni degli austriaci. Persone importanti come Carlo Cattaneo hanno trovato qui la libertà di pensare, scrivere e cospirare, rendendo il Ceresio un vero e proprio laboratorio di idee liberali e un simbolo di libertà.",
    ],
  },
  {
    number: '2',
    icon: 'landscape',
    title: 'Il Territorio',
    subtitle: 'Tra borghi e montagne',
    accent: 'emerald',
    accentClass: 'bg-emerald-600',
    accentLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderClass: 'border-emerald-200 dark:border-emerald-900',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400',
    paragraphs: [
      "Il paesaggio del Ceresio non è solo uno sfondo, ma il protagonista silenzioso che ha plasmato il carattere dei suoi abitanti e le loro storie. Le montagne qui non si limitano a circondare il lago; si uniscono a esso, creando panorami mozzafiato e condizioni di vita uniche.",
      "Lugano, il Salotto sul Lago: Rinomata per il suo afflusso turistico e per l'unione tra l'efficienza svizzera e l'atmosfera mediterranea, la città di Lugano rappresenta un vero e proprio punto di riferimento.",
      "Porto Ceresio, l'Anima Romantica: Situato all'estremità meridionale, questo borgo incanta con il suo lungolago. Se Lugano rappresenta la modernità e il dinamismo, Porto Ceresio figura come la quiete.",
      "Morcote, capolavoro verticale: Un tempo villaggio di pescatori, Morcote è riconosciuto come uno dei borghi più belli della Svizzera. La sua particolarità è la verticalità: le case sono costruite sulla roccia, una sopra l'altra, culminando col complesso della Chiesa di Santa Maria del Sasso.",
      "Il fascino di Gandria, dove il tempo si ferma: Fino a pochi decenni fa, Gandria era raggiungibile quasi esclusivamente via lago. Questa storica chiusura ha preservato un'atmosfera magica e senza tempo, fatta di scalinate ripide, passaggi angusti e il profumo inebriante del gelsomino.",
      "Monte San Salvatore e Monte Generoso, le sentinelle del Ceresio: Queste vette offrono una prospettiva aerea unica sul lago e sulle sue valli. Il Monte Generoso ospita il futuristico \"Fiore di Pietra\" dell'architetto Mario Botta, un'opera audace che dimostra come l'architettura moderna possa dialogare armoniosamente con la grandezza della natura.",
    ],
  },
  {
    number: '3',
    icon: 'architecture',
    title: 'Cultura e Tradizioni',
    subtitle: "L'Impronta dei Maestri Costruttori",
    accent: 'violet',
    accentClass: 'bg-violet-600',
    accentLight: 'bg-violet-50 dark:bg-violet-950/40',
    borderClass: 'border-violet-200 dark:border-violet-900',
    iconBg: 'bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400',
    paragraphs: [
      "Parlare del Lago di Lugano significa anche parlare di architettura. Il Ticino, sebbene piccolo, ha esportato ingegno e maestria in tutta Europa, e le rive del Ceresio ne conservano orgogliosamente l'eredità.",
      "I Maestri Comacini e i Grandi Architetti: Sin dal Medioevo, artigiani specializzati partirono da queste valli per costruire grandi cattedrali, palazzi e piazze d'Europa. Nomi come Domenico Fontana, che ridisegnò Roma, o Francesco Borromini, genio del Barocco, portarono con loro l'estetica, la precisione e l'innovazione imparate su queste rive.",
      "L'Armonia tra Tradizione e Innovazione: Questa straordinaria tradizione costruttiva continua tutt'oggi. Passeggiando per Lugano e i dintorni, si possono notare edifici che combinano materiali odierni come il cemento armato e l'acciaio in modo poetico e funzionale. È la \"Scuola Ticinese\" di architettura.",
      "Il Legame con l'Acqua: La tradizione più sentita rimane quella delle barche tipiche e della pesca. Per i borghi della sponda settentrionale, l'acqua era l'unica via di comunicazione e fonte di cibo. Questo portò alla creazione di un legame indissolubile tra l'uomo e il lago.",
    ],
  },
  {
    number: '4',
    icon: 'restaurant',
    title: 'Sapori del Lago',
    subtitle: 'La Cultura del Grotto e i prodotti locali',
    accent: 'amber',
    accentClass: 'bg-amber-500',
    accentLight: 'bg-amber-50 dark:bg-amber-950/40',
    borderClass: 'border-amber-200 dark:border-amber-900',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400',
    paragraphs: [
      "La gastronomia del Ceresio è l'espressione massima del concetto di \"km zero\". Non è una cucina di sfarzo, ma di sostanza, convivialità e profondo legame con la terra.",
      "La tradizione culinaria del Grotto: È l'anima gastronomica del territorio. In origine, i grotti erano grotte naturali utilizzate come \"frigoriferi\" grazie alle correnti d'aria fresca. Oggi sono ristoranti rustici e accoglienti, spesso con tavoli in granito all'ombra dei tigli, dove si mangia all'aperto.",
    ],
    products: [
      { icon: 'set_meal', name: 'Pesce di Lago', desc: 'Il lavarello, il persico e il luccio sono i re della tavola, serviti marinati in aceto o accompagnati da un risotto.' },
      { icon: 'wine_bar', name: 'Merlot del Ticino', desc: 'Un vino che ha trovato in queste colline il suo habitat ideale — eleganza, morbidezza e un profumo intenso.' },
      { icon: 'grocery', name: 'Formaggi d\'Alpeggio', desc: 'Prodotti nelle aree circostanti, caratterizzati dal profumo delle erbe di alta montagna.' },
    ],
    shops: [
      { name: 'Moncucchetto', address: 'Via Crivelli Torricelli, Lugano', desc: 'Cantina dal design moderno immersa tra le colline di Lugano.' },
      { name: 'Mercato cittadino', address: 'Piazza della Riforma, Lugano', desc: 'Martedì e venerdì mattina — formaggi, miele di castagno e prodotti a km zero.' },
      { name: 'Gabbani', address: 'Via Pessina, Lugano', desc: "Un'istituzione luganese: i migliori formaggi degli alpeggi ticinesi, salumi e Merlot selezionati." },
    ],
  },
];

export default function Culture() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <NewHeader />

      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center text-center bg-cover bg-center bg-[url('/night.jpeg')]">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Cultura & Territorio</p>
          <h1 className="text-4xl font-black text-primary sm:text-5xl lg:text-6xl leading-tight drop-shadow-2xl">
            Il Respiro del Ceresio
          </h1>
          <p className="mt-6 text-lg !text-white leading-relaxed">
            Un Viaggio Culturale tra Acqua e Montagne — dove il confine non è un muro che divide, ma una linea d&apos;acqua che unisce.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Benvenuti sulle rive del Lago di Lugano. Attraverso questo viaggio sarete guidati attraverso due paesi, dove il lago è un punto di ritrovo tra culture diverse: un palcoscenico naturale dove la storia ha tessuto trame complesse e affascinanti.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <main className="flex-1">
        {sections.map((section) => (
          <section key={section.number} className={`${section.accentLight} border-b ${section.borderClass}`}>
            <div className="mx-auto max-w-5xl px-6 py-16 lg:px-20">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${section.iconBg}`}>
                  <span className="material-symbols-outlined text-3xl">{section.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Sezione {section.number}</p>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">{section.title}</h2>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">{section.subtitle}</p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed">{p}</p>
                ))}
              </div>

              {/* Products (section 4 only) */}
              {section.products && (
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">I fiori all&apos;occhiello</h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {section.products.map((prod, i) => (
                      <div key={i} className="rounded-xl border border-amber-200 dark:border-amber-900 bg-white dark:bg-slate-900 p-5">
                        <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${section.iconBg}`}>
                          <span className="material-symbols-outlined text-xl">{prod.icon}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{prod.name}</h4>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{prod.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shops (section 4 only) */}
              {section.shops && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Dove acquistarli</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {section.shops.map((shop, i) => (
                      <div key={i} className="flex gap-3 rounded-xl border border-amber-200 dark:border-amber-900 bg-white dark:bg-slate-900 p-4">
                        <span className="material-symbols-outlined mt-0.5 text-amber-500 shrink-0">storefront</span>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">{shop.name}</p>
                          <p className="text-xs text-slate-400 dark:text-slate-500">{shop.address}</p>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{shop.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Closing quote */}
        <section className="bg-primary py-20 text-center px-6">
          <div className="mx-auto max-w-3xl">
            <span className="material-symbols-outlined text-5xl text-white/40 mb-4 block">format_quote</span>
            <p className="text-xl font-medium !text-white leading-relaxed sm:text-2xl">
              Il Lago di Lugano non è solo una meta turistica, ma un luogo di coesione tra due culture differenti: la precisione svizzera e il calore italiano.
            </p>
            <p className="mt-6 !text-white/80 text-base">
              Un insieme di emozioni, sapori e paesaggi che aspettano solo di essere visitati.
            </p>
            <Link
              to="/map"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-primary hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined">map</span>
              Esplora la mappa
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
