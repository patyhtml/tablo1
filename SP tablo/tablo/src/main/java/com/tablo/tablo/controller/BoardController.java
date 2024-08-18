package com.tablo.tablo.controller;

import com.tablo.tablo.dto.BoardDto;
import com.tablo.tablo.dto.TaskDto;
import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {

    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping
    public ResponseEntity<BoardEntity> createBoard(@RequestBody BoardDto boardDto) {
        BoardEntity board = boardService.createBoard(boardDto);
        return ResponseEntity.status(201).body(board);
    }

    @GetMapping
    public ResponseEntity<List<BoardEntity>> getAllBoards() {
        List<BoardEntity> boards = boardService.getAllBoards();
        return ResponseEntity.ok(boards);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardEntity> getBoardById(@PathVariable Long id) {
        BoardEntity board = boardService.getBoardById(id);
        return ResponseEntity.ok(board);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoardEntity> updateBoard(@PathVariable Long id, @RequestBody BoardDto boardDto) {
        BoardEntity updatedBoard = boardService.updateBoard(id, boardDto);
        return ResponseEntity.ok(updatedBoard);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{boardId}/tasks")
    public ResponseEntity<TaskEntity> addTaskToBoard(@PathVariable Long boardId, @RequestBody TaskDto taskDto) {
        TaskEntity task = boardService.addTaskToBoard(boardId, taskDto);
        return ResponseEntity.status(201).body(task);
    }

    @GetMapping("/{boardId}/tasks")
    public ResponseEntity<List<TaskEntity>> getTasksForBoard(@PathVariable Long boardId) {
        List<TaskEntity> tasks = boardService.getTasksForBoard(boardId);
        return ResponseEntity.ok(tasks);
    }
}
