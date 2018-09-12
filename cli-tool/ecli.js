#!/usr/bin/env node
const ecli = require('commander');
const request = require('request');
const assert = require('assert');
const fetch = require('node-fetch');

// function isLoggedIn(){
//   if(currentUser === null){
//     throw 'Error: You are not logged in!';
//   } else {
//     return true;
//   } 
// }

ecli
  .version('0.0.1')
  .description('ECLI is a tool designed to keep track of your project errors and resolutions')

//Sign-up command: Create a user 
ecli
  .command('signup <username> <password>')
  .alias('S')
  .description('SignUp for ecli')
  .action((username, password) => {
    request.post({
      url:'http://localhost:8080/users/sign-up', 
      form: {
        username: username,
        password: password
      }}, (err, res) => {
        console.log('New User Added!!\n\n', res.body);
    })
  })

  //Login Command: Log into workspace
  // assign current user to logged in user
  ecli
  .command('login <username> <password>')
  .alias('L')
  .description('Login to the ecli client')
  .action((username, password) => {
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then( resp => resp.json())
    .then( resp => {        
      console.log(`User ${resp.username} logged in`);
    })
    .catch( err => console.log('Error:', err))
  })

  ecli
  .command('output')
  .alias('o')
  .description('Output error message')
  .action( () => {
    console.log('here')
  })

  ecli.parse(process.argv);