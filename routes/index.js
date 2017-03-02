const express = require('express')
const app = express()
const User = require('./User/index')

app.use('/*',User)

module.exports = app
