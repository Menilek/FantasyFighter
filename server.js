const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MongoDB_URI, {useNewUrlParser: true, 'useCreateIndex': true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

app.use('/api/fighter', require('./routes/api/fighter'));

const port = 8000;
app.listen(port, () => console.log(`Server started on port: ${port}`));