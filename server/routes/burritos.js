const express = require('express');
const router = express.Router();
const Burrito = require('../models/Burrito');
const Restaurant = require('../models/Restaurant');

// Find all burritos
router.get('/', (req, res) => {
  Burrito.find().then(burritos => {
    res.status(200).json(burritos);
  });
});

// Find one burrito
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Burrito.findById(id).then(burrito => {
    burrito ? res.status(200).json(burrito) : res.status(404).send('404 burrito not found!');
  });
});

// Create a new burrito
router.post('/', (req, res) => {
  console.log(req.body);
  let ownerRestaurant = null;
  Restaurant.findById(req.body.restaurant)
    .then(restaurant => {
      ownerRestaurant = restaurant;
      const newBurrito = new Burrito(req.body);
      newBurrito._restaurant = restaurant._id;

      return newBurrito.save();
    })
    .then(burrito => {
      ownerRestaurant._burritos.push(burrito);
      ownerRestaurant.save().then(() => res.status(201).json(burrito));
    });

  /*  const newBurrito = new Burrito(req.body);
  newBurrito.save((burrito, err) => {
    burrito ? res.status(201).json(burrito) : res.status(404).send(err);
  }); */
});

// Update an existing burrito
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;
  Burrito.findByIdAndUpdate(id, { $set: update }, (err, burrito) => {
    burrito ? res.status(204).json(burrito) : res.status(404).send(err);
  });
});

// Delete an existing burrito
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Burrito.findByIdAndRemove(id, (err, burrito) => {
    burrito ? res.status(200).json(burrito) : res.status(404).send(err);
  });
});

module.exports = router;
