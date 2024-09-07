// services/fileService.js
const fileRepository = require('../repositories/fileRepository');

// Zapis pliku
exports.saveFile = async (file) => {
    // Zapis pliku na dysku lub w bazie danych
    await fileRepository.save({
        originalName: file.originalname,
        path: file.path,
        mimeType: file.mimetype,
        size: file.size,
    });
};

// Pobieranie pliku po ID
exports.getFileById = async (fileId) => {
    return await fileRepository.findById(fileId);
};
