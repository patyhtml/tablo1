// repositories/pointRepository.js
const Point = require('../models/pointModel');

// Pobieranie wszystkich punktów
exports.findAll = async () => {
    return await Point.findAll();
};

// Tworzenie nowego punktu
exports.create = async (pointData) => {
    return await Point.create(pointData);
};

// Pobieranie punktu po ID
exports.findById = async (pointId) => {
    return await Point.findByPk(pointId);
};
s