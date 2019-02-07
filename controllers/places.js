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

module.exports = router;
