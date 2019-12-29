const fs = require("fs");
const drawer = require("./drawer").drawer;

const getRandomQuote = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const file = JSON.parse(data);

      // choosing random index from array of quotes
      let randomQuoteIndex = Math.floor(Math.random() * file.quotes.length);

      // increasing quote display counter
      file.quotes[randomQuoteIndex].counter += 1;

      let randomQuote = file.quotes[randomQuoteIndex];

      fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
        if (err) throw err;
      });

      console.log("\nRandom quote: ");
      drawer(
        randomQuote.id,
        randomQuote.quote,
        randomQuote.author,
        randomQuote.group
      );
      console.log(`\nThis quote was displayed ${randomQuote.counter} times\n`);
    }
  });
};

module.exports = {
  command: "random",
  desc: "Show random quote",
  handler: getRandomQuote
};
