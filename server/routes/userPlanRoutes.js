const express = require('express');
const router = express.Router();
const userPlanController = require('../controllers/userPlanController');

// Trasy
router.get('/user-plans', userPlanController.getAllUserPlans);
router.post('/user-plans', userPlanController.createUserPlan);
router.get('/user-plans/:id', userPlanController.getUserPlanById);
router.delete('/user-plans/:id', userPlanController.deleteUserPlan);

module.exports = router;
