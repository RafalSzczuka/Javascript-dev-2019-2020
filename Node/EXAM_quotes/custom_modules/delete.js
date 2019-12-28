const fs = require("fs");

const deleteQuote = args => {
  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;
    let arrayOfQuotes = JSON.parse(data);

    let findElement = arrayOfQuotes.quotes.find(elem => elem.id == args.id);

    let deleteIndex = arrayOfQuotes.quotes.indexOf(findElement);

    if (deleteIndex === -1) {
      console.log("Index not found");
    } else {
      arrayOfQuotes.quotes.splice(deleteIndex, 1);
      fs.writeFile(
        "./quotes.json",
        JSON.stringify(arrayOfQuotes),
        "utf-8",
        err => {
          if (err) throw err;
          console.log("Quote deleted");
        }
      );
    }
  });
};

module.exports = {
  command: "delete <id>",
  desc: "Delete quote by id",
  handler: deleteQuote
};
