import { NextResponse, type NextRequest } from "next/server";
import { KAK_NAMN, fingeravtryck, likaVarden, losenord } from "@/lib/grind";

export async function POST(request: NextRequest) {
  const hemligt = losenord();
  if (!hemligt) return NextResponse.redirect(new URL("/", request.url), 303);

  const data = await request.formData();
  const forsok = String(data.get("losenord") ?? "");
  const vidare = String(data.get("vidare") ?? "/");

  /* Jämför fingeravtrycken, inte texterna: då tar jämförelsen lika lång tid
     oavsett hur många tecken som stämmer. */
  const ratt = likaVarden(
    await fingeravtryck(forsok),
    await fingeravtryck(hemligt),
  );

  if (!ratt) {
    const url = new URL("/lasenord", request.url);
    url.searchParams.set("fel", "1");
    if (vidare.startsWith("/")) url.searchParams.set("vidare", vidare);
    return NextResponse.redirect(url, 303);
  }

  /* Bara interna adresser släpps igenom, annars går sidan att använda för
     att skicka besökare vidare till en främmande webbplats. */
  const mal = vidare.startsWith("/") && !vidare.startsWith("//") ? vidare : "/";
  const svar = NextResponse.redirect(new URL(mal, request.url), 303);
  svar.cookies.set({
    name: KAK_NAMN,
    value: await fingeravtryck(hemligt),
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return svar;
}
