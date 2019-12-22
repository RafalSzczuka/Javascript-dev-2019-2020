const fs = require("fs");

class Quote {
  constructor(quote, author, id, group) {
    (this.quote = quote),
      (this.author = author),
      (this.id = id),
      (this.group = group);
  }
}
const addQuote = args => {
  const newQuote = new Quote(args.quote, args.author, this.id, args.group);

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
  command: "add <quote> <author> <group>",
  desc: "Adding new quote",
  handler: addQuote
};
