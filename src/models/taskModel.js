//Imports
const client =  require("./connection");


const getAllTasks = async (task) => {

    const { list_id } = task;

    const tasks =  await client.query('SELECT * FROM tasks WHERE list_id = $1 ORDER BY id ASC', [list_id]);
    
    return tasks.rows;
};

const createTask = async (task) => {

    const { title } = task;
    const { list_id } = task;

    const CreatedTask = await client.query ('INSERT INTO tasks (title, status, list_id) values ($1, $2, $3)', [title, 'Pendente', list_id]);

    return CreatedTask;

};

const updateTask = async (task) => {

    const { id } = task;
    const { title } = task;
    const { status } = task;

    const CreatedTask = await client.query('UPDATE tasks SET title = $1, status = $2 WHERE id = $3', [title, status, id]);

    return CreatedTask;

};

const deleteTask = async (task) => {

    const { id } = task;

    const Task = await client.query('DELETE FROM tasks WHERE id = $1', [id]);

    return Task;

}

const deleteAllTasksByListiD = async (list_id) => {

    const Tasks = await client.query('DELETE FROM tasks WHERE list_id = $1', [list_id]);

    return Tasks;


};

const deleteAllTasks = async () => {

    const Tasks = await client.query('DELETE FROM tasks');

    return Tasks;


};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTasksByListiD,
    deleteAllTasks
};