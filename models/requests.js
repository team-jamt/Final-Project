const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const requestSchema = new Schema({
  // `title` is required and of type String
  user: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
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
const Request = mongoose.model("Request", requestSchema);
console.log("tommy says", Request);
// Export the Article model
module.exports = Request;
