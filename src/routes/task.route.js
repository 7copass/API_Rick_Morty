const route = require('express').Router();
const taskController = require('../controllers/task.controller');
const { validId, validObjectBody } = require('../middlewares/task.middleware')

route.get('/alltasks', taskController.FindAllTaskController);
route.get('/task/:id', validId, taskController.FindByIdTaskController);
route.post('/create', validObjectBody, taskController.createTaskController);
route.put('/update/:id', validId, validObjectBody, taskController.updateTaskController);
route.delete('/delete/:id', validId, taskController.deleteTaskController);

module.exports = route;
