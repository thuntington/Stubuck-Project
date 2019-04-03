const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const Order = require('../models/orderGen')

router.post('/createCoffee', (req, res, next) => {
  console.log(req.body.coffee);
  console.log(req.body.sugar);
  console.log(req.body.flavour);
  res.redirect('/orders');
})

// mongoose.connect('mongodb://localhost:27017/createCoffee', {
//     useNewUrlParser: true
// });

// let dataBase = mongoose.connection;

// dataBase.on('open', () => {
//   console.log('Mongoose working')
// })


// order.save();


module.exports = router;


