var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var RentalSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  description: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Rental = mongoose.model("Rental", RentalSchema);
console.log("tommy says", Rental);
// Export the Article model
module.exports = Rental;
