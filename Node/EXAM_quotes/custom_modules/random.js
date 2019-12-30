const fs = require("fs");
const drawer = require("./drawer").drawer;
const colors = require("colors");

const getRandomQuote = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const file = JSON.parse(data);

      // check if database is empty
      if (file.quotes.length === 0) {
        console.log("Your quotes database is empty".red);
        console.log("Add some quotes first".blue);
      } else {
        // choosing random index from array of quotes
        let randomQuoteIndex = Math.floor(Math.random() * file.quotes.length);

        // increasing quote display counter
        file.quotes[randomQuoteIndex].counter += 1;

        let randomQuote = file.quotes[randomQuoteIndex];

        fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
          if (err) throw err;
        });

        // logs quote data using drawer function
        console.log("\nRandom quote: \n".bold);
        drawer(
          randomQuote.id,
          randomQuote.quote,
          randomQuote.author,
          randomQuote.group
        );
        console.log(
          `\nThis quote was displayed`.bold,
          `${randomQuote.counter}`.bold.yellow,
          `times\n`.bold
        );
      }
    }
  });
};

module.exports = {
  command: "random",
  desc: "Show random quote",
  handler: getRandomQuote
};
