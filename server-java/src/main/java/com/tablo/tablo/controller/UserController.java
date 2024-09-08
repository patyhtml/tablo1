package com.tablo.tablo.controller;

import com.tablo.tablo.dto.UserDto;
import com.tablo.tablo.entity.UserEntity;
import com.tablo.tablo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/{userId}") // zwracamy DTO, a nie Entity, ścieżka zmieniona na samo ID
    public ResponseEntity<UserDto> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUser(userId));
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDto user) {
        this.userService.createUser(user);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}") // zwracamy DTO nie Entity, analogicznie jak w endpontcie wyżej pomijamy obsługę wyjątków i nic nie zwracamy
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserEntity userDetails) {
        this.userService.updateUser(id, userDetails);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
