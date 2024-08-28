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

    public UserPlanEntity createUserPlan(UserPlanDto userPlan) {
        UserPlanEntity userPlanEntity = UserPlanEntity.builder()
                .plan(this.planRepositoryMock.findById(userPlan.getPlanId().intValue()))
                .userId(userPlan.getUserId())
                .start(userPlan.getStart())
                .due(userPlan.getStart().plusMonths(1))
                .build();
        return userPlanRepository.saveAndFlush(userPlanEntity);
    }

}
