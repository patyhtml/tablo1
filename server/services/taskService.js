// services/taskService.js
const taskRepository = require('../repositories/taskRepository');

// Pobieranie wszystkich zadań
exports.getAllTasks = async () => {
    return await taskRepository.findAll();
};

// Tworzenie nowego zadania
exports.createTask = async (taskData) => {
    return await taskRepository.create(taskData);
};

// Pobieranie zadania po ID
exports.getTaskById = async (taskId) => {
    return await taskRepository.findById(taskId);
};

// Aktualizacja zadania
exports.updateTask = async (taskId, taskData) => {
    const task = await taskRepository.findById(taskId);
    if (task) {
        return await task.update(taskData);
    }
    return null;
};

// Usuwanie zadania
exports.deleteTask = async (taskId) => {
    const task = await taskRepository.findById(taskId);
    if (task) {
        await task.destroy();
    }
};
