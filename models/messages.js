var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var messageSchema = new Schema({
    // `title` is required and of type String



    comments: {
        type: String,
        required: true
    }

});

// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model("Message", messageSchema);
console.log("tommy says", Message);
// Export the Article model
module.exports = Message;
