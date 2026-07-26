import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-text-on-ink)]">
      <div className="hazard-stripe h-3" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Wordmark className="h-10 w-auto [--color-text:var(--color-text-on-ink)] [--color-text-muted:var(--color-text-on-ink-muted)]" />
          <p className="mt-5 max-w-xs text-[var(--color-text-on-ink-muted)]">
            Mark, väg och skog i Kalmar län sedan 2009. Egna maskiner, egna
            förare och jour när vintern kräver det.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.08em] uppercase">
            Kontakt
          </h2>
          <ul className="mt-5 space-y-3 text-[var(--color-text-on-ink-muted)]">
            <li>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="cursor-pointer font-semibold text-[var(--color-text-on-ink)] transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.08em] uppercase">
            Tjänster
          </h2>
          <ul className="mt-5 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/tjanster#${s.slug}`}
                  className="cursor-pointer text-[var(--color-text-on-ink-muted)] transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.08em] uppercase">
            Genvägar
          </h2>
          <ul className="mt-5 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-[var(--color-text-on-ink-muted)] transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border-on-ink)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-[var(--color-text-on-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Org.nr {site.orgNr}</p>
        </div>
      </div>
    </footer>
  );
}
