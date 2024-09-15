# Connect Four

Connect Four är ett klassiskt tvåspelarspel där målet är att vara den första att ansluta fyra av dina spelpjäser i rad, antingen vertikalt, horisontellt eller diagonalt. Denna implementation är en terminalbaserad version av spelet, skriven i TypeScript, med alternativ för att spela mot en annan människa, en dator eller låta två datorer spela mot varandra.

## Funktioner

- **Tvåspelarläge:** Spela mot en annan mänsklig spelare.
- **Människa mot Dator:** Utmana en datorspelare med enkel AI.
- **Dator mot Dator:** Se två datorer tävla mot varandra.
- **Spelbräde:** Visuell representation av spelbrädet i terminalen.

## Komma Igång

### Förutsättningar

- [Node.js](https://nodejs.org/) (v14 eller senare)
- [npm](https://www.npmjs.com/) eller [yarn](https://yarnpkg.com/) (för pakethantering)

### Installation

1. **Kloning av repository:**

   ```bash
   git clone https://github.com/your-username/connect-four.git
   cd connect-four
   ```

2.**Installera Dependencies:**

## npm install

eller

## yarn install

3. Kör spelet

## npm start

eller

## yarn start

Detta kommando startar spelet och ger dig möjlighet att välja en spelform.

Välj en spelform:
1.För Människa mot Människa
2.För Människa mot Dator
3.För Dator mot Dator
Följ anvisningarna i terminalen för att spela spelet.

Kodstruktur

. src/Classes/Board.ts: Innehåller klassen Board, som hanterar spelbrädets tillstånd och tillhandahåller metoder för att skriva ut brädet, hämta giltiga kolumner, ångra drag och kontrollera om brädet är fullt.
. src/Classes/Player.ts: Innehåller klassen Player, som representerar en spelare med ett namn och en marker.
. src/Classes/ComputerPlayer.ts: Ärver från Player och representerar en datorspelare med enkel AI.
. src/Classes/Game.ts: Innehåller klassen Game, som hanterar spelets flöde, inklusive turordning, drag och segerkontroll.
