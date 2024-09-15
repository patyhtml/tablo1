const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');

// Konfiguracja Multer do obsługi uploadu plików
const upload = multer({ dest: 'uploads/' });

// Trasy
router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/:id', fileController.getFileById);

module.exports = router;
