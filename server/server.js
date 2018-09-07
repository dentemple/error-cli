const express = require("express");
const app = express();
const UserController = require("./UserController");

app.get("/", (req, res) => res.send("up and running"));
app.post("/api/add", UserController.addUser);
// app.get("/getUser", UserController.getUser);
// app.get("/savedSearches", UserController.getSearches);
app.get("/login", UserController.authenticateUser);
app.get("/oauth", UserController.handleAthenticatedUser);

app.listen(3000, () => console.log("listening on port 3000"));
