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
  /* null betyder att tjänsten saknar foto — då visas ingen bild alls, hellre
     det än ett foto som föreställer något annat. */
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
    /* Inget foto från ett rivningsjobb finns ännu. Hellre ingen bild än en
       bild som föreställer något annat. */
    image: null,
    imageAlt: "",
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
      "Hyvling, sopning, kantklippning och vinterväghållning av vägar.",
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

export type Slide = {
  image: string;
  alt: string;
  focus?: string;
};

/** Bildspelet högst upp på startsidan — maskinerna, ett foto i taget. */
export const gallery: Slide[] = [
  {
    image: "/maskinpark/langgravare.jpg",
    alt: "Två orange EPAB-grävmaskiner, varav en långgrävare med utsträckt bom, som schaktar lermassor på ett industriområde.",
  },
  {
    image: "/maskinpark/va-schakt.jpg",
    alt: "Orange EPAB-bandgrävare vid ett öppet VA-schakt i en villagata, med nya avloppsrör och dagvattenledning framme vid schaktkanten.",
    focus: "50% 25%",
  },
  {
    image: "/maskinpark/hjulgravare.jpg",
    alt: "Två orange EPAB-hjulgrävare uppställda intill varandra på ett grusupplag, med en maskintrailer bakom.",
    focus: "50% 15%",
  },
  {
    image: "/maskinpark/markberedning.jpg",
    alt: "Orange EPAB-bandgrävare på ett hygge med markberedningsaggregatet lyft högt i luften.",
  },
  {
    image: "/maskinpark/vaghyvel.jpg",
    alt: "Caterpillar väghyvel som profilerar en nyanlagd grusyta.",
  },
  {
    image: "/maskinpark/forkross.jpg",
    alt: "Orange EPAB-grävmaskin som matar en mobil förkross, med en hög färdigkrossat material framför transportbandet.",
  },
  {
    image: "/maskinpark/efterkross.jpg",
    alt: "Mobilt efterkross- och sorteringsverk med en hög färdigsiktad makadam framför sig.",
  },
  {
    image: "/maskinpark/sopning.jpg",
    alt: "Volvo hjullastare med sopaggregat som sopar kanten på en villagata en solig vårdag.",
  },
  {
    image: "/maskinpark/snorojning.jpg",
    alt: "Hjullastare med vikplog som plogar en snötäckt landsväg i mörker, med arbetsbelysningen tänd.",
  },
];

/** Bilderna som bär startsidan, utanför tjänstelistan. */
export const featured = {
  fleet: {
    image: "/maskinpark/snorojning.jpg",
    alt: "Hjullastare med vikplog som plogar en snötäckt landsväg i mörker, med arbetsbelysningen tänd.",
    focus: "50% 50%",
  },
} as const;
