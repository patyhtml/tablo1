package com.tablo.tablo.controller;


import com.tablo.tablo.service.UserService;
import com.tablo.tablo.dto.CreateUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/security")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create-user")
    public ResponseEntity<Void> createUser(@RequestBody CreateUserDto dto){
        userService.createUser(dto);
        return ResponseEntity.noContent().build();

    }

}
