package com.tablo.tablo.controller;

import com.tablo.tablo.entity.UserPlanEntity;
import com.tablo.tablo.service.UserPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users-plans")
public class UserPlanController {

    @Autowired
    private UserPlanService userPlanService;

    @GetMapping
    public ResponseEntity<List<UserPlanEntity>> getAllUserPlans() {
        return ResponseEntity.ok(userPlanService.getAllUserPlans());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserPlanEntity> getUserPlanById(@PathVariable Long id) {
        return ResponseEntity.ok(userPlanService.getUserPlanById(id));
    }

    @PostMapping
    public ResponseEntity<UserPlanEntity> createUserPlan(@RequestBody UserPlanEntity userPlan) {
        return ResponseEntity.ok(userPlanService.createUserPlan(userPlan));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserPlanEntity> updateUserPlan(@PathVariable Long id, @RequestBody UserPlanEntity userPlanDetails) {
        return ResponseEntity.ok(userPlanService.updateUserPlan(id, userPlanDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserPlan(@PathVariable Long id) {
        userPlanService.deleteUserPlan(id);
        return ResponseEntity.noContent().build();
    }
}
