const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/ecli_db', { useNewUrlParser: true });
mongoose.connection.once('open', (data) => {
  console.log('About to add');
});

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});


const User = mongoose.model("User", userSchema);

module.exports = User;


//TODO:
// -Add bcrypt encryption?