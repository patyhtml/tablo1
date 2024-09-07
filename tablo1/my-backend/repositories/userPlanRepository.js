// repositories/userPlanRepository.js
const UserPlan = require('../models/userPlanModel');

// Pobieranie wszystkich UserPlan
exports.findAll = async () => {
    return await UserPlan.findAll();
};

// Tworzenie nowego UserPlan
exports.create = async (userPlanData) => {
    return await UserPlan.create(userPlanData);
};

// Pobieranie UserPlan po ID
exports.findById = async (userPlanId) => {
    return await UserPlan.findByPk(userPlanId);
};
