const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    nombre: String,
    category: String,
    size: String,
    price: Number
},{ timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product