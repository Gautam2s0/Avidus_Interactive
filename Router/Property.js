const express = require('express');
const propertyRouter = express.Router();
const {PropertyModel}= require('../Models/Property');
const {UserID} =require("../middleWare/userID");
const {BookingModel} =require("../Models/Booking")

propertyRouter.post('/create', async (req, res) => {
    const { title, description, location, price ,image} = req.body;
   
  try {
   
    const property = new PropertyModel({ title, description, location, price ,image});
    await property.save();
    res.status(200).send({ message: "Property created successfully" });
  } catch (error) {
    res.status(500).send({ error: "An error occurred", });
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

propertyRouter.post('/booking',UserID, async (req, res) => {
   
  try {
    const book = new BookingModel(req.body)
    await book.save()
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

propertyRouter.get('/booking',UserID, async (req, res) => {
   const id=req.body.userID
  try {
    const cart=await BookingModel.find({userID:id})
    .populate("productId")
    .select("_id userId productId quantity")
    cart.length > 0
      ? res.status(200).send(cart)
      : res.status(200).send("No items in your cart");
  
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

module.exports = {
    propertyRouter
};
