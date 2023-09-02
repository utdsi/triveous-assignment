
const { Router } = require("express")

const { Orderplaced, GetAllOrderHistory, GetparticularUserHistory } = require("../controller/orderController")

const { authentication } = require("../middleware/authenticate")
const { authorize } = require("../middleware/authorize")



const orderRouter = Router()

orderRouter.post("/order", authentication, authorize(["customer"]), Orderplaced)
orderRouter.get("/order", authentication, authorize(["customer"]), GetAllOrderHistory)
orderRouter.get("/orderuser", authentication, authorize(["customer"]), GetparticularUserHistory)


module.exports = { orderRouter }
