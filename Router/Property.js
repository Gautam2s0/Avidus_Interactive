const express = require('express');
const propertyRouter = express.Router();
const {PropertyModel}= require('../Models/Property');

propertyRouter.post('/create', async (req, res) => {
    const { title, description, location, price } = req.body;
  try {
    
    const property = new PropertyModel({ title, description, location, price });
    await property.save();
    res.status(200).send({ message: "Property created successfully" });
  } catch (error) {
    res.status(500).send({ error: "An error occurred",err });
  }
});

propertyRouter.get('/list', async (req, res) => {
  try {
    const properties = await PropertyModel.find();
    res.status(200).send(properties);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

module.exports = {
    propertyRouter
};
