const mongoose = require("mongoose");

if (process.env.NODE_ENV === "test") {
  console.log("Test db connected");
  mongoose.connect(process.env.MONGO_TEST_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

if (process.env.NODE_ENV === "dev") {
  console.log("Dev db connected");
  mongoose.connect(process.env.MONGO_LOCAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

if (process.env.NODE_ENV === "prod") {
  console.log("Prod db connected");
  mongoose.connect(process.env.MONGO_SERVER_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = mongoose.connection;
