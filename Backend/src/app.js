const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//  using cors middleware to allow cross-origin requests from the frontend.
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent with requests
}));


app.use(express.json());
app.use(cookieParser());

//  prefix for auth routes
const authRoutes = require("./routes/auth.routes");


//  using the prefix auth routes.
app.use("/api/auth", authRoutes );


module.exports = app;