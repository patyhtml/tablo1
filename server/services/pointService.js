// services/pointService.js
const pointRepository = require('../repositories/pointRepository');

// Pobieranie wszystkich punktów
exports.getAllPoints = async () => {
    return await pointRepository.findAll();
};

// Tworzenie nowego punktu
exports.createPoint = async (pointData) => {
    return await pointRepository.create(pointData);
};
// Tworzenie nowych punktow
exports.createPoints = async (pointData) => {
    return await pointModel.bulkCreate(pointData);
};

// Pobieranie punktu po ID
exports.getPointById = async (pointId) => {
    return await pointRepository.findById(pointId);
};

// Usuwanie punktu
exports.deletePoint = async (pointId) => {
    const point = await pointRepository.findById(pointId);
    if (point) {
        await point.destroy();
    }
};
