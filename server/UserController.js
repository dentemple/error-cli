const fetch = require('node-fetch');
const User = require("./UserModel");
const authInfo = require('../AuthConfig');

console.log(authInfo);

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
  },
  authenticateUser(req, res) {
    const authUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${authInfo.CLIENT_ID}`
    res.redirect(authUrl);
  },
  handleAthenticatedUser(req, res, next) {
    const code = req.query.code;
    console.log({code});
    const tokenUrl = `https://github.com/login/oauth/access_token?client_id=${authInfo.CLIENT_ID}&client_secret=${authInfo.CLIENT_SECRET}&code=${code}`
    fetch(tokenUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then((res) => {
    //  console.log({res});
      return res.json()
    }).then((json) => {
    //  console.log({json});
      res.locals.token = json.access_token;
      // res.send('user authenticated')
      next()
    }).catch((err) => {
      console.log({err});
      res.end()
    })

  },
  getAuthInfo(req, res, next) {
    const token = res.locals.token;
    const authUrl = `https://api.github.com/user?access_token=${token}`;
    //console.log({token});
    fetch(authUrl).then((resp) => {
      return resp.json();
    }).then((json) => {
      console.log({json});
      res.locals.username = json.login;
      // next()
      res.send('user authenticated')
    }).catch((err) => {
      console.log({err});
      res.end()
    })

  }
};

module.exports = UserController;
