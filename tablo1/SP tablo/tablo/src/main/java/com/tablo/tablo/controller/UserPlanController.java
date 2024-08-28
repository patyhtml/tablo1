package com.tablo.tablo.controller;

import com.tablo.tablo.dto.UserPlanDto;
import com.tablo.tablo.service.UserPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
