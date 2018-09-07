//this is our controller
//mongodb://<dbuser>:<dbpassword>@ds147942.mlab.com:47942/drunkonerror
const User = require("./MainUser");
const UserController = {};
const aUser = new User({ name: "apple", password: "bees" });
