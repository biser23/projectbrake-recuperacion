const express = require('express')
const router = express.Router()
const Task = require('../models/Task.js')
const TaskController = require('../controllers/TaskController')

router.post("/create", TaskController.create)
router.get('/', TaskController.getAll )
router.get('/ssr', TaskController.getAllSSR )
router.get('/id/:_id', TaskController.getByID)
router.delete('/id/:_id', TaskController.deleteTask)
router.put("/markascompleted/:_id", TaskController.updateCompleted)


module.exports = router


/*

router.put('/id/:_id', TaskController.updateByName) 
*/