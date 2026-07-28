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
  contacts: [
    {
      name: "Erik Gustafsson",
      role: "Grundare och delägare",
      phone: "070 - 649 64 40",
      phoneHref: "tel:+46706496440",
      email: "erik.gustafsson@epab.nu",
    },
    {
      name: "Per Ringberg",
      role: "Grundare och delägare",
      phone: "070 - 307 89 57",
      phoneHref: "tel:+46703078957",
      email: "per.ringberg@epab.nu",
    },
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
  summary: string;
  details: string[];
  season: "Året runt" | "Vinter" | "Barmark";
};

export const services: Service[] = [
  {
    slug: "mark-och-schakt",
    title: "Mark och schakt",
    summary:
      "Grundläggning, VA-schakt, dränering och finplanering med grävmaskiner från 3 till 30 ton.",
    details: [
      "Husgrunder och plattor",
      "VA-ledningar och servisanslutningar",
      "Dränering och dagvattenhantering",
      "Massutbyte och terrassering",
    ],
    season: "Året runt",
  },
  {
    slug: "vaghallning",
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
  },
  {
    slug: "snorojning-och-halkbekampning",
    title: "Snöröjning och halkbekämpning",
    summary:
      "Jour dygnet runt genom vintersäsongen för fastigheter, industri och vägföreningar.",
    details: [
      "Plogning med hjullastare och vikplog",
      "Sandning och saltning",
      "Bortforsling av snö",
      "Säsongsavtal med jourberedskap",
    ],
    season: "Vinter",
  },
  {
    slug: "sopning-och-renhallning",
    title: "Sopning och renhållning",
    summary:
      "Vårsopning av vägar, parkeringar och industriytor med sopvals och vattendimma.",
    details: [
      "Vårsopning efter vintersäsong",
      "Sopning av parkeringar och industriytor",
      "Dammbindning med vatten",
      "Bortforsling av sopmassor",
    ],
    season: "Barmark",
  },
  {
    slug: "skogsarbete",
    title: "Skogsarbete och markberedning",
    summary:
      "Stubbrytning, markberedning och röjning inför plantering och anläggning.",
    details: [
      "Markberedning inför plantering",
      "Stubbrytning och stubbfräsning",
      "Röjning av tomt och vägkant",
      "Uttransport av ris och rotvältor",
    ],
    season: "Barmark",
  },
  {
    slug: "bergkross",
    title: "Krossning och sortering",
    summary:
      "Mobil för- och efterkross som gör bärlager, makadam och fyllnadsmassor av sprängsten på plats.",
    details: [
      "Krossning av sprängsten och berg",
      "Återvinning av rivnings- och betongmassor",
      "Siktning till bärlager och makadam",
      "Krossverket flyttas ut till arbetsplatsen",
    ],
    season: "Barmark",
  },
  {
    slug: "transport-och-massor",
    title: "Transport och massor",
    summary:
      "Leverans av grus, matjord och bergkross samt bortforsling av schaktmassor.",
    details: [
      "Grus, bärlager och bergkross",
      "Matjord och anläggningsjord",
      "Bortforsling av schakt- och rivningsmassor",
      "Maskinflytt inom regionen",
    ],
    season: "Året runt",
  },
];

export type Machine = {
  name: string;
  category: string;
  weight: string;
  attachments: string[];
  note: string;
  /* Sökväg under /public. Visas automatiskt så fort filen finns på plats. */
  image: string | null;
  imageAlt: string;
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
