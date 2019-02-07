// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middleware
app.use(express.json());

const placesController = require('./controllers/places.js')
app.use('/places', placesController);

app.get('/', (req, res) => {
  res.send('Hello World')
})

// =======================================
//              LISTENER
// =======================================
app.listen(3000, () => {
  console.log('listening...');
});

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/places', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})
