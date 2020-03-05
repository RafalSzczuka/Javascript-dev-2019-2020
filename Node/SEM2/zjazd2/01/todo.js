const express = require("express");
const router = express.Router();

let counter = 0;

let todos = [{ id: counter++, task: "first task", finished: false }];

// http://localhost:4800/todo
router.get("/", (req, res) => {
  console.log(todos);

  res.send(todos);
});

// http://localhost:4800/todo/finished
router.get("/finished/", (req, res) => {
  let finishedTasks = todos.filter(t => t.finished === true);
  res.send(finishedTasks);
});

// http://localhost:4800/todo/unfinished
router.get("/unfinished/", (req, res) => {
  let unFinishedTasks = todos.filter(t => t.finished === false);
  res.send(unFinishedTasks);
});

// http://localhost:4800/todo/0
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4800/todo
// POST: { "task": "learn node.js" }
router.post("/", (req, res) => {
  const { task } = req.body;

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

// http://localhost:4800/todo/0
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = todos.length;

  todos = todos.filter(t => t.id !== id);

  if (lengthBeforeFilter === todos.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

// http://localhost:4800/todo/0
// PUT: { "task": "learn react and angular" }
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = todos.find(t => t.id === id);

  if (item) {
    const { task } = req.body;

    if (task) {
      const newTask = {
        id,
        task,
        finished: false
      };

      todos = todos.map(t => (t === item ? newTask : t));

      res.sendStatus(201);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4800/todo/0
// PATCH: { "finished": true }
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = todos.find(t => t.id === id);
  const task = item.task;

  if (item) {
    const { finished } = req.body;

    if (finished) {
      const newTask = {
        id,
        task,
        finished
      };

      todos = todos.map(t => (t === item ? newTask : t));

      res.sendStatus(201);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
