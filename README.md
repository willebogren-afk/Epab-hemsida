# EPAB Maskintjänst — hemsida

Next.js-sajt för EPAB Maskintjänst AB i Fliseryd.

## Kom igång

```bash
npm install
npm run dev
```

Sajten körs på http://localhost:3000.

## Struktur

| Sökväg | Innehåll |
| --- | --- |
| `src/lib/site.ts` | All text och data: kontaktuppgifter, tjänster, maskinpark |
| `src/app/` | Sidorna: start, tjänster, maskinpark, om-oss, kontakt |
| `src/components/` | Header, footer, bildkomponent, kontaktformulär |
| `src/app/globals.css` | Färger, typografi och varningsrandsmotivet |

Vill du ändra en tjänst, en maskin eller ett telefonnummer räcker det att
redigera `src/lib/site.ts` — sidorna byggs från den filen.

## Lägga in bilder

Maskinbilderna saknas ännu. Sajten visar en märkt platshållare som anger vilket
foto och vilket filnamn som hör var, så inget går sönder under tiden.

Lägg bara filerna i `public/maskinpark/` med de namn som står i
[`public/maskinpark/README.md`](public/maskinpark/README.md) — `Photo`-komponenten
kontrollerar själv vilka filer som finns och byter från platshållare till bild.
Ingen kodändring behövs.

Bilder bör vara minst 1600 px breda. Vill du använda andra filnamn eller `.webp`
uppdaterar du `image`-fältet i `src/lib/site.ts`.

## Kontaktformuläret

Formuläret validerar i webbläsaren och öppnar sedan besökarens e-postklient med
förfrågan ifylld till `kontakt@epab.se`. Det kräver ingen server och fungerar på
valfritt webbhotell.

Vill ni istället att förfrågan skickas direkt från sajten behövs en
e-posttjänst (t.ex. Resend eller SMTP via en API-route). Det är inte inkopplat
än.

## Bygga för produktion

```bash
npm run build
npm start
```

Alla sidor är statiska och kan publiceras via `next start` eller en plattform
som Vercel.
