//Imports
const taskModel = require('../models/taskModel');

const getAllTasks = async (request, response) => {
 
    const tasks = await taskModel.getAllTasks(request.params);

    return response.status(200).json(tasks);

};

const createTask = async (request, response) => {

    const task = await taskModel.createTask(request.body);

    return response.status(201).json(task);

};

const updateTask = async (request, response) => {

    const task = await taskModel.updateTask(request.body);

    return  response.status(200).json({message: 'Tarefa Atualizada com sucesso!'});

};

const deleteTask = async (request, response) => {

    const task = await taskModel.deleteTask(request.params);

    return response.status(200).json({message: 'Tarefa deletada com sucesso'});

};

const deleteAllTasksByListiD = async (request,response) => {

    const Tasks = await taskModel.deleteAllTasksByListiD(request.params.list_id);

    return response.status(200).json({message: 'Tarefas deletadas com sucesso'});


};

const deleteAllTasks = async (_request, response) => {

    const Tasks = await taskModel.deleteAllTasks();

    return response.status(200).json({message: 'Tarefas deletadas com sucesso'});


};




module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTasksByListiD,
    deleteAllTasks
};