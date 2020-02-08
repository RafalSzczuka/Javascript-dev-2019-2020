const express = require("express");

const app = express();

app.get("/mnozenie/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const result = a * b;
  res.send(`${result}`);
});
app.get("/dzielenie/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const result = a / b;
  res.send(`${result}`);
});
app.get("/dodawanie/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const result = parseInt(a) + parseInt(b);
  res.send(`${result}`);
});
app.get("/odejmowanie/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const result = a - b;
  res.send(`${result}`);
});

app.listen(4700);
