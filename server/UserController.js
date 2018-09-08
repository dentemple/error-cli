const User = require("./UserModel");

const UserController = {
  checkDB(req, res, next) {
    User.findOne(
      { name: res.locals.name, password: res.locals.token },
      (err, response) => {
        if (response) {
          res.send(response);
        } else {
          next();
        }
      }
    );
  },
  addUser(req, res) {
    console.log("HELLO FROM USER", req.body);
    const aUser = new User({
      name: "akouvi",
      password: "password"
    });
    // console.log("this is aUser", aUser);

    aUser.save((err, aUser) => {
      if (err) {
        res.status(404).send("user not found");
        console.log("this is error", err);
      }
      // console.log("another log of aUser", aUser);
      res.status(200).send(aUser);
    });
  },
  getUser(req, res) {
    User.findOne({ name: "akouvi" }, (err, user) => {
      // console.log("GETTING A USER");
      if (err) {
        // console.log("we have an error trying to get user");

        res.status(404).send(err);
      } else {
        // console.log(user);

        res.status(200).send(user);
      }
    });
  }
};

module.exports = UserController;
