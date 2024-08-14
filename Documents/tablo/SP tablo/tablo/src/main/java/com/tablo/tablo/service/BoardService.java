package com.tablo.tablo.service;

import com.tablo.tablo.dto.BoardDto;
import com.tablo.tablo.dto.TaskDto;
import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.repository.BoardRepository;
import com.tablo.tablo.repository.TaskRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final TaskRepository taskRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository, TaskRepository taskRepository) {
        this.boardRepository = boardRepository;
        this.taskRepository = taskRepository;
    }

    public BoardEntity createBoard(BoardDto boardDto) {
        BoardEntity board = new BoardEntity();
        board.setName(boardDto.getName());
        board.setDescription(boardDto.getDescription());
        return boardRepository.save(board);
    }

    public List<BoardEntity> getAllBoards() {
        return boardRepository.findAll();
    }

    public BoardEntity getBoardById(Long id) {
        return boardRepository.findById(id).orElse(null);
    }

    public BoardEntity updateBoard(Long id, BoardDto boardDto) {
        Optional<BoardEntity> optionalBoard = boardRepository.findById(id);
        if (optionalBoard.isPresent()) {
            BoardEntity board = optionalBoard.get();
            board.setName(boardDto.getName());
            board.setDescription(boardDto.getDescription());
            return boardRepository.save(board);
        }
        return null;
    }

    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }

    public TaskEntity addTaskToBoard(Long boardId, TaskDto taskDto) {
        BoardEntity board = getBoardById(boardId);
        if (board != null) {
            TaskEntity task = new TaskEntity();
            task.setTitle(taskDto.getTitle());
            task.setDescription(taskDto.getDescription());
            task.setStatus(taskDto.getStatus());
            task.setBoard(board);
            return taskRepository.save(task);
        }
        return null;
    }

    public List<TaskEntity> getTasksForBoard(Long boardId) {
        BoardEntity board = getBoardById(boardId);
        if (board != null) {
            return board.getTasks();
        }
        return null;
    }
}
