const User = require('../models/userModel');

// Pobieranie wszystkich użytkowników
exports.findAll = async () => {
    return await User.findAll();
};

// Tworzenie nowego użytkownika
exports.create = async (userData) => {
    return await User.create(userData);
};

// Pobieranie użytkownika po ID
exports.findById = async (userId) => {
    return await User.findByPk(userId);
};

// Pobieranie użytkownika po emailu
exports.findOne = async (criteria) => {
    return await User.findOne(criteria);
};

// Usuwanie użytkownika
exports.destroy = async (userId) => {
    const user = await User.findByPk(userId);
    if (user) {
        await user.destroy();
    }
};
