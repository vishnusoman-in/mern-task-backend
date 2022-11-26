const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
{ //Schema - how data is going to organised

    name: {
        type: String,
        required: [true, "please add a task"]
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
},

{
    timestamps: true // add a time stamp to all data request
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task