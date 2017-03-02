const express = require('express')
const app = express()

app.get('/user',(req,res) => {
  res.end('test');
})

module.exports = app
