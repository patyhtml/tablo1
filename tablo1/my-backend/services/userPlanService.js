// controllers/userPlanController.js
const userPlanService = require('../services/userPlanService');

// Pobieranie wszystkich UserPlan
exports.getAllUserPlans = async (req, res) => {
    try {
        const userPlans = await userPlanService.getAllUserPlans();
        res.status(200).json(userPlans);
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Tworzenie nowego UserPlan
exports.createUserPlan = async (req, res) => {
    const userPlanData = req.body;
    try {
        const newUserPlan = await userPlanService.createUserPlan(userPlanData);
        res.status(201).json(newUserPlan);
    } catch (error) {
        res.status(500).send('Błąd tworzenia UserPlan');
    }
};

// Pobieranie UserPlan po ID
exports.getUserPlanById = async (req, res) => {
    const userPlanId = req.params.id;
    try {
        const userPlan = await userPlanService.getUserPlanById(userPlanId);
        if (userPlan) {
            res.status(200).json(userPlan);
        } else {
            res.status(404).send('UserPlan nie znaleziony');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Usuwanie UserPlan
exports.deleteUserPlan = async (req, res) => {
    const userPlanId = req.params.id;
    try {
        await userPlanService.deleteUserPlan(userPlanId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};
