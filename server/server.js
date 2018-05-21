const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unrolld';

// Register models
require('./models/Burrito');

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);

const server = express();

server.use(morgan('dev'));

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).send('Unrolld');
});

server.use('/api/burritos', require('./routes/burritos'));
server.use('/api/restaurants', require('./routes/restaurants'));

server.use('/api/feed', require('./routes/feed'));

module.exports = server;
