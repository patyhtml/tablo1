// repositories/boardRepository.js
const Board = require('../models/boardModel');

// Znajdowanie tablic według `userId`
exports.findByUserId = async (userId) => {
    return await Board.findAll({
        where: { userId }
    });
};

// Znajdowanie tablicy według `id`
exports.findById = async (boardId) => {
    return await Board.findByPk(boardId);
};
