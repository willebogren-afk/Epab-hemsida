import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "EPAB Maskintjänst AB i Fliseryd utför ledningsarbeten, rivningar, skogsentreprenad, krossning och vägunderhåll i Oskarshamn, Mönsterås och Kalmar län.",
  metadataBase: new URL("https://www.epab.nu"),
  /* Spärr mot sökmotorer under förhandsvisningen. Sidorna får aktivt
     krypas — det är så robotarna hinner läsa noindex och håller adressen
     borta ur resultaten. En Disallow i robots.txt hade i stället hindrat
     dem från att läsa spärren. Tas bort tillsammans med X-Robots-Tag i
     next.config.ts när sajten flyttar till epab.nu. */
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Ledningsarbeten, rivningar, skogsentreprenad, krossning och vägunderhåll i Kalmar län sedan 2009.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${oswald.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)]">
        {children}
      </body>
    </html>
  );
}
