const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productId: {
        type: String,
        ref: "products",
        required: true,
    },
    userId: {
        type: String,
        ref: "users",
        required: true,
    },
    status: {
        type: String,
        default: "Added"
    },
    isRemoved: {
        type: Boolean,
        default: false
    },
    quantity: {
        type: Number,
        default: 1
    }
});

const CartModel = mongoose.model("carts", cartSchema);

module.exports = {
    CartModel
}