const express = require('express');
const router = express.Router();
const songController = require('../controllers/song.controller');
const upload = require("../middleware/upload.middleware");

//  route to create a song
//  using multer middleware to handle file upload, the field name is "song"
//  the songController.createSong will handle the logic for creating a song
router.post("/",upload.single("song"),songController.uploadSong);

// route to get all songs
// the songController.getAllSongs will handle the logic for getting all songs
router.get("/",songController.getSong);

module.exports = router;