// controllers/taskController.js
const taskService = require('../services/taskService');
const Task = require('../models/taskModel'); // Import modelu Task

// Pobieranie wszystkich zadań
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Błąd pobierania zadań:", error);
        res.status(500).json({ message: 'Błąd serwera' });
    }
};

// Tworzenie nowego zadania
exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Błąd tworzenia zadania:", error);

        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: error.message, errors: error.errors });
        }

        res.status(500).json({ message: error.message || "Błąd tworzenia zadania" });
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
            res.status(404).json({ message: 'Zadanie nie znalezione' });
        }
    } catch (error) {
        console.error("Błąd pobierania zadania:", error);
        res.status(500).json({ message: 'Błąd serwera' });
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
            res.status(404).json({ message: 'Zadanie nie znalezione' });
        }
    } catch (error) {
        console.error("Błąd aktualizacji zadania:", error);
        res.status(500).json({ message: 'Błąd aktualizacji zadania' });
    }
};

// Usuwanie zadania
exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        await taskService.deleteTask(taskId);
        res.status(204).send();  // No Content
    } catch (error) {
        console.error("Błąd usuwania zadania:", error);
        res.status(500).json({ message: 'Błąd serwera' });
    }
};
