const fs = require("fs");
const colors = require("colors");

const deleteQuote = args => {
  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;
    let file = JSON.parse(data);

    // finds quote passing id number as an argument
    let findElement = file.quotes.find(elem => elem.id == args.id);

    // finds index of selected quote
    let deleteIndex = file.quotes.indexOf(findElement);

    // if passed id number is not in quotes - log info about it
    if (deleteIndex === -1) {
      console.log("ID not found".bold.red);
    } else {
      file.quotes.splice(deleteIndex, 1);
      fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
        if (err) throw err;
        console.log("Quote deleted".bold.red);
      });
    }
  });
};

module.exports = {
  command: "delete <id>",
  desc: "Delete quote by id",
  handler: deleteQuote
};
