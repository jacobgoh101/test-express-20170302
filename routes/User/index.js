const Router = require("express").Router;
var app = new Router();

app.get('/user',(req,res) => {
  res.end('test');
})

module.exports = app
