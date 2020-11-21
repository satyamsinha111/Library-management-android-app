const express = require("express");
const body_parser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up",
  });
});

module.exports = app;
