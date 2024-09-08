// services/userBoardService.js
const userBoardRepository = require('../repositories/userBoardRepository');

// Pobieranie wszystkich UserBoard
exports.getAllUserBoards = async () => {
    return await userBoardRepository.findAll();
};

// Tworzenie nowego UserBoard
exports.createUserBoard = async (userBoardData) => {
    return await userBoardRepository.create(userBoardData);
};

// Pobieranie UserBoard po ID
exports.getUserBoardById = async (userBoardId) => {
    return await userBoardRepository.findById(userBoardId);
};

// Usuwanie UserBoard
exports.deleteUserBoard = async (userBoardId) => {
    const userBoard = await userBoardRepository.findById(userBoardId);
    if (userBoard) {
        await userBoard.destroy();
    }
};
