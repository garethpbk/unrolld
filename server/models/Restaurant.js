const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  hours: { type: String, required: true },
  images: { type: Array, required: false },
  _burritos: [{ type: ObjectId, ref: 'Burrito' }],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
