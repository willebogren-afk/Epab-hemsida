import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-brand)] text-[var(--color-on-brand)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Wordmark mono className="h-11 w-auto text-[var(--color-on-brand)]" />
          <p className="mt-6 max-w-xs leading-relaxed text-[var(--color-on-brand-muted)]">
            Mark, väg och skog i Kalmar län sedan 2009. Egna maskiner, egna
            förare och jour när vintern kräver det.
          </p>
        </div>

        <div>
          <h2 className="display text-xl tracking-[0.06em]">Kontakt</h2>
          <ul className="mt-5 space-y-3 text-[var(--color-on-brand-muted)]">
            <li className="leading-relaxed">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="cursor-pointer font-semibold text-[var(--color-on-brand)] underline decoration-[var(--color-accent-bright)] decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[var(--color-on-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-on-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="display text-xl tracking-[0.06em]">Tjänster</h2>
          <ul className="mt-5 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/tjanster#${s.slug}`}
                  className="cursor-pointer text-[var(--color-on-brand-muted)] transition-colors duration-200 hover:text-[var(--color-on-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="display text-xl tracking-[0.06em]">Genvägar</h2>
          <ul className="mt-5 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-[var(--color-on-brand-muted)] transition-colors duration-200 hover:text-[var(--color-on-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border-on-brand)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-[var(--color-on-brand-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Org.nr {site.orgNr}</p>
        </div>
      </div>
    </footer>
  );
}
