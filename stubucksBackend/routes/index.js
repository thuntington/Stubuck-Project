const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/orderGen');

router.post('/createCoffee', (req, res, next) => {
  console.log(req.body.coffee);
  console.log(req.body.sugar);
  console.log(req.body.flavour);
const newOrder = new Order();

  newOrder.coffee = req.body.coffee;
  newOrder.sugar = req.body.sugar;
  newOrder.flavour = req.body.flavour;
  newOrder.date = Date();

newOrder.save();

  res.redirect('/orders');
})

mongoose.connect('mongodb://localhost:27017/createCoffee', {
    useNewUrlParser: true
});

let dataBase = mongoose.connection;

dataBase.on('open', () => {
  console.log('Mongoose working')
}) //Checks if database is working - good practice to keep

module.exports = router;


