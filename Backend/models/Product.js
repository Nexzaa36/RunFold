const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    brand:{
        type:String,
        required:true,
    },

    section: {
    type: String,
    enum: ["discover", "nike", "puma", "adidas"],
    required: true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        default:0
    },

    image:{
        type:String,
        required:true
    },

    category:{
        type:String,
        default:"Shoes"
    },

},
{
    timestamps:true
});

module.exports = mongoose.model("Product",productSchema);
