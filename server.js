// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();

// middleware

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
})
