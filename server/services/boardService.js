// services/boardService.js
const boardRepository = require('../repositories/boardRepository');

exports.getUserBoards = async (userId) => {
    return await boardRepository.findByUserId(userId);
};

exports.getBoardById = async (boardId) => {
    return await boardRepository.findById(boardId);
};