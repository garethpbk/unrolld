const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Find all restaurants
router.get('/', (req, res) => {
  Restaurant.find().then(restaurants => {
    res.status(200).json(restaurants);
  });
});

// Find one restaurant
router.get('/:id', (req, res) => {
  let id = req.params.id;
  Restaurant.findById(id).then((err, restaurant) => {
    restaurant ? res.status(200).json(restaurant) : res.status(404).send('404 restaurant not found!');
  });
});

// Create a new restaurant
router.post('/', (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  newRestaurant.save((err, restaurant) => {
    restaurant ? res.status(201).json(restaurant) : res.status(404).send(err);
  });
});

// Update an existing restaurant
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Restaurant.findByIdAndUpdate(id, { $set: update }, (err, restaurant) => {
    restaurant ? res.status(204).json(restaurant) : res.status(404).send(err);
  });
});

// Delete an existing restaurant
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  Restaurant.findByIdAndRemove(id, (err, restaurant) => {
    restaurant ? res.status(200).json(restaurant) : res.status(404).send(err);
  });
});

module.exports = router;
