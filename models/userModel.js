const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: String,
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [
            input => input.length >= 6, "Password must be at least 6 chars"
        ]
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Must be a valid email"],
        unique: true,
        required: true,
        trim: true
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

const User = mongoose.model("User", UserSchema);

module.exports = User;