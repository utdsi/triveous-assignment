const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
        unique: true
    }
})

const ProductModel = mongoose.model("products", productSchema)
module.exports = {
    ProductModel
}