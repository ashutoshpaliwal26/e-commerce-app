const mongoose = require('mongoose');
const product = require('./productmodel');

const topSelectionSchema = new mongoose.Schema({
    selection_type : String, 
    productImage : String, 
    btn : String
})

module.exports = topSelectionSchema;