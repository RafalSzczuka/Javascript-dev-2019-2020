const express = require("express");

const router = express.Router();

const users = [
  { name: "Jan", username: "Janko" },
  { name: "Janusz", username: "Januszewski" }
];

router.get("/add", (req, res) => {
  users.push(req.query);
  console.log(users);
  res.send("dodano usera");
});

router.get("/list/:id?", (req, res) => {
  const { id } = req.params;
  res.send(id ? users[id] : users);
});

router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  users.splice(id, 1);
  res.send(users);
});

module.exports = router;
