const fs = require('fs')

// Removing constant args
process.argv.splice(0,2)

// We need two or more arguments
if (process.argv.length < 2)
    throw new Error("INVALID_ARGUMENTS")

let destiny = process.argv[process.argv.length - 1]

console.log(destiny)