const express = require('express');
const router = express.Router();
const pointController = require('../controllers/pointController');

// Trasy
router.get('/get-all-points', pointController.getAllPoints);
router.get('/:pointId', pointController.getPointById);
router.post('/', pointController.createPoint);
router.delete('/:pointId', pointController.deletePoint);

module.exports = router;
