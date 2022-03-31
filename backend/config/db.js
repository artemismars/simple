const mongoose = require("mongoose");
const URI = process.env.DATABASE_URI || "mongodb://localhost:27017/simple_dev";

mongoose.connect(URI).catch((reason) => {
  console.log(reason);
});
