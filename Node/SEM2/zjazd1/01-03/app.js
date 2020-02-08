const express = require("express");

const app = express();

app.get("/:name?", (req, res) => {
  const name = req.params.name || "World";

  res.send(`Hello ${name}`);
});

app.listen(4700);
