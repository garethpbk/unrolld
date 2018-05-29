const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const geolib = require('geolib');

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

// Geolocation calculations
router.get('/calc/:lat&:lng', (req, res) => {
  const filteredRestaurants = [];
  let lat = req.params.lat;
  let lng = req.params.lng;

  Restaurant.find().then(restaurants => {
    jsRestaurants = [...restaurants];
    jsRestaurants.map(restaurant => {
      restaurant = restaurant.toJSON();
      restaurant.distance = 0;
      let distance = geolib.getDistance(
        {
          latitude: restaurant.coordinates.latitude,
          longitude: restaurant.coordinates.longitude,
        },
        {
          latitude: lat,
          longitude: lng,
        }
      );
      restaurant.distance = distance;
      filteredRestaurants.push(restaurant);
    });
    filteredRestaurants.sort((a, b) => a.distance - b.distance);
    res.status(200).send(filteredRestaurants.slice(0, 20));
  });
});

module.exports = router;
