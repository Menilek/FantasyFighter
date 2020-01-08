const express = require('express');
const router = express.Router();

const Fighter = require('../../models/Fighter');

// @route POST api/fighter
// desc Create fighter
// @access Public
router.post('/', (req, res) => {
    console.log(req.body);
    const {name, striking, grappling} = req.body;

    if(!name || !striking || !grappling){
        return res.status(400).json({msg: 'Please complete all fields'});
    }
    
    const newFighter = new Fighter({
        name,
        striking,
        grappling
    });

    console.log("CREATING FIGHTER");
    
    newFighter.save()
        .then(fighter => res.status(200).json(fighter))
        .catch(err => res.status(400).json({ success : false }))
});

// @route GET api/fighter
// Get an opponent
// @access Public
router.get('/', (req, res) => {
    console.log("GETTING FIGHTER");
    Fighter.findOne(req.fighter)
        .then(fighter => res.json(fighter));
});

module.exports = router;