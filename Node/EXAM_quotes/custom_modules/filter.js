const fs = require("fs");

const filterGroup = args => {
  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;

    let file = JSON.parse(data);
    let filteredQuotes = file.quotes.filter(elem => elem.group == args.group);

    if (filteredQuotes == false) {
      console.log("There's no such a group");
    } else {
      console.log(`\nFiltered quotes by group "${args.group}":`);
      console.table(filteredQuotes, ["id", "quote", "author", "group"]);
    }
  });
};

module.exports = {
  command: "filter <group>",
  desc: "Filter quotes by group name",
  handler: filterGroup
};
