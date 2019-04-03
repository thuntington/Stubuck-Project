const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema ({
    coffee: {type: String, required: true},
    sugar : {type: Number, required: true},
    flavour: {type: String, required: true}
});

module.exports = mongoose.model('Order', order);
