const drawer = (id, quote, author, group) => {
  console.log(`\n--------------------------------------------------------`);
  console.log(`Id: ${id}\n`);
  console.log(`Quote: "${quote}"\n`);
  console.log(`Author: ${author}\n`);
  console.log(`Group: ${group}`);
  console.log(`--------------------------------------------------------`);
};

module.exports = { drawer: drawer };
