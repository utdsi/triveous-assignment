const { Router } = require("express")

const userRouter = Router()

const { logIn, signUp, deleteUser, logout } = require("../controller/userController")
const { authentication } = require("../middleware/authenticate")
const { authorize } = require("../middleware/authorize")

userRouter.post("/signUp", signUp)
userRouter.post("/login", logIn)
userRouter.delete("/user", authentication, authorize(["admin"]), deleteUser)
userRouter.post("/logout", authentication, logout)


module.exports = {
    userRouter
}