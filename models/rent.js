var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var rentSchema = new Schema({
  // `title` is required and of type String

  item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  purchase: {
    Type: Boolean
    // required: true
  },

  comments: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Rent = mongoose.model("Rent", rentSchema);
console.log("tommy says", Rent);
// Export the Article model
module.exports = Rent;
