import Link from "next/link";
import { Photo, PhotoBackdrop } from "@/components/photo";
import { PhotoTile } from "@/components/photo-tile";
import { machines, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <SeasonBand />
      <ServicesStack />
      <FleetTeaser />
      <ContactCta />
    </>
  );
}

function Hero() {
  return (
    <PhotoBackdrop
      src={machines[4].image}
      alt={machines[4].imageAlt}
      priority
      sizes="100vw"
      className="border-b-2 border-[var(--color-ink)]"
      overlayClassName="bg-[var(--color-ink)]/78"
    >
      <div className="mx-auto flex min-h-[78vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:py-24">
        <p className="flex items-center gap-3 font-display text-sm tracking-[0.22em] text-[var(--color-accent-bright)] uppercase">
          <span className="h-4 w-1.5 bg-[var(--color-accent)]" aria-hidden="true" />
          Fliseryd · Oskarshamn · Mönsterås
        </p>

        <h1 className="mt-6 font-display text-[clamp(3rem,10vw,7rem)] leading-[0.88] tracking-[-0.015em] uppercase text-balance">
          Vi flyttar massor.{" "}
          <span className="text-[var(--color-accent-bright)]">Och snö.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-ink)]/90">
          EPAB Maskintjänst är entreprenören som kör hela året: schakt och
          väghållning under barmark, plog och sand när vintern slår till. Egna
          maskiner, egna förare, samma telefonnummer dygnet runt.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakt"
            className="flex min-h-[52px] cursor-pointer items-center bg-[var(--color-accent)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent-bright)]"
          >
            Begär offert
          </Link>
          <a
            href={site.phoneHref}
            className="flex min-h-[52px] cursor-pointer items-center border-2 border-[var(--color-text-on-ink-muted)] px-7 font-display text-xl tracking-[0.06em] uppercase transition-colors duration-200 hover:border-[var(--color-accent-bright)] hover:text-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent-bright)]"
          >
            Ring {site.phone}
          </a>
        </div>

        <a
          href="#tjanster"
          className="mt-14 flex cursor-pointer flex-col items-center gap-2 font-display text-sm tracking-[0.22em] uppercase text-[var(--color-text-on-ink-muted)] transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          Läs mer
          <span
            aria-hidden="true"
            className="scroll-cue h-10 w-px bg-[var(--color-accent)]"
          />
        </a>
      </div>
    </PhotoBackdrop>
  );
}

/* The season band is the site's structural thesis: this company's year is split
   by what the ground is doing, not by service category. */
function SeasonBand() {
  const bands = [
    {
      season: "Barmark",
      months: "April – november",
      work: "Schakt, hyvling, sopning, markberedning",
    },
    {
      season: "Vinter",
      months: "November – april",
      work: "Plogning, sandning, snöbortforsling, jour",
    },
    {
      season: "Året runt",
      months: "Januari – december",
      work: "Grundläggning, VA, transport av massor",
    },
  ];

  return (
    <section className="border-b-2 border-[var(--color-ink)] bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="sr-only">Arbetet över året</h2>
        <dl className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {bands.map((b) => (
            <div
              key={b.season}
              className="border-l-4 border-[var(--color-accent)] pl-5"
            >
              <dt className="font-display text-2xl tracking-[0.04em] uppercase">
                {b.season}
              </dt>
              <dd className="mt-1 font-semibold text-[var(--color-text-muted)] tabular-nums">
                {b.months}
              </dd>
              <dd className="mt-2 leading-snug text-[var(--color-text-muted)]">
                {b.work}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ServicesStack() {
  return (
    <section id="tjanster" className="scroll-mt-32 border-b-2 border-[var(--color-ink)]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="flex items-center gap-3 font-display text-sm tracking-[0.22em] text-[var(--color-accent-deep)] uppercase">
            <span className="h-4 w-1.5 bg-[var(--color-accent)]" aria-hidden="true" />
            Vad vi gör
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.95] uppercase text-balance sm:text-5xl">
            Uppdragen vi tar oss an
          </h2>
        </div>

        <ul className="mt-14 space-y-14">
          {services.map((s, i) => (
            <li key={s.slug}>
              <PhotoTile
                href={`/tjanster#${s.slug}`}
                label={s.title}
                caption={s.summary}
                src={s.image}
                alt={s.imageAlt}
                eyebrow={s.season}
                priority={i === 0}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </li>
          ))}
        </ul>

        <div className="mt-16 border-2 border-[var(--color-ink)] bg-[var(--color-paper-2)] p-8 text-center sm:p-10">
          <h3 className="font-display text-3xl leading-tight uppercase sm:text-4xl">
            Passar inget av det här?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">
            Beskriv jobbet så säger vi vad som krävs — och om vi är rätt
            entreprenör för det.
          </p>
          <Link
            href="/tjanster"
            className="mt-7 inline-flex min-h-[52px] cursor-pointer items-center bg-[var(--color-ink)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-text-on-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
          >
            Alla tjänster i detalj
          </Link>
        </div>
      </div>
    </section>
  );
}

function FleetTeaser() {
  return (
    <section className="border-b-2 border-[var(--color-ink)] bg-[var(--color-paper-2)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="flex items-center gap-3 font-display text-sm tracking-[0.22em] text-[var(--color-accent-deep)] uppercase">
            <span className="h-4 w-1.5 bg-[var(--color-accent)]" aria-hidden="true" />
            Maskinparken
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] uppercase sm:text-5xl">
            Rätt maskin till rätt jobb
          </h2>
          <p className="mt-6 leading-relaxed text-[var(--color-text-muted)]">
            Från väghyvel och markberedare till 30-tons långgrävare och mobila
            krossverk. Hjullastarna byter aggregat efter säsong: sopvals på
            våren, vikplog och sandspridare på vintern.
          </p>
          <Link
            href="/maskinpark"
            className="mt-8 inline-flex min-h-[52px] cursor-pointer items-center bg-[var(--color-ink)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-text-on-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
          >
            Se hela maskinparken
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {machines.slice(2, 6).map((m) => (
            /* vaghyvel, markberedning, langgravare, forkross */
            <Photo
              key={m.name}
              src={m.image}
              alt={m.imageAlt}
              ratio="aspect-[4/3]"
              className="border-2 border-[var(--color-border)]"
              sizes="(min-width: 1024px) 28vw, 50vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-text-on-ink)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="font-display text-4xl leading-[0.95] uppercase sm:text-5xl">
            Har du ett jobb åt oss?
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-text-on-ink-muted)]">
            Ring Erik eller Per direkt, eller skicka en förfrågan via
            formuläret. Vi återkommer med svar snarast.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="flex min-h-[52px] cursor-pointer items-center bg-[var(--color-accent)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent-bright)]"
          >
            Kontakta oss
          </Link>
          <a
            href={site.phoneHref}
            className="flex min-h-[52px] cursor-pointer items-center border-2 border-[var(--color-text-on-ink-muted)] px-7 font-display text-xl tracking-[0.06em] uppercase transition-colors duration-200 hover:border-[var(--color-accent-bright)] hover:text-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent-bright)]"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
