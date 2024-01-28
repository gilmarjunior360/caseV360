//Imports
const client =  require("./connection");
const taskModel = require('./taskModel')

const getAllLists = async () => {
    
    const lists = await client.query('SELECT * FROM lists');

    return lists.rows;

};


const createList = async (list) => {

    const { title } = list;

    const createdList = await client.query('INSERT INTO lists (title) values ($1)', [title]);

    return createdList;

};

const updateList = async (list) => {

    const { id } = list;
    const { title } = list;

    const updatedList = await client.query('UPDATE lists SET title = $1 WHERE id = $2', [title, id]);

    return updatedList;

};

const deleteList = async (list) => {

    const { id } = list;

    await taskModel.deleteAllTasksByListiD(id);

    const deletedList = await client.query('DELETE from lists where id = $1', [id]);

    return deletedList;

};

const deleteAllList = async () => {

    await taskModel.deleteAllTasks();

    const Lists = await client.query('DELETE from lists');

    return Lists;

};


module.exports = {
    getAllLists,
    createList,
    updateList,
    deleteList,
    deleteAllList
};