//Imports
const express =  require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');
const listController = require('./controllers/listController');
const Middlewares = require('./middlewares/Middlewares');

//Tasks Endpoints
router.get('/tasks/:list_id',taskController.getAllTasks);
router.post('/tasks', Middlewares.validateTitle, Middlewares.validateListId, taskController.createTask);
router.put('/tasks', Middlewares.validateId, Middlewares.validateStatus , Middlewares.validateTitle ,taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.delete('/tasks/list/:list_id', taskController.deleteAllTasksByListiD);

//Lists Endpoints
router.get('/lists', listController.getAllLists);
router.post('/lists', Middlewares.validateTitle, listController.createList);
router.put('/lists', Middlewares.validateId, Middlewares.validateTitle, listController.updateList);
router.delete('/lists/:id', listController.deleteList);
router.delete('/lists', listController.deleteAllList);

module.exports = router; 