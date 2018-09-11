const SearchController = require('./SearchController')
const UserController = require('./UserController')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

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
app.use(bodyParser.json())

///////////
/*Routes*/
///////////
const notesRoutes = require('./notes/routes.js')
app.use('/notes', notesRoutes)

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

app.listen(8080, () => console.log('🚦 Now listening on port 8080 🚦'))
