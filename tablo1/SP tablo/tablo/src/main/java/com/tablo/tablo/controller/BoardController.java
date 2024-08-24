package com.tablo.tablo.controller;

import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boards")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping
    public ResponseEntity<List<BoardEntity>> getAllBoards() {
        return ResponseEntity.ok(boardService.getAllBoards());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardEntity> getBoardById(@PathVariable Long id) {
        return ResponseEntity.ok(boardService.getBoardById(id));
    }

    @PostMapping
    public ResponseEntity<BoardEntity> createBoard(@RequestBody BoardEntity board) {
        return ResponseEntity.ok(boardService.createBoard(board));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoardEntity> updateBoard(@PathVariable Long id, @RequestBody BoardEntity boardDetails) {
        return ResponseEntity.ok(boardService.updateBoard(id, boardDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
        return ResponseEntity.noContent().build();
    }
}
