'use strict'

const FilePacker = require('./lib/filePacker')

module.exports = new FilePacker(process.argv).pack()