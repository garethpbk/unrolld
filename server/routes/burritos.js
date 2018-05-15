const express = require('express');
const router = express.Router();
const Burrito = require('../models/Burrito');

// Find all burritos
router.get('/', (req, res) => {
  Burrito.find().then(burritos => {
    res.status(200).json(burritos);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  Burrito.findById(id).then(burrito => {
    burrito ? res.status(200).json(burrito) : res.status(404).send('404 burrito not found!');
  });
});

// Create a new burrito
router.post('/', (req, res) => {
  const newBurrito = new Burrito(req.body);
  newBurrito.save((err, burrito) => {
    burrito ? res.status(201).json(burrito) : res.status(404).send(err);
  });
});

// Update an existing burrito
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Burrito.findByIdAndUpdate(id, { $set: update }, (burrito, err) => {
    burrito ? res.status(204).json(burrito) : res.status(404).send(err);
  });
});

// Delete an existing burrito
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  Burrito.findByIdAndRemove(id, (burrito, err) => {
    burrito ? res.status(200).json(burrito) : res.status(404).send(err);
  });
});

module.exports = router;
