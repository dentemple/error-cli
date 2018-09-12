<<<<<<< 919750fccd3074dda0221eebe10178550c037f15
const SearchController = require("./SearchController");
const UserController = require("./UserController");
const userRouter = require('./userRouter');
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
=======
const SearchController = require('./SearchController')
const UserController = require('./UserController')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
>>>>>>> Add routes

///////////
/*MongoDB*/
///////////
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/ecli_db',
  { useNewUrlParser: true }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {
  console.log('Connected to the ecli_db local database')
})

///////////////
/*MiddleWare*/
///////////////
<<<<<<< 8353ca75baf58607ce992e842730e3da67d6d3ab
<<<<<<< 919750fccd3074dda0221eebe10178550c037f15
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
=======
=======
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
>>>>>>> Add routes and configuration
app.use(bodyParser.json())
>>>>>>> Add routes

///////////
/*Routes*/
///////////
<<<<<<< 8353ca75baf58607ce992e842730e3da67d6d3ab
<<<<<<< 919750fccd3074dda0221eebe10178550c037f15

app.use("/users", userRouter)

app.get("/api", (req, res) => {
  res.send("up and running");
});

// app.get("/api/login", UserController.authenticateUser);

// app.get("/api/oauth",
//   UserController.handleAthenticatedUser,
//   UserController.getAuthInfo,
//   UserController.checkDB,
//   UserController.addUser
// );
=======
const notesRoutes = require('./notes/routes.js')
app.use('/notes', notesRoutes)
=======
app.use('/notes', require('./notesFeature/routes.js'))
>>>>>>> Add routes and configuration

app.get('/api', (req, res) => {
  res.send('up and running')
})

app.get('/testing', (req, res) => {
  console.log('hit the server')
  res.send('You got it DUDE!!!')
})

app.get('/api/login', UserController.authenticateUser)

app.get(
  '/api/oauth',
  UserController.handleAthenticatedUser,
  UserController.getAuthInfo,
  UserController.checkDB,
  UserController.addUser
)
>>>>>>> Add routes

app.listen(8080, () => console.log('🚦 Now listening on port 8080 🚦'))
