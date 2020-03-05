const express = require("express");
const taxRouter = require("./tax");
const quotesRouter = require("./quotes");
const todoRouter = require("./todo");
const userRouter = require("./user");

const app = express();
app.use(express.json());

app.use("/podatek", taxRouter);
app.use("/quotes", quotesRouter);
app.use("/todo", todoRouter);
app.use("/users", userRouter);

app.listen(4800, () => console.log("server started"));
