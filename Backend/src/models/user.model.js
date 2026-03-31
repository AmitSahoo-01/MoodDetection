const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required to create an account"],
        unique: [true, "Username already exists, please choose another one"],
    },
    email: {
        type: String,
        required: [true, "Email is required to create an account"],
        unique: [true, "Email already exists, please choose another one"],  
    },
    password: {
        type: String,
        required: [true, "Password is required to create an account"],
    },
})


const userModel = mongoose.model("user", userSchema);

module.exports = userModel;