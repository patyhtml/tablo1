package com.tablo.tablo.service;

import com.tablo.tablo.entity.PlanEntity;
import com.tablo.tablo.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanService {

    @Autowired
    private PlanRepository planRepository;

    public List<PlanEntity> getAllPlans() {
        return planRepository.findAll();
    }

    public PlanEntity getPlanById(Long id) {
        Optional<PlanEntity> plan = planRepository.findById(id);
        return plan.orElse(null);
    }

    public PlanEntity createPlan(PlanEntity plan) {
        return planRepository.save(plan);
    }

    public PlanEntity updatePlan(Long id, PlanEntity planDetails) {
        Optional<PlanEntity> plan = planRepository.findById(id);
        if (plan.isPresent()) {
            PlanEntity updatedPlan = plan.get();
            updatedPlan.setName(planDetails.getName());
            updatedPlan.setPrice(planDetails.getPrice());
            updatedPlan.setMaxUsers(planDetails.getMaxUsers());
            updatedPlan.setMaxBoards(planDetails.getMaxBoards());
            updatedPlan.setMaxTasks(planDetails.getMaxTasks());
            updatedPlan.setMaxPoints(planDetails.getMaxPoints());
            updatedPlan.setMaxStorage(planDetails.getMaxStorage());
            return planRepository.save(updatedPlan);
        } else {
            return null;
        }
    }

    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }
}
