// services/pointService.js
const pointRepository = require('../repositories/pointRepository');
const pointModel = require('../models/pointModel'); 

// Pobieranie wszystkich punktów
exports.getAllPoints = async () => {
    return await pointRepository.findAll();
};

// Tworzenie nowych punktów (bulk create)
exports.createPoints = async (pointData) => {
    try {
        console.log('Otrzymane dane:', pointData); // Logujemy otrzymane dane
        const result = await pointModel.bulkCreate(pointData); // Zapis do bazy danych
        console.log('Zapisane dane:', result); // Logujemy zapisane dane
        return result;
    } catch (error) {
        console.error('Błąd podczas zapisywania punktów:', error);
        throw error;
    }
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

exports.deletePoints = async (task_id) => {
    await pointModel.destroy({
        where:{
            task_id
        }
    });
    
};