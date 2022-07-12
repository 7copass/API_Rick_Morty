const taskService = require('../services/task.service');

const FindAllTaskController = async (req, res) => {
  const ToDoList = await taskService.FindAllTaskService();
  if (ToDoList.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada ' });
  }
  res.send(ToDoList);
};

const FindByIdTaskController = async (req, res) => {
  const idParam = req.params.id;

  const chosenTask = await taskService.FindByIdTaskService(idParam);
  if (!chosenTask) {
    return res.status(400).send({ message: 'Task não existe' });
  }
  res.send(chosenTask);
};

const createTaskController = async (req, res) => {
  const Task = req.body;

  const newTask = await taskService.createTaskService(Task);
  res.status(201).send(newTask);
};

const updateTaskController = async (req, res) => {
  const idparam = req.params.id;
  const taskedit = req.body;
  const updateTask = await taskService.updateTaskService(idparam, taskedit);
  res.send(updateTask);
};

const deleteTaskController = async (req, res) => {
  const idParam = req.params.id;
  const chosenTask = await taskService.deleteTaskService(idParam);

  if (!chosenTask) {
    return res.status(400).send({ message: 'Task não Encontrada' });
  }
  res.send({ message: 'Task deleta com Sucesso' });
};

module.exports = {
  FindAllTaskController,
  FindByIdTaskController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
