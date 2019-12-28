const fs = require("fs");

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

      // for easier use - reassigned new array (for console.table) of object (with random quote index)
      let randomQuote = [
        {
          quote: file.quotes[randomQuoteIndex].quote,
          author: file.quotes[randomQuoteIndex].author,
          counter: file.quotes[randomQuoteIndex].counter,
          id: file.quotes[randomQuoteIndex].id,
          group: file.quotes[randomQuoteIndex].group
        }
      ];

      fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
        if (err) throw err;
      });

      console.log("\nRandom quote: ");
      console.table(randomQuote, ["id", "quote", "author", "group"]);
      console.log(`This quote was displayed ${randomQuote[0].counter} times\n`);
    }
  });
};

module.exports = {
  command: "random",
  desc: "Show random quote",
  handler: getRandomQuote
};
