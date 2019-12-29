const fs = require("fs");
const axios = require("axios");
const Quote = require("./quoteClass");

const downloadQuote = () => {
  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;

    const getQuote = (async () => {
      try {
        let file = JSON.parse(data);

        let lastElement;
        if (file.quotes.length === 0) {
          lastElement = 0;
        } else {
          lastElement = file.quotes[file.quotes.length - 1].id;
        }

        const response = await axios(
          `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`
        );
        const newQuote = new Quote(
          this.id,
          (quote = response.data.quote),
          (author = response.data.author),
          (this.group = "unassigned group"),
          (this.counter = 0)
        );

        newQuote.id = lastElement + 1;
        file.quotes.push(newQuote);

        fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
          if (err) throw err;
          console.log(
            `New quote added:\nQuote "${response.data.quote}"\nAuthor: ${response.data.author}`
          );
        });
      } catch (error) {
        console.log(error.message);
      }
    })();
  });
};

module.exports = {
  command: "download",
  desc: "Download quote from a server",
  handler: downloadQuote
};
