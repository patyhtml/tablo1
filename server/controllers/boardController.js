boardController: // controllers/boardController.js
const boardService = require('../services/boardService');


// Pobieranie tablic użytkownika
exports.getUserBoards = async (req, res) => {
    try {
        const userId = req.user.id;  // Załóżmy, że userId jest dostępne z tokena lub sesji
        const boards = await boardService.getUserBoards(userId);
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Pobieranie pojedynczej tablicy
exports.getBoardById = async (req, res) => {
    const boardId = req.params.boardId;  // Zmienione na req.params.boardId
    try {
        const board = await boardService.getBoardById(boardId);
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
exports.createBoard = async (req, res) => {
    const boardData = req.body;
    try {
        const newBoard = await boardService.createBoard(boardData);
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(500).send('Błąd tworzenia tablicy');
    }
};

// Aktualizacja tablicy
exports.updateBoard = async (req, res) => {
    const boardId = req.params.boardId;  // Zmienione na req.params.boardId
    const boardData = req.body;
    try {
        const updatedBoard = await boardService.updateBoard(boardId, boardData);
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
exports.deleteBoard = async (req, res) => {
    const boardId = req.params.boardId;  // Zmienione na req.params.boardId
    try {
        await boardService.deleteBoard(boardId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};