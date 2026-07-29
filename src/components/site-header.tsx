"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[var(--color-brand)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex cursor-pointer items-center focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
            aria-label={`${site.shortName} — till startsidan`}
          >
            <Wordmark mono className="h-9 w-auto text-[var(--color-on-brand)] sm:h-10" />
          </Link>

          <nav aria-label="Huvudmeny" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`display cursor-pointer border-b-2 pb-1 text-lg tracking-[0.04em] transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)] ${
                    active
                      ? "border-[var(--color-brand-deep)] text-[var(--color-on-brand)]"
                      : "border-transparent text-[var(--color-on-brand-muted)] hover:text-[var(--color-on-brand)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              className="display flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border-2 border-[var(--color-on-brand)] px-6 text-lg tracking-[0.04em] text-[var(--color-on-brand)] transition-colors duration-200 hover:bg-[var(--color-on-brand)] hover:text-[var(--color-brand)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="huvudmeny-overlay"
            className="flex min-h-[48px] min-w-[48px] cursor-pointer items-center justify-center text-[var(--color-on-brand)] transition-colors duration-200 hover:opacity-75 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-on-brand)] lg:hidden"
          >
            <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
            {open ? (
              <CloseIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Full-screen white overlay menu, matching the reference's mobile pattern:
          oversized underlined links, generous spacing, nothing else competing. */}
      {open && (
        <div
          id="huvudmeny-overlay"
          className="fixed inset-0 top-[76px] z-40 overflow-y-auto bg-[var(--color-paper)] lg:hidden"
        >
          <nav aria-label="Mobilmeny" className="px-6 py-10">
            <ul className="space-y-7">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`display inline-block cursor-pointer border-b-4 pb-1 text-4xl tracking-[0.02em] transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${
                        active
                          ? "border-[var(--color-accent-text)] text-[var(--color-accent-text)]"
                          : "border-[var(--color-brand-deep)] text-[var(--color-brand-deep)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={site.phoneHref}
              className="display mt-12 flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-6 text-2xl tracking-[0.04em] text-[var(--color-text)] transition-colors duration-200 hover:bg-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-brand)]"
            >
              <PhoneIcon className="h-5 w-5" />
              Ring {site.phone}
            </a>
            <p className="mt-6 text-center text-[var(--color-text-muted)]">
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </nav>
        </div>
      )}
    </header>
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
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 7h18M3 17h18" />
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
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
