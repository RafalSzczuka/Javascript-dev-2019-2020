const express = require("express");
const taxRouter = require("./tax");
const quotesRouter = require("./quotes");
const todoRouter = require("./todo");

const app = express();
app.use(express.json());

app.use("/podatek", taxRouter);
app.use("/quotes", quotesRouter);
app.use("/todo", todoRouter);

app.listen(4500, () => console.log("server started"));
