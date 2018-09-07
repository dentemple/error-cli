const express = require("express");
const app = express();
const UserController = require("./UserController");

app.get("/", (req, res) => res.send("up and running"));
app.get("/api/add", UserController.addUser);
app.get("/api/get", UserController.getUser);

app.listen(3000, () => console.log("listening on port 3000"));
