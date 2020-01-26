const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/api/fighter', require('./routes/api/fighter'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

module.exports = app;