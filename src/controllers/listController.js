//Imports
const listModel = require('../models/listModel');

const getAllLists = async (_request, response) => {

    const lists = await listModel.getAllLists();

    return response.status(200).json(lists);

};

const createList = async (request, response) => {

    const list = await listModel.createList(request.body);

    return response.status(201).json(list);

};

const updateList = async (request, response) => {

    const list = await listModel.updateList(request.body);

    return response.status(200).json(list);

};

const deleteList = async (request, response) => {

    const list = await listModel.deleteList(request.params);

    return response.status(200).json(list);

}

const deleteAllList = async (_request,response) => {

    const list = await listModel.deleteAllList();

    return response.status(200).json(list);

}

module.exports = {
    getAllLists,
    createList,
    updateList,
    deleteList,
    deleteAllList
};