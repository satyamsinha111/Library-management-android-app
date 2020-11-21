const mongoose = require("mongoose");

const permissons_schema = new mongoose.Schema({
  library_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Library",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  is_librarian: {
    type: Boolean,
    default: false,
  },
  is_maintainer: {
    type: Boolean,
    default: false,
  },
  is_borrower: {
    type: Boolean,
    default: false,
  },
  is_default: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Permisson", permissons_schema);
