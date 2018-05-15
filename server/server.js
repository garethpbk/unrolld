const express = require('express');
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unrolld';

// Register models
require('./models/Burrito');

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);

const server = express();

server.get('/', (req, res) => {
  res.status(200).send('Unrolld');
});

module.exports = server;
