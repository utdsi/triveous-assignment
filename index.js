const express = require("express")

const app = express()
app.use(express.json())
require('dotenv').config()

const { connection } = require("./configuration/db")
const { userRouter } = require("./route/userRoute")
const { productRouter } = require("./route/productRoute")
const { cartRouter } = require("./route/cartRoute")
const { orderRouter } = require("./route/orderRoute")



app.get("/", (req, res) => {
    res.send("welcome to triveous ecommerce backend")
})

app.use("/", userRouter)
app.use("/", productRouter)
app.use("/", cartRouter)
app.use("/", orderRouter)




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connecion to db established")
    } catch (error) {

        console.log({ "error in connecting db": error })

    }

    console.log(`listening on port ${process.env.port}`)
})