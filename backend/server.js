require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const app = express();
const src = require("./src/");
const multer = require("multer");
const path = require("path");
const shortId = require("shortid");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
// SET STORAGE

app.use(express.static("uploads"));
app.use("/api/", src.routes.auth);

src.config.db.on("error", console.error.bind(console, "connection error:"));
src.config.db.once("open", function () {
  // we're connected!
  console.log("Database connected to server");
});

module.exports = app;
