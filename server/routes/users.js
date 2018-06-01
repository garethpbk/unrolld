const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Find all users
router.get('/', (req, res) => {
  User.find().then(users => {
    res.status(200).json(users);
  });
});

// Find one user by ID
router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id).then((err, user) => {
    user ? res.status(200).json(user) : res.status(404).send('404 user not found!');
  });
});

// Create a new user
router.post('/', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    user ? res.status(201).json(user) : res.tsatus(404).send(err);
  });
});

// Update an existing user
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let update = req.body;
  User.findByIdAndUpdate(id, { $set: update }, (err, user) => {
    user ? res.status(204).json(user) : res.status(404).send(err);
  });
});

// Delete an existing user
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(id, (err, user) => {
    user ? res.status(200).json(user) : res.status(404).send(err);
  });
});

module.exports = router;
