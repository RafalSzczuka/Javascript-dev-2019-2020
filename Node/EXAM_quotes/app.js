const addCommand = require("./custom_modules/add");
const listCommand = require("./custom_modules/list");
const deleteCommand = require("./custom_modules/delete");
const fs = require("fs");

// let flag = true;

// const jsonFile = {
//   quotes: []
// };

// if (flag) {
//   fs.writeFile("./quotes.json", JSON.stringify(jsonFile), () => {});
//   flag = false;
// }

require("yargs")
  .command(addCommand)
  .command(listCommand)
  .command(deleteCommand)
  .demandCommand(1, "You have to enter one command at least")
  .help().argv;
