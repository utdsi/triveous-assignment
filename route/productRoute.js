
const { Router } = require("express")

const { addProducts, getProductsByCategory, getproductById, RemoveProducts, updateProducts } = require("../controller/productController")

const { authentication } = require("../middleware/authenticate")
const { authorize } = require("../middleware/authorize")

const productRouter = Router()

productRouter.post("/products", authentication, authorize(["seller"]), addProducts)
productRouter.get("/products", authentication, authorize(["seller", "customer", "admin"]), getProductsByCategory)
productRouter.get("/products", authentication, authorize(["seller", "customer", "admin"]), getproductById)
productRouter.delete("/products", authentication, authorize(["seller", "admin"]), RemoveProducts)
productRouter.patch("/products", authentication, authorize(["seller"]), updateProducts)

module.exports = { productRouter }





