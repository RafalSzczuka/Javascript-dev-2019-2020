const fs = require("fs");
const drawer = require("./drawer").drawer;
const colors = require("colors");

const getQuoteList = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const file = JSON.parse(data);

      console.log("\nList of all quotes:\n".bold);

      // list all quotes using drawer function
      file.quotes.forEach(quote => {
        drawer(quote.id, quote.quote, quote.author, quote.group);
      });
    }
  });
};

module.exports = {
  command: "list",
  desc: "Show a list of all quotes",
  handler: getQuoteList
};
