//create your db here a model is class in which we construct our documents
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MainUser = new Schema({
  name: string,
  password: string
});

module.exports = mongoose.model("User", MainUser);
