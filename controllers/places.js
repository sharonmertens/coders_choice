const express = require('express');
const router = express.Router();

const Places = require('../models/places.js');

// CREATE route
router.post('/', (req, res) => {
  console.log(req.body);
  Places.create(req.body, (err, createdPlace) => {
    res.json(createdPlace);
  });
});

// INDEX route
router.get('/', (req, res) => {
  Places.find({}, (err, foundPlaces) => {
    res.json(foundPlaces);
  });
});

// DELETE route
router.delete('/:id', (req, res) => {
  Places.findByIdAndRemove(req.params.id, (err, deletedPlace) => {
    res.json(deletedPlace);
  });
});

// UPDATE route
router.put('/:id', (req, res) => {
  Places.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlace)=> {
    res.json(updatedPlace)
  })
})

module.exports = router;
