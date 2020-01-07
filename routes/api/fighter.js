const express = require('express');
const router = express.Router();

const Fighter = require('../../models/Fighter');

// @route POST api/play
// desc Create fighter
// @access Public
router.post('/', (req, res) => {
    const {name, striking, grappling} = req.body;

    if(!name || !striking || !grappling){
        return res.status(400).json({msg: 'Please complete all fields'});
    }
    
    const newFighter = new Fighter({
        name: req.body.name,
        striking: req.body.striking,
        grappling: req.body.grappling,
    });
    newFighter.save()
        .then(fighter => res.json(fighter))
});

// @route GET api/fighter
// Get an opponent
// @access Public
router.get('/', (req, res) => {
    Fighter.findOne(req.fighter)
        .then(fighter => res.json(fighter));
})

module.exports = router;