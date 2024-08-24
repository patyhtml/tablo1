package com.tablo.tablo.controller;

import com.tablo.tablo.entity.BoardColumnEntity;
import com.tablo.tablo.service.BoardColumnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/board-columns")
public class BoardColumnController {

    @Autowired
    private BoardColumnService boardColumnService;

    @GetMapping
    public ResponseEntity<List<BoardColumnEntity>> getAllBoardColumns() {
        return ResponseEntity.ok(boardColumnService.getAllBoardColumns());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardColumnEntity> getBoardColumnById(@PathVariable Long id) {
        return ResponseEntity.ok(boardColumnService.getBoardColumnById(id));
    }

    @PostMapping
    public ResponseEntity<BoardColumnEntity> createBoardColumn(@RequestBody BoardColumnEntity boardColumn) {
        return ResponseEntity.ok(boardColumnService.createBoardColumn(boardColumn));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoardColumnEntity> updateBoardColumn(@PathVariable Long id, @RequestBody BoardColumnEntity boardColumnDetails) {
        return ResponseEntity.ok(boardColumnService.updateBoardColumn(id, boardColumnDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoardColumn(@PathVariable Long id) {
        boardColumnService.deleteBoardColumn(id);
        return ResponseEntity.noContent().build();
    }
}
