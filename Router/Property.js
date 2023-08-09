const express = require('express');
const router = express.Router();
const Property = require('../Models/Property');

router.post('/create', async (req, res) => {
  try {
    const { title, description, location, price } = req.body;
    const property = new Property({ title, description, location, price });
    await property.save();
    res.status(201).json({ message: 'Property created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
