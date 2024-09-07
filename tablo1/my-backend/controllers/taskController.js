// controllers/taskController.js
const taskService = require('../services/taskService');

// Pobieranie wszystkich zadań
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Tworzenie nowego zadania
exports.createTask = async (req, res) => {
    const taskData = req.body;
    try {
        const newTask = await taskService.createTask(taskData);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).send('Błąd tworzenia zadania');
    }
};

// Pobieranie zadania po ID
exports.getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await taskService.getTaskById(taskId);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).send('Zadanie nie znalezione');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Aktualizacja zadania
exports.updateTask = async (req, res) => {
    const taskId = req.params.id;
    const taskData = req.body;
    try {
        const updatedTask = await taskService.updateTask(taskId, taskData);
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).send('Zadanie nie znalezione');
        }
    } catch (error) {
        res.status(500).send('Błąd aktualizacji zadania');
    }
};

// Usuwanie zadania
exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        await taskService.deleteTask(taskId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};
