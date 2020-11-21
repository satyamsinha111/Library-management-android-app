const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  number: {
    type: Number,
  },
  street_number: {
    type: String,
  },
  city: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("User", user_schema);
