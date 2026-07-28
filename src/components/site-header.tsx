"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

/* Wordmarken ritas i --color-text/--color-text-muted. På den mörka listen
   pekas de om till ink-varianterna istället för att SVG:n behöver en egen
   färgprop. */
const wordmarkOnInk =
  "[--color-text:var(--color-text-on-ink)] [--color-text-muted:var(--color-text-on-ink-muted)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  /* Menylänkarna stänger sig själva via onClick, men navigering kan också ske
     med bakåtknappen medan menyn ligger öppen. Justeringen görs under render
     istället för i en effekt — annars hinner den stängda menyn måla upp sig en
     gång på den nya sidan. */
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Menyn täcker hela skärmen, så sidan bakom får inte gå att scrolla. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-[var(--color-ink-2)] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[0.8125rem] font-semibold tracking-[0.08em] text-[var(--color-text-on-ink-muted)] uppercase">
          <span>
            {site.address.street}, {site.address.zip} {site.address.city}
          </span>
          <span className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              {site.email}
            </a>
            <span className="text-[var(--color-border-on-ink)]" aria-hidden="true">
              /
            </span>
            <span>Vinterjour dygnet runt</span>
          </span>
        </div>
      </div>

      <div className="bg-[var(--color-ink)] text-[var(--color-text-on-ink)]">
        <div className="mx-auto flex max-w-7xl items-stretch justify-between gap-4 px-6">
          <Link
            href="/"
            className="flex cursor-pointer items-center py-4 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            aria-label={`${site.shortName} — till startsidan`}
          >
            <Wordmark className={`h-9 w-auto ${wordmarkOnInk}`} />
          </Link>

          <nav
            aria-label="Huvudmeny"
            className="hidden items-stretch gap-1 lg:flex"
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex cursor-pointer items-center px-5 font-display text-lg tracking-[0.06em] uppercase transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--color-accent)] ${
                    active
                      ? "text-[var(--color-text-on-ink)]"
                      : "text-[var(--color-text-on-ink-muted)] hover:text-[var(--color-text-on-ink)]"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-0 h-1 bg-[var(--color-accent)] transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden cursor-pointer items-center gap-3 bg-[var(--color-accent)] px-5 py-3 font-display text-lg tracking-[0.06em] text-[var(--color-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text-on-ink)] sm:flex"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobilmeny"
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border-2 border-[var(--color-border-on-ink)] px-3 transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] lg:hidden"
            >
              <span className="sr-only">Öppna meny</span>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="hazard-stripe-thin h-1.5" aria-hidden="true" />

      {open && <MobileMenu isActive={isActive} onClose={() => setOpen(false)} />}
    </header>
  );
}

/* Helskärmsmeny: listan tar hela ytan istället för att trängas under listen,
   vilket ger tumvänliga träffytor och plats för kontaktvägarna längst ned. */
function MobileMenu({
  isActive,
  onClose,
}: {
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  return (
    <div
      id="mobilmeny"
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[var(--color-paper)] lg:hidden"
    >
      <div className="flex items-center justify-between gap-4 border-b-2 border-[var(--color-ink)] px-6 py-4">
        <Wordmark className="h-9 w-auto" />
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border-2 border-[var(--color-ink)] px-3 transition-colors duration-200 hover:bg-[var(--color-ink)] hover:text-[var(--color-text-on-ink)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          <span className="sr-only">Stäng meny</span>
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <nav aria-label="Mobilmeny" className="flex-1 px-6 py-6">
        <ul>
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[64px] cursor-pointer items-center gap-4 font-display text-4xl tracking-[0.02em] uppercase transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
                    active
                      ? "text-[var(--color-accent-deep)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-accent-deep)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-8 w-1.5 shrink-0 ${
                      active
                        ? "bg-[var(--color-accent)]"
                        : "bg-[var(--color-border)]"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t-2 border-[var(--color-ink)] px-6 py-6">
        <a
          href={site.phoneHref}
          className="flex min-h-[56px] cursor-pointer items-center justify-center gap-3 bg-[var(--color-accent)] font-display text-xl tracking-[0.06em] text-[var(--color-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent-deep)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
        >
          <PhoneIcon className="h-5 w-5" />
          Ring {site.phone}
        </a>
        <p className="mt-4 text-center text-[var(--color-text-muted)]">
          <a
            href={`mailto:${site.email}`}
            className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-accent-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            {site.email}
          </a>
          <span className="mt-1 block">Vinterjour dygnet runt</span>
        </p>
      </div>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
