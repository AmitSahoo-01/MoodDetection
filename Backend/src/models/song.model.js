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
    },
    mood:{
        type:String,
        enum:{
            values:["happy","sad","surprise","neutral"],
            message:"Please provide a valid mood"
        },
        required:[true,"mood is required"]
    }
});


const songModel = mongoose.model("song",songSchema);

module.exports = songModel; 