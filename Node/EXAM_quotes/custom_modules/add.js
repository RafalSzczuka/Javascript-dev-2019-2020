const fs = require("fs");
const Quote = require("./quoteClass");

const addQuote = args => {
  const newQuote = new Quote(
    this.id,
    args.quote,
    args.author,
    args.group,
    (this.counter = 0)
  );

  if (!newQuote.group) {
    newQuote.group = "unassigned group";
  }

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
  command: "add <quote> <author> [group]",
  desc: "Add new quote, author and (optionally) a group",
  handler: addQuote,
  Quote: Quote
};
