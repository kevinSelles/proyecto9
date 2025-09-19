const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: {type: String, required: true},
  img: {type: String, required: true}
}, {
  timestamps: true,
  collection: "shoes"
});

const Shoe = mongoose.model("shoes", shoeSchema, "shoes");
module.exports = Shoe;