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
  /* Löptexten på tjänstesidan. Finns den ersätter den den korta
     sammanfattningen där; sammanfattningen används ändå på startsidan. */
  body?: string[];
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
    slug: "ledningsarbeten",
    tileTitle: "Ledningsarbeten",
    title: "Ledningsarbeten",
    summary:
      "Nya ledningar samt reparation och upprustning av befintliga nät för fjärrvärme, fiber och VA.",
    body: [
      "Mycket av det som håller ett samhälle igång ligger gömt under marken – och just därför är det avgörande att arbetet sköts med precision.",
      "Vi jobbar löpande med att lägga ner nya ledningar samt reparera och rusta upp befintliga nät för fjärrvärme, fiber och VA.",
    ],
    details: [],
    season: "Året runt",
    image: "/maskinpark/va-schakt.jpg",
    imageAlt:
      "Orange EPAB-bandgrävare vid ett öppet VA-schakt i en villagata, med nya avloppsrör och dagvattenledning framme vid schaktkanten.",
    focus: "50% 25%",
  },
  {
    slug: "rivningar",
    tileTitle: "Rivningar",
    title: "Rivningar",
    summary:
      "Kontrollerad rivning av byggnader av alla slag, med betongkross, saxar, gripar och hydraulhammare.",
    body: [
      "Vår maskinpark är utrustad för att kunna riva byggnader av alla slag på ett effektivt och kontrollerat sätt.",
      "Bland utrustningen finns betongkrossar, betongsaxar, rivningsgripar och hydraulhammare, vilket gör att vi kan anpassa metoden efter byggnadens material och förutsättningar.",
    ],
    details: [],
    season: "Året runt",
    image: "/maskinpark/hjulgravare.jpg",
    imageAlt:
      "Två orange EPAB-hjulgrävare uppställda intill varandra på ett grusupplag, med en maskintrailer bakom och en industribyggnad i bakgrunden.",
    focus: "50% 25%",
  },
  {
    slug: "skogsentreprenad",
    tileTitle: "Skogsentreprenad",
    title: "Skogsentreprenad",
    summary:
      "Byggnation och underhåll av skogsbilvägar samt markberedning inför plantering.",
    body: [
      "Vi utför arbeten med grävmaskin för att bygga och underhålla skogsbilvägar, vilket är en förutsättning för ett effektivt skogsbruk.",
      "En väl fungerande väg kortar skotningsavstånd och gör det möjligt att transportera virke med lastbil ända fram till avlägget.",
    ],
    details: [
      "Upprustning, dikning och trumbyten – vi rensar diken, skär kanter och byter vägtrummor med grävmaskin, vilket förbättrar vägens bärighet och leder bort vatten på rätt sätt.",
      "Vändplaner och avlägg – anläggs med grävmaskin så att lastbil med släp kan vända och lasta virke smidigt.",
      "Markberedning inför plantering – vi bearbetar marken efter avverkning med grävmaskin för att skapa goda förutsättningar för plantering eller naturlig föryngring.",
    ],
    season: "Barmark",
    image: "/maskinpark/markberedning.jpg",
    imageAlt:
      "Bandgrävare med markberedningsaggregat på ett hygge.",
  },
  {
    slug: "krossning-och-sortering",
    tileTitle: "Kross & sortering",
    title: "Krossning och sortering",
    summary:
      "Egen kross- och sorteringsutrustning som tar fram material av hög kvalitet direkt i projektet.",
    body: [
      "Genom att själva ha tillgång till kross- och sorteringsutrustning kan vi ta fram material av hög kvalitet direkt i projektet.",
      "Det ger både bättre kvalitet på slutprodukten och kortare transporter, eftersom materialet kan hanteras nära arbetsplatsen istället för att köras in utifrån.",
    ],
    details: [],
    season: "Barmark",
    image: "/maskinpark/forkross.jpg",
    imageAlt:
      "Grävmaskin som matar en mobil förkross på ett upplag.",
  },
  {
    slug: "vagunderhall",
    tileTitle: "Vägunderhåll",
    title: "Vägunderhåll",
    summary:
      "Hyvling, sopning, kantklippning och vinterväghållning av vägar, planer och industriytor.",
    details: [
      "Väghyvling – jämnar till vägbanan, fyller igen hjulspår och potthål samt korrigerar tvärfallet för bättre avvattning och framkomlighet",
      "Sopning – rent och framkomligt vägnät, fritt från sand, grus och skräp",
      "Kantklippning – håller tillbaka sly och vegetation längs vägkanterna",
      "Grensågning med högröjningsaggregat – kapar överhängande grenar för fri höjd och god sikt",
      "Snöröjning – håller vägarna framkomliga vid snöfall",
      "Saltning och sandning – förebygger och bekämpar halka under vintern",
    ],
    season: "Året runt",
    image: "/maskinpark/vaghyvel.jpg",
    imageAlt:
      "Väghyvel som profilerar en nyanlagd grusyta.",
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
    image: "/maskinpark/snorojning.jpg",
    alt: "Hjullastare med vikplog som plogar en snötäckt landsväg i mörker, med arbetsbelysningen tänd.",
    focus: "50% 50%",
  },
} as const;

export type Machine = {
  name: string;
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
    weight: "ca 14 ton",
    attachments: ["Holms sopvals", "Vattentank", "Sidoborste"],
    note: "Vårsopning av vägar och parkeringar med dammbindning.",
    image: "/maskinpark/sopning.jpg",
    imageAlt:
      "Volvo hjullastare med Holms sopaggregat som sopar kanten på en villagata en solig vårdag.",
  },
  {
    name: "Volvo hjullastare med vikplog",
    weight: "ca 14 ton",
    attachments: ["Vikplog", "Sandspridare", "Extraljusramp"],
    note: "Vinterjour, plogning och halkbekämpning dygnet runt.",
    image: "/maskinpark/snorojning.jpg",
    imageAlt:
      "Volvo hjullastare med vikplog som plogar en snötäckt landsväg i mörker, med arbetsbelysningen tänd.",
  },
  {
    name: "Caterpillar väghyvel",
    weight: "ca 18 ton",
    attachments: ["Hyvelblad", "GPS-styrning", "Ripper"],
    note: "Hyvling och profilering av grusvägar och planer.",
    image: "/maskinpark/vaghyvel.jpg",
    imageAlt:
      "Gul Caterpillar väghyvel som profilerar en nyanlagd grusyta.",
  },
  {
    name: "Bandgrävare med markberedningsaggregat",
    weight: "ca 25 ton",
    attachments: ["Markberedningsaggregat", "Rototilt", "Skopor"],
    note: "Markberedning och högläggning inför plantering på hygge.",
    image: "/maskinpark/markberedning.jpg",
    imageAlt:
      "Orange EPAB-bandgrävare på ett hygge med markberedningsaggregat lyft högt i luften.",
  },
  {
    name: "Två hjulgrävare DX160W",
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
    weight: "ca 30 ton",
    attachments: ["Långbom", "Planeringsskopa", "Rototilt"],
    note: "Djupschakt, dammarbeten och massförflyttning.",
    image: "/maskinpark/langgravare.jpg",
    imageAlt:
      "Två orange EPAB-grävmaskiner, varav en långgrävare, som schaktar lermassor på ett industriområde.",
  },
  {
    name: "Mobil förkross med matargrävare",
    weight: "ca 30 ton kross",
    attachments: ["Käftkross", "Matargrävare", "Transportband"],
    note: "Krossning av sprängsten och rivningsmassor direkt på plats.",
    image: "/maskinpark/forkross.jpg",
    imageAlt:
      "Orange EPAB-grävmaskin som matar en mobil förkross, med en hög färdigkrossat material framför transportbandet.",
  },
  {
    name: "Mobil efterkross och sorteringsverk",
    weight: "ca 25 ton",
    attachments: ["Konkross", "Sorteringsverk", "Tre utlastningsband"],
    note: "Siktning och färdigställning av bärlager och makadam.",
    image: "/maskinpark/efterkross.jpg",
    imageAlt:
      "Mobilt efterkross- och sorteringsverk med en hög färdigsiktad makadam framför sig.",
  },
];
