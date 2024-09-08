// controllers/boardController.js
const boardService = require('../services/boardService');

// Pobieranie tablic użytkownika
exports.getUserBoards = async (req, res) => {
    const userId = req.params.userId;
    const boards = await boardService.getUserBoards(userId);
    res.status(200).json(boards);
};

// Pobieranie pojedynczej tablicy
exports.getBoardById = async (req, res) => {
    const boardId = req.params.id;
    const board = await boardService.getBoardById(boardId);
    res.status(200).json(board);
};
