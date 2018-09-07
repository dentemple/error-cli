const User = require("./UserModel");

const UserController = {
  addUser(req, res) {
    console.log("HELLO FROM USER");
    const aUser = new User({
      name: "akouvi",
      password: "password"
    });
    // console.log("this is aUser", aUser);

    aUser.save((err, aUser) => {
      if (err) {
        console.log("this is error", err);
      }
      // console.log("another log of aUser", aUser);

      res.send(aUser);
    });
  }
};

module.exports = UserController;
