const colors = require("colors");

const drawer = (id, quote, author, group) => {
  console.log(`Id:`, `${id}\n`.bold.yellow);
  console.log(`Quote:`, `"${quote}"\n`.bold.green);
  console.log(`Author:`, `${author}\n`.dim.green);
  console.log(`Group:`, `${group}`.cyan);
  console.log(
    `--------------------------------------------------------------------------------------------`
      .red
  );
};

module.exports = { drawer: drawer };
