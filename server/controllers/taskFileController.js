// controllers/taskFileController.js
const taskFileService = require('../services/taskFileService');

// Upload pliku
exports.uploadFile = async (req, res) => {
    const file = req.file;  // Multer przesyła dane pliku
    try {
        const savedFile = await taskFileService.saveFile(file);
        res.status(201).json(savedFile);
    } catch (error) {
        res.status(500).send('Błąd zapisywania pliku.');
    }
};

// Pobieranie pliku po ID
exports.getFileById = async (req, res) => {
    const fileId = req.params.id;
    try {
        const file = await taskFileService.getFileById(fileId);
        if (file) {
            res.status(200).json(file);
        } else {
            res.status(404).send('Plik nie znaleziony.');
        }
    } catch (error) {
        res.status(500).send('Błąd pobierania pliku.');
    }
};

// Usuwanie pliku
exports.deleteFile = async (req, res) => {
    const fileId = req.params.id;
    try {
        await taskFileService.deleteFile(fileId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd usuwania pliku.');
    }
};
