// controllers/fileController.js
const fileService = require('../services/fileService');

// Upload pliku
exports.uploadFile = async (req, res) => {
    const file = req.file;
    try {
        await fileService.saveFile(file);
        res.status(200).send('File uploaded successfully.');
    } catch (error) {
        res.status(500).send('Error uploading file.');
    }
};

// Pobieranie pliku po ID
exports.getFileById = async (req, res) => {
    const fileId = req.params.id;
    try {
        const file = await fileService.getFileById(fileId);
        res.status(200).json(file);
    } catch (error) {
        res.status(500).send('Error retrieving file.');
    }
};
