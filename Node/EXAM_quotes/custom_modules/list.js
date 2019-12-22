const fs = require("fs");

const getListHandler = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(JSON.parse(data));
    }
  });
};

module.exports = {
  command: "lista",
  desc: "Wyświetl wszystkie zadania z listy TODO",
  handler: getListHandler
};
