// const fs = require('fs');
// const util = require('util');
// const path = require('path');
// const readDir = util.promisify(fs.readdir).bind(fs)

const fighters = require('./Fighter.seed');
const Fighter = require('../models/Fighter');

async function seedDatabase(){
    await Fighter.insertMany(fighters)
}

exports.seedDatabase = seedDatabase;