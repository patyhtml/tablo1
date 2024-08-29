package com.tablo.tablo.service;

import com.tablo.tablo.dto.BoardColumnDto;
import com.tablo.tablo.dto.BoardDto;
import com.tablo.tablo.dto.TaskDto;
import com.tablo.tablo.entity.BoardColumnEntity;
import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<BoardDto> getUserBoards(Long userId) {
        List<BoardEntity> boardEntity = boardRepository.findAllByUserId(userId);
        List<BoardDto> dtos = new ArrayList<>();
        for (BoardEntity e : boardEntity) {
            List<BoardColumnDto> columnDtos = new ArrayList<>();
            for (BoardColumnEntity columnEntity : e.getBoardsColumns()) {
                List<TaskDto> taskDtos = new ArrayList<>();
                for (TaskEntity taskEntity : columnEntity.getTasks()) {
                    TaskDto taskDto = TaskDto.builder()
                            .id(taskEntity.getId())
                            .name(taskEntity.getName())
                            .description(taskEntity.getDescription())
                            .priority(taskEntity.getPriority())
                            .start(taskEntity.getStart())
                            .due(taskEntity.getDue())
                            .build();
                    taskDtos.add(taskDto);
                }
                BoardColumnDto boardColumnDto = BoardColumnDto.builder()
                        .id(columnEntity.getId())
                        .name(columnEntity.getName())
                        .build();
                columnDtos.add(boardColumnDto);
            }
            BoardDto dto = BoardDto.builder()
                    .id(e.getId())
                    .name(e.getName())
                    .boardColumns(columnDtos)
                    .build();
            dtos.add(dto);
        }
        return dtos;
    }

    public BoardEntity getBoardById(Long id) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        return board.orElse(null);
    }

    public BoardEntity createBoard(BoardEntity board) {
        return boardRepository.save(board);
    }

    public BoardEntity updateBoard(Long id, BoardEntity boardDetails) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        if (board.isPresent()) {
            BoardEntity updatedBoard = board.get();
            updatedBoard.setName(boardDetails.getName());

            return boardRepository.save(updatedBoard);
        } else {
            return null;
        }
    }

    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }
}
