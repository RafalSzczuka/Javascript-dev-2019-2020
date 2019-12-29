const drawer = (id, quote, author, group) => {
  console.log(`\n**********************************`);
  console.log(`Id: ${id}`);
  console.log(`----------------------------------`);
  console.log(`Quote: "${quote}"\n`);
  console.log(`Author: ${author}`);
  console.log(`----------------------------------`);
  console.log(`Group: ${group}`);
  console.log(`**********************************\n`);
};

module.exports = { drawer: drawer };
