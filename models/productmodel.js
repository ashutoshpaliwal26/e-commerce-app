const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image : String,
    title : String, 
    rating : {
        avg : Number,
        figure : Number
    },
    review : Number,
    price : {
        actualPrice : Number, 
        sellingPrice : Number
    },
    offers : [String],
    brand : String,
    delivery : String,
    color : [String],
    Highlight : [String],
    seller : String,
    description : String,
    specification : {
        modelName : String,
        modelNumber : String,
        modelColor : String
    }
})

const product = new mongoose.model('product', productSchema);

module.exports = product;