const mongoose = require("mongoose");

const book_schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  published_date: {
    type: String,
  },
  author: {
    type: String,
  },
  no_of_pages: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
});

module.exports = mongoose.model("Book", book_schema);
