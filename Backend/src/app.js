const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const api = require('./Routes/api');

const app = express();

app.use(bodyParser.json());

app.use('/', index);
app.use('/api', api);

module.exports = app;