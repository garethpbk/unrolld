const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unrolld';

// Register models
require('./models/Burrito');

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).send('Unrolld');
});

server.use('/api/burritos', require('./routes/burritos'));
server.use('/api/restaurants', require('./routes/restaurants'));

module.exports = server;
