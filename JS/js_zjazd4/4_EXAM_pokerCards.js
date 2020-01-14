/* Create a solution that will tell us what poker set we have.
The solution is to deal us 5 cards from the standard 52 card deck.
After that the solution is to tell us what is the best poker set. EXAM
*/

//iife function, generates 52 card deck,
const deckGenerator = (function() {
  const colors = ["Clubs", "Diamonds", "Hearts", "Spades"];
  let deck = [];
  let card = {};
  for (let i = 2; i <= 14; i++) {
    for (let j = 0; j < colors.length; j++) {
      card = { value: i, color: colors[j] };
      deck.push(card);
    }
  }
  return { deck };
})();

const cardDeck = deckGenerator.deck;

// choose 5 random cards from a deck
const randomCards = (function() {
  let fiveCards = [];
  let randomCard;
  for (let i = 0; i < 5; i++) {
    randomCard = Math.floor(Math.random() * cardDeck.length);
    fiveCards.push(cardDeck[randomCard]);
    cardDeck.splice(randomCard, 1);
  }
  return { fiveCards };
})();

// for easier use, function 'randomCards' result assigned to new variable. Deck is sorted by card value (ascending order)
const fiveRandomCards = randomCards.fiveCards.sort((a, b) => a.value - b.value);

// for more readible - changing values 11-14 with card names ("jack", "queen" etc.)
const cardsCopy = JSON.parse(JSON.stringify(fiveRandomCards)); // DEEP COPY of original array of 5 cards

// map copied array with new names
cardsCopy.map(card => {
  if (card.value === 11) {
    card.value = "Jack";
  }
  if (card.value === 12) {
    card.value = "Queen";
  }
  if (card.value === 13) {
    card.value = "King";
  }
  if (card.value === 14) {
    card.value = "Ace";
  }
});

// log each value and color of cards in hand.
console.log("Your sorted hand deck:");
cardsCopy.forEach(card => console.log(`${card.value} of ${card.color}`));
console.log("......................");

// TEMPORARY TEST DECK!!!
// const pokerChecker = [
//   { value: 2, color: "diamonds" },
//   { value: 3, color: "hearts" },
//   { value: 4, color: "spades" },
//   { value: 5, color: "clubs" },
//   { value: 14, color: "diamonds" }
// ].sort((a, b) => a.value - b.value);
// pokerChecker.forEach(card => console.log(`${card.value} of ${card.color}`));

// Function to check number of card values occurances
const valueOcurrances = cards => {
  let counts = {};

  for (let i = 0; i < cards.length; i++) {
    let num = cards[i].value;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const occurances = Object.values(counts);
  return occurances;
};

// Function to check number of card color occurances
const colorOcurrances = cards => {
  let counts = {};

  for (let i = 0; i < cards.length; i++) {
    let num = cards[i].color;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  // const occurances = Object.values(counts);
  return occurances;
};

// initialization function - check if you have a poker set
const checkPoker = (function(cards) {
  this.cards = cards;
  let winner = false;

  // Royal Flush checker
  const royalFlush = (cards => {
    const colorChecker = colorOcurrances(cards);
    if (colorChecker.includes(5)) {
      const valueChecker = pokerChecker.filter(card => {
        return card.value >= 10;
      });
      if (valueChecker.length === 5) {
        console.log("OMG, Congrats! You have a Royal Flush!");
        winner = true;
      }
    }
  })(cards);

  // Straight Flush checker
  if (!winner) {
    const straightFlush = (cards => {
      const colorChecker = colorOcurrances(cards);
      if (colorChecker.includes(5)) {
        const valueChecker = pokerChecker.filter(card => {
          return card.value >= 7 && card.value <= 11;
        });
        if (valueChecker.length === 5) {
          console.log("Congrats! You have Straight Flush!");
          winner = true;
        }
      }
    })(cards);
  }

  // Four of a Kind checker
  if (!winner) {
    const fourOfaKind = (cards => {
      const valueChecker = valueOcurrances(cards);
      if (valueChecker.includes(4)) {
        console.log("You have Four of a Kind!");
        winner = true;
      }
    })(cards);
  }

  // Full House checker
  if (!winner) {
    const fullHouse = (cards => {
      const valueChecker = valueOcurrances(cards);
      if (valueChecker.includes(3) && valueChecker.includes(2)) {
        console.log("You have Full House");
        winner = true;
      }
    })(cards);
  }

  // Flush checker
  if (!winner) {
    const flush = (cards => {
      const colorChecker = colorOcurrances(cards);
      if (colorChecker.includes(5)) {
        console.log("You have Flush");
        winner = true;
      }
    })(cards);
  }

  // Straight checker
  if (!winner) {
    // simple straight - values +/-1
    const straight = (cards => {
      const valueChecker = valueOcurrances(cards);
      let values = [cards[0]];
      if (valueChecker.length === 5) {
        for (let i = 1; i < cards.length; i++) {
          if (cards[i].value === cards[i - 1].value + 1) {
            values.push(cards[i]);
          }
        }
        if (values.length === 5) {
          console.log("You have Straight");
          winner = true;
        }
        // straight with ACE as lowest card
        if (!winner) {
          const valueChecker = cards.filter(card => {
            return card.value >= 2 && card.value <= 5;
          });
          if (valueChecker.length === 4 && cards[4].value === 14) {
            console.log("You have Straight");
            winner = true;
          }
        }
      }
    })(cards);
  }

  // Three of a Kind checker
  if (!winner) {
    const threeOfaKind = (cards => {
      const valueChecker = valueOcurrances(cards);
      if (valueChecker.includes(3)) {
        console.log("You have Three of a Kind");
        winner = true;
      }
    })(cards);
  }

  // Two Pair checker
  if (!winner) {
    const twoPair = (cards => {
      const valueChecker = valueOcurrances(cards);
      if (
        valueChecker.includes(2) &&
        valueChecker.includes(1) &&
        valueChecker.length === 3
      ) {
        console.log("You have Two Pair");
        winner = true;
      }
    })(cards);
  }

  // One Pair checker
  if (!winner) {
    const onePair = (cards => {
      const valueChecker = valueOcurrances(cards);
      if (valueChecker.includes(2) && valueChecker.length === 4) {
        console.log("You have One Pair");
        winner = true;
      }
    })(cards);
  }

  // High Card checker
  if (!winner) {
    console.log(
      `You have only High Card. Your highest card is: ${cardsCopy[4].value} of ${cardsCopy[4].color}`
    );
    winner = true;
  }
})(fiveRandomCards);
