package com.tablo.tablo.controller;

import com.tablo.tablo.dto.BoardDto;
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

    // Pobieranie wszystkich tablic użytkownika
    @GetMapping("/get-all/{userId}")
    public ResponseEntity<List<BoardDto>> getUserBoards(@PathVariable Long userId) {
        List<BoardDto> userBoards = boardService.getUserBoards(userId);
        return ResponseEntity.ok(userBoards);
    }

    // Pobieranie tablicy po ID
    @GetMapping("/{id}")
    public ResponseEntity<BoardEntity> getBoardById(@PathVariable Long id) {
        BoardEntity board = boardService.getBoardById(id);
        return ResponseEntity.ok(board);
    }

    // Tworzenie nowej tablicy
    @PostMapping
    public ResponseEntity<BoardDto> createBoard(@RequestBody BoardDto boardDto) {
        BoardDto createdBoard = boardService.createBoard(boardDto);
        return ResponseEntity.ok(createdBoard);
    }

    // Aktualizowanie istniejącej tablicy
    @PutMapping("/{id}")
    public ResponseEntity<BoardDto> updateBoard(@PathVariable Long id, @RequestBody BoardEntity boardDto) {
        BoardDto updatedBoard = boardService.updateBoard(id, boardDto);
        return ResponseEntity.ok(updatedBoard);
    }

    // Usuwanie tablicy
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
        return ResponseEntity.noContent().build();
    }
}