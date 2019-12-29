const fs = require("fs");
const axios = require("axios");
const Quote = require("./quoteClass");
const drawer = require("./drawer").drawer;
const colors = require("colors");

const downloadQuote = () => {
  fs.readFile("./quotes.json", "utf-8", (err, data) => {
    if (err) throw err;

    // getQuote is async func. It's core construction is quite the same as in the add.js file
    const getQuote = (async () => {
      try {
        let file = JSON.parse(data);

        // finds last element index. If array of quotes is empty - sets last element to 0 by default
        let lastElement;
        if (file.quotes.length === 0) {
          lastElement = 0;
        } else {
          lastElement = file.quotes[file.quotes.length - 1].id;
        }

        const response = await axios(
          `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`
        );

        // creating new quote by Quote class
        const newQuote = new Quote(
          this.id,
          (quote = response.data.quote),
          (author = response.data.author),
          (this.group = "unassigned group"),
          (this.counter = 0)
        );

        // new quote id is last element id + 1
        newQuote.id = lastElement + 1;
        file.quotes.push(newQuote);

        fs.writeFile("./quotes.json", JSON.stringify(file), "utf-8", err => {
          if (err) throw err;

          console.log(`\nNew quote added:\n`.bold);
          drawer(newQuote.id, newQuote.quote, newQuote.author, newQuote.group);
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
