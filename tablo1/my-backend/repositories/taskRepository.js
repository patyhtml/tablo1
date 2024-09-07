// repositories/taskRepository.js
const Task = require('../models/taskModel');

// Pobieranie wszystkich zadań
exports.findAll = async () => {
    return await Task.findAll();
};

// Tworzenie zadania
exports.create = async (taskData) => {
    return await Task.create(taskData);
};

// Pobieranie zadania po ID
exports.findById = async (taskId) => {
    return await Task.findByPk(taskId);
};
