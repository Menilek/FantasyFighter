const express = require('express');

const app = express();
app.use(express.json());

app.use('/api/fighter', require('./routes/api/fighter'));

module.exports = app;