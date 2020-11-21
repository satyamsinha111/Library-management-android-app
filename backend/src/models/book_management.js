const mongoose = require("mongoose");

const book_management_schema = new mongoose.Schema({
  library_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Library",
  },
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

module.exports = mongoose.model("Book_Management", book_management_schema);
