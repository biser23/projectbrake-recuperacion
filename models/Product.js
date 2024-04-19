const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    category: String,
    size: String,
    price: Number
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;