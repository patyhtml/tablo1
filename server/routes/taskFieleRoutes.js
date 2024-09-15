const express = require('express');
const router = express.Router();
const taskFileController = require('../controllers/taskFileController');
// Konfiguracja Multer do obsługi uploadu plików
const upload = multer({ dest: 'uploads/' });

// Trasy
router.post('/upload', upload.single('file'), taskFileController.uploadFile);
router.get('/:id', taskFileController.getFileById);
router.delete('/:id', taskFileController.deleteFile);

module.exports = router;