const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

// Trasy
router.get('/get-all/:userId', boardController.getUserBoards);
router.get('/:id', boardController.getBoardById);

module.exports = router;
