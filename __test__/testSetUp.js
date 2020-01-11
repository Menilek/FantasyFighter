const { seedDatabase } = require ('../seeds/index');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise


async function removeAllCollections(){
    const collections = Object.keys(mongoose.connection.collections)
    for(const collectionName of collections){
        const collection = mongoose.connection.collections[collectionName]
        await collection.deleteMany()
    }
}

async function dropAllCollections(){
    const collections = Object.keys(mongoose.connection.collections)
    for(const collectionName of collections){
        const collection = mongoose.connection.collections[collectionName]
        try {
            await collection.drop()
        } catch(err) {
            //If we are trying to drop a collection that has already been dropped we will ignore this error
            if(error.message === 'ns not found') return

            //Ignoring 'a background operation is currently running' message
            if(error.message.includes('a background operation is currently running')) return

            console.log(error.message)
        }
    }
}

module.exports = {
    setUpDB(dbName){
        //Connect to Mongoose
        beforeAll(async () => {
            const url = `mongodb://127.0.0.1/${dbName}`
            await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        })

        //Seeding the DB
        beforeEach(async () => {
            await seedDatabase()
        })

        //Cleans up database after each test
        afterEach(async () => {
            await removeAllCollections()
        })

        //Disconnect Mongoose
        afterAll(async () => {
            await dropAllCollections()
            await mongoose.connection.close()
        })
    }
}