const express = require("express");
const router = express.Router();

let counter = 0;

let quotes = [{ id: counter++, quote: "example quote", author: "Random Guy" }];

router.get("/", (req, res) => {
  res.send(quotes);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === id);

  if (quote) {
    res.send(quote);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const { quote, author } = req.body;
  if (!quote || !author) {
    res.sendStatus(400);
  } else {
    const newQuote = { id: counter++, quote, author };

    quotes.push(newQuote);
    res.sendStatus(201);
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  quotes = quotes.filter(q => q.id !== id);

  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = quotes.find(q => q.id === id);

  if (item) {
    const { author, quote } = req.body;

    if (!quote || !author) {
      res.sendStatus(400);
    } else {
      const updatedQuote = { id, author, quote };
      quotes = quotes.map(q => (q === item ? updatedQuote : q));

      res.sendStatus(200);
    }
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
