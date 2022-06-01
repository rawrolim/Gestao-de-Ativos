const express = require('express');
const app = express();
const index = require('./routes/index');
const api = require('./Routes/api');

app.use('/', index);
app.use('/api', api);

module.exports = app;