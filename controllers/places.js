const express = require('express');
const router = express.Router();

const Places = require('../models/places.js');

// CREATE route
router.post('/', (req, res) => {
  Places.create(req.body, (err, createdPlace) => {
    res.json(createdPlace);
  });
});


router.get('/', (req, res) => {
  res.send('index');
});

module.exports = router;
