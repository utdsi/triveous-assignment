const { OrderModel } = require("../model/orderModel")

const { CartModel } = require("../model/cartModel")


const Orderplaced = async (req, res) => {
    try {
        const { userId } = req.body;

        await CartModel.updateMany({ userId }, { $set: { "status": "placed" } })
        const OrderPlaced = new OrderModel({ userId });
        await OrderPlaced.save()
        res.status(201).send({ "msg": "order has been placed" })
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const GetAllOrderHistory = async (req, res) => {
    try {
        const AllOrderProducts = await CartModel.find({
            status: "placed"
        })

        res.status(200).send(AllOrderProducts)
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}


const GetparticularUserHistory = async (req, res) => {
    try {
        const { Userid } = req.body;
        const UserOrderHistory = await CartModel.find({
            userId: Userid,
            status: "placed"
        })
        
        if (!UserOrderHistory.length) {
            return res.status(404).send({ "msg": "Did not placed any order" })
        }


        res.status(200).send(UserOrderHistory)
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

module.exports = {
    Orderplaced, GetAllOrderHistory, GetparticularUserHistory
}