
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        refs: 'carts',
        required: true
    }
})

const OrderModel = mongoose.model('orders', OrderSchema);

module.exports = {
    OrderModel
}