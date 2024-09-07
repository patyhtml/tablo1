// repositories/planRepository.js
const Plan = require('../models/planModel');

// Pobieranie wszystkich planów
exports.findAll = async () => {
    return await Plan.findAll();
};

// Tworzenie nowego planu
exports.create = async (planData) => {
    return await Plan.create(planData);
};

// Pobieranie planu po ID
exports.findById = async (planId) => {
    return await Plan.findByPk(planId);
};

// Usuwanie planu
exports.delete = async (planId) => {
    const plan = await Plan.findByPk(planId);
    if (plan) {
        await plan.destroy();
    }
};
