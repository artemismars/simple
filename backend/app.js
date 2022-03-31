require("dotenv").config();
// activate mongodb connection
require("./config/db");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(require("./routes/global"));

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});
