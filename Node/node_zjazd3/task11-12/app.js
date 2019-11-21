const request = require("request");
const yargs = require("yargs");

const args = yargs.argv;

const city = args.city;

const weather = (city => {
  let url = `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=${city}`;

  request(url, (error, response, body) => {
    let data = JSON.parse(body);
    console.log(`Actual weather in ${data.name}:`);
    console.log(`Main parameters: ${JSON.stringify(data.main)}`);
    console.log(`Wind: ${JSON.stringify(data.wind)}`);
  });
})(city);
