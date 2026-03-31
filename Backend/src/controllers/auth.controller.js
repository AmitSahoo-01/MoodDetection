const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");    

// This function is responsible for registering a new user by taking the username, email, and password from the request body, hashing the password, and saving the user to the database. It also checks for existing users with the same email or username to prevent duplicates.
//  register controller
async function registerController(req, res) {
    const { username, email, password } = req.body;

    const isAlreadyExist = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    });

    if(isAlreadyExist){
        return res.status(400).json({
            message:"User having this creadintals already exist."
        })
    };

    
    
}




// This function is responsible for logging in a user by taking the email and password from the request body, verifying the user's credentials, and generating a JSON Web Token (JWT) for authenticated access if the credentials are valid.
//  login controller
async function loginController(req, res) {

}


module.exports = {
    registerController,
    loginController
}
