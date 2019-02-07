const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  city: String,
  country: String,
  image: String,
  visited: Boolean
});

const Places = mongoose.model('Place', placeSchema);

module.exports = Places;
