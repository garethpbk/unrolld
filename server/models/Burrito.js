const mongoose = require('mongoose');
const { Schema } = mongoose;

const BurritoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurant: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  images: {
    type: Array,
    required: false,
  },
  vegetarian: {
    type: Boolean,
    required: false,
  },
  rating: {
    heft: {
      type: Number,
      required: true,
    },
    taste: {
      type: Number,
      required: true,
    },
    sauce: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
});

mongoose.model('burrito', BurritoSchema);
