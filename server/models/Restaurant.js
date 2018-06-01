const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const letsAndNums = RegExp('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$');

const RestaurantSchema = new Schema({
  name: {
    type: String,
    /* validate: {
      validator: function(text) {
        if (letsAndNumbs.test(text)) return true;
      },
      message: 'Name can only contain letters, numbers, and spaces.',
    }, */
    required: true,
  },
  address: { type: String, required: true },
  locality: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  hours: {
    sun: { type: String, required: false },
    mon: { type: String, required: false },
    tue: { type: String, required: false },
    wed: { type: String, required: false },
    thu: { type: String, required: false },
    fri: { type: String, required: false },
    sat: { type: String, required: false },
  },
  images: { type: Array, required: false },
  _burritos: [{ type: ObjectId, ref: 'Burrito' }],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
