var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var itemSchema = new Schema({
  // `title` is required and of type String

  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    Type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Item = mongoose.model("Item", itemSchema);
console.log("tommy says", Item);
// Export the Article model
module.exports = Item;
