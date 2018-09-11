#!/usr/bin/env node

const ecli = require('commander');
// const {spawn} = require('child_process');
const request = require('request')
const {createUser}  = require('../server/UserController');

let currentUser = null;

ecli
  .version('0.0.1')
  .description('ECLI is a tool designed to keep track of your project errors and resolutions')


ecli
  .command('signup <username> <password>')
  .alias('S')
  .description('SignUp for ecli')
  .action((username, password) => {
    // createUser(username, password)
    request('http://localhost:8080/testing', (err, res) => {

    })
  })

  ecli
  .command('output')
  .alias('o')
  .description('Output error message')
  .action( () => {
    console.info('here')
  })

  ecli.parse(process.argv);