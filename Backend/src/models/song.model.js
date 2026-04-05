const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    url:{
        type:String,
        required:[true,"Please provide the url of the song"]
    },
    posterUrl:{
        type:String,
        required:[true,"Please provide the poster url of the song"] 
    },
    title:{
        type:String,
        requied:[true,"title is required"]
    }
});


const songModel = mongoose.model("song",songSchema);

module.exports = songModel; 