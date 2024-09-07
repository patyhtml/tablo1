// services/boardColumnService.js
const boardColumnRepository = require('../repositories/boardColumnRepository');

// Pobieranie wszystkich kolumn
exports.getAllBoardColumns = async () => {
    return await boardColumnRepository.findAll();
};

// Tworzenie nowej kolumny
exports.createBoardColumn = async (boardColumnData) => {
    return await boardColumnRepository.create(boardColumnData);
};

// Pobieranie kolumny po ID
exports.getBoardColumnById = async (boardColumnId) => {
    return await boardColumnRepository.findById(boardColumnId);
};

// Usuwanie kolumny
exports.deleteBoardColumn = async (boardColumnId) => {
    await boardColumnRepository.delete(boardColumnId);
};
