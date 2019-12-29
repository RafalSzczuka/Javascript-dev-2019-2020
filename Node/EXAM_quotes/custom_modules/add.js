const fs = require("fs");
const Quote = require("./quoteClass");
const drawer = require("./drawer").drawer;
const colors = require("colors");

// creating new quote by Quote class
const addQuote = args => {
  const newQuote = new Quote(
    this.id,
    args.quote,
    args.author,
    args.group,
    (this.counter = 0)
  );

  // if group name is not defined (optionall argument) its set to "unassigned group" by default
  if (!newQuote.group) {
    newQuote.group = "unassigned group";
  }

  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;

    let file = JSON.parse(data);

    // finds last element index. If array of quotes is empty - sets last element to 0 by default
    let lastElement;
    if (file.quotes.length === 0) {
      lastElement = 0;
    } else {
      lastElement = file.quotes[file.quotes.length - 1].id;
    }

    // new quote id is last element id + 1
    newQuote.id = lastElement + 1;
    file.quotes.push(newQuote);

    fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
      if (err) throw err;
      drawer(newQuote.id, newQuote.quote, newQuote.author, newQuote.group);
    });
  });
};

module.exports = {
  command: "add <quote> <author> [group]",
  desc: "Add new quote, author and (optionally) a group",
  handler: addQuote,
  Quote: Quote
};
