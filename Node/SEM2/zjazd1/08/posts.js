const express = require("express");

const router = express.Router();

const posts = [{ userId: 0, title: "ala ma kota", body: "tresc posta" }];

router.get("/posts", (req, res) => {
  res.send(posts);
});

router.get("/add", (req, res) => {
  posts.push(req.query);
  res.send(posts);
});

router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  posts.splice(id, 1);
  res.send(posts);
});

module.exports = router;
