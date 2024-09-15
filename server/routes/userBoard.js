const express = require('express');
const router = express.Router();
const userBoardController = require('../controllers/userBoardController');

// Trasy
router.get('/user-boards', userBoardController.getAllUserBoards);
router.post('/user-boards', userBoardController.createUserBoard);
router.get('/user-boards/:id', userBoardController.getUserBoardById);
router.delete('/user-boards/:id', userBoardController.deleteUserBoard);

module.exports = router;
