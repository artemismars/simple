const mongoose = require("mongoose");
const URI = process.env.DATABASE_URI || "mongodb://localhost:27017/simple_dev";

mongoose
  .connect(URI)
  .then(() => {
    console.log("connection is successful");
  })
  .catch((reason) => {
    console.log(reason);
  });
