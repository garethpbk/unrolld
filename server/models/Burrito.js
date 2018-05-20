const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const BurritoSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  ingredients: { type: Array, required: false },
  description: { type: String, required: false },
  images: { type: Array, required: false },
  vegetarian: { type: Boolean, required: false },
  recommended: { type: Boolean, required: false },
  tags: { type: Array, required: false },
  rating: {
    heft: { type: Number, required: true },
    taste: { type: Number, required: true },
    salsa: { type: Number, required: true },
    value: { type: Number, required: true },
  },
  _restaurant: { type: ObjectId, ref: 'Restaurant' },
});

module.exports = mongoose.model('Burrito', BurritoSchema);
