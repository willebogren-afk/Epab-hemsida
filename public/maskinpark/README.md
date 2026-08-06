Maskinbilder. Sajten känner av vilka filer som finns och visar bilden så fort
den är på plats — ingen kodändring behövs för att byta ut ett foto mot ett nytt
med samma namn.

## Filer

| Filnamn | Bild |
| --- | --- |
| `sopning.jpg` | Volvo hjullastare med Holms sopaggregat |
| `snorojning.jpg` | Volvo hjullastare med vikplog, vinternatt |
| `vaghyvel.jpg` | Caterpillar väghyvel |
| `markberedning.jpg` | Bandgrävare med markberedningsaggregat på hygge |
| `langgravare.jpg` | Två grävmaskiner på industrischakt — startsidans toppbild |
| `forkross.jpg` | Grävmaskin som matar mobil förkross |
| `efterkross.jpg` | Efterkross och sorteringsverk |
| `va-schakt.jpg` | Bandgrävare vid VA-schakt i villagata — bild för Mark och schakt |
| `hjulgravare.jpg` | Två hjulgrävare uppställda på grusplan |

Använd ASCII i filnamnen (inte å, ä, ö) — det undviker teckenproblem i
webbadresser. Bilder bör vara minst 1600 px breda.

`va-schakt.jpg` och `hjulgravare.jpg` är stående mobilfoton (828 px breda) och
beskärs hårt i de liggande rutorna. Därför styrs de av `focus` — en
`object-position` som håller maskinen kvar i bild. Byts de mot liggande
originalfoton kan `focus` tas bort.

Vill du lägga till en maskin: lägg bilden här och lägg till en post i
`machines` i `src/lib/site.ts`.
