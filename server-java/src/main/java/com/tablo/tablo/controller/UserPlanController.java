package com.tablo.tablo.controller;

import com.tablo.tablo.dto.UserPlanDto;
import com.tablo.tablo.service.UserPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users-plans")
public class UserPlanController {

    @Autowired
    private UserPlanService userPlanService;


    @PostMapping
    public ResponseEntity<?> createUserPlan(@RequestBody UserPlanDto userPlan) {
        this.userPlanService.createUserPlan(userPlan);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/{userId}/user-plan")
    public ResponseEntity<UserPlanDto> getUserPlan(@PathVariable Long userId) {
        UserPlanDto userPlan = userPlanService.getUserPlan(userId);
        return ResponseEntity.ok(userPlan);
    }

    //przydałoby się stworzyć endpoint do pobierania aktualnego planu użytkownika i jego statystyk (zużycie)
}
