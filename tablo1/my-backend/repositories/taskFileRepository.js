// repositories/taskFileRepository.js
const TaskFile = require('../models/taskFileModel');

// Zapis pliku
exports.save = async (fileData) => {
    return await TaskFile.create(fileData);
};

// Pobieranie pliku po ID
exports.findById = async (fileId) => {
    return await TaskFile.findByPk(fileId);
};
