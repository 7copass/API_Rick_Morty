const Tasks = require('../models/tasks');


/* const ToDoList = [
  {
    id: 1,
    nome: 'Estudar React',
    prioridade: 'Média',
  },
  {
    id: 2,
    nome: 'Fazer Projetos Blue',
    prioridade: 'Alta',
  },
  {
    id: 3,
    nome: 'Terminar módulos Bootcamp DIO ',
    prioridade: 'Baixa',
  },
  {
    id: 4,
    nome: 'Fazer Projetos pessoais',
    prioridade: 'Média',
  },
];
 */
const FindAllTaskService = async () => {
  const allTasks = await Tasks.find();
  return allTasks;
};

const FindByIdTaskService = async (id) => {
  const oneTask = await Tasks.findById(id)
  return oneTask;
};

const createTaskService = async (newTask) => {
  const createdTask = await Tasks.create(newTask);
  return createdTask;
};

const updateTaskService = async (id, taskedited) => {
  const updateTask = await Tasks.findByIdAndUpdate(id, taskedited)
  return updateTask
};

const deleteTaskService = async (id) => {
  return await Tasks.findByIdAndDelete(id)
}
module.exports = {
  FindAllTaskService,
  FindByIdTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
