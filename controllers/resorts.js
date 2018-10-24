console.log('connected');

const express = require('express');
const router = express.Router();
const Resorts = require('../models/resorts.js');


router.get('/', (req, res) => {
  Resorts.find({}, (err, foundResorts) => {
    res.json(foundResorts);
  // res.send('mode');
  });
});

router.post('/', (req, res) => {
  Resorts.create(req.body, (err, createdResort) => {
    res.json(createdResort);
  });
});

router.delete('/:id', (req, res) => {
  Resorts.findByIdAndRemove(req.params.id, (err, deletedResort) => {
    res.json(deletedResort);
  });
});

router.put('/:id', (req, res) => {
  Resorts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResort) => {
    res.json(updatedResort);
  });
});

module.exports = router;
