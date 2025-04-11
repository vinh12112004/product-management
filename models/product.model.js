const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title : String,
        description : String,
        price : Number,
        discountPercentage : Number,
        stock : Number,
        thumnail : String,
        status : String,
        postion : Number,
        deleted : Boolean
    }
);

const  Product = mongoose.model('Product', productSchema, "products");

module.exports = Product;