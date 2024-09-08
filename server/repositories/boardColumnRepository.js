// repositories/boardColumnRepository.js
const BoardColumn = require('../models/boardColumnModel');

// Pobieranie wszystkich kolumn
exports.findAll = async () => {
    return await BoardColumn.findAll();
};

// Tworzenie nowej kolumny
exports.create = async (boardColumnData) => {
    return await BoardColumn.create(boardColumnData);
};

// Pobieranie kolumny po ID
exports.findById = async (boardColumnId) => {
    return await BoardColumn.findByPk(boardColumnId);
};

// Usuwanie kolumny
exports.delete = async (boardColumnId) => {
    const boardColumn = await BoardColumn.findByPk(boardColumnId);
    if (boardColumn) {
        await boardColumn.destroy();
    }
};
