const express = require('express');
const router = express.Router();

const Places = require('../models/places.js');

// CREATE route
router.post('/', (req, res) => {
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

module.exports = router;
