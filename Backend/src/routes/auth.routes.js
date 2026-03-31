const express = require('express');
const router = express.Router();

const authContoller = require("../controllers/auth.controller");

// This the route for register a new user with (username, email, password) and it is a public route.
//  post("api/auth/register"); (public route);
router.post("/register",authContoller.registerController );

// This the route for login a user with (email, password) and it is a public route.
//  post("api/auth/login"); (public route);
router.post("/login",authContoller.loginController );


module.exports = router;