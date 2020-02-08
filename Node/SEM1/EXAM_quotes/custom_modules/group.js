const fs = require("fs");
const colors = require("colors");

const addGroup = args => {
  fs.readFile("./quotes.json", "utf-8", (error, data) => {
    if (error) console.log(error.message);

    let file = JSON.parse(data);

    // finds quote passing id number as an argument
    let selectElement = file.quotes.find(elem => elem.id == args.id);

    // finds index of selected quote
    let quoteIndex = file.quotes.indexOf(selectElement);

    // sets group name to selected quote
    file.quotes[quoteIndex].group = args.group;

    fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", error => {
      if (error) console.log(error.message);
      console.log(`Group`.bold, `${args.group}`.cyan, `assigned`.bold);
    });
  });
};

module.exports = {
  command: "group <group> <id>",
  desc: "Assign a group to a quote selected by id",
  handler: addGroup
};
