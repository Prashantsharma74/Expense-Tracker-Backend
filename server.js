const express = require("express")
const cors = require("cors")
const { readdirSync } = require("fs")
const app = express()
const color = require("colors")
const { connectDB } = require("./config/db")
const { errorHandler } = require("./middleware/errorHandler")
require("dotenv").config()
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

connectDB()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use("/transaction", require("./router/transactionRouter"))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`PORT is running on ${PORT}`.bgMagenta);
})