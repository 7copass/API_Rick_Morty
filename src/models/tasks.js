const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    prioridade: { type: String, required: true },
});

const Tasks = mongoose.model('tasks', TasksSchema,);

module.exports = Tasks;