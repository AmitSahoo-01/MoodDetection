const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");


// This middleware function is responsible for authenticating incoming requests by verifying the presence and validity of a JSON Web Token (JWT) in the request cookies. If the token is valid, it allows the request to proceed; otherwise, it responds with an unauthorized/invalid token error.
async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized. No token provided.",
        });
    }

    const isTokenBlacklist = await blacklistModel.findOne({
        token
    });

    if(isTokenBlacklist){
        return res.status(200).json({
            message:"Token Invalid"
        })
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized. Invalid token.",
        });
    }
}

module.exports = authUser;