var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var rentalSchema = new Schema({
  // `title` is required and of type String
  user: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Rental = mongoose.model("Rental", rentalSchema);
console.log("tommy says", Rental);
// Export the Article model
module.exports = Rental;
