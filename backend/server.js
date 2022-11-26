const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const cors = require("cors")
//const bodyParser=require("body-parser");
const Task = require("./model/taskmodel")
const taskroutes = require("./routes/taskRoutes")

const app = express()


app.use(express.json()) // to get json from client
app.use(express.urlencoded({extended: false})) // to get form from client
app.use(cors({ // help the frontend and backend communicate - (leave it blank in development mode)
    origin: ["http://localhost:3000", "https://merniomo.onrender.com"],
}))

app.use("/api/tasks", taskroutes) // all tasks routes get acess by server


connectDB()


const PORT = process.env.PORT || 5000

// setting to start server only after we connect to mongodb

const startServer = async () => {
    try{
        await connectDB()
        //port listening of server
        app.listen (PORT,() => {
            console.log(`server runing on port : ${PORT}`)
        })

    }
    catch(error) {
           console.log(error)
           //process.exit(1)
    }
}


startServer()

//middleware - functions that have acess to request and response object and next function in the application cycle
//const logger = (req, res, next) => { // this logger is a middleware example (manual one)
//    console.log("Middlesware run")
//    console.log(req.method)
//    next() // it intiate async , which is next to logger
//}
// express middlewares

//app.use(bodyParser.json());
