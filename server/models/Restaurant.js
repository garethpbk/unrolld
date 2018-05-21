const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const letsAndNums = RegExp('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$');

const RestaurantSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: function(text) {
        if (letsAndNumbs.test(text)) return true;
      },
      message: 'Name can only contain letters, numbers, and spaces.',
    },
    required: true,
  },
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
