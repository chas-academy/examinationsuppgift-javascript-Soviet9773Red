[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Id9QAE4K)
# Antagningsprov: Budget- och Utgiftskoll

Välkommen till detta arbetsprov i JavaScript! Din uppgift är att skriva logiken (JavaScript) för att göra denna budget-applikation funktionell. HTML och CSS är redan färdigt och ska inte ändras.

⚠️ **VIKTIGT: LÄS DETTA FÖRST** ⚠️

Du får **inte** göra ändringar i .github, script.test.js eller ändra testets funktioner. Detta ogiltigförklarar ditt test och rapporteras till antagningen.

**Innan** du börjar koda måste du ställa in ditt projekt. Om du inte gör detta kommer inga av dina tester att köras korrekt.

Se till att du ändrar inställningen för `"submitted": false` till `"submitted": true` när du känner dig redo för inlämning.

**Så här hittar du ditt ID:**

1. Logga in på antagningssidan (yh-antagning.se).
2. Under "Inlämnade ansökningar", klicka på rutan för denna utbildning.
3. Scrolla längst ner på sidan till sektionen **"Mina personuppgifter"** (klicka på pilen för att fälla ut om det behövs).
4. Kopiera koden som står vid **Ansökningsnummer** (t.ex. `FSAEFSAD`).

**Så här lägger du in det i koden:**

1. Gå till filen `src/student.json`.
2. Byt ut texten `"SKRIV_DITT_ID_HÄR"` mot ditt ansökningsnummer som du precis kopierade.
3. Låt `"submitted": false` vara kvar så länge du arbetar med provet och ändra den sedan till `"submitted": true` när du är klar.
4. Spara filen.

---

## Uppgiftbeskrivning

Du ska arbeta i filen `src/script.js`. Målet är att användaren ska kunna skriva in en beskrivning och ett belopp, och sedan klicka på antingen "Lägg till Inkomst" eller "Lägg till Utgift".

Totalt kan du få **100 poäng** på provet.

## Funktionella Krav

För att klara uppgiften måste din kod uppfylla följande krav:

### 1. Hämta värden & Validering (20p)

När användaren klickar på en knapp ska du hämta värdet från textfälten `#desc` och `#amount`.

- **(10p)** Om något av fälten är tomt ska ingen transaktion läggas till.
- **(10p)** Om beloppet inte är en siffra ska det hanteras snyggt (ingen transaktion läggs till).

### 2. Uppdatera listorna (30p)

Beroende på vilken knapp som klickas ska en ny rad (`<li>`) läggas till i motsvarande lista (`#incomeList` eller `#expenseList`).

- **(10p)** Klick på "Inkomst" lägger till rad i inkomstlistan.
- **(10p)** Klick på "Utgift" lägger till rad i utgiftslistan.
- **(10p)** **Viktigt:** Texten i listpunkten måste följa detta format **exakt**:
    - För inkomst: `Beskrivning - Belopp kr (Inkomst)`
    - För utgift: `Beskrivning - Belopp kr (Utgift)`

### 3. Beräkna Saldo (20p)

Saldot (`#balance`) ska starta på 0.

- **(10p)** Inkomster ska **öka** saldot och uppdatera siffran på skärmen.
- **(10p)** Utgifter ska **minska** saldot och uppdatera siffran på skärmen.

### 4. UX - Användarupplevelse (10p)

- **(10p)** Efter att en transaktion lagts till (och lyckats) ska båda inmatningsfälten tömmas automatiskt.

---

## Inlämning & Video (20p)

Förutom koden ska du spela in en kort skärminspelning där du demonstrerar din lösning.

1.  Spela in när du lägger till en inkomst, en utgift och visar att saldot ändras.
2.  Döp filen till exakt: `videoprov.mp4`.
3.  Lägg filen i rotmappen (samma ställe som denna README och `package.json`).
4.  **OBS:** Filen får inte vara större än 100MB.

---

## Hur du kör din kod

Vi rekommenderar dig att installera extensionen som heter "Live Server" i VsCode för att starta index.html och se dina ändringar.

## Hur du testar din kod

Du kan testa din kod lokalt eller kolla på github under pull requests > feedback.

Hur du testar lokalt:

1.  Öppna en terminal.
2.  Kör kommandot: `npm install` (behövs bara göras en gång).
3.  Kör kommandot: `npm test`

Kontrollera slutligen feedback botens resultat och kom ihåg att ändra flaggan `"submitted": false` till `"submitted": true` när du ska lämna in.

Lycka till!
