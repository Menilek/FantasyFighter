const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

var url;

setURL = () => {
    if(process.env.NODE_ENV == 'test'){
        url = process.env.testDB;
    } else {
        url = process.env.MongoDB_URI;
    }
    return url;
}

setURL();


//useUnifiedTopology: true flag reported to randomly cause MongooseTimeoutError
//setting it to false or removing it has been used as a fix though inconsistent
const db = mongoose
    .connect(url, {useNewUrlParser: true, 'useCreateIndex': true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));   

module.exports = db;