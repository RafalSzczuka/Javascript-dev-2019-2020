const express = require("express");
const router = express.Router();

let counter = 0;

let users = [
  {
    id: counter++,
    firstName: "Rafał",
    lastName: "Szczuka"
  }
];

// http://localhost:4800/users
router.get("/", (req, res) => {
  res.send(users);
});

// http://localhost:4800/users
// POST: { "firstName": "Franz", "lastName": "Maurer" }
router.post("/", (req, res) => {
  const { firstName, lastName } = req.body;

  if (firstName && lastName) {
    const newUser = {
      id: counter++,
      firstName,
      lastName
    };
    users = users.concat(newUser);

    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
});

// http://localhost:4800/users/0
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = users.length;

  users = users.filter(u => u.id !== id);

  if (lengthBeforeFilter === users.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

// http://localhost:4800/users/0
// POST: { "firstName": "Hanz", "lastName": "Landa" }
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = users.find(t => t.id === id);

  if (item) {
    const { firstName, lastName } = req.body;

    if (firstName && lastName) {
      const newUser = {
        id,
        firstName,
        lastName
      };

      users = users.map(u => (u === item ? newUser : u));

      res.sendStatus(201);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
