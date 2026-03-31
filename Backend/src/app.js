const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//  prefix for auth routes
const authRoutes = require("./routes/auth.routes");


//  using the prefix auth routes.
app.use("/api/auth", authRoutes );


module.exports = app;