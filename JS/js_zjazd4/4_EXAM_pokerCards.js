// stworzyć deck 2 forami (for i, for j) Spushować do arraya. Karty oznaczyć od 2 do 14 (2 to 2, a 14 to as - na sam koniec zadania przypisać do tych cyfr odpowiednie wartości kart)

//iife function, generates 52 card deck,
const deckGenerator = (function() {
  let colors = ["clubs", "diamonds", "hearts", "spades"];
  let deck = [];
  for (let i = 2; i <= 14; i++) {
    for (let j = 0; j < colors.length; j++) {
      let card = { value: i, color: colors[j] };
      deck.push(card);
    }
  }
  return { deck };
})();

let cardDeck = deckGenerator.deck;

const fiveRandomCards = (function() {
  let fiveCards = [];
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * cardDeck.length);
    fiveCards.push(cardDeck[randomCard]);
  }
  return { fiveCards };
})();

console.log(fiveRandomCards.fiveCards);
