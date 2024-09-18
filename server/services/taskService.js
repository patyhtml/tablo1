// services/taskService.js
const taskRepository = require('../repositories/taskRepository');

// Pobieranie wszystkich zadań
exports.getAllTasks = async () => {
    try {
        return await taskRepository.findAll();
    } catch (error) {
        throw new Error('Błąd podczas pobierania zadań: ' + error.message);
    }
};

// Tworzenie nowego zadania
exports.createTask = async (taskData) => {
    try {
        return await taskRepository.create(taskData);
    } catch (error) {
        throw new Error('Błąd podczas tworzenia zadania: ' + error.message);
    }
};

// Pobieranie zadania po ID
exports.getTaskById = async (taskId) => {
    try {
        return await taskRepository.findByPk(taskId);  // zmieniono na findByPk dla Sequelize
    } catch (error) {
        throw new Error('Błąd podczas pobierania zadania: ' + error.message);
    }
};

// Aktualizacja zadania
exports.updateTask = async (taskId, taskData) => {
    try {
        const task = await taskRepository.findByPk(taskId);
        if (task) {
            return await task.update(taskData);  // Sprawdź, czy metoda update jest dostępna
        } else {
            throw new Error('Zadanie o podanym ID nie istnieje');
        }
    } catch (error) {
        throw new Error('Błąd podczas aktualizacji zadania: ' + error.message);
    }
};

// Usuwanie zadania
exports.deleteTask = async (taskId) => {
    try {
        const task = await taskRepository.findByPk(taskId);
        if (task) {
            await task.destroy();
            return { message: 'Zadanie zostało pomyślnie usunięte' };
        } else {
            throw new Error('Zadanie o podanym ID nie istnieje');
        }
    } catch (error) {
        throw new Error('Błąd podczas usuwania zadania: ' + error.message);
    }
};
