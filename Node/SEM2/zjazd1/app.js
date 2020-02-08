const http = require("http");

const app = http.createServer((req, res) => {
  res.end("hello user");
});

app.listen(4700);
