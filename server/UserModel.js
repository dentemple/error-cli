const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;


//TODO:
// -Add bcrypt encryption?