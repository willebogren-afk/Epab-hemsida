import Link from "next/link";
import { TintedPhoto } from "@/components/tinted-photo";
import { machines, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTiles />
      <FleetBand />
      <ContactBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-84px)] flex-col justify-center overflow-hidden">
      <TintedPhoto
        src={machines[5].image!}
        alt={machines[5].imageAlt}
        priority
        sizes="100vw"
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-24 text-center text-[var(--color-on-photo)]">
        <h1 className="display text-[clamp(2.4rem,7.5vw,4.75rem)]">
          Vi flyttar massor.
          <br />
          Och snö.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed font-semibold sm:text-xl">
          Med egna maskiner, egna förare och jour dygnet runt utför vi mark och
          schakt, väghållning, krossning och snöröjning. EPAB Maskintjänst AB
          utgår från Fliseryd och arbetar i Oskarshamn, Mönsterås och övriga
          Kalmar län.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="display flex min-h-[54px] cursor-pointer items-center rounded-full bg-[var(--color-on-photo)] px-9 text-xl tracking-[0.04em] text-[var(--color-brand)] transition-colors duration-200 hover:bg-[var(--color-on-photo-muted)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-photo)]"
          >
            Begär offert
          </Link>
          <a
            href={site.phoneHref}
            className="display flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-photo)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-photo)] hover:text-[var(--color-brand-deep)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
          >
            {site.phone}
          </a>
        </div>
      </div>

      <a
        href="#tjanster"
        className="relative mx-auto mb-10 flex cursor-pointer flex-col items-center gap-2 text-[var(--color-on-photo)] transition-opacity duration-200 hover:opacity-70 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
      >
        <span className="font-semibold">Läs mer</span>
        <span aria-hidden="true" className="h-10 w-px bg-current" />
      </a>
    </section>
  );
}

function ServiceTiles() {
  return (
    <section id="tjanster" className="scroll-mt-24 bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/tjanster#${s.slug}`}
                className="group block cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
                  <TintedPhoto
                    src={s.image}
                    alt={s.imageAlt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute inset-0 z-10 flex items-center justify-center p-6">
                    <span className="display rounded-full border-2 border-[var(--color-on-photo)] px-8 py-3 text-center text-xl tracking-[0.04em] text-[var(--color-on-photo)] transition-colors duration-200 group-hover:bg-[var(--color-on-photo)] group-hover:text-[var(--color-brand-deep)] sm:text-2xl">
                      {s.tileTitle}
                    </span>
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text)]">
                {s.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FleetBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <TintedPhoto
        src={machines[4].image!}
        alt={machines[4].imageAlt}
        soft
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 text-[var(--color-on-photo)] sm:px-8 sm:py-28">
        <h2 className="display max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)]">
          Rätt maskin till rätt jobb
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed font-semibold">
          Från väghyvel och markberedare till 30-tons långgrävare och mobila
          krossverk. Hjullastarna byter aggregat efter säsong: sopvals på våren,
          vikplog och sandspridare på vintern.
        </p>
        <Link
          href="/maskinpark"
          className="display mt-9 inline-flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-photo)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-photo)] hover:text-[var(--color-brand-deep)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
        >
          Se maskinparken
        </Link>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <TintedPhoto
        src={machines[3].image!}
        alt={machines[3].imageAlt}
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 text-[var(--color-on-photo)] sm:px-8 sm:py-28">
        <h2 className="display max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)]">
          Engagemang i alla uppdrag
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed font-semibold">
          Ring Erik eller Per direkt, eller skicka en förfrågan via formuläret.
          Vi återkommer med svar snarast.
        </p>
        <Link
          href="/kontakt"
          className="display mt-9 inline-flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-photo)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-photo)] hover:text-[var(--color-brand-deep)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
        >
          Kontakta oss
        </Link>
      </div>
    </section>
  );
}
