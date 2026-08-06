import Link from "next/link";
import { Photo } from "@/components/photo";
import { featured, services, site } from "@/lib/site";

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
    <section>
      <div className="bg-[var(--color-brand)] text-[var(--color-on-brand)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <h1 className="display max-w-3xl text-[clamp(2.4rem,7vw,4.5rem)]">
            Vi förverkligar era visioner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-on-brand-muted)]">
            Med engagerad personal och drivna ägare gräver och häver vi oss in
            i framtiden.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="display flex min-h-[54px] cursor-pointer items-center rounded-full bg-[var(--color-on-brand)] px-9 text-xl tracking-[0.04em] text-[var(--color-brand)] transition-colors duration-200 hover:bg-[var(--color-on-brand-muted)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
            >
              Begär offert
            </Link>
            <a
              href={site.phoneHref}
              className="display flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-brand)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-brand)] hover:text-[var(--color-brand)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Fotot står för sig självt, i hela sin bredd och sina egna
          proportioner. Ingenting ligger ovanpå det. */}
      <Photo
        src={featured.hero.image}
        alt={featured.hero.alt}
        ratio="aspect-[16/9]"
        focus={featured.hero.focus}
        priority
        sizes="100vw"
      />
    </section>
  );
}

function ServiceTiles() {
  return (
    <section id="tjanster" className="scroll-mt-24 bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="display text-[clamp(1.8rem,4.5vw,2.8rem)]">
          Uppdragen vi tar oss an
        </h2>

        <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="flex flex-col">
              <Link
                href={`/tjanster#${s.slug}`}
                className="group flex cursor-pointer flex-col focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                <Photo
                  src={s.image}
                  alt={s.imageAlt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <span className="display mt-5 text-2xl transition-colors duration-200 group-hover:text-[var(--color-accent-text)]">
                  {s.title}
                </span>
              </Link>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
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
    <section className="bg-[var(--color-brand)] text-[var(--color-on-brand)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="display max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)]">
          Rätt maskin till rätt jobb
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-on-brand-muted)]">
          Från väghyvel och markberedare till 30-tons långgrävare och mobila
          krossverk. Hjullastarna byter aggregat efter säsong: sopvals på våren,
          vikplog och sandspridare på vintern.
        </p>
        <Link
          href="/maskinpark"
          className="display mt-9 inline-flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-brand)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-brand)] hover:text-[var(--color-brand)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
        >
          Se maskinparken
        </Link>
      </div>
      <Photo
        src={featured.fleet.image}
        alt={featured.fleet.alt}
        ratio="aspect-[16/9]"
        focus={featured.fleet.focus}
        sizes="100vw"
      />
    </section>
  );
}

function ContactBand() {
  return (
    <section className="bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="display max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)]">
          Engagemang i alla uppdrag
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          Ring Erik eller Per direkt, eller skicka en förfrågan via formuläret.
          Vi återkommer med svar snarast.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="display flex min-h-[54px] cursor-pointer items-center rounded-full bg-[var(--color-accent)] px-9 text-xl tracking-[0.04em] text-[var(--color-on-photo)] transition-colors duration-200 hover:bg-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]"
          >
            Kontakta oss
          </Link>
          <a
            href={site.phoneHref}
            className="display flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-brand)] px-9 text-xl tracking-[0.04em] text-[var(--color-brand)] transition-colors duration-200 hover:bg-[var(--color-brand)] hover:text-[var(--color-on-brand)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
