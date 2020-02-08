const fs = require("fs");
const drawer = require("./drawer").drawer;
const colors = require("colors");

const filterGroup = args => {
  fs.readFile("./quotes.json", "utf-8", (error, data) => {
    if (error) console.log(error.message);

    let file = JSON.parse(data);

    // filters quotes by passed group name argument
    let filteredQuotes = file.quotes.filter(
      elem => elem.group.toLowerCase() == args.group.toLowerCase()
    );

    // if passeed group name is not in quotes - log info about it
    if (filteredQuotes == false) {
      console.log("There's no such a group".red);
    } else {
      console.log(
        `\nFiltered quotes by group:`.bold,
        `${filteredQuotes[0].group}\n`.cyan
      );
      filteredQuotes.forEach(quote => {
        drawer(quote.id, quote.quote, quote.author, quote.group);
      });
    }
  });
};

module.exports = {
  command: "filter <group>",
  desc: "Filter quotes by group name",
  handler: filterGroup
};
