/**
 * Lösenordsgrinden för förhandsvisningen.
 *
 * Grinden är på först när miljövariabeln FORHANDSVISNING_LOSENORD är satt.
 * Är den tom eller borttagen är sajten öppen — då behöver ingenting i koden
 * ändras den dagen den går skarpt, det räcker att ta bort variabeln i Vercel.
 *
 * Kakan innehåller inte lösenordet utan ett fingeravtryck av det. Den som
 * inte kan lösenordet kan därför inte räkna fram ett giltigt kakvärde.
 */
export const KAK_NAMN = "epab-forhandsvisning";

export function losenord() {
  return process.env.FORHANDSVISNING_LOSENORD?.trim() || null;
}

/** SHA-256 via Web Crypto, som finns både i Edge-körningen och i Node. */
export async function fingeravtryck(text: string) {
  const data = new TextEncoder().encode(`epab-grind:${text}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Jämför lika många tecken oavsett var de skiljer sig åt. */
export function likaVarden(a: string, b: string) {
  if (a.length !== b.length) return false;
  let skillnad = 0;
  for (let i = 0; i < a.length; i++) skillnad |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return skillnad === 0;
}
