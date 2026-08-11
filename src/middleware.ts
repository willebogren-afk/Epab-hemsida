import { NextResponse, type NextRequest } from "next/server";
import { KAK_NAMN, fingeravtryck, likaVarden, losenord } from "@/lib/grind";

export async function middleware(request: NextRequest) {
  const hemligt = losenord();
  if (!hemligt) return NextResponse.next();

  const kaka = request.cookies.get(KAK_NAMN)?.value;
  if (kaka && likaVarden(kaka, await fingeravtryck(hemligt))) {
    return NextResponse.next();
  }

  /* Adressen behålls, bara innehållet byts ut. Då hamnar besökaren på rätt
     sida av sig själv när lösenordet är inskrivet. */
  const grind = new URL("/lasenord", request.url);
  grind.searchParams.set("vidare", request.nextUrl.pathname + request.nextUrl.search);
  const svar = NextResponse.rewrite(grind);
  svar.headers.set("Cache-Control", "no-store");
  return svar;
}

export const config = {
  /**
   * Allt utom grinden själv, de byggda filerna den behöver för att kunna
   * visas, och fotona.
   *
   * Fotona måste släppas igenom: bildoptimeraren hämtar originalet över
   * HTTP från servern själv, och den hämtningen gick också in i grinden.
   * Optimeraren fick tillbaka inloggningssidan i stället för en JPEG och
   * varenda bild på sajten slutade fungera.
   *
   * Följden är att en gissad adress som /maskinpark/langgravare.jpg går att
   * öppna utan lösenord. Det är EPAB:s egna foton och inget som avslöjar
   * texterna, priserna eller kontaktuppgifterna — en rimlig avvägning mot
   * en förhandsvisning helt utan bilder.
   */
  matcher: [
    "/((?!lasenord|api/lasenord|_next/static|maskinpark/|favicon.ico).*)",
  ],
};
