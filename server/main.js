const express = require('express')
const app = express()
const Routes = require('../routes/index')

app.use('/api', Routes);

app.listen(8080);
