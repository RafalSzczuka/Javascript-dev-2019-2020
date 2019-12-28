const fs = require("fs");

const getQuoteList = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const file = JSON.parse(data);
      console.log("\nList of all quotes:");
      console.table(file.quotes, ["id", "quote", "author", "group"]);
    }
  });
};

module.exports = {
  command: "list",
  desc: "Show all quotes",
  handler: getQuoteList
};
