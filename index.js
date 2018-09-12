// Bring the app's event handlers into the main execution context
const { app } = require('./electron')

// cli tool
const program = require('commander')
const request = require('request')

program
  .version('0.0.1')
  .description(
    'ECLI is a tool designed to keep track of your project errors and resolutions'
  )

if (process.argv.length > 1) {
  program.parse(process.argv)
  console.log('Test')
  console.log({ parse: program.parse(process.argv) })
}
