const mongoose = require("mongoose");

const borrower_management_schema = new mongoose.Schema({
  borrower_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  is_returned: {
    type: Boolean,
    default: false,
  },
  borrowing_date: {
    type: String,
  },
  returning_date: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Borrower_Management",
  borrower_management_schema
);
