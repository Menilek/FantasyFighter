const fs = require('fs');
const util = require('util');
const mongoose = require('mongoose');
const path = require('path');
const fighters = require('./Fighter.seed');

const readDir = util.promisify(fs.readdir).bind(fs)


module.exports = {
    async seedDatabase(){
        await Fighter.insertMany(fighters)
    }
}