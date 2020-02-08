const addCommand = require("./custom_modules/add");
const listCommand = require("./custom_modules/list");
const deleteCommand = require("./custom_modules/delete");
const randomCommand = require("./custom_modules/random");
const groupCommand = require("./custom_modules/group");
const filterCommand = require("./custom_modules/filter");
const downloadCommand = require("./custom_modules/download");
const fs = require("fs");

// try-catch block to secure if app is missing quotes.json file (if so - creating base empty structure file)
try {
  fs.readFileSync("./quotes.json");
} catch (error) {
  let data = { quotes: [] };
  fs.writeFileSync("./quotes.json", JSON.stringify(data));
}

require("yargs")
  .command(addCommand)
  .command(listCommand)
  .command(deleteCommand)
  .command(randomCommand)
  .command(groupCommand)
  .command(filterCommand)
  .command(downloadCommand)
  .demandCommand(1, "You have to enter one command at least")
  .help().argv;
