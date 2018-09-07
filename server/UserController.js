const fetch = require('node-fetch');
const User = require("./UserModel");
const authInfo = require('../AuthConfig');

console.log(authInfo);

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
  },
  authenticateUser(req, res) {
    const authUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${authInfo.CLIENT_ID}`
    res.redirect(authUrl);
  },
  handleAthenticatedUser(req, res) {
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
    console.log({res});
    return res.json()
  }).then((json) => {
    console.log({json});

    res.send('user authenticated')
  }).catch((err) => {
    console.log({err});
    res.end()
  })

  }
};

module.exports = UserController;
