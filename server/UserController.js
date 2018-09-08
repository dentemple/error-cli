const fetch = require("node-fetch");
const User = require("./UserModel");
const authInfo = require('../AuthConfig');

const UserController = {
  checkDB(req, res, next) {
    // console.log(res.locals);
    User.findOne({ name: res.locals.username }, (err, response) => {
      console.log(response, "form checkDB");
      if (response) {
        res.send(response);
      } else {
        next();
      }
    });
  },
  addUser(req, res) {
    const aUser = new User({
      name: res.locals.username,
      image: res.locals.image
    });
    console.log("this is aUser", aUser);

    aUser.save((err, aUser) => {
      if (err) {
        res.status(404).send("user not found");
      } else {
        console.log("another log of aUser", aUser);
        res.status(200).send(aUser);
      }
    });
  },

  getUser(req, res) {
    User.findOne({ name: res.locals.name }, (err, user) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  },

  authenticateUser(req, res) {
    const authUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${
      authInfo.CLIENT_ID
    }`;
    res.redirect(authUrl);
  },
  handleAthenticatedUser(req, res, next) {
    const code = req.query.code;
    console.log({ code });
    const tokenUrl = `https://github.com/login/oauth/access_token?client_id=${
      authInfo.CLIENT_ID
    }&client_secret=${authInfo.CLIENT_SECRET}&code=${code}`;
    fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json"
      }
    }).then((data) => {
    //  console.log({res});
      return data.json()
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
    fetch(authUrl)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        console.log("this is json", { json });
        res.locals.username = json.login;
        res.locals.image = json.avatar_url;

        next();
        // res.send("user authenticated");
        // console.log(res.locals);

        // res.send({ json });
      })
      .catch(err => {
        console.log({ err });
        res.end();
      });
  }
};

module.exports = UserController;
