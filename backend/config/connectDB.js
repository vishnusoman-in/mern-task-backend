const mongoose = require("mongoose")

const connectDB = async () => {  // asyncronus arrow function
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI) // it point to .env
        console.log (`mongodb connected: `)
    }
    catch (error) {

        console.log(error)
        process.exit(1)

    }
}
module.exports = connectDB