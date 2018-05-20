const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  hours: {
    sun: { type: String, required: true },
    mon: { type: String, required: true },
    tue: { type: String, required: true },
    wed: { type: String, required: true },
    thu: { type: String, required: true },
    fri: { type: String, required: true },
    sat: { type: String, required: true },
  },
  images: { type: Array, required: false },
  _burritos: [{ type: ObjectId, ref: 'Burrito' }],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
