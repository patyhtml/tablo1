const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

// Trasy
router.get('/get-all/:userId', boardController.getUserBoards);
router.get('/:id', boardController.getBoardById);
router.post('/', boardController.createBoard);
router.put('/:id', boardController.updateBoard);
router.delete('/:id', boardController.deleteBoard);

module.exports = router;