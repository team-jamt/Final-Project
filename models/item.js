const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new ItemSchema Object

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  rented: {
    type: Boolean,
    required: false,
    default: false
  },
  owner: {
    type: String,
    required: false
  },
  user: {
    type: String,
    required: true
  }
});

const Item = mongoose.model("Items", itemSchema);
console.log("Here's the item: ", Item);
module.exports = Item;
