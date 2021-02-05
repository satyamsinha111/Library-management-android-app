const express = require("express");
const multer = require("multer");
const router = express.Router();
const config = require("../config");
router.post("/", config.fileUploadMiddleware.single("image"), (req, res) => {
  console.log("Uploaded file", req.file);
  res.send("Test response");
});

module.exports = router;
