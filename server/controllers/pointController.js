// controllers/pointController.js
const pointService = require('../services/pointService');

// Pobieranie wszystkich punktów
exports.getAllPoints = async (req, res) => {
    try {
        const points = await pointService.getAllPoints();
        res.status(200).json(points);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Tworzenie nowego punktu
exports.createPoint = async (req, res) => {
    const pointData = req.body;
    try {
        const newPoint = await pointService.createPoints(pointData);
        res.status(201).json(newPoint);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Pobieranie punktu po ID
exports.getPointById = async (req, res) => {
    const pointId = req.params.pointId;
    try {
        const point = await pointService.getPointById(pointId);
        if (point) {
            res.status(200).json(point);
        } else {
            res.status(404).send('Punkt nie znaleziony');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera przy pobieraniu punktu');
    }
};

// Usuwanie punktu
exports.deletePoint = async (req, res) => {
    const pointId = req.params.pointId;
    try {
        const point = await pointService.getPointById(pointId);
        if (point) {
            await pointService.deletePoint(pointId);
            res.status(204).send();  // No Content
        } else {
            res.status(404).send('Punkt nie znaleziony');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera przy usuwaniu punktu');
    }
};
