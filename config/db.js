const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected`.rainbow);
    } catch (error) {
        console.log(`Database not Connected`.bgRed);
    }
}

module.exports = { connectDB }