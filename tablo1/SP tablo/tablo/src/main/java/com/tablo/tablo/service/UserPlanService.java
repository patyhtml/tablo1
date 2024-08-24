package com.tablo.tablo.service;

import com.tablo.tablo.entity.UserPlanEntity;
import com.tablo.tablo.repository.UserPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserPlanService {

    @Autowired
    private UserPlanRepository userPlanRepository;

    public List<UserPlanEntity> getAllUserPlans() {
        return userPlanRepository.findAll();
    }

    public UserPlanEntity getUserPlanById(Long id) {
        Optional<UserPlanEntity> userPlan = userPlanRepository.findById(id);
        return userPlan.orElse(null);
    }

    public UserPlanEntity createUserPlan(UserPlanEntity userPlan) {
        return userPlanRepository.save(userPlan);
    }

    public UserPlanEntity updateUserPlan(Long id, UserPlanEntity userPlanDetails) {
        Optional<UserPlanEntity> existingUserPlan = userPlanRepository.findById(id);
        if (existingUserPlan.isPresent()) {
            UserPlanEntity updatedUserPlan = existingUserPlan.get();
            updatedUserPlan.setStart(userPlanDetails.getStart());
            updatedUserPlan.setDue(userPlanDetails.getDue());
            return userPlanRepository.save(updatedUserPlan);
        } else {
            return null;
        }
    }

    public void deleteUserPlan(Long id) {
        userPlanRepository.deleteById(id);
    }
}
