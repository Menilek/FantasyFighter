const supertest = require('supertest');
const mongoose = require('mongoose');
const Fighter = require('../models/Fighter');
const app = require('../start');
const { setUpDB } = require('./testSetUp');

const request = supertest(app);

const dbName = "test-fantasy-fighter";
setUpDB(dbName)

describe("Testing createFighter API", () => {
    it("tests GET request to api/fighters route and returns true for success", async done => {
        //Sending post request
        const res = await request.get('/api/fighter')
        expect(res.status).toBe(200);  
        done()
    })

    it("tests POST request to api/fighters route and returns true for success", async done => {
        //Sending post request
        const res = await request.post('/api/fighter')
            .send({
                "name": "Law",
                "striking": "Jeet Kun Do",
                "grappling": "Aikido"
            })

        //Checking if the fighter is in the DB
        const fighter = await Fighter.findOne({name: "Law"})
        expect(fighter.name).toBeTruthy()
        expect(fighter.striking).toBeTruthy()
        expect(fighter.grappling).toBeTruthy()
        console.log(fighter)
            
        //Inspecting the response for the name, striking and grappling style
        expect(res.body.name).toBeTruthy()
        expect(res.body.striking).toBeTruthy()
        expect(res.body.grappling).toBeTruthy()

        done();
    })

});