// services/planService.js
const planRepository = require('../repositories/planRepository');

// Pobieranie wszystkich planów
exports.getAllPlans = async () => {
    return await planRepository.findAll();
};

// Tworzenie nowego planu
exports.createPlan = async (planData) => {
    return await planRepository.create(planData);
};

// Pobieranie planu po ID
exports.getPlanById = async (planId) => {
    return await planRepository.findById(planId);
};

// Usuwanie planu
exports.deletePlan = async (planId) => {
    await planRepository.delete(planId);
};
