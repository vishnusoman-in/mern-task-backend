const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controller/taskcontroller")
const Task = require("../model/taskmodel")

const router = express.Router()

// route to create a task

//router.route("/").get(getTasks).post(createTask) // these are another method to simplify, called (refractor out routes)
//router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

// or

router.post("/", createTask)// route  to get or read task
router.get("/", getTasks)// route to get a single task
router.get("/:id", getTask)// route to delete a single task
router.delete("/:id", deleteTask)// route to update a single task
router.put("/:id", updateTask) // router.patch will help you upate only an element of json instead of all - it is like put



module.exports = router