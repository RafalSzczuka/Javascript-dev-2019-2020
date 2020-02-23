const express = require("express");
const app = express();
const taxRouter = require("./tax");
const quotesRouter = require("./quotes");

app.use(express.json());
app.use(express.urlencoded());

app.use(taxRouter);
app.use("/quotes", quotesRouter);

app.listen(4500);
