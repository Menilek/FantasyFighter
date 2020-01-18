const supertest = require('supertest');
const app = require('../server');
const Fighter = require('../models/Fighter');
const { setUpDB } = require('./testSetUp');

const request = supertest(app);

const dbName = "test-fantasy-fighter";

setUpDB(dbName)

describe("Testing Fighter API routes", () => {
    it("tests GET request to api/fighters route and returns true for success", async done => {
        //Sending post request
        const res = await request.get('/api/fighter')
        expect(res.status).toBe(200)
        done();
    })

    it("tests POST request to api/fighters route and returns true for success", async done => {
        //Sending post request
        const res = await request.post('/api/fighter')
            .send({
                "name": "Law",
                "striking": "Jeet Kun Do",
                "grappling": "Aikido"
            })
            
        //Inspecting the response for the name, striking and grappling style
        expect(res.body.name).toBeTruthy()
        expect(res.body.striking).toBeTruthy()
        expect(res.body.grappling).toBeTruthy()
            
        //Checking the number of fighters in the DB
        const fighters = await Fighter.find({})
        expect(fighters.length).toBe(4)

        //Checking if the fighter is in the DB
        const fighter = await Fighter.findOne({name: 'Law'})
        expect(fighter.name).toBeTruthy()
        expect(fighter.striking).toBeTruthy()
        expect(fighter.grappling).toBeTruthy()

        done();
    })

});