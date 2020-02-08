const express = require("express");

const app = express();

const users = [
  { name: "Jan", username: "Janko" },
  { name: "Janusz", username: "Januszewski" }
];

app.get("/add", (req, res) => {
  users.push(req.query);
  console.log(users);
  res.send("dodano usera");
});

app.get("/list/:id?", (req, res) => {
  const { id } = req.params;
  res.send(id ? users[id] : users);
});

app.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  users.splice(id, 1);
  res.send(users);
});

app.listen(4700);
