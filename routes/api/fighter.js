const express = require('express');
const router = express.Router();

const Fighter = require('../../models/Fighter');

// @route POST api/fighter
// desc Create fighter
// @access Public
router.post('/', (req, res) => {
    const {name, striking, grappling} = req.body;

    if(!name || !striking || !grappling){
        return res.status(400).json({msg: 'Please complete all fields'});
    }
    
    const newFighter = new Fighter({
        name,
        striking,
        grappling
    });

    newFighter.save()
        .then(fighter => res.status(200).json(fighter))
        .catch(err => res.status(400).json({ success : false }))
});

// @route GET api/fighter
// Get an opponent
// @access Public
router.get('/', async (req, res) => {
    Fighter.findOne(req.fighter)
        .then(fighter => res.status(200).json(fighter));
});

// @route GET api/fighter/id
// Get player by id
// @access Public
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Fighter.findById(req.params.id)
        .then(fighter => {
            if(!fighter){
                let err = new Error("Unable to find that fighter");
                err.status = 404;
                return err;
            }
            req.fighter = fighter;
            return res.status(200).json(req.fighter);
        })
});

module.exports = router;