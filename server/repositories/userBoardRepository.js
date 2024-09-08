// repositories/userBoardRepository.js
const UserBoard = require('../models/userBoardModel');

// Pobieranie wszystkich UserBoard
exports.findAll = async () => {
    return await UserBoard.findAll();
};

// Tworzenie nowego UserBoard
exports.create = async (userBoardData) => {
    return await UserBoard.create(userBoardData);
};

// Pobieranie UserBoard po ID
exports.findById = async (userBoardId) => {
    return await UserBoard.findByPk(userBoardId);
};
