const mongoose = require('mongoose');

// Register models
require('../server/models/Burrito');
require('../server/models/Restaurant');

beforeEach(done => {
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(() => {});
    }
    return done();
  }

  mongoose.connection.readyState === 0
    ? mongoose.connect(`mongodb://localhost:27017/${process.env.TEST_SUITE}`, err => (err ? err : clearDB()))
    : clearDB();
});

afterEach(done => {
  mongoose.disconnect();
  done();
});
