const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    brand:{
        type:String,
        enum:["Nike","Puma","Adidas"],
        required:true
    },

    rating:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

module.exports = mongoose.model("Feedback",feedbackSchema);