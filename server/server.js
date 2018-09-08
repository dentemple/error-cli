const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserController = require("./UserController");
const SearchController = require("./SearchController");

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("up and running"));
app.get("/login", UserController.authenticateUser);
app.get(
  "/oauth",
  UserController.handleAthenticatedUser,
  UserController.getAuthInfo,
  UserController.checkDB,
  UserController.addUser
);
app.get('/search',
  SearchController.githubSearch
)
app.listen(3000, () => console.log("listening on port 3000"));
