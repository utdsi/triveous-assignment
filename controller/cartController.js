
const { CartModel } = require("../model/cartModel")

const AddToCart = async (req, res) => {
    try {

        const { productId, Userid } = req.body;

        const ExistCartProduct = await CartModel.find({ userId: Userid, productId, status: "Added" });
        if (ExistCartProduct.length) {
            return res.status(204).send({ "msg": "product already exist in your cart" })
        }
        const saveToCart = new CartModel({ productId, userId: Userid });
        await saveToCart.save();

        res.status(201).send({ msg: "product has been added in cart" });
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
};

const RemoveFromCart = async (req, res) => {
    try {

        const id = req.params.id;
        await CartModel.findByIdAndDelete({ _id: id });
        res.status(204).send({ msg: "product has been removed from cart" });
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
};

const UpdateCartProduct = async (req, res) => {
    try {

        const { id, quantity } = req.body;
        await CartModel.findByIdAndUpdate({ _id: id }, { quantity });
        res.status(204).send({ msg: "product has been updated in cart" });
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
};

const GetCartProducts = async (req, res) => {
    try {

        const { Userid } = req.body;

        const AllCartProducts = await CartModel.find({
            userId: Userid,
            status: "Added"
        })

        res.status(200).send(AllCartProducts);
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
};

module.exports = {
    GetCartProducts,
    UpdateCartProduct,
    RemoveFromCart,
    AddToCart,
};


