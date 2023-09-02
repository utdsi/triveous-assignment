const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["seller", "customer", "admin"], default: "customer"
    }
})

const UserModel = mongoose.model("user", userSchema)
module.exports = {
    UserModel
}