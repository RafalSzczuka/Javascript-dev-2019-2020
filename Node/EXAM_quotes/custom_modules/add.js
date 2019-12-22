const fs = require("fs");

class Quote {
  constructor(id, quote, author, group) {
    (this.id = id),
      (this.quote = quote),
      (this.author = author),
      (this.group = group);
  }
}
const addQuote = args => {
  const newQuote = new Quote(this.id, args.quote, args.author, args.group);

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
