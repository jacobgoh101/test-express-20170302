const Router = require("express").Router;
var app = new Router();
const User = require('./User/index')

app.use('/',User)

module.exports = app
