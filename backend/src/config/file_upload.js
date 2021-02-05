const multer = require("multer");
const shortId = require("shortid");
const path = require("path");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "lms_doc_" + "-" + shortId.generate() + path.extname(file.originalname)
    );
  },
});

module.exports = multer({ storage: storage });
