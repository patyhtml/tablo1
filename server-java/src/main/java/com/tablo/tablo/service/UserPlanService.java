package com.tablo.tablo.service;

import com.tablo.tablo.dto.UserPlanDto;
import com.tablo.tablo.entity.UserPlanEntity;
import com.tablo.tablo.repository.PlanRepositoryMock;
import com.tablo.tablo.repository.UserPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserPlanService {

    @Autowired
    private UserPlanRepository userPlanRepository;
    @Autowired
    private PlanRepositoryMock planRepositoryMock;

    public List<UserPlanEntity> getAllUserPlans() {
        return userPlanRepository.findAll();
    }

    public UserPlanEntity getUserPlanById(Long id) {
        Optional<UserPlanEntity> userPlan = userPlanRepository.findById(id);
        return userPlan.orElse(null);
    }

    public void createUserPlan(UserPlanDto userPlan) { //nic nie zwracamy więc zmieniamy typ metody na void i usuwamy return
        UserPlanEntity userPlanEntity = UserPlanEntity.builder()
                .plan(this.planRepositoryMock.findById(userPlan.getPlanId().intValue()))
                .userId(userPlan.getUserId())
                .start(userPlan.getStart())
                .due(userPlan.getStart().plusMonths(1))
                .build();
    }
    public UserPlanDto getUserPlan(Long userId) {
        Optional<UserPlanEntity> userPlanEntity = userPlanRepository.findByUserId(userId);

        if (userPlanEntity.isPresent()) {
            UserPlanEntity plan = userPlanEntity.get();
            return UserPlanDto.builder()
                    .userId(plan.getUserId())
                    .planId(plan.getPlan().getId())
                    .start(plan.getStart())
                    .build();
        } else {
            return null;
        }
    }
}
