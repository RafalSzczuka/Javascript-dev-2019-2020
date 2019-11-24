const request = require("request");
const yargs = require("yargs");

const args = yargs.argv;

const city = encodeURI(args.city);

const weather = (city => {
  let url = `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=${city}`;

  request(url, (error, response, body) => {
    let data = JSON.parse(body);
    console.log(`Actual weather in ${data.name}`);
    console.log(
      `\nMain parameters:\nTEMP: ${(Number(data.main.temp) - 273.15).toFixed(
        2
      )} C\nPRESSURE: ${data.main.pressure} HPA\nHUMIDITY: ${
        data.main.humidity
      }%`
    );
    console.log(`WIND SPEED: ${JSON.stringify(data.wind.speed)}`);
  });
})(city);
