const fs = require("fs");

class Quote {
  constructor(id, quote, author, group, counter) {
    (this.id = id),
      (this.quote = quote),
      (this.author = author),
      (this.group = group),
      (this.counter = counter);
  }
}
const addQuote = args => {
  const newQuote = new Quote(
    this.id,
    args.quote,
    args.author,
    (this.group = null),
    (this.counter = 0)
  );

  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;

    let arrayOfQuotes = JSON.parse(data);

    let lastElement;
    if (arrayOfQuotes.quotes.length === 0) {
      lastElement = 0;
    } else {
      lastElement = arrayOfQuotes.quotes[arrayOfQuotes.quotes.length - 1].id;
    }

    newQuote.id = lastElement + 1;
    arrayOfQuotes.quotes.push(newQuote);

    fs.writeFile(
      "./quotes.json",
      JSON.stringify(arrayOfQuotes),
      "utf-8",
      err => {
        if (err) throw err;
        console.log("Quote added");
      }
    );
  });
};

module.exports = {
  command: "add quote <quote> author <author>",
  desc: "Add new quote and author",
  handler: addQuote,
  Quote: Quote
};
