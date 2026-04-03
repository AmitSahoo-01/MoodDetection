const express = require('express');
const router = express.Router();

const authContoller = require("../controllers/auth.controller");
const authUser = require("../middleware/auth.middleware");



// This the route for register a new user with (username, email, password) and it is a public route.
//  post("api/auth/register"); (public route);
router.post("/register",authContoller.registerController );

// This the route for login a user with (email, password) and it is a public route.
//  post("api/auth/login"); (public route);
router.post("/login",authContoller.loginController );

// This the route for get the details of the logged in user and it is a private route.
//  get("api/auth/get-me"); (private route);
router.get("/get-me",authUser,authContoller.getMeController );

//  This is the route for logout a user and it is a private route.
//  get("api/auth/logout"); (private route); 
router.get("/logout",authContoller.logoutController);

module.exports = router;