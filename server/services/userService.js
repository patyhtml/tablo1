// services/userService.js
const userRepository = require('../repositories/userRepository');

// Pobieranie wszystkich użytkowników
exports.getAllUsers = async () => {
    return await userRepository.findAll();
};

// Tworzenie nowego użytkownika
exports.createUser = async (userData) => {
    return await userRepository.create(userData);
};

// Pobieranie użytkownika po ID
exports.getUserById = async (userId) => {
    return await userRepository.findById(userId);
};

// Aktualizacja użytkownika
exports.updateUser = async (userId, userData) => {
    const user = await userRepository.findById(userId);
    if (user) {
        return await user.update(userData);
    }
    return null;
};

// Usuwanie użytkownika
exports.deleteUser = async (userId) => {
    const user = await userRepository.findById(userId);
    if (user) {
        await user.destroy();
    }
};
