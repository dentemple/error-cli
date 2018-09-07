//create your db here a model is class in which we construct our documents
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drunkonerror");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("connected to mongod");
});

const MainUser = new mongoose.Schema({
  name: String,
  password: String
});

module.exports = mongoose.model("User", MainUser);
