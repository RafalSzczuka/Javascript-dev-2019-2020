const os = require("os");
const fs = require("fs");

const userName = os.userInfo().username;

setTimeout(() => {
  const greeting = "Hello, " + userName + "!";
  console.log(greeting);
  fs.writeFile("greetings.txt", greeting, error => {
    if (error) {
      console.log("file write failed");
    } else {
      console.log("file write success!");
    }
  });
}, 5000);
