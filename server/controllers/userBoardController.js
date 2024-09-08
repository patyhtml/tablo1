// controllers/userBoardController.js
const userBoardService = require('../services/userBoardService');

// Pobieranie wszystkich UserBoard
exports.getAllUserBoards = async (req, res) => {
    try {
        const userBoards = await userBoardService.getAllUserBoards();
        res.status(200).json(userBoards);
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Tworzenie nowego UserBoard
exports.createUserBoard = async (req, res) => {
    const userBoardData = req.body;
    try {
        const newUserBoard = await userBoardService.createUserBoard(userBoardData);
        res.status(201).json(newUserBoard);
    } catch (error) {
        res.status(500).send('Błąd tworzenia UserBoard');
    }
};

// Pobieranie UserBoard po ID
exports.getUserBoardById = async (req, res) => {
    const userBoardId = req.params.id;
    try {
        const userBoard = await userBoardService.getUserBoardById(userBoardId);
        if (userBoard) {
            res.status(200).json(userBoard);
        } else {
            res.status(404).send('UserBoard nie znaleziony');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Usuwanie UserBoard
exports.deleteUserBoard = async (req, res) => {
    const userBoardId = req.params.id;
    try {
        await userBoardService.deleteUserBoard(userBoardId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};
