export const site = {
  name: "EPAB Maskintjänst AB",
  shortName: "EPAB",
  tagline: "Mark, väg och skog i Småland",
  orgNr: "556791-1580",
  address: {
    street: "Hantverkarvägen 17",
    zip: "380 53",
    city: "Fliseryd",
  },
  phone: "070 - 649 64 40",
  phoneHref: "tel:+46706496440",
  email: "kontakt@epab.se",
  /* Direktnumren till ägarna, utan namn. Sajten ska inte namnge personer —
     numren står för sig själva under en gemensam rubrik. */
  directPhones: [
    { phone: "070 - 649 64 40", phoneHref: "tel:+46706496440" },
    { phone: "070 - 307 89 57", phoneHref: "tel:+46703078957" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/maskinpark", label: "Maskinpark" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type Service = {
  slug: string;
  title: string;
  /* Kort etikett för bildrutorna på startsidan — långa namn radbryts illa
     ovanpå ett foto. */
  tileTitle: string;
  summary: string;
  details: string[];
  season: "Året runt" | "Vinter" | "Barmark";
  /* null tills fotot finns — då visas en märkt platshållare i stället för
     en bild som föreställer något annat. */
  image: string | null;
  imageAlt: string;
  /* Sätts bara för stående foton, som annars tappar maskinen i beskärningen. */
  focus?: string;
};

export const services: Service[] = [
  {
    slug: "mark-och-schakt",
    tileTitle: "Mark & schakt",
    title: "Mark och schakt",
    summary:
      "Grundläggning, VA-schakt, dränering och finplanering med grävmaskiner från 3 till 30 ton.",
    details: [
      "Husgrunder och plattor",
      "VA-ledningar och servisanslutningar",
      "Dränering och dagvattenhantering",
      "Terrassering och finplanering",
    ],
    season: "Året runt",
    image: "/maskinpark/va-schakt.jpg",
    imageAlt:
      "Orange EPAB-bandgrävare vid ett öppet VA-schakt i en villagata, med nya avloppsrör och dagvattenledning framme vid schaktkanten.",
    focus: "50% 25%",
  },
  {
    slug: "rivning",
    tileTitle: "Rivning",
    title: "Rivning",
    summary:
      "Rivning av byggnader, grunder och konstruktioner, med sortering av massorna direkt på plats.",
    details: [
      "Rivning av bostadshus, ekonomibyggnader och industrilokaler",
      "Rivning av grunder, plattor och murar",
      "Sortering av rivningsmassor på arbetsplatsen",
      "Krossning och återvinning av betong och tegel",
    ],
    season: "Året runt",
    image: null,
    imageAlt:
      "EPAB-grävmaskin som river en byggnad.",
  },
  {
    slug: "vaghallning",
    tileTitle: "Gator & vägar",
    title: "Väghållning",
    summary:
      "Hyvling, dammbindning och grusning av enskilda vägar, samfälligheter och industriområden.",
    details: [
      "Hyvling med väghyvel",
      "Grusning och bärlagerkomplettering",
      "Dikning och trumbyten",
      "Underhållsavtal för vägsamfälligheter",
    ],
    season: "Barmark",
    image: "/maskinpark/vaghyvel.jpg",
    imageAlt:
      "Väghyvel som profilerar en nyanlagd grusyta.",
  },
  {
    slug: "snorojning-och-halkbekampning",
    tileTitle: "Snöröjning",
    title: "Snöröjning och halkbekämpning",
    summary:
      "Jour dygnet runt genom vintersäsongen för fastigheter, industri och vägföreningar.",
    details: [
      "Plogning med hjullastare och vikplog",
      "Sandning och saltning",
      "Uppsamling och undanröjning av snö",
      "Säsongsavtal med jourberedskap",
    ],
    season: "Vinter",
    image: "/maskinpark/snorojning.jpg",
    imageAlt:
      "Hjullastare med vikplog som plogar en snötäckt landsväg i mörker.",
  },
  {
    slug: "sopning-och-renhallning",
    tileTitle: "Sopning",
    title: "Sopning och renhållning",
    summary:
      "Vårsopning av vägar, parkeringar och industriytor med sopvals och vattendimma.",
    details: [
      "Vårsopning efter vintersäsong",
      "Sopning av parkeringar och industriytor",
      "Dammbindning med vatten",
      "Uppsamling av sopmassor",
    ],
    season: "Barmark",
    image: "/maskinpark/sopning.jpg",
    imageAlt:
      "Hjullastare med sopaggregat som sopar kanten på en villagata.",
  },
  {
    slug: "skogsarbete",
    tileTitle: "Skogsväg & mark",
    title: "Skogsvägsbyggnation och markberedning",
    summary:
      "Nya skogsbilvägar, upprustning av befintliga vägar och markberedning inför plantering.",
    details: [
      "Nybyggnad av skogsbilvägar",
      "Upprustning, dikning och trumbyten",
      "Vändplaner och avlägg",
      "Markberedning inför plantering",
    ],
    season: "Barmark",
    image: "/maskinpark/markberedning.jpg",
    imageAlt:
      "Bandgrävare med markberedningsaggregat på ett hygge.",
  },
  {
    slug: "bergkross",
    tileTitle: "Berg & kross",
    title: "Krossning och sortering",
    summary:
      "Mobil för- och efterkross som gör bärlager, makadam och fyllnadsmassor av sprängsten på plats.",
    details: [
      "Krossning av sprängsten och berg",
      "Återvinning av rivnings- och betongmassor",
      "Siktning till bärlager och makadam",
      "Krossning direkt på arbetsplatsen",
    ],
    season: "Barmark",
    image: "/maskinpark/forkross.jpg",
    imageAlt:
      "Grävmaskin som matar en mobil förkross på ett upplag.",
  },
];

/**
 * Bilderna som bär startsidan. Ligger här i stället för som index i
 * machines[], så att maskinlistan kan växa utan att startsidan byter foto.
 */
export const featured = {
  hero: {
    image: "/maskinpark/langgravare.jpg",
    alt: "Två orange EPAB-grävmaskiner, varav en långgrävare med utsträckt bom, som schaktar lermassor på ett industriområde.",
    focus: "50% 50%",
  },
  fleet: {
    image: "/maskinpark/hjulgravare.jpg",
    alt: "Två orange EPAB-hjulgrävare uppställda intill varandra på ett grusupplag, med en maskintrailer bakom och en industribyggnad i bakgrunden.",
    focus: "50% 15%",
  },
} as const;

export type Machine = {
  name: string;
  category: string;
  weight: string;
  attachments: string[];
  note: string;
  /* Sökväg under /public. Visas automatiskt så fort filen finns på plats. */
  image: string | null;
  imageAlt: string;
  /* Sätts bara för stående foton, som annars tappar maskinen i beskärningen. */
  focus?: string;
};

export const machines: Machine[] = [
  {
    name: "Volvo hjullastare med sopaggregat",
    category: "Hjullastare",
    weight: "ca 14 ton",
    attachments: ["Holms sopvals", "Vattentank", "Sidoborste"],
    note: "Vårsopning av vägar och parkeringar med dammbindning.",
    image: "/maskinpark/sopning.jpg",
    imageAlt:
      "Volvo hjullastare med Holms sopaggregat som sopar kanten på en villagata en solig vårdag.",
  },
  {
    name: "Volvo hjullastare med vikplog",
    category: "Hjullastare",
    weight: "ca 14 ton",
    attachments: ["Vikplog", "Sandspridare", "Extraljusramp"],
    note: "Vinterjour, plogning och halkbekämpning dygnet runt.",
    image: "/maskinpark/snorojning.jpg",
    imageAlt:
      "Volvo hjullastare med vikplog som plogar en snötäckt landsväg i mörker, med arbetsbelysningen tänd.",
  },
  {
    name: "Caterpillar väghyvel",
    category: "Väghyvel",
    weight: "ca 18 ton",
    attachments: ["Hyvelblad", "GPS-styrning", "Ripper"],
    note: "Hyvling och profilering av grusvägar och planer.",
    image: "/maskinpark/vaghyvel.jpg",
    imageAlt:
      "Gul Caterpillar väghyvel som profilerar en nyanlagd grusyta.",
  },
  {
    name: "Bandgrävare med markberedningsaggregat",
    category: "Grävmaskin",
    weight: "ca 25 ton",
    attachments: ["Markberedningsaggregat", "Rototilt", "Skopor"],
    note: "Markberedning och högläggning inför plantering på hygge.",
    image: "/maskinpark/markberedning.jpg",
    imageAlt:
      "Orange EPAB-bandgrävare på ett hygge med markberedningsaggregat lyft högt i luften.",
  },
  {
    name: "Två hjulgrävare DX160W",
    category: "Hjulgrävare",
    weight: "ca 17 ton/st",
    attachments: ["Tiltrotator", "Planeringsblad", "Grävskopor"],
    note: "Går på egna hjul mellan tomter och gator. Används för VA-schakt och ledningsarbeten i tätort, där bandgående maskiner sliter på asfalten.",
    image: "/maskinpark/hjulgravare.jpg",
    imageAlt:
      "Två orange EPAB-hjulgrävare uppställda intill varandra på ett grusupplag, med en maskintrailer bakom och en industribyggnad i bakgrunden.",
    focus: "50% 25%",
  },
  {
    name: "Långgrävare för schakt",
    category: "Grävmaskin",
    weight: "ca 30 ton",
    attachments: ["Långbom", "Planeringsskopa", "Rototilt"],
    note: "Djupschakt, dammarbeten och massförflyttning.",
    image: "/maskinpark/langgravare.jpg",
    imageAlt:
      "Två orange EPAB-grävmaskiner, varav en långgrävare, som schaktar lermassor på ett industriområde.",
  },
  {
    name: "Mobil förkross med matargrävare",
    category: "Krossverk",
    weight: "ca 30 ton kross",
    attachments: ["Käftkross", "Matargrävare", "Transportband"],
    note: "Krossning av sprängsten och rivningsmassor direkt på plats.",
    image: "/maskinpark/forkross.jpg",
    imageAlt:
      "Orange EPAB-grävmaskin som matar en mobil förkross, med en hög färdigkrossat material framför transportbandet.",
  },
  {
    name: "Mobil efterkross och sorteringsverk",
    category: "Krossverk",
    weight: "ca 25 ton",
    attachments: ["Konkross", "Sorteringsverk", "Tre utlastningsband"],
    note: "Siktning och färdigställning av bärlager och makadam.",
    image: "/maskinpark/efterkross.jpg",
    imageAlt:
      "Mobilt efterkross- och sorteringsverk med en hög färdigsiktad makadam framför sig.",
  },
];
