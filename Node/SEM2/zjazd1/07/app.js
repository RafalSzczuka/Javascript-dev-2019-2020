const express = require("express");

const app = express();

const users = [
  { name: "Jan", username: "Janko" },
  { name: "Janusz", username: "Januszewski" }
];

const posts = [{ userId: 0, title: "ala ma kota", body: "tresc posta" }];

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

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/add", (req, res) => {
  posts.push(req.query);
  res.send(posts);
});

app.get("/posts/delete/:id", (req, res) => {
  const { id } = req.params;
  posts.splice(id, 1);
  res.send(posts);
});

app.listen(4700);
