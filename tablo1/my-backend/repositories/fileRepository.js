// repositories/fileRepository.js
const File = require('../models/fileModel');

// Zapis pliku
exports.save = async (fileData) => {
    return await File.create(fileData);
};

// Znajdowanie pliku po ID
exports.findById = async (fileId) => {
    return await File.findByPk(fileId);
};
