const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        trim: true
    },
    rating: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: Number,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true,
        min: 0
    },
    images: [{
        type: String
    }],
    description: String,
    reviews: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'Customer'
        },
        rating: {
            type: Number,
            default: 0
        },
        comment: String,
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }],
    categories: [Number]
});

const Product = mongoose.model('Product', schema);

module.exports = Product;