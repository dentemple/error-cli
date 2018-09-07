//this is our server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3100;
mongoose.connect("mongodb://localhost/drunkonerror");

mongoose.connection.once("open", () => {
  console.log("hello form mainUser");
});
app.listen(PORT, () => {
  console.log(`connect to PORT: ${PORT}`);
});
