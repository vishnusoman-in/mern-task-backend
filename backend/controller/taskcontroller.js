const Task = require("../model/taskmodel")

const createTask = async (req, res) => {

    try{
        const task = await Task.create(req.body) // saving data to mongodb
        res.status(200).json(task) // status(200) is return if there is no error from postman
     }
     catch(error){
        res.status(500).json({msg: error.message})
     }

}

const getTasks = async (req, res) => {

    try{
        const tasks = await Task.find() // get al data from mongodb
        res.status(200).json(tasks)
       }catch(error){
           res.status(500).json({msg: error.message})
       }
}

const getTask = async (req, res) => {
    //console.log(req.params) // params is the /:id from url
    //res.send("get a single task")
    try{
        const {id} = req.params
        const task = await Task.findById(id) // get single data from mongodb based in id passed through params in url
        if (!task){ return res.status(404).json(`No task with id : ${id}`)} // if you can't find an id or request in database, res 404

        res.status(200).json(task)

       }catch(error){
           res.status(500).json({msg: error.message})
       }

}

const deleteTask = async (req, res) => {
    try{
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id) // delete single data from mongodb based in id passed through params in url
        if (!task){ return res.status(404).json(`No task with id : ${id}`)} // if you can't find an id or request in database, res 404

        res.status(200).send("Task deleted")

       }catch(error){
           res.status(500).json({msg: error.message})
       }
}

const updateTask = async (req, res) => {
    try{
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(  // update single data from mongodb based in id passed through params in url
              {_id : id}, req.body, {new: true, runValidators: true,} // This is a format to update a task
        ) 
        if (!task){ return res.status(404).json(`No task with id : ${id}`)} // if you can't find an id or request in database, res 404

        res.status(200).json(task)

       }catch(error){
           res.status(500).json({msg: error.message})
       }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}