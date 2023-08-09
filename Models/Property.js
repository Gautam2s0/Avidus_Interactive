const mongoose = require('mongoose');

const propertySchema =mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
});

const PropertyModel= mongoose.model('Property', propertySchema);
module.exports = {
    PropertyModel

}
