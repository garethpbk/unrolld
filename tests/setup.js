const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unrolld';

// Register models
require('../server/models/Burrito');
require('../server/models/Restaurant');

mongoose.connect(MONGO_URI);

beforeEach(done => {
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(() => {});
    }
    return done();
  }

  mongoose.connection.readyState === 0 ? mongoose.connect(MONGO_URI, err => (err ? err : clearDB())) : clearDB();
});

afterEach(done => {
  mongoose.disconnect();
  done();
});
