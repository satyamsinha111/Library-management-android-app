require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const app = express();
const src = require("./src");
app.use(body_parser.json());

src.config.db.on("error", console.error.bind(console, "connection error:"));
src.config.db.once("open", function () {
  // we're connected!
  console.log("Database connected to server");
});

module.exports = app;
