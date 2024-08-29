package com.tablo.tablo.controller;

import com.tablo.tablo.entity.UserBoardEntity;
import com.tablo.tablo.service.UserBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users-boards")
public class UserBoardController {

    @Autowired
    private UserBoardService userBoardService;



    @GetMapping("/get-all/{userBoardId}")
    public ResponseEntity<UserBoardEntity> getUserBoardById(@PathVariable Long userBoardId) {
        return ResponseEntity.ok(userBoardService.getUserBoardById(userBoardId));
    }

    @PostMapping
    public ResponseEntity<UserBoardEntity> createUserBoard(@RequestBody UserBoardEntity userBoard) {
        return ResponseEntity.ok(userBoardService.createUserBoard(userBoard));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserBoardEntity> updateUserBoard(@PathVariable Long id, @RequestBody UserBoardEntity userBoardDetails) {
        return ResponseEntity.ok(userBoardService.updateUserBoard(id, userBoardDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserBoard(@PathVariable Long id) {
        userBoardService.deleteUserBoard(id);
        return ResponseEntity.noContent().build();
    }
}
