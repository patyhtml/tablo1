// services/taskFileService.js
const taskFileRepository = require('../repositories/taskFileRepository');

// Zapis pliku
exports.saveFile = async (file) => {
    const fileData = {
        name: file.originalname,
        path: file.path,
        type: file.mimetype,
        size: file.size
    };
    return await taskFileRepository.save(fileData);
};

// Pobieranie pliku po ID
exports.getFileById = async (fileId) => {
    return await taskFileRepository.findById(fileId);
};

// Usuwanie pliku
exports.deleteFile = async (fileId) => {
    const file = await taskFileRepository.findById(fileId);
    if (file) {
        await file.destroy();
    }
};
