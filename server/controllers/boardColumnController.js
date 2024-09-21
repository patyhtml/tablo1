// controllers/boardColumnController.js
const boardColumnService = require('../services/boardColumnService');

exports.getBoardColumns = async (req, res) => {
    // const boardId = req.params.boardId;  // Zmienione na req.params.boardId
    try {
        const boardColumns = await boardColumnService.getAllBoardColumns();
        if (boardColumns) {
            res.status(200).json(boardColumns);
        } else {
            res.status(404).send('Tablica nie znaleziona');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
// Pobieranie pojedynczej tablicy
exports.getBoardColumnById = async (req, res) => {
    const boardColumnId = req.params.boardColumnId;  // Zmienione na req.params.boardId
    try {
        const board = await boardColumnService.getBoardById(boardColumnId);
        if (board) {
            res.status(200).json(board);
        } else {
            res.status(404).send('Tablica nie znaleziona');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Tworzenie nowej tablicy
exports.createBoardColumn = async (req, res) => {
    const boardData = req.body;
    try {
        const newBoard = await boardColumnService.createBoard(boardData);
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(500).send('Błąd tworzenia tablicy');
    }
};

// Aktualizacja tablicy
exports.updateBoardColumn = async (req, res) => {
    const boardId = req.params.boardId;  // Zmienione na req.params.boardId
    const boardData = req.body;
    try {
        const updatedBoard = await boardColumnService.updateBoard(boardId, boardData);
        if (updatedBoard) {
            res.status(200).json(updatedBoard);
        } else {
            res.status(404).send('Tablica nie znaleziona');
        }
    } catch (error) {
        res.status(500).send('Błąd aktualizacji tablicy');
    }
};

// Usuwanie tablicy
exports.deleteBoardColumn = async (req, res) => {
    const boardId = req.params.boardId;  // Zmienione na req.params.boardId
    try {
        await boardColumnService.deleteBoard(boardId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};