const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FighterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    striking: {
        type: String,
        required: true
    },
    grappling: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = Fighter = mongoose.model('fighter', FighterSchema);