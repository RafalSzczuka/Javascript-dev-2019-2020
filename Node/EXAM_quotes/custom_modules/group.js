const fs = require("fs");

const addGroup = args => {
  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;

    let file = JSON.parse(data);
    let selectElement = file.quotes.find(elem => elem.id == args.id);

    let quoteIndex = file.quotes.indexOf(selectElement);

    file.quotes[quoteIndex].group = args.group;

    fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
      if (err) throw err;
      console.log("Group assigned");
    });
  });
};

module.exports = {
  command: "group <group> id <id>",
  desc: "Assign a group to a quote selected by id",
  handler: addGroup
};
