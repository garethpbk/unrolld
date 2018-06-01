const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unrolld';

// Requirements for streaming csv data into database - commented out since it only needs to run once, for now
// const csvJson = require('csvjson');
// const path = require('path');
// const fs = require('fs');
// const Restaurant = require('./models/Restaurant');
// const restaurantData = fs.readFileSync(path.join(__dirname, 'data/restaurant-data.csv'), { encoding: 'utf8' });
// const options = {
//   delimiter: ',',
//   quote: '"',
// };
// const restaurantJSON = csvJson.toSchemaObject(restaurantData, options);

// Register models
require('./models/Burrito');

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);

const server = express();

server.use(morgan('dev'));

server.use(cors());
server.use(bodyParser.json());

// Drop old data so it doesn't get duplicated
// try {
//   Restaurant.collection.drop();
// } catch (err) {
//   console.log(err);
// }

// Data insertion occurs here
// Restaurant.collection.insert(restaurantJSON, (err, result) => {
//   err ? console.log(err) : console.log(result);
// });

server.get('/', (req, res) => {
  res.status(200).send('Unrolld');
});

server.use('/api/burritos', require('./routes/burritos'));
server.use('/api/restaurants', require('./routes/restaurants'));
server.use('/api/users', require('./routes/users'));

server.use('/api/feed', require('./routes/feed'));

module.exports = server;
