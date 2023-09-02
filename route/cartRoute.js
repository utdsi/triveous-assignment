
const { Router } = require("express")

const { GetCartProducts, UpdateCartProduct, RemoveFromCart, AddToCart } = require("../controller/cartController")

const { authentication } = require("../middleware/authenticate")
const { authorize } = require("../middleware/authorize")

const cartRouter = Router()

cartRouter.get("/cart", authentication, authorize(["customer"]), GetCartProducts)
cartRouter.patch("/cart", authentication, authorize(["seller"]), UpdateCartProduct)
cartRouter.post("/cart", authentication, authorize(["seller", "customer", "admin"]), AddToCart)
cartRouter.delete("/cart", authentication, authorize(["seller"]), RemoveFromCart)


module.exports = { cartRouter }





