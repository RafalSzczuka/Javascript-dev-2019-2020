const fs = require("fs");

const getQuoteList = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(JSON.parse(data));
    }
  });
};

module.exports = {
  command: "list",
  desc: "Show all quotes",
  handler: getQuoteList
};
