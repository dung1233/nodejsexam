const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductCode: {
        type: String,
        required: true
    },
    ProductName: {
        type: String,
        required: true
    },
    ProductDate: {
        type: Date,
        required: true
    },
    ProductOriginPrice: {
        type: Number,
        required: true,
        min: [0, 'ProductOriginPrice must be a positive number'] // Xác thực không âm
    },
    Quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity must be a positive number'] // Xác thực không âm
    },
    ProductStoreCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
