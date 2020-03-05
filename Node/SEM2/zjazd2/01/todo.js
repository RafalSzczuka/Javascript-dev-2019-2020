const express = require("express");
const router = express.Router();

let counter = 0;

let todos = [{ id: counter++, task: "first task", finished: false }];

// http://localhost:4500/todo
router.get("/", (req, res) => {
  res.send(todos);
});

// http://localhost:4500/todo/0
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4500/todo
// POST: { "task": "learn node.js" }
router.post("/", (req, res) => {
  const task = req.body;

  if (task) {
    const newTask = {
      id: counter++,
      task,
      finished: false
    };

    todos = todos.concat(newTask);

    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
